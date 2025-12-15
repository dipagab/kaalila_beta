import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';
import kaalilaLogo from './assets/Kaalila.svg';
import Home from './pages/Home';
import General from './pages/General';
import BlogList from './pages/blog/list';
import BlogPost from './pages/blog/post';
import RetreatsList from './pages/retreats/list';
import RetreatDetail from './pages/retreats/detail';
import ThankYou from './pages/ThankYou';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';

// --- Components ---

const Footer = () => {
  return (
    <footer id="footer" className="bg-white py-12 border-t border-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-start gap-4">
          <img src={kaalilaLogo} alt="Kaalila" className="h-20 w-auto" />
          <p className="font-mono text-xs">© 2025 All right Protected</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-xs items-center">
          <a href="tel:+84938587946" className="hover:underline decoration-1 underline-offset-4">+84 938587946</a>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/kaalila.creative/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-black transition-colors">

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TheThread = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden h-full mix-blend-difference fixed">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <motion.path
          d="M 50 0 
             C 40 10, 60 10, 50 20
             C 20 30, 80 30, 50 40
             C 30 50, 70 50, 50 60
             C 10 70, 90 70, 50 80
             C 40 90, 60 90, 50 100"
          fill="none"
          stroke="#6A746C"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-white text-black font-sans selection:bg-black selection:text-white relative min-h-screen flex flex-col">
        <TheThread />
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/vietnam" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/retreats" element={<RetreatsList />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/retreats/:slug" element={<RetreatDetail />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
