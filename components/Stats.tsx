
import React from 'react';
import { Check } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 tracking-tight">Dr. Shoaib Liaqat PT</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Dedicated to improving quality of life through advanced physiotherapy techniques. With years of clinical experience, Dr. Shoaib ensures every patient receives a personalized roadmap to recovery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="bg-blue-600/20 text-blue-400 p-1 rounded-full"><Check size={14} /></span>
                  Evidence-Based Practice
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="bg-blue-600/20 text-blue-400 p-1 rounded-full"><Check size={14} /></span>
                  Patient-Centered Approach
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="bg-blue-600/20 text-blue-400 p-1 rounded-full"><Check size={14} /></span>
                  State-of-the-art Equipment
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-blue-400 mb-1">5k+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Patients Treated</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Commitment</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-amber-400 mb-1">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
