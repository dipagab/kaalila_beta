import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import RetreatsGrid from '../components/RetreatsGrid';
import { retreats as retreatsData } from '../data/retreats';
import { Retreat } from '../types/retreat';

// Reusing existing assets
import heroBg from '../assets/hero-bg.png';
import kaalilaLogo from '../assets/Kaalila.svg';
import communityFeature from '../assets/community-feature.png';
import community2 from '../assets/community-2.png';
import community3 from '../assets/community-3.png';
import community4 from '../assets/community-4.png';
import community5 from '../assets/community-5.png';
import community6 from '../assets/community-6.png';

// --- Components ---

const Hero = () => {
  return (
    <section className="h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* Center Content: Logo */}
      <div className="flex-grow flex items-center justify-center z-10">
        <motion.img 
          src={kaalilaLogo} 
          alt="Kaalila" 
          className="w-48 md:w-72 brightness-0 invert opacity-90"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      {/* Bottom Content: Payoff + Arrow */}
      <div className="pb-12 md:pb-16 flex flex-col items-center gap-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-serif text-sm md:text-base italic tracking-widest opacity-70"
          style={{
            opacity: "0.7",
            transform: "none",
            fontSize: "16px",
            fontWeight: "400",
            color: "rgb(255, 255, 255)",
            textAlign: "start",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderRadius: "0px",
            marginTop: "0px",
            marginRight: "0px",
            marginBottom: "0px",
            marginLeft: "0px",
            paddingTop: "0px",
            paddingRight: "0px",
            paddingBottom: "0px",
            paddingLeft: "0px"
          }}>
          Art is much more than you think.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#philosophy" className="cursor-pointer hover:opacity-100 transition-opacity">
            <ArrowDown
              className="w-5 h-5 opacity-50 animate-bounce"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgb(255, 255, 255)",
                textAlign: "start",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderRadius: "0px",
                margin: "50px 0px",
                padding: "0px",
                marginTop: "100px",
                marginRight: "0px",
                marginBottom: "100px",
                marginLeft: "0px",
                paddingTop: "0px",
                paddingRight: "0px",
                paddingBottom: "0px",
                paddingLeft: "0px"
              }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-black text-white px-6 scroll-mt-32 md:scroll-mt-40">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm md:text-base tracking-widest uppercase opacity-60 mb-8">
            A Creative Journey of Transformation
          </h2>
          <p className="font-serif text-2xl md:text-4xl leading-relaxed mb-16 italic opacity-90">Kaalila is a community of artists and facilitators founded around the idea of combining art and its various expressive forms to give people the opportunity to access and explore with their own creativity.</p>
          <p className="font-mono text-sm md:text-base leading-loose opacity-70 mb-8">
            We design pop-up retreats that move across the most beautiful and authentic landscapes of the world, carrying the spirit of exploration, connection, and transformation. Our approach blends contemporary practices with timeless methods — from intuitive mark-making to collective sound, from material exploration to embodied creation — honoring both innovation and the creative wisdom passed down through generations.
          </p>
          <p className="font-mono text-sm md:text-base leading-loose opacity-70">These are space for those seeking to step away from the hectic pace of everyday life , and immerse themselves in the power of creative practice — to awaken dormant expression, reconnect with inner vitality, and share this experience within the like-minded community.</p>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose Your Experience",
      desc: "Select the experience, location and dates that inspire you from our upcoming pop-up residencies around the world."
    },
    {
      title: "Lets Connect",
      desc: "Schedule a short online interview to get to know you, feel if we resonate, and see how you might connect with the creative circle."
    },
    {
      title: "Start the Journey",
      desc: "At this point, you're welcome to book your residency period on our calendar."
    }
  ];

  return;
};

const UpcomingRetreats = () => {
  const [retreats, setRetreats] = useState<Retreat[]>([]);

  useEffect(() => {
    // Simulate loading for smoother UX
    const timer = setTimeout(() => {
      setRetreats(retreatsData);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">

          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="w-[180px] h-px bg-black/20"></div>
          </div>
        </div>
        <RetreatsGrid retreats={retreats} />
      </div>
    </section>
  );
};

const InstagramSection = () => {
  const images = [communityFeature, community2, community3, community4, community5, community6];

  return;
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f4f1ea] px-6 border-t border-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-16">What People Say</h2>
        
        <div className="relative bg-white p-12 md:p-16 shadow-sm border border-black/5">
          <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          </p>
          <div className="font-mono text-sm">
            <p className="font-bold uppercase tracking-widest">Dudu Ngyen</p>
            <p className="opacity-60 text-xs mt-1">Professional Gambler</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const General = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Philosophy />
      <HowItWorks />
      <UpcomingRetreats />
      <InstagramSection />
    </div>
  );
};

export default General;
