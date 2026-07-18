import React from 'react';
import MenuSection from '../components/Menu';
import SpecialMenu from '../components/SpecialMenu';
import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero/MenuHero';

export default function MenuPage() {
  return (
    <>
      <MenuHero />

      {/* <SpecialMenu /> */}
      <MenuSection isDetailedView={true} />
      <Footer />
    </>
  );
}
