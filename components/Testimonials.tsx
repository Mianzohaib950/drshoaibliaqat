
import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Rashid",
    condition: "Post-Stroke Recovery",
    duration: "4 Months Rehab",
    text: "After my stroke, I lost mobility in my right side. Dr. Shoaib's neurological approach was life-changing. I am now walking independently and have regained 80% of my arm function.",
    rating: 5,
    outcome: "Regained Independent Walking"
  },
  {
    name: "Sarah Jenkins",
    condition: "Chronic Back Pain",
    duration: "6 Sessions",
    text: "I visited many clinics for my sciatica, but the assessment here was far more thorough. The manual therapy and specific exercises actually addressed the root cause.",
    rating: 5,
    outcome: "90% Pain Reduction"
  },
  {
    name: "Mohammad Al-Farsi",
    condition: "ACL Reconstruction",
    duration: "3 Months Rehab",
    text: "Professional, evidence-based, and highly motivating. Dr. Shoaib guided my sports rehab perfectly. Back on the field ahead of schedule!",
    rating: 5,
    outcome: "Returned to Professional Sport"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="feedback" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-blue-100/50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest animate-pulse">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Patient Recovery Journey
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Real feedback from patients who have successfully reclaimed their mobility and quality of life through expert clinical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 relative overflow-hidden"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Background Glow Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                    <Quote size={24} />
                  </div>
                </div>

                <p className="text-slate-600 italic mb-8 leading-relaxed text-base min-h-[100px]">
                  "{t.text}"
                </p>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{t.name}</h4>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t.duration}</p>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-tighter border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {t.condition}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 py-3 px-4 bg-emerald-50/50 rounded-2xl text-emerald-700 text-sm font-bold border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <CheckCircle2 size={18} className="shrink-0 animate-bounce" />
                    <span className="truncate">{t.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Join 5,000+ satisfied patients in their recovery journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
