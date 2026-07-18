import React from 'react';
import MenuSection from '../components/Menu';
import SpecialMenu from '../components/SpecialMenu';
import Footer from '../components/Footer';

export default function MenuPage() {
  return (
    <>
      <SpecialMenu />
      <MenuSection />
      <Footer />
    </>
  );
}
