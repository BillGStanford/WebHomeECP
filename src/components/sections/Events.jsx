import React from 'react';
import { Calendar } from 'lucide-react';
import Card from '../../ui/Card';

const Events = () => {
  const events = [
    {
      date: 'November 15, 2024',
      title: 'National Party Conference | Online',
      location: 'Addis Ababa',
    },
    {
      date: 'December 5, 2024',
      title: 'Annual Workers’ Assembly | In-Person',
      location: 'Ethiopian Workers Union Headquarters, Addis Ababa',
    },
    {
      date: 'January 10, 2025',
      title: 'Party Youth Rally | Online',
      location: 'Global',
    },
  ];

  return (
    <section
      id="events"
      className="min-h-screen bg-red-700 text-white py-32 flex items-center justify-center relative"
    >
      <div className="max-w-7xl w-full px-6 md:px-12 text-center">
        <h2 className="text-5xl font-extrabold text-white-500 mb-12">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              <div className="flex items-center justify-start gap-6 mb-6">
                <Calendar className="h-12 w-12 text-red-700" />
                <div>
                  <h3 className="font-bold text-2xl text-red-700">{event.title}</h3>
                  <p className="text-lg text-gray-800 mt-2">{event.date}</p>
                  <p className="text-sm text-gray-600 mt-1">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
