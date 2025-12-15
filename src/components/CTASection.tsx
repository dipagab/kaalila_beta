import React, { useState } from 'react';
import ContactModal from './ContactModal';

const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="dates" className="bg-black text-white py-24 border-t border-white scroll-mt-24">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <div className="container mx-auto px-6">
        <div className="border border-white p-8 md:p-16 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 font-mono text-xs">
            LIMITED CAPACITY: 12 HUMANS
          </div>
          
          <div className="text-center">
            <h2 className="text-5xl md:text-8xl font-sans font-light tracking-tighter mb-4">JAN 08-11</h2>
            <p className="font-mono text-xl mb-12">2026 EDITION</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 font-mono text-sm">
              <div className="border border-white p-4 bg-white text-black">
                <p className="opacity-50 text-xs uppercase tracking-widest mb-2">FULL PACKAGE</p>
                <p className="text-2xl font-serif italic mb-1">3,700,000 VND</p>
                <p className="text-xs opacity-60">Approx $150 USD / €140</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h3 className="text-3xl md:text-4xl font-serif italic">Reserve Your Spot</h3>
              <p className="font-mono text-sm md:text-base leading-relaxed opacity-80">
                Limited to 12 people. 4 spots remaining.<br/>
                This retreat isn't for everyone—and that's okay.<br/>
                Let's have a brief chat to see if we're a good fit.
              </p>
              
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
              
              <div className="mt-8 pt-8 border-t border-white/20 text-xs font-mono opacity-60">
                <p>Payment options: Bank transfer, Momo / ZaloPay, Cash on arrival</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
