import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Dumbbell,
  Bone,
  Zap,
  Award,
} from 'lucide-react';
import { BRAND_NAME } from '../constants';
import Button from '../components/Button';

const Conditions = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-white">
      {/* 1. CLINICAL HEADER */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden text-center h-[60vh] lg:h-[70vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/bg.webp"
            alt={`${BRAND_NAME} Conditions Background`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
        </motion.div>

        {/* Large background text for editorial feel */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase">
          TREATMENTS
        </div>

        <div className="max-w-[1650px] mx-auto px-6 lg:px-12 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                Professional Clinical Expertise
              </span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-serif font-bold text-primary leading-tight">
              Treatments We <span className="text-accent italic font-normal">Offer</span>
            </h1>
            <p className="text-lg lg:text-2xl text-dark font-medium leading-relaxed max-w-5xl opacity-90">
              Expert physical therapy for complex conditions, delivered by certified specialists in the comfort of your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. TREATMENT APPROACH */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-4 lg:mb-6">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Our Methodology</span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-4 lg:mb-6">Our Treatment <span className="text-accent italic font-normal">Approach</span></h2>
            <p className="text-dark font-medium leading-relaxed max-w-2xl mx-auto text-sm lg:text-lg opacity-80">
              We combine advanced physiotherapy techniques to ensure effective results, customized to each patient's condition, lifestyle, and recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Exercise Therapy',
                desc: 'Customized exercise programs focusing on strength, flexibility, and mobility improvement. We design targeted routines that accelerate recovery and prevent future injuries.',
                icon: <Dumbbell className="w-6 h-6 lg:w-8 lg:h-8" />,
                number: '01'
              },
              {
                title: 'Manual Therapy',
                desc: 'Expert hands-on techniques including joint mobilization, soft tissue manipulation, and myofascial release for immediate pain relief and improved joint mobility.',
                icon: <Zap className="w-6 h-6 lg:w-8 lg:h-8" />,
                number: '02'
              },
              {
                title: 'Electrotherapy',
                desc: 'Advanced clinical modalities including TENS, Ultrasound, and Shockwave therapy for effective tissue healing, pain management, and muscle stimulation.',
                icon: <Bone className="w-6 h-6 lg:w-8 lg:h-8" />,
                number: '03'
              },
              {
                title: 'Advanced Methods',
                desc: 'Specialized techniques including Dry Needling, Kinesio Taping, and Spinal Mobilization for complex cases and faster rehabilitation outcomes.',
                icon: <Award className="w-6 h-6 lg:w-8 lg:h-8" />,
                number: '04'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 group ${idx % 2 === 1 ? 'md:mt-0 lg:translate-y-8' : ''}`}
              >
                {/* Number Indicator - positioned to hang slightly over but safely within clipping if necessary, or we remove overflow-hidden from parent and add it to a wrapper for the icon */}
                <div className="absolute -top-3 -right-3 w-8 h-8 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg z-20">
                  <span className="text-white font-bold text-[10px] lg:text-sm">{item.number}</span>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h4 className="text-xl lg:text-2xl font-serif font-bold text-primary mb-2 lg:mb-4 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 outline-none">
                    {item.title}
                  </h4>
                  <p className="text-dark font-medium leading-relaxed text-xs lg:text-base opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
                
                {/* Background Decorative Icon (Watermark) - Wrapped in an overflow-hidden container */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute bottom-4 right-4 text-primary/5 group-hover:text-accent/10 transition-all duration-700 -rotate-12 group-hover:rotate-0 transform translate-x-4 translate-y-4">
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-24 h-24 lg:w-32 lg:h-32' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY COMMITMENT */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">
            Don't see your <br className="hidden md:block" />
            <span className="text-accent italic font-normal">condition listed?</span>
          </h2>
          <p className="text-dark text-xl font-medium leading-relaxed opacity-80">
            Our physiotherapist handle complex clinical cases beyond this list. Contact us for a free clinical consultation over the phone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
            <a
              href={`https://wa.me/919502808581?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I have a condition not listed on your website. Can I get a consultation?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full rounded-none px-12 group bg-accent hover:bg-accent/90 border-none text-white">
                Meet your physiotherapist <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:+919502808581" className="text-primary font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">
              Call Now: +91 95028 08581
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conditions;
