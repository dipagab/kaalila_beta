import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_20dn4b7';
      const templateId = 'template_x09plef';
      // Use provided key as fallback
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'QCrfo0KZp21-Hay9C';

      if (!publicKey) {
        console.error('EmailJS Public Key is missing!');
        throw new Error('Configuration Error: Missing Public Key');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Contact Form Inquiry'
        },
        publicKey
      );

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
        navigate('/thank-you');
      }, 1000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: "-50%", y: "-40%", scale: 0.95 }}
            animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
            exit={{ opacity: 0, x: "-50%", y: "-40%", scale: 0.95 }}
            className="fixed left-1/2 top-1/2 w-full max-w-lg bg-white/95 backdrop-blur-md z-[70] border border-black/10 shadow-2xl p-8 md:p-12 rounded-3xl text-black"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 hover:rotate-90 transition-transform duration-300"
            >
              <X size={24} />
            </button>

            <div className="mb-8 text-center">
              <h3 className="font-serif text-3xl italic mb-2">Get in Touch</h3>
              <p className="font-mono text-xs uppercase tracking-widest opacity-60">We'll get back to you shortly</p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                  <Send size={24} />
                </div>
                <h4 className="font-serif text-2xl mb-2">Message Sent</h4>
                <p className="font-mono text-sm opacity-60">Thank you for reaching out.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest mb-2 opacity-60">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors font-serif text-lg bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest mb-2 opacity-60">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors font-serif text-lg bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>



                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest mb-2 opacity-60">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors font-serif text-lg bg-transparent resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 font-mono text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-8 disabled:opacity-70 rounded-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-center font-mono text-xs mt-4">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
