import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Mail, Phone, Instagram, Facebook, Linkedin, ShieldCheck } from 'lucide-react';
import { IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
                <Map className="h-6 w-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">ApnaPlot</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's most trusted marketplace for raw land. We specialize in clear-title plots, agricultural land, and investment opportunities in developing districts.
            </p>
            <div className="flex items-center gap-2 text-green-500 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" /> RERA Compliant Listings
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-gray-400 hover:text-green-500 transition-colors">Search Plots</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Popular Locations (Tier 3 Focus) */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Popular Districts</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white cursor-pointer">Rourkela</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Jeypore</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Angul</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Balangir</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Map className="w-5 h-5 text-green-600 mt-1" />
                <span>Rourkela,<br/>Odisha, 769042</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-600" />
                <span>+91 7978300902</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-green-600" />
                <span>ravikumarsahoo.902@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 ApnaPlot Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><IconBrandX className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><IconBrandLinkedin className="w-5 h-5" /></a>
          </div>
          <a 
            href='https://wa.me/917978300902'
            target='_blank'
            className="text-sm text-green-600">
            Developed by | Ravi Kumar Sahoo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;