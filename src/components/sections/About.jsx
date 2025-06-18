import React, { useEffect, useRef } from 'react';
import Card from '../../ui/Card';

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.2}s`;
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-black text-white pt-24 pb-24 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Section Title with Glitch Effect */}
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-red-600 uppercase tracking-wider mb-4 relative">
            About Us
            <div className="absolute inset-0 text-red-500/20 transform translate-x-1 translate-y-1 -z-10">
              About Us
            </div>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-16 rounded-full"></div>
        </div>

        {/* Main Content Grid with Glass Morphism */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Content: Introduction */}
          <div className="animate-on-scroll opacity-0 space-y-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group">
              <div className="space-y-6 text-lg md:text-xl text-gray-100 leading-relaxed">
                <p className="transform group-hover:scale-105 transition-transform duration-300">
                  The Communist Party of Ethiopia stands as a <span className="text-red-400 font-semibold">beacon of progress</span>, equality, and collective strength. 
                  We are dedicated to the creation of a just society where the interests of the working class are the 
                  primary focus, empowering all people to realize their fullest potential.
                </p>
                <p className="transform group-hover:scale-105 transition-transform duration-300 delay-100">
                  Founded on the values of <span className="text-yellow-400 font-semibold">social justice</span>, economic equality, and class struggle, our movement continues 
                  to challenge the status quo and advocate for the rights of workers, farmers, and the oppressed across 
                  Ethiopia and the world.
                </p>
                <p className="transform group-hover:scale-105 transition-transform duration-300 delay-200">
                  We aim to break down the barriers of poverty, inequality, and oppression, fighting for a system where the 
                  wealth and resources of the nation are <span className="text-red-400 font-semibold">distributed fairly</span> among all citizens.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content: Mission with Enhanced Card */}
          <div className="animate-on-scroll opacity-0">
            <Card className="bg-gradient-to-br from-red-900/80 to-red-800/60 backdrop-blur-xl border-2 border-red-400/30 p-10 rounded-3xl shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-500 group overflow-hidden relative">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-red-400 rotate-45 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-yellow-400 rotate-12 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200 group-hover:from-yellow-300 group-hover:to-white transition-all duration-500">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mb-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  To build a society based on <span className="text-yellow-300 font-semibold">solidarity, justice, and equality</span>. Our mission is to transform Ethiopia into 
                  a country where every citizen has access to education, healthcare, and the means to live a dignified life. 
                  We strive to unite the working class, empowering them to take control of their own future.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Vision Section: Enhanced Call to Action */}
        <div className="animate-on-scroll opacity-0">
          <div className="relative bg-gradient-to-r from-red-900/90 via-red-800/80 to-red-900/90 backdrop-blur-2xl py-20 px-8 rounded-3xl shadow-2xl mt-16 border border-red-400/20 overflow-hidden group">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/10 to-transparent animate-pulse"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-xl animate-bounce-slow"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/20 rounded-full blur-xl animate-bounce-slow delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-red-200 uppercase tracking-wide mb-8 group-hover:from-yellow-300 group-hover:to-white transition-all duration-500">
                Our Commitment to the Future
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-8 rounded-full group-hover:w-32 transition-all duration-500"></div>
              <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto group-hover:text-white transition-colors duration-300">
                The Communist Party of Ethiopia is committed to building a future where <span className="text-yellow-300 font-semibold">justice, equality, and collective 
                prosperity</span> are not ideals but the reality. We stand firm in our belief that a united people can transform 
                society and secure the future for all.
              </p>
              
              <a 
                href="https://forms.gle/hkCqaRhnUv8QqAp68" 
                target="_blank" 
                className="inline-block group/btn"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                  <div className="relative px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-red-900 font-black text-xl uppercase rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-2 border-yellow-300">
                    <span className="flex items-center gap-3">
                      Join the Movement
                      <div className="w-2 h-2 bg-red-800 rounded-full animate-pulse"></div>
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
