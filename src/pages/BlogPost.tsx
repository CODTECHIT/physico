import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ChevronLeft, Clock, Share2, Award, ShieldCheck } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';
import NotFound from './NotFound';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEO 
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.featuredImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.featuredImage ? [post.featuredImage] : undefined,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": [{
            "@type": "Person",
            "name": post.author,
          }],
          "description": post.excerpt
        }}
      />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100/50 z-[100]">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-accent origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      <div className="min-h-screen bg-white relative overflow-hidden pt-28 pb-24">
        {/* Glow orbs in background for balanced atmosphere */}
        <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-light-blue/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between mb-10 border-b border-primary/5 pb-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" />
              Journal Directory
            </Link>
            
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary/10 hover:border-accent hover:text-accent text-primary text-xs font-bold transition-all hover:bg-accent/5"
            >
              <Share2 className="w-3.5 h-3.5" />
              Share Article
            </button>
          </div>

          {/* Centered Editorial Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-primary/5 border border-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center text-xs text-muted font-semibold">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-accent" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-dark leading-tight mb-8">
              {post.title}
            </h1>

            {/* Centered Author & Metadata Panel */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-5 bg-gray-50/50 rounded-2xl border border-primary/5 max-w-2xl mx-auto">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {post.author[0]}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-dark">{post.author}</p>
                    <Award className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <p className="text-[9px] text-primary/70 uppercase font-bold tracking-wider">Clinical Board Member</p>
                </div>
              </div>
              
              <div className="hidden sm:block h-6 w-px bg-primary/10" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-[10px] text-muted font-bold uppercase tracking-widest">Medical Accuracy Checked</span>
              </div>

              <div className="hidden sm:block h-6 w-px bg-primary/10" />

              <div className="text-center sm:text-right">
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest">
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-14 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-primary/5"
            >
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </motion.div>
          )}

          {/* Centered Reading Layout (Medium-style) */}
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-dark prose-p:leading-relaxed prose-p:text-muted prose-strong:text-dark prose-a:text-primary hover:prose-a:text-accent prose-a:font-bold prose-ul:list-disc prose-ol:list-decimal"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.content }} // NOSONAR: Content is static and controlled
            />

            {/* Dynamic Bottom Verification Block */}
            <div className="mt-16 bg-gray-50/50 border border-primary/5 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-dark uppercase tracking-wider font-serif mb-1">Clinical Fact-Check Policy</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Flexo Physiotherapy's medical content is rigorously reviewed by licensed practitioners. All advice, exercises, and rehabilitation timelines conform directly to modern clinical protocols.
                </p>
              </div>
            </div>

            {/* Center-Aligned Action Box */}
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-indigo-50/50 border border-primary/10 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl -translate-y-1/3 translate-x-1/3" />
              <h3 className="text-2xl font-bold text-dark mb-3 font-serif">Need Personal Recovery Assistance?</h3>
              <p className="text-xs text-muted max-w-lg mx-auto mb-6 leading-relaxed">
                Consult with our senior therapists directly in the safety and comfort of your home. Customized recovery protocols built for your specific condition.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3.5 border border-transparent text-xs font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-primary/10 text-white bg-primary hover:bg-accent transition-colors"
              >
                Schedule home visit session
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default BlogPost;
