import React from 'react';
import Card from '../../ui/Card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding">
        <h2 className="text-3xl font-bold text-red-700 mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">
              The Communist Party of Ethiopia stands as a beacon of progress and equality, 
              working tirelessly to build a society that serves the interests of all people.
            </p>
            <p className="text-gray-700">
              Founded on principles of social justice and economic equality, we continue 
              to advocate for the rights of workers and the advancement of socialist ideals.
            </p>
          </div>
          <Card>
            <h3 className="font-bold text-xl mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To establish a society based on equality, justice, and collective prosperity, 
              where the wealth and resources of the nation benefit all citizens equally.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;