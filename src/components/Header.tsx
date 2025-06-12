import React, { useState } from 'react';
import { Search, User, Menu, X, Bell, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                HotStar
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium">Home</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">TV</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Movies</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Sports</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Disney+</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Kids</a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-slate-800 rounded-full px-4 py-2">
                  <Search className="w-5 h-5 text-slate-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Movies, shows and more"
                    className="bg-transparent text-white placeholder-slate-400 outline-none w-64"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Search className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Notifications */}
            <button className="p-2 text-slate-300 hover:text-white transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <button className="hidden md:flex items-center space-x-2 bg-slate-800 rounded-full px-4 py-2 hover:bg-slate-700 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Profile</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium">Home</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">TV</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Movies</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Sports</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Disney+</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors font-medium">Kids</a>
              <button className="flex items-center space-x-2 text-slate-300 hover:text-amber-400 transition-colors font-medium justify-start">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;