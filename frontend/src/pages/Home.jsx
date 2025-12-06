import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Map as MapIcon,  Trees, TrendingUp, ShieldCheck, Sun  } from 'lucide-react';
import { Button } from '../components/ui/button';
import PlotCard from '../components/PlotCard';
import { plots } from '../data/mockData';
import { optimizeImage } from "../utils/formatters.js";

const Home = () => {
  const featuredPlots = plots.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section with Quick Search Overlay */}
      <section className="relative h-[650px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            // Image is optimized for width and set to eager loading
            src={optimizeImage("https://images.unsplash.com/photo-1758461479768-bdbce375e005", 1920)}
            alt="Vast, green Indian landscape" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Darker gradient for better text readability (gray-900 effect) */}
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Invest in <span className="text-green-400">Real Land</span>.<br />
            Build Your Legacy.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Verified plots in rapidly developing Tier 3 cities. Clear titles, high appreciation potential, and hassle-free ownership.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30 transition-all hover:-translate-y-0.5">
              <Link to="/listings">Find Plots</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg bg-white/10 backdrop-blur-sm text-white border-white/40 hover:bg-white hover:text-gray-900 transition-colors">
              <Link to="/contact">List Your Property</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators (Crucial for India) */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-green-600" />
                <span className="font-semibold text-gray-800">Legal Verified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <MapIcon className="w-8 h-8 text-green-600" />
                <span className="font-semibold text-gray-800">Prime Locations</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <span className="font-semibold text-gray-800">High ROI</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <span className="font-semibold text-gray-800">RERA Compliant</span>
            </div>
        </div>
      </section>

      
      {/* Features Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ApnaPlot?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We specialize exclusively in raw land, ensuring you get the most accurate information and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              // Icon color adjusted via props (green-600 assumed to be secondary)
              icon={<Trees className="w-10 h-10 text-green-600" />}
              title="Diverse Landscapes"
              description="From dense forests to open pastures, we curate a diverse portfolio of land types."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="w-10 h-10 text-green-600" />}
              title="Verified Titles"
              description="Every plot listed has gone through rigorous title checks to ensure a clean transfer."
            />
            <FeatureCard 
              icon={<Sun className="w-10 h-10 text-green-600" />}
              title="Off-Grid Ready"
              description="Many of our listings are perfect for sustainable, off-grid living projects."
            />
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Opportunities</h2>
              <p className="text-gray-500 mt-2">Handpicked plots in high-growth districts.</p>
            </div>
            <Link to="/listings" className="hidden md:flex items-center text-green-700 font-semibold hover:underline">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlots.map(plot => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Button asChild variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-100">
              <Link to="/listings">View All Plots</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to start your land journey?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're looking to build a home, invest, or just escape the city, we have the perfect plot for you.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg h-14 px-10 shadow-xl shadow-green-600/30 transition-all transform hover:-translate-y-1">
            <Link to="/contact">Contact an Agent</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="mb-6 p-4 bg-green-50 rounded-2xl inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default Home;