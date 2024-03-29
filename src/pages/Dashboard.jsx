import React from "react";
import Map from "../components/ChartAndMap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function Dashboard() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider className="w-screen m-5" client={queryClient}>
      <Map />
    </QueryClientProvider>
  );
}

export default Dashboard;
