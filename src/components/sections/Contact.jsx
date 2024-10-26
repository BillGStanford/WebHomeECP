// src/components/sections/Contact.jsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Button from '../../ui/Button';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding">
        <h2 className="text-3xl font-bold text-red-700 mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-red-700" />
              <a href="mailto:nilecomun@gmail.com" className="text-red-700">
                nilecomun@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
