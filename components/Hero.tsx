
import React from 'react';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-400 opacity-10 blur-[120px]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Excellence in Neurological Rehabilitation
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Restoring Movement. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reclaiming Life.</span>
        </h1>
        
        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
          Expert clinical care by Dr. Shoaib Liaqat. Specializing in advanced stroke recovery and neurological physiotherapy in Dubai, UAE.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#appointment" 
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            Schedule Assessment
            <ArrowRight size={18} />
          </a>
          <a 
            href="#expertise" 
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            View Specialties
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 border-t border-slate-100 pt-10">
          <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm tracking-wide">
            <ShieldCheck size={20} className="text-blue-600" /> LICENSED CLINICIAN
          </div>
          <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm tracking-wide">
            <Award size={20} className="text-blue-600" /> NEURO SPECIALIST
          </div>
          <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm tracking-wide">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                </div>
              ))}
            </div>
            5,000+ RECOVERED PATIENTS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
