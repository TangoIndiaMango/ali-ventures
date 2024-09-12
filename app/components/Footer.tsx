import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#502B21] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Mail size={24} /></a>
        </div>
        <p className="text-sm">&copy; Nature&apos;s Wood Carpentry</p>
      </div>
    </footer>
  );
};

export default Footer;