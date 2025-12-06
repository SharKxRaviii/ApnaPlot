import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { plots } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { optimizeImage, formatCurrency } from '../utils/formatters.js';
import { 
  ArrowLeft, MapPin, Ruler, Share2, Heart, 
  Phone, MessageCircle, Calendar, ShieldCheck
} from 'lucide-react';
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "../components/ui/carousel"
import { Card } from "../components/ui/card"

const PlotDetails = () => {
  const { id } = useParams();
  const plot = plots.find(p => p.id === id);

  if (!plot) return <div>Plot not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Nav */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/listings" className="text-gray-600 hover:text-green-700 flex items-center gap-2 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Search
            </Link>
            <div className="flex gap-2">
                 <Button variant="ghost" size="icon" className="text-gray-500"><Share2 className="w-5 h-5" /></Button>
                 <Button variant="ghost" size="icon" className="text-gray-500"><Heart className="w-5 h-5" /></Button>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Title Section */}
        <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-3">
                <Badge variant="outline" className="border-green-600 text-green-700 bg-green-50">{plot.type}</Badge>
                <Badge className={plot.status === 'Available' ? 'bg-green-600' : 'bg-red-500'}>{plot.status}</Badge>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{plot.title}</h1>
            <p className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" /> {plot.location.address}, {plot.location.region}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Gallery & Info */}
            <div className="lg:col-span-2 space-y-8">
                {/* Optimized Carousel */}
                <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-200 aspect-video relative group">
                    <Carousel className="w-full h-full">
                        <CarouselContent>
                            {plot.images.map((img, index) => (
                            <CarouselItem key={index}>
                                <img 
                                    src={optimizeImage(img, 1200)} 
                                    alt="Plot View" 
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Carousel>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="p-4 bg-white border-gray-100 shadow-sm text-center">
                        <p className="text-xs text-gray-500 uppercase">Price</p>
                        <p className="font-bold text-lg text-green-700">{formatCurrency(plot.price)}</p>
                    </Card>
                    <Card className="p-4 bg-white border-gray-100 shadow-sm text-center">
                        <p className="text-xs text-gray-500 uppercase">Size</p>
                        <p className="font-bold text-lg">{plot.area} {plot.areaUnit}</p>
                    </Card>
                    <Card className="p-4 bg-white border-gray-100 shadow-sm text-center">
                        <p className="text-xs text-gray-500 uppercase">Rate/Unit</p>
                        <p className="font-bold text-lg">{formatCurrency(Math.round(plot.price / plot.area))}</p>
                    </Card>
                    <Card className="p-4 bg-white border-gray-100 shadow-sm text-center">
                        <p className="text-xs text-gray-500 uppercase">Listed</p>
                        <p className="font-bold text-lg flex items-center justify-center gap-1">
                            <Calendar className="w-4 h-4" /> Today
                        </p>
                    </Card>
                </div>

                {/* Description */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Plot Details</h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {plot.description}
                    </p>
                </div>

                {/* Features */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                     <h3 className="text-xl font-bold mb-4 text-gray-900">Amenities & Features</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {plot.features.map((feature, idx) => (
                             <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                 <ShieldCheck className="w-5 h-5 text-green-600" />
                                 <span className="font-medium text-gray-700">{feature}</span>
                             </div>
                         ))}
                     </div>
                </div>
            </div>

            {/* Right: Agent (Sticky) */}
            <div className="lg:col-span-1">
                <div className="sticky top-24">
                    <Card className="p-6 border-t-4 border-t-green-600 shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold text-green-700">
                                {plot.agent.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Property Broker</p>
                                <h3 className="font-bold text-lg text-gray-900">{plot.agent.name}</h3>
                                <div className="text-yellow-500 text-xs">★★★★★ (Verified)</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                                <Phone className="w-4 h-4 mr-2" /> Call Agent
                            </Button>
                             <Button variant="outline" className="w-full h-12 text-lg border-green-200 text-green-700 hover:bg-green-50">
                                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                            </Button>
                        </div>
                        
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Mention Plot ID <span className="font-mono text-gray-600">{plot.id}</span> when calling.
                        </p>
                    </Card>

                    <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <p className="text-sm text-blue-800 font-medium">
                            💡 Pro Tip: Always verify land zoning (Agricultural vs Residential) before paying token money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PlotDetails;