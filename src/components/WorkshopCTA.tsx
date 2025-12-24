import React, { useState } from 'react';
import ContactModal from './ContactModal';

const WorkshopCTA = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="dates" className="bg-black text-white py-24 border-t border-white scroll-mt-24">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <div className="container mx-auto px-6">
        <div className="border border-white p-8 md:p-16 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 font-mono text-xs">
            LIMITED CAPACITY: 6-8 HUMANS
          </div>
          
          <div className="text-center">
            <h2 className="text-5xl md:text-8xl font-sans font-light tracking-tighter mb-4">DEC 28</h2>
            <p className="font-mono text-xl mb-12">2025 EDITION</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 font-mono text-sm">
              <div className="border border-white p-4 bg-white text-black">
                <p className="opacity-50 text-xs uppercase tracking-widest mb-2">WORKSHOP</p>
                <p className="text-2xl font-serif italic mb-1">FREE</p>
                <p className="text-xs opacity-60">3 Hours Duration</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h3 className="text-3xl md:text-4xl font-serif italic">Reserve Your Spot</h3>
              <p className="font-mono text-sm md:text-base leading-relaxed opacity-80 mb-8">
                Reservation is required. Limited to 8 people.<br/>
                Join us for an experiential journey into art as a language.
              </p>
              
              <div className="font-mono text-sm md:text-base leading-relaxed opacity-80 mb-8 space-y-4">
                <div>
                  <strong className="block uppercase text-xs tracking-widest mb-1">Event Timing</strong>
                  Sunday, 28 December, 2025<br/>
                  9:00am to 12:00pm
                </div>
                <div>
                  <strong className="block uppercase text-xs tracking-widest mb-1">Event Address</strong>
                  VinHomes Central Park<br/>
                  720A Dien Bien Phu Street and 208 Nguyen Huu Canh Street<br/>
                  Ward 22, Binh Thanh District, Ho Chi Minh City
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                <a href="https://wa.me/84938587946" target="_blank" rel="noopener noreferrer" className="inline-block border border-white px-8 py-4 font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest rounded-full">
                  WhatsApp
                </a>
                <a href="https://zalo.me/84938587946" target="_blank" rel="noopener noreferrer" className="inline-block border border-white px-8 py-4 font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest rounded-full">
                  Zalo
                </a>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-block border border-white px-8 py-4 font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest rounded-full"
                >
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopCTA;