import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Buy inner pages
import CompletedProperties from "./pages/buy/CompletedProperties";
import OngoingProjects from "./pages/buy/OngoingProjects";

// Rent inner pages
import FurnishedRentals from "./pages/rent/FurnishedRentals";
import UnfurnishedRentals from "./pages/rent/UnfurnishedRentals";
import CommercialProperties from "./pages/rent/CommercialProperties";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Buy Routes */}
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/completed" element={<CompletedProperties />} />
          <Route path="/buy/ongoing" element={<OngoingProjects />} />
          
          {/* Rent Routes */}
          <Route path="/rent" element={<Rent />} />
          <Route path="/rent/furnished" element={<FurnishedRentals />} />
          <Route path="/rent/unfurnished" element={<UnfurnishedRentals />} />
          <Route path="/rent/commercial" element={<CommercialProperties />} />
          
          {/* Other Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
