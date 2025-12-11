import React from 'react';
import { Link } from 'react-router-dom';
import { Ban, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const Unauthorized = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50/50 flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto p-10 bg-white rounded-xl shadow-2xl border border-gray-100 text-center">
        
        {/* Icon & Error Code */}
        <div className="mb-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-sm font-semibold text-gray-400">Error Code: 401</p>
        </div>

        {/* Title and Message */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          You are not authorized to view this page. This content may require admin permission.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="h-12 px-6 text-base bg-green-600 hover:bg-green-700 text-white shadow-md">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base border-gray-300 text-gray-700 hover:bg-gray-100">
            <Link to="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;