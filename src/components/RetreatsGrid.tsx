import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Retreat } from '../types/retreat';

interface RetreatsGridProps {
  retreats: Retreat[];
}

const RetreatsGrid: React.FC<RetreatsGridProps> = ({ retreats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
      {retreats.map((retreat, index) => (
        <motion.div
          key={retreat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group flex flex-col items-center text-center"
        >
          <div className="w-full aspect-[3/2] overflow-hidden bg-gray-50 relative rounded-2xl mb-8">
            {retreat.status === 'upcoming' && (
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-black text-[10px] font-mono px-4 py-2 z-10 uppercase tracking-widest rounded-full">
                Open
              </div>
            )}
            {retreat.imageUrl && (
              <img 
                src={retreat.imageUrl} 
                alt={retreat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            )}
          </div>

          <div className="flex flex-col items-center gap-4 max-w-md">
            <h2 className="text-3xl md:text-4xl font-serif italic">{retreat.title}</h2>
            
            <div className="flex items-center gap-3 font-mono text-xs opacity-50 uppercase tracking-widest">
              <span>{retreat.date}</span>
              <span className="w-1 h-1 bg-current rounded-full" />
              <span>{retreat.location}</span>
            </div>

            <p className="font-mono text-sm opacity-70 leading-relaxed line-clamp-3">
              {retreat.description}
            </p>

            <div className="pt-4">
              <Link 
                to={retreat.slug === 'retreat-1-vn-2026' ? "/vietnam" : `/retreats/${retreat.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-all duration-300"
              >
                {retreat.status === 'upcoming' ? 'Discover' : 'View Gallery'} <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RetreatsGrid;
