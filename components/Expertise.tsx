
import React from 'react';
import { 
  Activity, 
  Bone, 
  BrainCircuit, 
  HeartPulse, 
  Hand, 
  Sparkles, 
  Baby, 
  Accessibility, 
  Monitor 
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  themeClass: string;
  iconThemeClass: string;
}

const services: Service[] = [
  {
    title: 'Sports Rehabilitation',
    description: 'Recovery programs for athletes focused on returning to sport safely and preventing future injuries through strength and conditioning.',
    icon: <Activity size={24} />,
    themeClass: 'bg-blue-50/50 border-blue-100 hover:border-blue-300 hover:shadow-blue-900/5',
    iconThemeClass: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600'
  },
  {
    title: 'Musculoskeletal Therapy',
    description: 'Treatment for back pain, neck pain, joint disorders, and soft tissue injuries using evidence-based manual techniques.',
    icon: <Bone size={24} />,
    themeClass: 'bg-emerald-50/50 border-emerald-100 hover:border-emerald-300 hover:shadow-emerald-900/5',
    iconThemeClass: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600'
  },
  {
    title: 'Neurological Rehab',
    description: 'Specialized care for stroke, Parkinson’s, and other neurological conditions to improve motor function and independence.',
    icon: <BrainCircuit size={24} />,
    themeClass: 'bg-violet-50/50 border-violet-100 hover:border-violet-300 hover:shadow-violet-900/5',
    iconThemeClass: 'bg-violet-100 text-violet-600 group-hover:bg-violet-600'
  },
  {
    title: 'Post-Operative Care',
    description: 'Guided recovery protocols after orthopedic surgeries (ACL reconstruction, joint replacements) to restore full range of motion.',
    icon: <HeartPulse size={24} />,
    themeClass: 'bg-rose-50/50 border-rose-100 hover:border-rose-300 hover:shadow-rose-900/5',
    iconThemeClass: 'bg-rose-100 text-rose-600 group-hover:bg-rose-600'
  },
  {
    title: 'Manual Therapy',
    description: 'Hands-on mobilization and manipulation techniques to reduce pain, decrease muscle tension and improve mobility.',
    icon: <Hand size={24} />,
    themeClass: 'bg-amber-50/50 border-amber-100 hover:border-amber-300 hover:shadow-amber-900/5',
    iconThemeClass: 'bg-amber-100 text-amber-600 group-hover:bg-amber-600'
  },
  {
    title: 'Dry Needling & Cupping',
    description: 'Advanced modalities to treat trigger points, myofascial pain syndromes, and improve blood circulation.',
    icon: <Sparkles size={24} />,
    themeClass: 'bg-cyan-50/50 border-cyan-100 hover:border-cyan-300 hover:shadow-cyan-900/5',
    iconThemeClass: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600'
  },
  {
    title: 'Pediatric Physiotherapy',
    description: 'Gentle, specialized therapy for children dealing with developmental delays, congenital conditions, and injuries.',
    icon: <Baby size={24} />,
    themeClass: 'bg-pink-50/50 border-pink-100 hover:border-pink-300 hover:shadow-pink-900/5',
    iconThemeClass: 'bg-pink-100 text-pink-600 group-hover:bg-pink-600'
  },
  {
    title: 'Geriatric Care',
    description: 'Focusing on balance, strength, and mobility to prevent falls and maintain independence in older adults.',
    icon: <Accessibility size={24} />,
    themeClass: 'bg-orange-50/50 border-orange-100 hover:border-orange-300 hover:shadow-orange-900/5',
    iconThemeClass: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600'
  },
  {
    title: 'Ergonomic Consulting',
    description: 'Assessment and correction of workplace posture to resolve RSI, neck strain, and chronic back issues.',
    icon: <Monitor size={24} />,
    themeClass: 'bg-teal-50/50 border-teal-100 hover:border-teal-300 hover:shadow-teal-900/5',
    iconThemeClass: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600'
  },
  {
    title: 'Stroke Rehabilitation',
    description: 'Evidence-Based stroke Rehabilitation aimed at improving movement, balance, and overall functional independence.',
    icon: <Accessibility size={24} />,
    themeClass: 'bg-indigo-50/50 border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-900/5',
    iconThemeClass: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600'
  },
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Clinical Expertise</h2>
          <p className="text-slate-500 max-w-2xl">
            Dr. Shoaib Liaqat offers a comprehensive range of physiotherapy treatments tailored to your specific recovery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.themeClass}`}
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-white ${service.iconThemeClass}`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
