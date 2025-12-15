import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { retreats as retreatsData } from '../../data/retreats';
import { Retreat } from '../../types/retreat';

const FAQSection = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-black">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center whitespace-nowrap">Common Questions</h2>
        <div className="space-y-0 border-t border-black">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <span className="font-serif text-xl md:text-2xl italic pr-8">{faq.question}</span>
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
                      {faq.answer}
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

const RetreatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [retreat, setRetreat] = useState<Retreat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Special redirect for the main Vietnam retreat to use the custom landing page
    if (slug === 'vietnam-2026') {
      navigate('/vietnam');
      return;
    }

    const foundRetreat = retreatsData.find(r => r.slug === slug);
    setRetreat(foundRetreat || null);
    setLoading(false);
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="font-mono text-sm animate-pulse">LOADING...</div>
      </div>
    );
  }

  if (!retreat) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="font-serif text-4xl mb-4">Retreat Not Found</h1>
        <Link to="/retreats" className="font-mono text-sm underline decoration-1 underline-offset-4">
          Back to Retreats
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/retreats" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity">
          <ArrowLeft size={14} /> Back to Retreats
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video w-full overflow-hidden mb-12 bg-gray-100">
            {retreat.imageUrl && (
              <img 
                src={retreat.imageUrl} 
                alt={retreat.title} 
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-serif italic mb-6">{retreat.title}</h1>
              <div className="flex flex-col gap-4 font-mono text-sm opacity-60 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{retreat.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{retreat.location}</span>
                </div>
                {retreat.price && (
                  <div className="mt-2">
                    Price: {retreat.price}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none font-serif leading-relaxed opacity-90">
            <p className="whitespace-pre-wrap">{retreat.description}</p>
          </div>
          
          {/* Booking CTA */}
          {retreat.status === 'upcoming' && (
             <div className="mt-16 pt-12 border-t border-black/10 text-center">
                <h3 className="font-serif text-2xl italic mb-6">Ready to join us?</h3>
                <a 
                  href="mailto:hello@kaalila.com" 
                  className="inline-block bg-black text-white font-mono text-xs uppercase tracking-widest px-8 py-4 hover:bg-gray-800 transition-colors"
                >
                  Contact to Book
                </a>
             </div>
          )}
        </motion.div>
      </div>
      
      {/* FAQ Section */}
      {retreat.faq && retreat.faq.length > 0 && (
        <div className="mt-24">
          <FAQSection faqs={retreat.faq} />
        </div>
      )}
    </div>
  );
};

export default RetreatDetail;
