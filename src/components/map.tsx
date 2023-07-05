import React from "react";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";

// Fix for marker icon issue
// Fix for marker icon issue
// delete (Icon.Default.prototype as any)._getIconUrl;
// const defaultIconOptions = L.Icon.Default.prototype.options;
// defaultIconOptions.iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png').default;
// defaultIconOptions.iconUrl = require('leaflet/dist/images/marker-icon.png').default;
// defaultIconOptions.shadowUrl = require('leaflet/dist/images/marker-shadow.png').default;
// L.Icon.Default.mergeOptions(defaultIconOptions);

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

interface WorldData {
  cases: number;
  recovered: number;
  deaths: number;
}

const Map: React.FC = () => {
  const fetchCountriesData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data: CountryData[] = await response.json();
    return data;
  };

  const fetchWorldData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const data: WorldData = await response.json();
    return data;
  };

  const { data: countriesData } = useQuery<CountryData[]>(
    "countriesData",
    fetchCountriesData
  );
  const { data: worldData } = useQuery<WorldData>("worldData", fetchWorldData);

  return (
    <div className="">
      {countriesData && worldData && (
        <MapContainer
          center={[0, 0]}
          zoom={2}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {countriesData.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>Active Cases: {country.active}</p>
                  <p>Recovered Cases: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          <Marker position={[0, 0]}>
            <Popup>
              <div>
                <h2>Worldwide</h2>
                <p>Active Cases: {worldData.cases}</p>
                <p>Recovered Cases: {worldData.recovered}</p>
                <p>Deaths: {worldData.deaths}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
