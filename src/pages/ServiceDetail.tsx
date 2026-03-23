import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Dumbbell, Bone, Brain, Heart, Target, Zap } from 'lucide-react';
import Button from '../components/Button';
import { CONTACT_WHATSAPP_LINK, BRAND_NAME } from '../constants';

const servicesData = {
  'cardio': {
    title: 'Cardio-Respiratory Care',
    desc: 'Professional Cardio-Respiratory Physiotherapy at Home in Kukatpally & Miyapur. Our team brings specialized heart and lung rehabilitation to your doorstep across Hyderabad’s leading neighborhoods. Whether you\'re recovering from surgery or managing chronic conditions, our certified physiotherapists deliver personalized care for optimal recovery and comfort.',
    icon: <Heart className="w-12 h-12" />,
    img: '/Cardio-Respiratory Care.avif',
    conditions: [
      'Post-surgery cardiac rehab',
      'Chronic heart support',
      'Heart attack recovery',
      'Breathing & lung health',
      'Hypertension management',
      'Cardiovascular fitness'
    ],
    features: [
      'Post-surgery cardiac rehabilitation: Recover safely at home after bypass surgery or valve replacement with structured, gentle exercises.',
      'Chronic heart condition support: Specialized care for heart failure, hypertension, and high cholesterol to improve daily comfort.',
      'After-heart attack rehabilitation: Build strength and endurance through customized, safe progression and heart-healthy habits.',
      'Breathing & cardiovascular fitness: Improve lung function and heart health through guided breathing and light cardio training.'
    ],
    focus: 'Improve heart function & overall endurance'
  },
  'neurological': {
    title: 'Neuro Rehabilitation',
    desc: 'Specialized Neuro-Rehabilitation at Home in Kukatpally & Miyapur. Our expert neuro physiotherapy brings advanced care directly to your doorstep in Hyderabad. We work with patients affected by stroke, Parkinson’s, and cerebral palsy, offering tailored home-based therapy that improves balance, strength, and motor control.',
    icon: <Brain className="w-12 h-12" />,
    img: '/Neuro-Rehabilitation.avif',
    conditions: [
      'Stroke recovery & rehab',
      'Parkinson’s disease care',
      'Cerebral palsy therapy',
      'Post-spinal injury rehab',
      'Motor control training',
      'Balance & gait improvement'
    ],
    features: [
      'Stroke recovery made easy: Regain mobility, coordination, and independence through targeted strength and gait training in your own environment.',
      'Parkinson’s & movement support: Boost balance, refine walking patterns, and reduce stiffness with customized motor control exercises.',
      'Cerebral palsy & pediatric neuro: Gentle, child-friendly rehabilitation focusing on motor skills, flexibility, and daily function at home.',
      'Post-spinal injury rehabilitation: Manual therapy, neuromuscular reeducation, and adaptive advice to enhance safety and ease of movement.'
    ],
    focus: 'Restore function & improve quality of life'
  },
  'orthopedic': {
    title: 'Orthopedic Rehabilitation',
    desc: `Expert Orthopedic Physiotherapy at Home in Kukatpally & Miyapur. At ${BRAND_NAME}, we specialize in delivering professional orthopedic care directly to your doorstep in Hyderabad. Whether you're recovering from surgery, easing chronic musculoskeletal pain, or regaining mobility after an injury, our certified physiotherapists craft personalized plans to help you heal comfortably at home.`,
    icon: <Bone className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
    conditions: [
      'Post-surgery joint recovery',
      'Muscle & joint pain relief',
      'Chronic musculoskeletal pain',
      'Fracture & injury rehab',
      'Flexibility & strength building',
      'Home-based treatment plans'
    ],
    features: [
      'Post-surgery joint recovery: Safe and effective healing at home following knee, hip, or shoulder surgery with tailored exercises and mobility techniques.',
      'Muscle & joint pain relief: Targeted relief from pain, stiffness, and inflammation through soft tissue therapy and joint mobilization.',
      'Improved flexibility & strength: Guided routines designed to enhance overall mobility and support pain-free movement in daily activities.',
      'Personalized home-based plans: Customized strategies including ergonomic advice, rehab exercises, and self-care instruction in your own space.'
    ],
    focus: 'Reduce pain & restore movement'
  },
  'sports': {
    title: 'Sports Rehabilitation',
    desc: `Specialized Sports Rehabilitation at Home in Kukatpally & Miyapur. At ${BRAND_NAME}, we bring expert sports physiotherapy and injury recovery right to your doorstep in Hyderabad. Whether you’re recovering from an injury, managing joint pain, or aiming to get back to peak performance, our expert physiotherapists design customized rehab programs to help you heal safely and quickly.`,
    icon: <Dumbbell className="w-12 h-12" />,
    img: '/Sports Rehabilitation.avif',
    conditions: [
      'Injury recovery & pain relief',
      'Post-surgical sports rehab',
      'ACL & meniscus recovery',
      'Shoulder & ligament injuries',
      'Performance enhancement',
      'Return-to-sport planning'
    ],
    features: [
      'Injury recovery & pain management: Expert care for sports injuries like sprains, strains, ligament tears, and joint pain in the comfort of your home.',
      'Post-surgical sports rehab: Safe and progressive programs for athletes recovering from ACL, meniscus, or shoulder surgeries.',
      'Performance enhancement: Customized strengthening, flexibility, and conditioning exercises to prevent future injuries and boost athletic performance.',
      'Return-to-sport guidance: Step-by-step recovery planning to help you safely return to training or competition without risking re-injury.'
    ],
    focus: 'Faster recovery & injury prevention'
  },
  'chiropractic': {
    title: 'Chiropractic Care',
    desc: `Expert Chiropractic Care at Home in Hyderabad. At ${BRAND_NAME}, we bring professional chiropractic treatment directly to your doorstep, eliminating the need for clinic travel. Our approach focuses on spinal alignment, joint health, and muscle function to relieve pain and improve mobility naturally in the comfort of your home.`,
    icon: <Target className="w-12 h-12" />,
    img: '/Chiropractic.avif',
    conditions: [
      'Back & neck pain relief',
      'Spinal misalignment',
      'Shoulder & joint stiffness',
      'Postural headaches',
      'Repetitive strain injuries',
      'Sports injury chiropractic'
    ],
    features: [
      'Spinal & joint adjustments: Expert manual techniques performed at your home in Hyderabad to restore alignment and ease discomfort.',
      'Posture & ergonomic guidance: Specialized assessments and advice to correct poor posture and prevent future strain or injury.',
      'Comprehensive home assessment: Detailed checks of spinal alignment, joint movement, and muscle strength for a tailored recovery plan.',
      'One-on-one personalized care: Dedicated attention from qualified physiotherapists and chiropractors in your own familiar environment.'
    ],
    focus: 'Improve alignment & reduce discomfort'
  },
  'cupping': {
    title: 'Cupping & Dry Needling',
    desc: `Expert Dry Needling & Cupping Therapy at Home in Kukatpally & Miyapur. At ${BRAND_NAME}, our certified physiotherapists deliver personalized treatments designed to relieve deep muscle tension, accelerate recovery, and restore mobility through safe, effective, and modern clinical techniques.`,
    icon: <Zap className="w-12 h-12" />,
    img: '/Cupping & Dry Needling.avif',
    conditions: [
      'Deep muscle tension & spasms',
      'Chronic muscular pain',
      'Sports injury recovery',
      'Back, shoulder & neck stiffness',
      'Trigger point release',
      'Inflammation & swelling'
    ],
    features: [
      'Relieves deep muscle tension: Fine needles target tight bands and muscular trigger points to reduce pain from overuse or chronic strain.',
      'Enhances recovery speed: Increases blood flow and promotes faster healing after sports injuries or repetitive stress.',
      'Advanced cupping techniques: Gentle suction increases local blood flow and reduces inflammation in the back, shoulders, and neck.',
      'Highly personalized sessions: Precise, safe application tailored specifically to your muscle knots and therapeutic needs.'
    ],
    focus: 'Deep muscle relief & faster healing'
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData] || servicesData['orthopedic'];
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const watermarkY = useTransform(scrollY, [0, 2000], [0, 300]);

  return (
    <div className="bg-white">

      {/* 1. CLINICAL HEADER */}
      <section className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative overflow-hidden min-h-[45vh] lg:h-[60vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
            alt={`${BRAND_NAME} Service Detail Background`}
            className="w-full h-full object-cover opacity-20 lg:opacity-30"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        {/* Large background text with Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {service.title.split(' ')[0]}
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="w-6 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[9px] lg:text-[10px]">
                Specialized Service
              </span>
              <span className="w-6 h-[2px] bg-accent" />
            </div>
            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              {service.title.split(' ')[0]} <span className="text-accent italic font-normal">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-sm lg:text-xl text-dark font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DETAILED CONTENT */}
      <section className="py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-12 lg:space-y-16">
              {/* Conditions Treated */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-3 lg:space-y-4">
                  <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[9px] lg:text-[10px] block">Scope of Care</span>
                  <h2 className="text-2xl lg:text-4xl font-serif font-bold text-primary">Conditions <span className="text-accent italic font-normal">Treated</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {service.conditions.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 lg:gap-4 group/item bg-white p-4 lg:p-5 rounded-2xl border border-primary/5 hover:border-accent/20 hover:shadow-lg transition-all duration-500">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                        <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4 text-accent group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-primary font-bold uppercase tracking-tight text-[10px] lg:text-[11px] group-hover/item:text-primary transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-8 pt-8 border-t border-primary/10">
                <div className="space-y-4">
                  <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] block">Clinical Methodology</span>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary">Our <span className="text-accent italic font-normal">Approach</span></h2>
                </div>
                <div className="space-y-6">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex gap-6 group items-center">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                        0{i + 1}
                      </div>
                      <p className="text-lg text-dark font-medium leading-relaxed">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book a specialist for ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="rounded-none px-12 group bg-accent hover:bg-accent/90 border-none">
                    Book a Specialist <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-3xl lg:rounded-[3rem] overflow-hidden aspect-[3/2] shadow-xl border-4 border-white"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-10 shadow-2xl border-t-4 border-accent max-w-xs rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Clinical Assurance</span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-3 italic">Personalized Recovery</h4>
                <p className="text-sm font-medium leading-relaxed opacity-70">
                  Every clinical plan is built specifically for your body, goals, and home environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED SERVICES / CTA */}
      <section className="py-12 lg:py-16 bg-surface/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">
            Not sure which <br />
            <span className="text-accent italic font-normal">service you need?</span>
          </h2>
          <p className="text-dark text-xl font-medium leading-relaxed opacity-80">
            Contact our clinical coordinators for a free initial phone consultation. We'll help you find the right path to recovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
            <a
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I am not sure which service I need for ${service.title}. I need a consultation.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full rounded-none px-12 group bg-accent border-none text-white hover:bg-accent/90">
                Speak to a Specialist <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/services" className="text-primary font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
