import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Truck, ParkingCircle, ClipboardList } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
import Trailers from "./pages/Trailers.jsx";
import ParkingSpaces from "./pages/ParkingSpaces.jsx";
import Orders from "./pages/Orders.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Trailers",
    to: "/trailers",
    icon: <Truck className="h-4 w-4" />,
  },
  {
    title: "Parking Spaces",
    to: "/parking-spaces",
    icon: <ParkingCircle className="h-4 w-4" />,
  },
  {
    title: "Orders",
    to: "/orders",
    icon: <ClipboardList className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="trailers" element={<Trailers />} />
              <Route path="parking-spaces" element={<ParkingSpaces />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;