import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { posts as postsData } from '../../data/posts';
import { BlogPost } from '../../types/blog';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      if (slug) {
        const foundPost = postsData.find(p => p.slug === slug);
        setPost(foundPost || null);
      }
      setLoading(false);
    }, 500);
    
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse font-mono text-sm tracking-widest">LOADING STORY...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="font-serif text-4xl mb-4">Post not found</h1>
        <Link to="/blog" className="font-mono text-sm underline">Back to Journal</Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="container mx-auto max-w-3xl">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex justify-center items-center gap-4 font-mono text-xs opacity-50 tracking-widest mb-6">
            <span>{post.date}</span>
            <span className="w-px h-3 bg-black/30"></span>
            <span>{post.author}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        {post.imageUrl && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-video overflow-hidden bg-gray-100 mb-16"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* Footer / Share / Tags could go here */}
        <div className="mt-16 pt-8 border-t border-black/10 flex justify-between items-center font-mono text-xs opacity-60">
          <span>Share this story</span>
          <div className="flex gap-4">
            <button className="hover:underline">Facebook</button>
            <button className="hover:underline">Twitter</button>
            <button className="hover:underline">Pinterest</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
