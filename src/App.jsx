import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainCard from "./components/MainCard/MainCard";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainCard />
    </QueryClientProvider>
  );
}

export default App;
