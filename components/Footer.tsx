
import React from 'react';
import { Activity, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const linkedInUrl = "https://www.linkedin.com/in/dr-shoaib-liaqat-pt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  return (
    <footer id="footer" className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Activity className="text-blue-600" size={24} />
              <span className="text-lg font-bold text-slate-900 tracking-tight">Dr. Shoaib Liaqat PT</span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              Professional physiotherapy services designed to help you move better, feel better, and live better.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#expertise" className="hover:text-blue-600 transition-colors">Sports Rehab</a></li>
              <li><a href="#expertise" className="hover:text-blue-600 transition-colors">Manual Therapy</a></li>
              <li><a href="#expertise" className="hover:text-blue-600 transition-colors">Neurological Rehab</a></li>
              <li><a href="#expertise" className="hover:text-blue-600 transition-colors">Cupping Therapy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#expertise" className="hover:text-blue-600 transition-colors">About Dr. Shoaib</a></li>
              <li><a href="#appointment" className="hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#appointment" className="hover:text-blue-600 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-700 hover:text-white transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                title="Facebook Profile"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-pink-600 hover:text-white transition-all"
                title="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Dr. Shoaib Liaqat PT. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Terms</a>
            <a href="#" className="hover:text-slate-600">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
