import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedJobs from '../components/home/FeaturedJobs';
import Companies from '../components/home/Companies';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import VisitCounter from './Counter';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <Companies />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <VisitCounter />
    </div>
  );
};

export default Home;