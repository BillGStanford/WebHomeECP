import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-8">
      <div className="container-padding text-center">
        <p className="mb-4">Unity • Equality • Progress</p>
        <p className="text-sm">
          © {new Date().getFullYear()} Communist Party of Ethiopia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;