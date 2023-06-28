import { ApplicationProvider } from "@/contexts";
import { RenderOptions, render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider>{children}</ApplicationProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const useQueryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const useCustomHook = () => {
  return useQuery({ queryKey: ["useCustomHook"], queryFn: () => "API" });
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render, useQueryWrapper, useCustomHook };
