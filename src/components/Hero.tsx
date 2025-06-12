import React from 'react';
import { Play, Plus, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              HOTSTAR SPECIALS
            </span>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              NEW
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            The <span className="text-amber-400">Marvel</span>
            <br />
            Universe
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Experience the epic journey of Earth's Mightiest Heroes as they unite to face the greatest threats the universe has ever known. Action, adventure, and heroism await.
          </p>

          {/* Metadata */}
          <div className="flex items-center space-x-6 mb-8 text-sm text-slate-300">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>2023</span>
            </span>
            <span>2h 28m</span>
            <span className="bg-slate-700 px-2 py-1 rounded">U/A 13+</span>
            <span>Action, Adventure, Sci-Fi</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-200 transition-all duration-200 transform hover:scale-105">
              <Play className="w-6 h-6 fill-current" />
              <span>Watch Now</span>
            </button>
            
            <button className="flex items-center justify-center space-x-3 bg-slate-800/80 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600">
              <Plus className="w-6 h-6" />
              <span>Watchlist</span>
            </button>
            
            <button className="flex items-center justify-center space-x-3 bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800/50 transition-all duration-200 border border-slate-500">
              <Info className="w-6 h-6" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-2 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;