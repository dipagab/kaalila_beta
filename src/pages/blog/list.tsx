import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts as postsData } from '../../data/posts';
import { BlogPost } from '../../types/blog';

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother UX
    const timer = setTimeout(() => {
      setPosts(postsData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse font-mono text-sm tracking-widest">LOADING JOURNAL...</div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header requested by user */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif italic">Journal</h1>
          <p className="font-mono text-sm mt-6 tracking-widest uppercase opacity-60">
            Thoughts, Stories & Updates
          </p>
        </div>

        {/* Posts List - Central Column */}
        <div className="flex flex-col gap-16 md:gap-24">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-6 border-b border-black/10 pb-16 last:border-0"
            >
              {post.imageUrl && (
                <Link to={`/blog/${post.slug}`} className="w-full aspect-video overflow-hidden bg-gray-100 mb-4 block group">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </Link>
              )}
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-baseline font-mono text-xs opacity-50 tracking-widest">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-3xl md:text-5xl font-serif leading-tight hover:italic transition-all cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="font-mono text-sm md:text-base leading-relaxed opacity-80 max-w-2xl">
                  {post.excerpt}
                </p>
                
                <div className="mt-4">
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300 group">
                    Read Story <ArrowRight size={14} className="group-hover:text-gray-500" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
