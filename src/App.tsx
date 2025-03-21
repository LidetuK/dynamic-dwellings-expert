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
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PropertyDetail from "./pages/PropertyDetail";

// Buy inner pages
import CompletedProperties from "./pages/buy/CompletedProperties";
import OngoingProjects from "./pages/buy/OngoingProjects";

// Rent inner pages
import FurnishedRentals from "./pages/rent/FurnishedRentals";
import UnfurnishedRentals from "./pages/rent/UnfurnishedRentals";
import CommercialProperties from "./pages/rent/CommercialProperties";

// About inner pages
import OurStory from "./pages/about/OurStory";
import OurTeam from "./pages/about/OurTeam";
import OurMission from "./pages/about/OurMission";
import OurValues from "./pages/about/OurValues";

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
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/our-mission" element={<OurMission />} />
          <Route path="/about/our-values" element={<OurValues />} />
          
          {/* Property Detail */}
          <Route path="/property/:id" element={<PropertyDetail />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Other Routes */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
