import React from 'react';
import Card from '../../ui/Card';

const Principles = () => {
  const principles = [
    {
      title: 'Economic Equality',
      text: 'Fair distribution of wealth and resources',
    },
    {
      title: 'Workers\' Rights',
      text: 'Protection and advancement of labor interests',
    },
    {
      title: 'Social Justice',
      text: 'Equal opportunities and rights for all citizens',
    },
    {
      title: 'Social Reform',
      text: 'Reform the Structure of the Countries Government and Society',
    },
    {
      title: 'Marxism with Ethiopian Characteristics',
      text: 'Fit Marxism into Ethiopia. Make sure we make something truly for us and not against us',
    },
        {
      title: 'A Government of the People for the People',
      text: 'Introduce and give power to the Masses. The State shall be by the people for the People',
    },
  ];

  return (
    <section
      id="principles"
      className="min-h-screen bg-red-700 flex items-center justify-center py-16"
    >
      <div className="max-w-7xl px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Core Principles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <Card key={principle.title}>
              <h3 className="font-bold text-xl mb-2 text-red-700">{principle.title}</h3>
              <p className="text-black">{principle.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
