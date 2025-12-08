import React, { useState, useEffect } from 'react';
import { Filter, Search, Map } from 'lucide-react';
import PlotCard from '../components/PlotCard';
import { plots, locations, types } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Slider } from '../components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Checkbox } from "../components/ui/checkbox";
import { formatCurrency } from "../utils/formatters.js";

const Listings = () => {
  const [filteredPlots, setFilteredPlots] = useState(plots);
  const [filters, setFilters] = useState({
    search: '',
    priceRange: [0, 5000000],
    areaRange: [0, 50],
    types: [],
    locations: []
  });

  // Debounce search to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
        let result = plots;

        if (filters.search) {
          const term = filters.search.toLowerCase();
          result = result.filter(plot => 
            plot.title.toLowerCase().includes(term) || 
            plot.location.address.toLowerCase().includes(term) ||
            plot.location.region.toLowerCase().includes(term)
          );
        }
        result = result.filter(plot => plot.price >= filters.priceRange[0] && plot.price <= filters.priceRange[1]);
        result = result.filter(plot => plot.area >= filters.areaRange[0] && plot.area <= filters.areaRange[1]);
        if (filters.types.length > 0) result = result.filter(plot => filters.types.includes(plot.type));
        if (filters.locations.length > 0) result = result.filter(plot => filters.locations.includes(plot.location.region));

        setFilteredPlots(result);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [filters]);

  // Handler helpers (kept same logic, just cleaner)
  const toggleFilter = (category, value) => {
    setFilters(prev => {
        const current = prev[category];
        const updated = current.includes(value) 
            ? current.filter(item => item !== value) 
            : [...current, value];
        return { ...prev, [category]: updated };
    });
  };

  const FilterContent = () => (
    <div className="space-y-8 pr-4">
      {/* Price Section */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex justify-between">
            Budget
            <span className="text-xs font-normal text-green-600 bg-green-50 px-2 py-1 rounded">INR</span>
        </h3>
        <Slider
            defaultValue={[0, 5000000]}
            max={5000000} step={50000}
            value={filters.priceRange}
            onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
            className="mb-4"
        />
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>{formatCurrency(filters.priceRange[0])}</span>
          <span>{formatCurrency(filters.priceRange[1])}</span>
        </div>
      </div>

      {/* Area Section */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Plot Area (Acres)</h3>
        <Slider
            defaultValue={[0, 50]} max={50} step={1}
            value={filters.areaRange}
            onValueChange={(value) => setFilters(prev => ({ ...prev, areaRange: value }))}
            className="mb-4"
        />
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>{filters.areaRange[0]} ac</span>
          <span>{filters.areaRange[1]} ac</span>
        </div>
      </div>

      {/* Type Section */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Land Type</h3>
        <div className="space-y-3">
          {types.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`type-${type}`} checked={filters.types.includes(type)} onCheckedChange={() => toggleFilter('types', type)} />
              <label htmlFor={`type-${type}`} className="text-sm text-gray-700 cursor-pointer select-none">{type}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Region Section */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">District</h3>
        <div className="space-y-3">
          {locations.map(loc => (
            <div key={loc} className="flex items-center space-x-2">
               <Checkbox id={`loc-${loc}`} checked={filters.locations.includes(loc)} onCheckedChange={() => toggleFilter('locations', loc)} />
              <label htmlFor={`loc-${loc}`} className="text-sm text-gray-700 cursor-pointer select-none">{loc}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Map className="w-5 h-5 text-green-600" /> 
                Available Plots 
                <span className="text-sm font-normal text-gray-400 ml-2">({filteredPlots.length})</span>
            </h1>

            <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-grow md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                        placeholder="Search by city, zone..." 
                        className="pl-9 bg-gray-50 border-gray-200 focus-visible:ring-green-500"
                        value={filters.search}
                        onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                    />
                </div>
                
                {/* Mobile Filter Trigger */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader className="mb-6 text-left">
                                <SheetTitle>Filter Options</SheetTitle>
                            </SheetHeader>
                            <FilterContent />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>

        <div className="flex gap-8 items-start">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-72 flex-shrink-0 sticky top-24">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                   <h2 className="font-bold text-gray-900">Filters</h2>
                   <button 
                    className="text-xs text-red-500 hover:text-red-600 font-medium"
                    onClick={() => setFilters({ search: '', priceRange: [0, 5000000], areaRange: [0, 50], types: [], locations: [] })}
                   >
                       Clear All
                   </button>
               </div>
               <FilterContent />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            {filteredPlots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredPlots.map(plot => (
                        <PlotCard key={plot.id} plot={plot} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
                    <Map className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-900">No plots found</h3>
                    <p className="text-gray-500 mb-6">Adjust your budget or location filters.</p>
                    <Button variant="outline" onClick={() => setFilters({ search: '', priceRange: [0, 5000000], areaRange: [0, 50], types: [], locations: [] })}>
                        Reset Filters
                    </Button>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;