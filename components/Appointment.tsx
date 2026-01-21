
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Appointment: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xbddggqa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="appointment" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Book Your <br /> Session</h2>
              <p className="text-slate-500">
                Fill out the form to schedule your assessment with Dr. Shoaib Liaqat. We will confirm your appointment shortly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-900 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900"> Location</h4>
                  <p className="text-sm text-slate-500 mt-1">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-900 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Direct Contact</h4>
                  <p className="text-sm text-slate-500 mt-1">+971522331797</p>
                  <p className="text-sm text-slate-400">Available 9am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-900 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Email</h4>
                  <p className="text-sm text-slate-500 mt-1">mianshoaibliaqat@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-500 mb-8">Dr. Shoaib Liaqat team will contact you within 24 hours to confirm your time slot.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-600 text-sm">
                    <AlertCircle size={18} />
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="col-span-1">
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Patient Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="age" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Age</label>
                    <input 
                      type="number" 
                      id="age" 
                      name="age"
                      required 
                      min="1" 
                      max="120" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                      placeholder="e.g. 32" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="col-span-1">
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                      placeholder="+971 00 0000000" 
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="session" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Session Type</label>
                  <div className="relative">
                    <select 
                      id="session" 
                      name="session_type"
                      defaultValue="" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="sports">Sports Rehab</option>
                      <option value="neuro">Neurological Rehab</option>
                      <option value="manual">Manual Therapy</option>
                      <option value="pediatric">Pediatric Therapy</option>
                      <option value="home">Home Visit</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="pain" className="block text-xs font-medium text-slate-700 mb-2 uppercase tracking-wide">Pain Description & Symptoms</label>
                  <textarea 
                    id="pain" 
                    name="pain_description"
                    rows={4} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none" 
                    placeholder="Please describe where it hurts, how long you've had the pain, and intensity (1-10)..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Appointment Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
                <p className="text-xs text-slate-400 mt-4 text-center">Your data is secure. We will contact you to confirm the time.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
