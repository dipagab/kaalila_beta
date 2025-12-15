import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, Star, Circle, Square, BedDouble, Leaf, Volume2, VolumeX, Palette } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import gallery1 from '../assets/gallery-new-1.png';
import gallery2 from '../assets/gallery-new-2.jpg';
import gallery3 from '../assets/gallery-new-3.png';
import gallery4 from '../assets/gallery-new-4.jpg';
import gallery5 from '../assets/gallery-new-5.jpg';
import gallery6 from '../assets/gallery-new-6.jpg';
import gallery7 from '../assets/gallery-new-7.jpg';
import gallery8 from '../assets/gallery-new-8.jpg';
import gallery9 from '../assets/gallery-new-9.jpg';
import location1 from '../assets/location-1.jpg';
import location2 from '../assets/location-2.png';
import location3 from '../assets/location-3.jpg';
import location4 from '../assets/location-5.jpg';
import location5 from '../assets/location-5.jpg';
import location6 from '../assets/location-6.jpg';
import location7 from '../assets/location-7.jpg';
import location8 from '../assets/location-8.jpg';
import location9 from '../assets/location-9.jpg';
import communityFeature from '../assets/community-feature.png';
import community2 from '../assets/community-2.png';
import community3 from '../assets/community-3.png';
import community4 from '../assets/community-4.png';
import community5 from '../assets/community-5.png';
import community6 from '../assets/community-6.png';
import kaalilaLogo from '../assets/Kaalila.svg';

import { schedule } from '../data/schedule';
import CTASection from '../components/CTASection';

// --- Components ---

const GraphicTitle = (
  { children, className = "" }: { children: React.ReactNode, className?: string }
) => {};

const Marquee = ({ text }: { text: string }) => {
  return;
};

const Tape = ({ className }: { className?: string }) => (
  <div className={`absolute z-20 mix-blend-multiply opacity-90 ${className}`}>
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full drop-shadow-sm">
      <defs>
        <filter id="tape-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0" in="noise" result="coloredNoise" />
          <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
          <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
        </filter>
      </defs>
      <path 
        d="M2,0 L98,0 L100,5 L98,10 L100,15 L98,20 L100,25 L98,30 L2,30 L0,25 L2,20 L0,15 L2,10 L0,5 Z" 
        fill="#fdf6e3" 
        filter="url(#tape-texture)"
      />
    </svg>
  </div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 bg-white overflow-hidden">
      <div className="absolute top-1/4 right-10 md:right-32 w-32 h-32 md:w-64 md:h-64 rounded-full bg-black blur-3xl opacity-10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col h-full justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm md:text-base mb-6 tracking-widest"
          style={{
            opacity: "1",
            transform: "none",
            fontSize: "12px"
          }}>JAN 08-11, 2026 / VIETNAM / DA LAT</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[43px] md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 uppercase max-w-[95vw] text-left"
          style={{
            opacity: "1",
            transform: "none"
          }}>CREATIVE<br/>EMPOWERMENT<br/>RETREAT</motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-mono text-xs md:text-3xl lg:text-4xl bg-black text-white inline-block px-4 py-2 self-start transform -rotate-1 whitespace-nowrap"
          style={{
            opacity: "1",
            transform: "none"
          }}>4 DAYS TO EXPLORE YOUR INNER CREATIVITY</motion.p>

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
          style={{ y }}
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
          href="#what-this-is"
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 border border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

const VideoPlayer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;
    
    // Post message to play/pause based on visibility
    const action = isInView ? 'playVideo' : 'pauseVideo';
    try {
      iframeRef.current.contentWindow?.postMessage(JSON.stringify({
        'event': 'command',
        'func': action,
        'args': []
      }), '*');
    } catch (e) {
      // Ignore cross-origin errors if any, though '*' should handle it
    }
  }, [isInView]);

  const toggleMute = () => {
    if (iframeRef.current) {
      const func = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow?.postMessage(JSON.stringify({
        'event': 'command',
        'func': func,
        'args': []
      }), '*');
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      className="relative w-full h-full bg-black"
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
    >
      <iframe 
        ref={iframeRef}
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/Bx2g8jRQlns?start=18&enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=Bx2g8jRQlns&playsinline=1&rel=0&showinfo=0&iv_load_policy=3" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        className="w-full h-full pointer-events-none transition-all duration-500"
      ></iframe>
      
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 group"
      >
        {isMuted ? (
          <VolumeX size={20} className="text-white opacity-70 group-hover:opacity-100" />
        ) : (
          <Volume2 size={20} className="text-white opacity-70 group-hover:opacity-100" />
        )}
      </button>
    </motion.div>
  );
};

const ScheduleAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto border-t border-white/20">
      {schedule.map((day, index) => (
        <div key={index} className="border-b border-white/20">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between text-left group"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xl md:text-2xl tracking-tighter group-hover:text-gray-300 transition-colors">{day.day}</span>
              <span className="font-mono text-xl md:text-2xl opacity-80">{day.title}</span>
            </div>
            <div className="mt-4 md:mt-0">
               <span className={`block text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="pb-8 pt-4 space-y-6">
                  {day.items.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 border-l border-white/10 pl-6 ml-2">
                      <div className="font-mono text-xs opacity-50 whitespace-nowrap w-24 pt-1">{item.time}</div>
                      <div className="flex-1">
                        <div className="font-mono text-lg leading-tight mb-1">{item.activity}</div>
                        {item.desc && <div className="font-mono text-xs opacity-60 leading-relaxed max-w-md">{item.desc}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const Story = () => {
  return null;
};

const WhatThisIs = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9];

  return (
    <section id="what-this-is" className="bg-white text-black pt-32 relative overflow-hidden border-t border-black scroll-mt-24">
      <div className="absolute left-6 top-32 hidden md:block">
        <span className="writing-vertical font-mono text-xs tracking-widest">01 — THE CONCEPT</span>
      </div>
      <div className="container mx-auto px-6 relative z-10 mb-32">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Header & Text */}
          <div className="text-center w-full flex flex-col items-center">
            <div className="mb-12">
              <GraphicTitle className="text-5xl md:text-7xl font-serif italic">Breathing</GraphicTitle>
            </div>

            <div className="font-mono text-sm md:text-base space-y-6 max-w-2xl mx-auto leading-relaxed mb-12">
              <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-2">4 days. immersive. in the nature.</p>
              <h2 className="font-serif text-3xl md:text-4xl italic mb-6">No art skill required.</h2>
              <p>An immersive art journey to transform emotions, desires, and memory into creative energy. A space-time dedicated to exploring new expressive possibilities, listening to ourselves through art, relationship, gesture, sensory perception, and collective play.    From watercolor to collage to woodcut, to unconvencional drawing, color and music, we will explore various forms of art, grounding the experience in the fundamentals of representation — the body, the face, the movement and the relation. A safe, soft, and judgment-free space to surprise ourselves and connect with ourselves and others.</p>
            </div>

            {/* Gallery moved from Story section */}
            <div className="relative w-full bg-white flex items-center justify-center overflow-hidden mb-12">
              <motion.div 
                className="w-full max-w-xl aspect-square grid grid-cols-3 gap-4"
              >
                {galleryImages.map((img, index) => (
                  <motion.div 
                    key={index} 
                    layoutId={`img-container-${index}`}
                    onClick={() => setSelectedId(index)}
                    className="relative overflow-hidden cursor-pointer bg-white"
                    whileHover={{ y: -5, scale: 1.05, zIndex: 10 }}
                  >
                    <motion.img 
                      layoutId={`img-${index}`}
                      src={img} 
                      alt={`Location ${index + 1}`} 
                      className="w-full h-full object-cover block transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <AnimatePresence>
            {selectedId !== null && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
                onClick={() => setSelectedId(null)}
              >
                <motion.img 
                  layoutId={`img-${selectedId}`}
                  src={galleryImages[selectedId]} 
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3 Images - Vintage Taped Style */}

        </div>
      </div>
      {/* Program */}
      <div id="program" className="w-full bg-black text-white py-32 relative scroll-mt-24">
        <div className="absolute left-6 top-24 hidden md:block">
          <span className="writing-vertical font-mono text-xs tracking-widest">02 — THE JOURNEY</span>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-16">
            <div className="text-center">
              <GraphicTitle className="text-4xl md:text-6xl font-serif italic">Program</GraphicTitle>
            </div>
            
            <div className="relative max-w-3xl mx-auto py-8">
              <h3 className="font-serif text-2xl md:text-3xl italic text-center mb-8 opacity-80">What is about?</h3>
              <ScheduleAccordion />
            </div>

            {/* What We Offer - Moved here */}
            <div className="mt-16 pt-16 border-t border-white/20 relative">


              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full relative z-10">
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="p-3 border border-white/20 rounded-full flex items-center justify-center bg-black">
                    <BedDouble size={20} strokeWidth={1} />
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase text-center mt-2">Shared Room</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="p-3 border border-white/20 rounded-full flex items-center justify-center bg-black">
                    <Leaf size={20} strokeWidth={1} />
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase text-center mt-2">Vegan Food</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="p-3 border border-white/20 rounded-full flex items-center justify-center bg-black">
                    <Palette size={20} strokeWidth={1} />
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase text-center mt-2">All Materials Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Where = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} id="where" className="py-0 bg-white relative overflow-hidden border-t border-black">
      <Marquee text="DA LAT • VIETNAM • 1500M ALTITUDE • PINE FORESTS • SILENCE • " />

    </section>
  );
};

const Manifesto = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax background
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); // Reduced range
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]); // Reduced scale

  // Mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Smooth mouse movement - increased damping for elegance
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  // Independent transforms (Subtle & Elegant)
  
  // 1. Respect: Very subtle
  const x1 = useTransform(smoothX, [-0.5, 0.5], [-5, 5]); 
  const y1 = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  // 2. Presence: Moderate
  const x2 = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const y2 = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  // 3. Nature: Vertical drift
  const x3 = useTransform(smoothX, [-0.5, 0.5], [5, -5]);
  const y3 = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  // 4. Fun: Gentle movement, NO ROTATION
  const x4 = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const y4 = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  return (
    <section 
      id="manifesto"
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="min-h-screen overflow-hidden relative bg-black flex items-center py-24"
    >

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24 text-center">
            <p className="font-mono text-sm tracking-widest mb-2 opacity-80">THE ONLY RULES</p>
          </div>
          <div className="flex flex-col items-center gap-12 md:gap-16 font-mono text-lg md:text-xl leading-relaxed tracking-widest opacity-90 whitespace-normal md:whitespace-nowrap text-center w-full px-4">
            <motion.div 
              style={{ x: x1, y: y1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p>we Respect others and the space.</p>
            </motion.div>
            
            <motion.div 
              style={{ x: x2, y: y2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <p>we Care for nature and shared spaces.</p>
            </motion.div>
            
            <motion.div 
              style={{ x: x3, y: y3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <p>we Have fun and explore freely.</p>
            </motion.div>
            
            <motion.div 
              style={{ x: x4, y: y4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <p>we Don't judge.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  const team = [
    {
      name: "Gabriele",
      role: "Art Director",
      desc: "Italian, creative and community-focused artist, Gabriele has over 15 years of experience leading collaborative art projects and community-based initiatives worldwide. At Kaalila retreats, he nurtures connection, self-expression, and shared experiences, helping participants explore and develop their creative potential.",
      img: "https://public.youware.com/image/c3177e61-4381-48c3-893a-3cfee899238d/cnhvjm5bwk.jpg"
    },
    {
      name: "Hanh",
      role: "Facilitator",
      desc: "Vietnamese, a nature-inspired facilitator, dedicated to creating supportive, reflective spaces where individuals can reconnect with themselves through art and mindful practices. Her steady, gentle approach helps groups open up, find ease, and gain clarity through creative exploration.",
      img: "https://public.youware.com/image/2bf1e324-a668-4b3f-98a9-41c582f03d23/u1gpteo7fu.jpg"
    },
    {
      name: "Sarah",
      role: "Cooking",
      desc: "Mexican, Passionate about nourishing the body and soul, Sarah brings the art of cooking to the retreat. With a focus on fresh, local ingredients and vibrant flavors, she creates meals that are not just sustenance but a celebration of community and well-being.",
      img: "https://public.youware.com/image/286d9e20-b16f-4489-9b6b-063e52b58a1b/odsdhycc6c.jpg"
    }
  ];

  return (
    <section id="who-we-are" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="mb-16">
          <GraphicTitle className="text-4xl md:text-6xl font-serif italic">The Collective</GraphicTitle>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-12 mb-24">
          <h3 className="font-serif text-2xl md:text-3xl italic text-center mb-8 opacity-80">Who'll Guide You?</h3>
          <div className="md:w-2/3 text-center font-mono text-sm space-y-6 leading-relaxed opacity-80">
            <p>
              We are a collective of artists and facilitators who believe in the power of creation.
            </p>
            <p>
              This retreat was designed to share that experience with you. We're not here to teach you how to be creative — we're here to hold space and remind you that you already are.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-full max-w-[220px] aspect-[3/4] mx-auto transition-all duration-700">
                {/* Organic Blob Mask Effect using border-radius */}
                <div 
                  className="w-full h-full overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    borderRadius: index === 0 
                      ? "56% 44% 71% 29% / 50% 55% 45% 50%" 
                      : index === 1 
                      ? "42% 58% 64% 36% / 40% 45% 55% 60%"
                      : "61% 39% 53% 47% / 55% 40% 60% 45%",
                    transform: `rotate(${index % 2 === 0 ? 3 : -3}deg)`
                  }}
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="team-photo"
                  />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl italic mb-2">{member.name}</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4">{member.role}</p>
              <p className="font-mono text-xs leading-relaxed opacity-70 px-2">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommunityGallery = () => {
  const images = [
    { src: location1, caption: "", author: "" },
    { src: location4, caption: "", author: "" },
    { src: location5, caption: "", author: "" },
    { src: location2, caption: "", author: "" },
    { src: location6, caption: "", author: "" },
    { src: location3, caption: "", author: "" },
    { src: location7, caption: "", author: "" },
    { src: location8, caption: "", author: "" },
    { src: location9, caption: "", author: "" },
  ];

  return (
    <section id="location" className="py-24 bg-white border-t border-black relative overflow-hidden scroll-mt-24">
      <div className="absolute left-6 top-32 hidden md:block z-20">
        <span className="writing-vertical font-mono text-xs tracking-widest">03 — THE LOCATION</span>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start mb-16 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-serif mb-8">Off the Noise</h2>
          <p className="font-mono text-sm leading-relaxed text-justify">
            Among pine forests and mountain views. Open windows, fresh air, soft light—spaces made for clarity and inspiration. Breathe in the fresh air. Wander through peaceful gardens. Slow down enough to hear your own ideas again. Far from the noise, your creativity comes alive.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid inline-block w-full mb-4 relative group cursor-crosshair"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-auto object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How do I register?", a: "Booking is done after a short online interview and is confirmed upon receipt of payment via email." },
    { q: "Can I cancel or reschedule my booking?", a: "Cancellation policies are communicated during the booking process and may depend on the timing and availability of spots." },
    { q: "Do I need artistic experience?", a: "No. The retreat is designed to welcome both beginners and experienced practitioners." },
    { q: "Can I bring children or pets?", a: "The retreat is for adults only; children and pets are not accommodated." },
    { q: "What should I wear?", a: "Comfortable clothing suitable for getting a little messy with art materials and for walking in nature." },
    { q: "Is a specific language required?", a: "The retreat is mainly conducted in English, but the group is small and activities are experiential, so understanding can be flexible." },
    { q: "Can I take photos or videos?", a: "Yes, but please respect the privacy of other participants and the shared moments." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center whitespace-nowrap">Common Questions</h2>
        <div className="space-y-0 border-t border-black">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <span className="font-serif text-xl md:text-2xl italic pr-8">{faq.q}</span>
                <span className="font-mono text-xl transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-4"
                  >
                    <p className="font-mono text-sm md:text-base pb-8 opacity-70 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <WhatThisIs />
      <Where />
      <Manifesto />
      <CommunityGallery />
      <WhoWeAre />
      <CTASection />
      <FAQ />
    </>
  );
};

export default Home;
