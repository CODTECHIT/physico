import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Brain, 
  Stethoscope, 
  Zap, 
  Heart,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/Button';

const conditionsList = [
  {
    category: 'Cardio-Respiratory',
    icon: <Heart className="w-8 h-8" />,
    color: 'bg-red-500/10 text-red-600',
    items: [
      'Cardiac Post-Op Rehab',
      'COPD Management',
      'Asthma Care',
      'Breathing Exercises',
      'Post-Heart Attack Recovery',
      'Endurance Building'
    ]
  },
  {
    category: 'Neurological',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-purple-500/10 text-purple-600',
    items: [
      'Stroke Rehabilitation',
      'Parkinson’s Disease',
      'Spinal Cord Injury',
      'Paralysis Care',
      'Balance & Gait Training',
      'Coordination Therapy'
    ]
  },
  {
    category: 'Orthopedic',
    icon: <Stethoscope className="w-8 h-8" />,
    color: 'bg-blue-500/10 text-blue-600',
    items: [
      'Back & Sciatica Pain',
      'Neck & Shoulder Issues',
      'Knee & Joint Arthritis',
      'Post-Fracture Recovery',
      'Lumbar Spondylosis',
      'Cervical Spondylosis'
    ]
  },
  {
    category: 'Sports & Recovery',
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-emerald-500/10 text-emerald-600',
    items: [
      'ACL/MCL Reconstruction',
      'Frozen Shoulder',
      'Tennis Elbow',
      'Ligament Injuries',
      'Strength & Flexibility',
      'Injury Prevention'
    ]
  },
  {
    category: 'Specialized Care',
    icon: <Zap className="w-8 h-8" />,
    color: 'bg-amber-500/10 text-amber-600',
    items: [
      'Spinal Mobilization',
      'Posture Correction',
      'Joint Stiffness',
      'Cupping Therapy',
      'Dry Needling',
      'Geriatric Care'
    ]
  }
];

const Conditions = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const watermarkY = useTransform(scrollY, [0, 2000], [0, 300]);

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
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000" 
            alt="Flexo Physio Conditions Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
        </motion.div>

        {/* Large background text for editorial feel */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase">
          TREATMENT
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                Clinical Expertise
              </span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              Conditions We <span className="text-accent italic font-normal">Treat</span>
            </h1>
            <p className="text-lg lg:text-xl text-dark font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
              Expert physical therapy for complex conditions, delivered by certified specialists in the comfort of your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONDITIONS GRID */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface/30 -skew-x-12 translate-x-1/4 -z-10" />
        
        {/* Watermark with Parallax */}
        <motion.div 
          style={{ y: watermarkY }}
          className="absolute top-40 left-1/2 -translate-x-1/2 text-[15vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          FLEXO PHYSIO
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {conditionsList.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative bg-white p-10 lg:p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 group border border-primary/5"
              >
                {/* Accent Border */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/20 to-transparent rounded-t-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${group.color} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    {group.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                    {group.category}
                  </h3>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-primary font-bold uppercase tracking-tight text-[11px] leading-relaxed opacity-70 group-hover/item:opacity-100 transition-all">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom decorative icon */}
                <div className="absolute bottom-8 right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 -rotate-12 group-hover:rotate-0 transform transition-transform duration-700">
                  {React.cloneElement(group.icon as React.ReactElement, { className: 'w-32 h-32' })}
                </div>
              </motion.div>
            ))}

            {/* Quality Commitment Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-2 bg-primary p-12 lg:p-20 rounded-[4rem] relative overflow-hidden text-center group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Our Clinical Commitment</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Evidence-Based <span className="text-accent italic font-normal">Rehabilitation</span>
                </h2>
                <p className="text-white/70 text-lg lg:text-xl font-medium leading-relaxed">
                  Every treatment plan is built on verified clinical protocols and adjusted in real-time based on your recovery progress. We don't just treat symptoms; we restore function.
                </p>
                <div className="pt-6">
                  <a 
                    href={`https://wa.me/919502808581?text=${encodeURIComponent('Hi Flexo Physio, I would like to consult a specialist about my condition.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg" className="rounded-none px-12 group bg-accent hover:bg-accent/90 border-none text-white shadow-2xl">
                      Consult a Specialist <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CLINICAL CTA */}
      <section className="py-16 lg:py-20 bg-surface/50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">
            Don't see your <br />
            <span className="text-accent italic font-normal">condition listed?</span>
          </h2>
          <p className="text-dark text-xl font-medium leading-relaxed opacity-80">
            Our specialists handle complex clinical cases beyond this list. Contact us for a free clinical consultation over the phone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
            <a 
              href={`https://wa.me/919502808581?text=${encodeURIComponent('Hi Flexo Physio, I have a condition not listed on your website. Can I get a consultation?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full rounded-none px-12 group bg-accent hover:bg-accent/90 border-none text-white">
                Speak to a Specialist <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
