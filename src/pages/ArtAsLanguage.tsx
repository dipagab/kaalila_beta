import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Clock, MapPin, Users, Palette } from 'lucide-react';
import heroBg from '../assets/art-workshop-hero.png';
import WorkshopCTA from '../components/WorkshopCTA';

const GraphicTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <span className="relative z-10 font-serif italic text-3xl md:text-4xl lg:text-5xl px-4">
      {children}
    </span>
    <span className="absolute left-0 bottom-2 w-full h-3 bg-black/10 -rotate-1 z-0"></span>
  </div>
);

const Section = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <section id={title.toLowerCase()} className={`py-20 px-6 ${className}`}>
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <GraphicTitle>{title}</GraphicTitle>
      </div>
      {children}
    </div>
  </section>
);

const ArtAsLanguage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 bg-white overflow-hidden">
        <div className="absolute top-1/4 right-10 md:right-32 w-32 h-32 md:w-64 md:h-64 rounded-full bg-black blur-3xl opacity-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col h-full justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm md:text-base mb-6 tracking-widest"
          >
            DEC 28, 2025 / HO CHI MINH CITY / VINHOMES CENTRAL PARK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[43px] md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 uppercase max-w-[95vw] text-left"
          >
            ART AS AN<br/>EXPRESSIVE<br/>LANGUAGE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-mono text-xs md:text-3xl lg:text-4xl bg-black text-white inline-block px-4 py-2 self-start transform -rotate-1 whitespace-nowrap"
          >A WORKSHOP TO EXPLORE OUR INNER CREATIVITY</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 self-end"
          >
            <a 
              href="#dates"
              className="inline-flex items-center gap-2 border border-black text-black bg-transparent px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 group"
            >
              Reserve Your Spot
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-0 w-full h-full z-0 opacity-20 overflow-hidden">
          <motion.div 
            className="w-full h-full"
          >
            <motion.img 
              src={heroBg} 
              alt="Art Workshop" 
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-white/50"></div>
        </div>

        <div className="relative z-10 flex justify-end items-end mt-12">
          <motion.a 
            href="#purpose"
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 border border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </motion.a>
        </div>
      </section>
      {/* Purpose */}
      <Section title="Purpose">
        <div className="prose prose-lg mx-auto text-center font-serif leading-relaxed">
          <p className="text-xl md:text-2xl mb-8">
            This workshop introduces art as a practical tool for expression rather than performance or skill.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left font-sans text-base">
            <div className="p-6 border border-black/10 rounded-lg hover:border-black transition-colors">
              <h3 className="font-bold mb-2">Experience</h3>
              <p>Experience art as a language.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-lg hover:border-black transition-colors">
              <h3 className="font-bold mb-2">Acquire</h3>
              <p>Acquire simple, repeatable expressive tools.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-lg hover:border-black transition-colors">
              <h3 className="font-bold mb-2">Translate</h3>
              <p>Translate emotions and internal states into visual form.</p>
            </div>
          </div>
          <div className="mt-12 font-mono text-sm uppercase tracking-widest">
            <p>This is not a drawing class.</p>
            <p>This is not art therapy.</p>
            <p className="bg-black text-white inline-block px-2 mt-2">It is a structured space for expression.</p>
          </div>
        </div>
      </Section>
      {/* Structure */}
      <Section title="Structure" className="bg-gray-50">
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { step: "01", title: "Opening & Warm-up", duration: "20’" },
            { step: "02", title: "What Is Art, for Me?", duration: "25’" },
            { step: "03", title: "The Body as Structure", duration: "35’" },
            { step: "04", title: "Body in Motion", duration: "25’" },
            { step: "05", title: "The Face and Emotion", duration: "25’" },
            { step: "06", title: "Creating a Situation", duration: "30’" },
            { step: "07", title: "Color as Energy", duration: "20’" },
            { step: "08", title: "Closing & Reflection", duration: "15’" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-center group"
            >
              <div className="font-mono text-xl font-bold text-gray-300 group-hover:text-black transition-colors">
                {item.step}
              </div>
              <div className="flex-1 pb-4 border-b border-gray-200 group-last:border-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded">{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      {/* Output */}
      <Section title="Output">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
              <Palette size={24} />
            </div>
            <h3 className="font-serif text-xl mb-2">Visual Works</h3>
            <p className="text-gray-600">Self-created visual works.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="font-serif text-xl mb-2">Expressive Tools</h3>
            <p className="text-gray-600">Simple, repeatable expressive tools.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-4">
              <ArrowRight size={24} />
            </div>
            <h3 className="font-serif text-xl mb-2">New Relationship</h3>
            <p className="text-gray-600">A new relationship with art as a language.</p>
          </div>
        </div>
      </Section>
      {/* Details & CTA */}
      <WorkshopCTA />
      {/* FAQ Section */}
      <Section title="FAQ" className="bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { q: "Do I need any drawing skills?", a: "No. This workshop is about expression, not technical skill. No prior experience is required." },
            { q: "Do I need to bring materials?", a: "No. All materials (paper, markers, pencils) will be provided." },
            { q: "Is it really free?", a: "Yes. This is a community event to share the power of art as a language." },
            { q: "What language will be used?", a: "The workshop will be conducted in English." }
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="font-serif text-xl mb-2">{item.q}</h3>
              <p className="text-gray-600 font-mono text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ArtAsLanguage;