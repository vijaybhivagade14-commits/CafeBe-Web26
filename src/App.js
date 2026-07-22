import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import About from './pages/About';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

// Ek naya component banaya hai taaki hum URL (location) check kar sakein
function MainLayout() {
  const location = useLocation();
  // Check karega ki kya user in pages par hai jahan Hero section hai (taaki gap na aaye)
  const noPaddingPages = ['/', '/gallary'];
  const isNoPaddingPage = noPaddingPages.includes(location.pathname);

  return (
    <>
      <Navbar />
      {/* Agar page noPaddingPages list me nahi hai, toh automatically 100px ki padding add ho jayegi */}
      <main className="app-main" style={{ paddingTop: isNoPaddingPage ? '0px' : '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <ScrollTop />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
