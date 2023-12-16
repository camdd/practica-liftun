
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./pages/Home";
import CreateAction from "./pages/Create-action";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/" element={<Home title="home" />} />
            <Route
              path="/create-action"
              element={<CreateAction title="create-action" />}
            />
          </Routes>
        </Router>
      </LocalizationProvider>
      </QueryClientProvider>
  );
}

export default App;
