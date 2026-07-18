import React from 'react';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import Stats from '../components/Stats';
import SpecialMenu from '../components/SpecialMenu';
import Offers from '../components/Offers';
import Chef from '../components/Chef';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Reservation from '../components/Reservation';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Hero />
    <WhyChoose />
    <Stats />
    <SpecialMenu />
    <Offers />
    <Chef />
    <Gallery />
    <Testimonials />
    <Reservation />
    <FAQ />
    <Footer />
  </>
);

export default Home;