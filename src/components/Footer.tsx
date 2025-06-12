import React from 'react';
import { Crown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      'About Us',
      'Careers',
      'Press',
      'Investor Relations',
      'Contact Us'
    ],
    support: [
      'Help Center',
      'Terms of Use',
      'Privacy Policy',
      'Content Complaints',
      'Feedback'
    ],
    connect: [
      'Gift Card',
      'Mobile App',
      'TV App',
      'Web Stories',
      'Live TV'
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="px-4 md:px-8 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                HotStar
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's largest premium streaming platform with content that loves you back.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h3 className="text-white font-semibold mb-4">Download Apps</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">📱</span>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Download on the</div>
                  <div className="text-sm text-white font-semibold">App Store</div>
                </div>
              </div>
            </a>
            
            <a href="#" className="bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">🤖</span>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Get it on</div>
                  <div className="text-sm text-white font-semibold">Google Play</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 HotStar. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;