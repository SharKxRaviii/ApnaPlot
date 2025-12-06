import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { formatCurrency, optimizeImage } from '@/utils/formatters';

const PlotCard = ({ plot }) => {
  return (
    <Card className="group flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden rounded-xl">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={optimizeImage(plot.images[0], 600)}
          alt={plot.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
           <Badge className={`${plot.status === 'Available' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-500'}`}>
             {plot.status}
           </Badge>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-md shadow-sm">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{plot.type}</p>
        </div>
      </div>
      
      <CardContent className="flex-grow p-5">
        <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-1 group-hover:text-green-700 transition-colors">
            {plot.title}
        </h3>
        
        <div className="flex items-start gap-2 text-gray-500 mb-4 min-h-[40px]">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gray-400" />
          <span className="text-sm line-clamp-2">{plot.location.address}, {plot.location.region}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
           <div>
               <p className="text-xs text-gray-400 mb-0.5">Price</p>
               <p className="font-bold text-lg text-gray-900">{formatCurrency(plot.price)}</p>
           </div>
           <div className="text-right">
               <p className="text-xs text-gray-400 mb-0.5">Area</p>
               <div className="flex items-center gap-1 justify-end">
                   <Ruler className="w-3 h-3 text-gray-400" />
                   <span className="font-bold text-gray-900">{plot.area} {plot.areaUnit}</span>
               </div>
           </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full bg-gray-900 text-white hover:bg-green-700 transition-colors">
          <Link to={`/listings/${plot.id}`}>
            View Details <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlotCard;