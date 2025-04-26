import { RouterProvider } from "react-router";
import { router } from "./router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
