import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';

const BlogList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <SEO 
        title="Physiotherapy Blog & Health Resources | Flexo Physiotherapy"
        description="Read the latest articles on physiotherapy, knee pain, home visits, and rehabilitation from the experts at Flexo Physiotherapy Hyderabad."
        canonical="/blog"
      />
      
      <div className="min-h-screen bg-white relative overflow-hidden pt-28 pb-24">
        {/* Editorial Background Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-light-blue/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              Flexo Publishing
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-bold text-dark font-serif tracking-tight mb-6"
            >
              The Clinical <span className="italic font-normal text-primary">Journal</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted font-sans leading-relaxed"
            >
              Medical insights, evidence-based recovery strategies, and physical wellness guidance curated by our senior therapy board.
            </motion.p>
          </div>

          {/* Category Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-16 border-b border-primary/5 pb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white text-primary/70 border-primary/10 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post Hero Layout (If there are articles, we highlight the first one beautifully) */}
          {filteredPosts.length > 0 && activeCategory === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16 group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.08)] transition-all duration-500 lg:grid lg:grid-cols-12 gap-0 relative">
                {/* Visual Accent Layer */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
                
                {/* Hero Image Container */}
                <div className="lg:col-span-7 h-[300px] lg:h-[480px] bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
                  {filteredPosts[0].featuredImage ? (
                    <img 
                      src={filteredPosts[0].featuredImage} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-primary/20 p-8">
                      <BookOpen className="w-16 h-16 mb-4 stroke-[1]" />
                      <span className="font-serif italic text-2xl text-primary/40 font-semibold">{filteredPosts[0].category}</span>
                    </div>
                  )}
                  <div className="absolute top-6 left-8 z-20">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                      Featured Publication
                    </span>
                  </div>
                </div>

                {/* Hero Details Container */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-xs text-primary/60 font-bold uppercase tracking-wider gap-4 mb-6">
                    <span>{filteredPosts[0].category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{filteredPosts[0].readTime}</span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold font-serif text-dark leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    <Link to={`/blog/${filteredPosts[0].slug}`}>
                      {filteredPosts[0].title}
                    </Link>
                  </h2>

                  <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-3">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                    <div className="flex items-center">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs uppercase">
                        {filteredPosts[0].author[0]}
                      </div>
                      <div className="ml-3">
                        <p className="text-xs font-bold text-dark">{filteredPosts[0].author}</p>
                        <p className="text-[10px] text-primary/70 uppercase font-semibold">Clinical Board</p>
                      </div>
                    </div>

                    <Link 
                      to={`/blog/${filteredPosts[0].slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group/btn"
                    >
                      Read Study
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* If category is not "All", show all. If "All", slice first one out since it's in the hero */}
            {(activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.06)] hover:border-primary/15 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Thumbnail */}
                <div className="h-56 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-300 z-10" />
                  {post.featuredImage ? (
                    <img 
                      src={post.featuredImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-primary/10 p-6">
                      <BookOpen className="w-12 h-12 mb-3 stroke-[1]" />
                      <span className="font-serif italic text-lg text-primary/30 font-semibold">{post.category}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-6 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-wider text-primary/60 mb-3.5 space-x-3">
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-accent" />
                      {post.readTime}
                    </div>
                    <span className="w-1 h-1 rounded-full bg-primary/30" />
                    <div className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1 text-accent" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-5 border-t border-primary/5 mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group/btn-sm"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/btn-sm:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-gray-50/50 rounded-2xl border border-dashed border-primary/10">
              <BookOpen className="w-12 h-12 mx-auto text-primary/30 mb-4 stroke-[1]" />
              <p className="text-muted font-medium">No publications found matching this category.</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default BlogList;
