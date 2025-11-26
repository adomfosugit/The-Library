import React from 'react';
import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
          <Link
  href="/"
  className="group flex items-center gap-2 text-2xl font-bold text-green-400 hover:text-green-300 transition-all duration-300 cursor-pointer"
>
  <svg 
    className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M12 2L12 12M12 12L17 7M12 12L7 7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 8 14 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 14 12 12 12 12Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Bloomforge
  </span>
</Link>
<p className="text-sm mb-4">
  Your trusted source for premium, all-natural shea butter and skincare essentials.
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
              <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>

              <li><a href="#" className="hover:text-green-400 transition">New Products</a></li>
       
              <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">

              <li><a href="#" className="hover:text-green-400 transition">Orders</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Delivery Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-green-400 transition">FAQs</a></li>
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
            <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition">Cookie Policy</a>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;