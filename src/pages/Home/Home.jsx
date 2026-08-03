import React from 'react';
import Hero from '../../components/Hero/Hero';
import WhyChoose from '../../components/WhyChoose';
import Stats from '../../components/Stats/Stats';
import SpecialMenu from '../../components/SpecialMenu/SpecialMenu';
import Offers from '../../components/Offers/Offers';
import Chef from '../../components/Chef/Chef';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials';
import Reservation from '../../components/Reservation/Reservation';
import FAQ from '../../components/Faq/FAQ';
import Footer from '../../components/Footer/Footer';

const Home = () => (
  <>
    <Hero />
    {/* <WhyChoose /> */}
    <Stats />
    <WhyChoose />
    <SpecialMenu />
    <Offers />
    {/* <Chef /> */}
    <Gallery />
    <Testimonials />
    {/* <Reservation /> */}
    {/* <FAQ /> */}
    <Footer />
  </>
);

export default Home;