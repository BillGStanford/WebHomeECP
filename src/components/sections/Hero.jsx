import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../../ui/Button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-16 bg-red-700 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Communist Party of Ethiopia
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up">
          For the People, By the People
        </p>
        <Button 
          variant="white"
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2"
        >
          Learn More <ChevronDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;