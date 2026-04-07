import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ClipboardCheck,
  BookOpen,
  Activity,
  Target,
  TrendingUp,
  Shield,
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
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden text-center min-h-[60vh] lg:min-h-[85vh] flex items-center">
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

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:space-y-16"
          >
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="w-8 lg:w-12 h-[2px] bg-accent" />
                <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                  Professional Clinical Expertise
                </span>
                <span className="w-8 lg:w-12 h-[2px] bg-accent" />
              </div>
              
              <p className="text-2xl lg:text-4xl xl:text-5xl font-serif font-bold text-primary leading-tight max-w-4xl mx-auto opacity-95">
                At Flexo Physiotherapy, every treatment begins with a detailed clinical assessment to understand the exact cause of your condition not just the symptoms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-justify">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-sm lg:text-lg text-dark/80 font-medium leading-relaxed border-l-4 border-accent pl-6">
                  We evaluate joint range of motion, muscle strength, and movement patterns to identify restrictions, imbalances, and functional limitations. Existing medical reports, orthopedic consultations, and past surgical history are carefully reviewed to ensure a safe and accurate treatment plan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-sm lg:text-lg text-dark/80 font-medium leading-relaxed border-l-4 border-accent pl-6">
                  Based on this assessment, we perform guided movements and initial exercises to identify where mobility is restricted and what is limiting your recovery. This helps us design a personalized rehabilitation program tailored to your condition, lifestyle, and recovery goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="md:col-span-2"
              >
                <p className="text-sm lg:text-xl text-primary font-bold leading-relaxed text-center opacity-90 pt-4 lg:pt-8 border-t border-primary/5">
                  Our focus is not only on improving your current condition but also on restoring function, enhancing movement quality, and guiding you toward long-term physical health.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CLINICAL PROCESS METHODOLOGY */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/2 opacity-50 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {[
              {
                id: '01',
                title: 'Comprehensive Assessment',
                desc: 'Detailed evaluation of joint mobility, muscle strength, and movement patterns to understand the exact problem.',
                icon: <ClipboardCheck className="w-6 h-6 lg:w-8 lg:h-8" />
              },
              {
                id: '02',
                title: 'Clinical Understanding',
                desc: 'Review of medical history, reports, and previous treatments to ensure safe and accurate care.',
                icon: <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />
              },
              {
                id: '03',
                title: 'Functional Movement Analysis',
                desc: 'Identifying limitations, imbalances, and restrictions affecting daily activities.',
                icon: <Activity className="w-6 h-6 lg:w-8 lg:h-8" />
              },
              {
                id: '04',
                title: 'Targeted Intervention',
                desc: 'Application of appropriate techniques and exercises based on your condition and recovery stage.',
                icon: <Target className="w-6 h-6 lg:w-8 lg:h-8" />
              },
              {
                id: '05',
                title: 'Progressive Rehabilitation',
                desc: 'Step-by-step recovery plan focused on improving strength, mobility, and function.',
                icon: <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />
              },
              {
                id: '06',
                title: 'Long-Term Prevention',
                desc: 'Guidance to maintain results, prevent recurrence, and support a healthier lifestyle.',
                icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8" />
              }
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex gap-8 p-10 bg-surface/30 rounded-[2.5rem] border border-primary/5 hover:bg-white hover:shadow-2xl hover:border-accent/20 transition-all duration-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                    {step.icon}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-accent tracking-[0.3em] font-sans">STEP {step.id}</span>
                    <div className="h-[1px] w-8 bg-accent/20" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-dark/70 font-medium leading-relaxed text-sm lg:text-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADVANCED TECHNIQUES SECTION */}
      <section className="py-20 lg:py-32 bg-primary/[0.02] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,186,155,0.03)_0,transparent_70%)]" />
        </div>
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">Precision & Technical Expertise</span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-primary mb-6">Advanced Techniques <span className="text-accent italic font-normal">We Use</span></h2>
            <p className="text-dark/60 font-medium tracking-[0.1em] uppercase text-[10px] lg:text-sm">Comprehensive Clinical Modalities for Targeted Recovery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-16">
            {[
              {
                category: 'Manual & Joint-Based Techniques',
                items: [
                  { title: 'Manual Therapy & Joint Mobilization', desc: 'Specialized hands-on techniques for joint mechanics and movement correction.' },
                  { title: 'Manipulation Therapy (HVLA – High Velocity Low Amplitude)', desc: 'Advanced manual intervention applied to restore joint function and mobility.' }
                ]
              },
              {
                category: 'Movement & Rehabilitation Approaches',
                items: [
                  { title: 'Exercise Therapy & Functional Training', desc: 'Progressive rehabilitation approach focused on restoring functional performance.' },
                  { title: 'Dynamic Stretching Techniques', desc: 'Movement-based stretching methods used to improve flexibility, mobility, and muscle activation.' },
                  { title: 'PNF (Proprioceptive Neuromuscular Facilitation)', desc: 'Neuromuscular technique designed to enhance coordination, control, and range of motion.' },
                  { title: 'Motor Control & Movement Re-education', desc: 'Focused approach to retrain movement patterns and improve functional efficiency.' }
                ]
              },
              {
                category: 'Neuromuscular & Neural Techniques',
                items: [
                  { title: 'Dry Needling Therapy', desc: 'Advanced neuromuscular intervention for targeted muscle regulation.' },
                  { title: 'Neurodynamic Techniques (Nerve Gliding / Nerve Flossing)', desc: 'Specialized methods to improve nerve mobility and reduce neural tension.' }
                ]
              },
              {
                category: 'Soft Tissue & Myofascial Techniques',
                items: [
                  { title: 'Myofascial Release (IASTM – Instrument Assisted Soft Tissue Mobilization)', desc: 'Instrument-assisted method for addressing soft tissue and fascial dysfunction.' },
                  { title: 'Cupping Therapy', desc: 'Therapeutic soft tissue approach using controlled negative pressure.' }
                ]
              },
              {
                category: 'Electrotherapy & Modalities',
                items: [
                  { title: 'EMS (Electrical Muscle Stimulation)', desc: 'Electrical modality used for muscle activation and neuromuscular stimulation.' },
                  { title: 'TENS (Transcutaneous Electrical Nerve Stimulation)', desc: 'Pain-modulation technique using low-voltage electrical currents.' },
                  { title: 'IFT (Interferential Therapy)', desc: 'Medium-frequency electrical stimulation used in clinical pain management.' },
                  { title: 'Ultrasound Therapy', desc: 'Deep tissue modality utilizing sound waves for therapeutic application.' },
                  { title: 'Thermotherapy (Heat Therapy)', desc: 'Superficial heating modality used to support tissue relaxation.' },
                  { title: 'Cryotherapy (Cold Therapy)', desc: 'Cooling technique applied for acute tissue management.' }
                ]
              },
              {
                category: 'Assessment & Movement Analysis',
                items: [
                  { title: 'MMT (Manual Muscle Testing)', desc: 'Clinical method to evaluate muscle strength and functional capacity.' },
                  { title: 'Functional Movement Screening (FMS-Based Assessment)', desc: 'Movement analysis system used to identify imbalances and potential risk factors.' }
                ]
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="space-y-8 p-8 lg:p-12 bg-white rounded-[3rem] border border-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-accent rounded-full mb-6 group-hover:w-24 transition-all duration-700" />
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                    {cat.category}
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {cat.items.map((item, i) => (
                    <div key={i} className="space-y-3 group/item">
                      <h4 className="text-sm lg:text-base font-bold text-primary border-l-2 border-accent/20 pl-4 group-hover/item:border-accent transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs lg:text-sm text-dark/70 font-medium leading-relaxed pl-4">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24 p-10 lg:p-16 bg-primary rounded-[3rem] lg:rounded-[5rem] relative overflow-hidden text-center group"
          >
            {/* Background design elements for closing box */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <p className="text-xl lg:text-4xl font-serif font-bold text-white relative z-10 leading-snug">
              "We integrate advanced physiotherapy techniques with precise clinical assessment to deliver targeted treatment, efficient recovery, and long-term functional outcomes."
            </p>
          </motion.div>
        </div>
      </section>

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
