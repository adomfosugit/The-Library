import React from 'react';
import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">THE LIBRARY</h3>
            </div>
            <p className="text-sm mb-4">
              Your trusted destination for discovering and purchasing books across all genres.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+233 (55)- XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@bookstore.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Accra, La XXXXX Street</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Browse Books</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">New Releases</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">My Account</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Order Tracking</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Delivery Info</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
            </ul>
          </div>

            {/* Social Media */}
            <div className=" flex flex-col">
                <div className='flex gap-3'>

              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
                </div>
                <div className="border-t border-gray-800 pt-8 mb-8">
          <h5 className="text-sm font-semibold text-white mb-4">Powered By</h5>
          <div className="flex items-center">
            <img 
              src="/download.png" 
              alt="Payment Options - Visa, Mastercard, Momo, Telcel and more" 
              className="h-15 md:h-15"
            />
          </div>
        </div>
            </div>
          </div>

           
        </div>

      


        

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2025 The Library. All rights reserved.</p>

    
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;