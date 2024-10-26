import React from 'react';
import Card from '../../ui/Card';

const Principles = () => {
  const principles = [
    {
      title: 'Economic Equality',
      text: 'Fair distribution of wealth and resources'
    },
    {
      title: 'Workers\' Rights',
      text: 'Protection and advancement of labor interests'
    },
    {
      title: 'Social Justice',
      text: 'Equal opportunities and rights for all citizens'
    },
    {
      title: 'Social Reform',
      text: 'Reform the Structure of the Countries Government and Society'
    },
    {
      title: 'Marxism with Ethiopian Characteristics',
      text: 'Fit Marxism into Ethiopia. Make sure we make something truly for us and not against us'
    },
  ];

  return (
    <section id="principles" className="section-padding bg-gray-50">
      <div className="container-padding">
        <h2 className="text-3xl font-bold text-red-700 mb-8">Core Principles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <Card key={principle.title}>
              <h3 className="font-bold text-xl mb-2 text-red-700">
                {principle.title}
              </h3>
              <p className="text-gray-700">{principle.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;