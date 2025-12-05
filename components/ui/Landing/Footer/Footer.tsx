import React from 'react';
import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import BloomForgeLogo from '@/components/Logo/BlooforgeLogo';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
<p className="text-sm mb-4">
  Your trusted source for premium, all-natural shea butter and skincare essentials.
</p> 
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+233 (54)-872-8456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@bloomforge.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Oxford Avenue,TseAddo-Accra </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition">About Us</Link></li>

            
       
              <li><a href="#" className="hover:text-secondary transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">

              <li><Link href="/orders" className="hover:text-secondary transition">Orders</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Delivery Info</Link></li>
            
            
            </ul>
          </div>

            {/* Social Media */}
            <div className=" flex flex-col">
                <div className='flex gap-3'>

              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition">
                <Youtube className="w-4 h-4" />
              </a>
                </div>
                <div className="border-t border-gray-800 pt-8 mb-8">
          <h5 className="text-sm font-semibold text-white mb-4">Payment Secured By</h5>
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
          <p>&copy; 2025 BloomForge Ventures. All rights reserved.</p>

    
          <div className="flex gap-6">
            <a href="#" className="hover:text-second transition">Privacy Policy</a>
            <a href="#" className="hover:text-second transition">Terms of Service</a>
            <a href="#" className="hover:text-second transition">Cookie Policy</a>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;