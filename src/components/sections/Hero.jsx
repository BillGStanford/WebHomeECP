import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../../ui/Button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPartyGazette = () => {
    window.open('https://thepeople-kappa.vercel.app/', '_blank'); // Replace with the actual link
  };

  return (
    <section className="pt-16 bg-red-700 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 animate-fade-in">
          Communist Party of Ethiopia
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up font-semibold">
          United for the People, By the People
        </p>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up font-semibold italic">
          Join the Revolution: <span className="font-extrabold italic">#EthiopianCommunistParty</span> on X
        </p>

        {/* Learn More Button */}
        <Button 
          variant="white"
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-red hover:bg-white hover:text-red-700 transition-colors"
        >
          Learn More <ChevronDown className="h-5 w-5" />
        </Button>

        {/* Party Gazette Button */}
        <Button 
          variant="red"
          onClick={goToPartyGazette}
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-700 transition-colors"
        >
          Party Gazette
        </Button>
      </div>
    </section>
  );
};

export default Hero;
