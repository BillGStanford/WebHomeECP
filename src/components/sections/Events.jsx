import React from 'react';
import { Calendar } from 'lucide-react';
import Card from '../../ui/Card';

const Events = () => {
  const events = [
    {
      date: 'November 15, 2024',
      title: 'National Party Conference | Online',
      location: 'Addis Ababa'
    },
  ];

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container-padding">
        <h2 className="text-3xl font-bold text-red-700 mb-8">Upcoming Events</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <Card 
              key={event.title}
              className="flex items-center gap-6"
            >
              <Calendar className="h-8 w-8 text-red-700 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl">{event.title}</h3>
                <p className="text-gray-700">
                  {event.date} - {event.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
