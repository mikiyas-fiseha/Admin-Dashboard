import React from 'react';
const today = new Date();
const Footer = () => (
  
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {today.getFullYear()} All rights reserved by Mikiyas fiseha
    </p>
  </div>
);

export default Footer;
