import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('https://backend.youware.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining our community!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect. Please check your internet.');
    }
  };

  return (
    <section className="py-24 bg-black text-white px-6 border-t border-white/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Join Our Community</h2>
        <p className="font-mono text-sm opacity-70 mb-12 max-w-xl mx-auto">
          Be the first to know about our upcoming retreats, inspiring stories, and opportunities to reconnect with nature and creativity.
        </p>
        
        <form id="newsletter-form" className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border-b border-white/30 py-3 px-2 font-mono text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/30 input-dark-autofill"
            required
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="font-mono text-xs uppercase tracking-widest border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={`mt-4 font-mono text-xs ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
