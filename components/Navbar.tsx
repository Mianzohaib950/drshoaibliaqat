
import React, { useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
            <Activity size={20} strokeWidth={2} />
          </div>
          <span className="self-center text-lg font-semibold tracking-tight text-slate-900">
            Dr. Shoaib Liaqat <span className="text-blue-600">PT</span>
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <a
            href="#appointment"
            className="hidden sm:block text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-slate-900/20"
          >
            Book Session
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="#" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#expertise" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors">
                Expertise
              </a>
            </li>
            <li>
              <a href="#appointment" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#footer" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
