import React from 'react';
import Card from '../../ui/Card';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white-700 text-white pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-black uppercase tracking-wide mb-12">
          About Us
        </h2>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Content: Introduction */}
          <div className="space-y-6 text-lg md:text-xl text-gray-900">
            <p>
              The Communist Party of Ethiopia stands as a beacon of progress, equality, and collective strength. 
              We are dedicated to the creation of a just society where the interests of the working class are the 
              primary focus, empowering all people to realize their fullest potential.
            </p>
            <p>
              Founded on the values of social justice, economic equality, and class struggle, our movement continues 
              to challenge the status quo and advocate for the rights of workers, farmers, and the oppressed across 
              Ethiopia and the world.
            </p>
            <p>
              We aim to break down the barriers of poverty, inequality, and oppression, fighting for a system where the 
              wealth and resources of the nation are distributed fairly among all citizens.
            </p>
          </div>

          {/* Right Content: Mission */}
          <Card className="bg-red-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-gray-200">
              To build a society based on solidarity, justice, and equality. Our mission is to transform Ethiopia into 
              a country where every citizen has access to education, healthcare, and the means to live a dignified life. 
              We strive to unite the working class, empowering them to take control of their own future.
            </p>
          </Card>
        </div>

        {/* Vision Section: Call to Action */}
        <div className="bg-red-900 py-16 px-6 rounded-lg shadow-xl mt-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-6">
            Our Commitment to the Future
          </h3>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            The Communist Party of Ethiopia is committed to building a future where justice, equality, and collective 
            prosperity are not ideals but the reality. We stand firm in our belief that a united people can transform 
            society and secure the future for all.
          </p>
          <a href="https://docs.google.com/document/d/1bFBC0WhVWUNSbG5DAyG81Lmz-YPRo_Wqekq_mJmojSs/edit?usp=sharing" target="_blank" className="inline-block px-8 py-4 bg-yellow-500 text-red-800 font-bold text-lg uppercase rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105">
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
