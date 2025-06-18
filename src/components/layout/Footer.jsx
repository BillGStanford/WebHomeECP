import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-700 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6">Communist Party of Ethiopia</h3>
          <p className="mb-8 text-lg">Unity • Equality • Progress</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://x.com/ECPMain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="mailto:nilecomun@gmail.com" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} Communist Party of Ethiopia. All rights reserved.
          </p>
          <p className="text-sm">
            Together we build a better future for all Ethiopians.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
