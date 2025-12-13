import React from 'react';
import { Shield, Users, Trophy, History, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { optimizeImage } from "../utils/formatters.js";


const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img 
                 src="https://www.transparenttextures.com/patterns/cubes.png" 
                 alt="pattern" 
                 className="w-full h-full object-cover"
             />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Democratizing Land Ownership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We are bridging the gap between raw land potential and modern investors using technology, data, and absolute transparency.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ApnaPlot was founded to solve a specific problem in Tier 2 and Tier 3 cities: the lack of trust in land dealings. 
                Traditionally, buying a plot meant navigating unclear paperwork and middlemen.
              </p>
              <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-700">100% Verified Titles</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-700">No Hidden Brokerage</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-700">Digital Documentation</span>
                  </div>
              </div>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
            
            {/* Optimized Image */}
            <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src={optimizeImage("/About-img.jpg", 800)} 
                 alt="Land surveying team" 
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               <div className="absolute bottom-6 left-6 text-white">
                   <p className="font-bold text-xl">500+ Acres</p>
                   <p className="text-sm opacity-90">Successfully Delivered</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">The principles that guide every transaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard 
               icon={<Shield className="w-8 h-8 text-green-600" />}
               title="Integrity"
               desc="We verify every detail. No surprises, just honest land dealings."
            />
            <ValueCard 
               icon={<Users className="w-8 h-8 text-green-600" />}
               title="Community"
               desc="We respect local ecosystems and communities in every transaction."
            />
            <ValueCard 
               icon={<Trophy className="w-8 h-8 text-green-600" />}
               title="Excellence"
               desc="Premium service standards for parcels of all sizes and prices."
            />
             <ValueCard 
               icon={<History className="w-8 h-8 text-green-600" />}
               title="Legacy"
               desc="Helping you build something that lasts for generations."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
)

export default About;