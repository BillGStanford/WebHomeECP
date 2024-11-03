import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../ui/Card';

const Initiatives = () => {
  const initiatives = [
    {
      title: 'Join the Party',
      description: 'The current goal is getting members of the Ethiopian Society and Diaspora to join the Movement for Change. Fill Out membership Form',
      link: 'https://docs.google.com/document/d/1bFBC0WhVWUNSbG5DAyG81Lmz-YPRo_Wqekq_mJmojSs/edit?usp=sharing' // Add the link for this initiative
    },
    {
      title: 'Community & Support',
      description: 'We want members to come together to rank levels within the Party to make us stronger and our mission to become fruitful',
      link: 'https://docs.google.com/document/d/1G0gTvgPCL3bY06wrLu6PRXKFL1t1Bgi0f0QJPCNqu54/edit?usp=sharing' // Add the link for this initiative
    }
  ];

  return (
    <section id="initiatives" className="section-padding bg-white">
      <div className="container-padding">
        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Current Initiatives
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.title}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-bold text-xl mb-2">{initiative.title}</h3>
              <p className="text-gray-700">{initiative.description}</p>
              <a 
                href={initiative.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 text-red-700 font-semibold inline-flex items-center gap-2"
              >
                Learn More <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
