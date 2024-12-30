import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Instruments from "./pages/Instruments";
import FilmScoring from "./pages/FilmScoring";
import Commercial from "./pages/Commercial";
import SFX from "./pages/SFX";
import Production from "./pages/Production";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/film-scoring" element={<FilmScoring />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/sfx" element={<SFX />} />
            <Route path="/production" element={<Production />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;