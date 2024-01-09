import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import "./styles/Animation.css";
import Service01 from "./pages/Service01";
import ServiceDetails from "./pages/ServiceDetails";
import PortfolioFull from "./pages/PortfolioFull";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import NewsDetails from "./pages/NewDetails";
import TestimonialsPage from "./pages/TestimonialsPage";
import TeamPage from "./pages/TeamPage";
import PricingPages from "./pages/PricingPages";
import FAQ from "./pages/FAQ";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service_detail" element={<ServiceDetails />} />
        <Route path="/portfolio_full" element={<PortfolioFull />} />
        <Route path="/service1" element={<Service01 />} />
        <Route path="/portfolio_detail" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news_page" element={<NewsPage />} />
        <Route path="/news_detail" element={<NewsDetails />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team_page" element={<TeamPage />} />
        <Route path="/pricing" element={<PricingPages />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
