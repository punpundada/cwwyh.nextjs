"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="bottom-right" />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
