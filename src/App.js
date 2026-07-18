import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import About from './pages/About';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-main">
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
    </Router>
  );
}