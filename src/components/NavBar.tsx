import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import kaalilaLogo from '../assets/Kaalila.svg';
import { staticNavItems, landingNavItems } from '../data/navItems';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isRetreatLanding = location.pathname === '/vietnam' || location.pathname.startsWith('/retreats/');

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({ 
      y: 0, 
      opacity: 1, 
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 } 
    })
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-white/80 backdrop-blur-md transition-all duration-300 text-black">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50 relative">
            <img 
              src={kaalilaLogo} 
              alt="Kaalila" 
              className="h-10 md:h-12 w-auto group-hover:rotate-6 transition-transform duration-500" 
            />
          </Link>
          
          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {/* General Links */}
            <div className="flex gap-8">
              {staticNavItems.filter(item => item.name !== 'Contact').map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="font-mono text-sm uppercase tracking-widest opacity-70 hover:opacity-100 hover:underline decoration-1 underline-offset-4 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Divider & Contextual Links (Only for Retreat Landing) */}
            {isRetreatLanding && (
              <>
                <div className="h-4 w-px bg-black/20"></div>
                
                <div className="flex items-center gap-2 text-black/40">
                  <div className="w-1 h-1 bg-black/40 rounded-full" />
                  <motion.div 
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={12} />
                  </motion.div>
                </div>

                <div className="flex gap-8">
                  {landingNavItems.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="font-mono text-xs tracking-wide text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-4 transition-all"
                    >
                      [{link.name}]
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              {isRetreatLanding && (
                <a 
                  href="#dates" 
                  className="font-mono text-sm uppercase tracking-widest border border-black rounded-full px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
                >
                  Reserve Your Spot
                </a>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden z-50 relative p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center p-6"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {/* General Links Mobile */}
              {staticNavItems.filter(item => item.name !== 'Contact').map((link, i) => (
                <motion.div custom={i} variants={linkVariants} key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-4xl font-serif italic hover:text-gray-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Contextual Links Mobile (Only for Retreat Landing) */}
              {isRetreatLanding && (
                <>
                  <motion.div 
                    variants={linkVariants} 
                    custom={3}
                    className="w-12 h-px bg-white/20 my-2"
                  ></motion.div>
                  {landingNavItems.map((link, i) => (
                    <motion.div custom={i + 4} variants={linkVariants} key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-2xl font-mono uppercase tracking-widest hover:text-gray-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </>
              )}

              {/* Mobile CTA */}
              {isRetreatLanding && (
                <motion.div custom={10} variants={linkVariants} className="mt-8">
                  <a 
                    href="#dates"
                    className="inline-block font-mono text-sm uppercase tracking-widest border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Reserve Your Spot
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
