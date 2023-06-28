import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { ApplicationProvider } from "./contexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider>
          <AppRoutes />
        </ApplicationProvider>
      </QueryClientProvider>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
