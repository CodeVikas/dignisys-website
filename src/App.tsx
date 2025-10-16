import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer.tsx';
import HomePage from "./Pages/Home";
import CareerPage from "./Pages/Career";
import ServiceDetailPage from "./Pages/ServiceDetailPage";
import NotFound from "./NotFound";
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      
      <Header /> {/* Always on top */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<CareerPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop /> {/* Always at bottom */}
    </Router>
  );
}

export default App;
