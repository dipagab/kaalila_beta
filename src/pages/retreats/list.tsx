import React, { useState, useEffect } from 'react';
import { retreats as retreatsData } from '../../data/retreats';
import { Retreat } from '../../types/retreat';
import RetreatsGrid from '../../components/RetreatsGrid';

const RetreatsList = () => {
  const [retreats, setRetreats] = useState<Retreat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother UX
    const timer = setTimeout(() => {
      setRetreats(retreatsData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse font-mono text-sm tracking-widest">LOADING RETREATS...</div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[180px] h-px bg-black/20"></div>
            <p className="font-mono text-sm tracking-widest uppercase opacity-60">Upcoming Experiences</p>
          </div>
        </div>

        <RetreatsGrid retreats={retreats} />
      </div>
    </div>
  );
};

export default RetreatsList;
