import { useScroll, useTransform, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck,
  Zap,
  ArrowRight, 
  ShieldCheck, 
  Stethoscope, 
  Brain, 
  Users, 
  PhoneCall,
  ChevronRight,
  MapPin,
  Home as HomeIcon,
  UserCheck,
} from 'lucide-react';
import Button from '../components/Button';
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_LINK, SERVICE_AREAS } from '../constants';

const Home = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroContentY = useTransform(scrollY, [0, 500], [0, -50]);
  const interactionImgY = useTransform(scrollY, [0, 500], [0, 50]);
  const watermarkY = useTransform(scrollY, [0, 3000], [0, 400]);

  const specialties = [
    {
      id: '01',
      slug: 'orthopedic',
      title: 'Orthopedic Physiotherapy',
      desc: 'Back pain, neck pain, joint issues, arthritis, fracture recovery',
      icon: <Stethoscope className="w-6 h-6" />,
      img: '/Orthopedic Rehab.avif'
    },
    {
      id: '02',
      slug: 'neurological',
      title: 'Neurological Rehabilitation',
      desc: 'Stroke recovery, Parkinson’s care, balance & mobility training',
      icon: <Brain className="w-6 h-6" />,
      img: '/Neuro-Rehabilitation.avif'
    },
    {
      id: '03',
      slug: 'cardio',
      title: 'Cardio & Respiratory Care',
      desc: 'Breathing exercises, COPD care, post-cardiac recovery',
      icon: <Zap className="w-6 h-6" />,
      img: '/Cardio-Respiratory Care.avif'
    }
  ];

  const additionalServices = [
    {
      title: 'Post-Surgical Rehabilitation',
      desc: 'Knee/hip replacement, spine recovery',
      icon: <ClipboardCheck className="w-5 h-5" />
    },
    {
      title: 'Geriatric Physiotherapy',
      desc: 'Elderly care, fall prevention, strength improvement',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const conditions = [
    { title: 'Cervical Spondylosis', img: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=60&w=300' },
    { title: 'Frozen Shoulder', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=60&w=300' },
    { title: 'ACL/MCL Injuries', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=60&w=300' },
    { title: 'Stroke Recovery', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=60&w=300' },
    { title: 'Parkinson’s Care', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=60&w=300' },
    { title: 'COPD & Cardiac', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=60&w=300' },
    { title: 'Lumbar Spondylosis', img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=60&w=300' },
    { title: 'Tennis Elbow', img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=60&w=300' },
  ];

  return (
    <div className="overflow-x-hidden">
      
      {/* 1. CLINICAL AUTHORITY HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Primary Background Image Layer with Parallax */}
        <motion.div 
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img 
            src="/bg.webp" 
            alt="Physiotherapy Clinical Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Clinical White Overlay for Readability & Clean Aesthetic */}
          <div className="absolute inset-0 bg-white/85" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center pt-24 lg:pt-0 flex-grow">
          
          {/* Content Column - Structured & Professional with Parallax */}
          <motion.div 
            style={{ y: heroContentY }}
            className="space-y-4 lg:space-y-8 relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                <span className="w-8 lg:w-10 h-1 bg-accent" />
                <span className="text-accent font-sans font-bold uppercase tracking-wider text-[10px] lg:text-xs">
                  Expert Physiotherapy at Home in Hyderabad
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-primary leading-tight lg:leading-[1.1]">
                Personalized care for pain relief, <span className="text-accent italic font-normal">recovery</span>, and mobility.
              </h1>

              <div className="mt-4 lg:mt-8 max-w-xl">
                <p className="text-sm lg:text-xl text-dark font-medium leading-relaxed opacity-90">
                  Delivered to your doorstep. Professional treatment in the comfort of your home.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6 mt-6 lg:mt-10">
                  <a 
                    href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent('Hi Flexo Physio, I would like to book a physiotherapy session at home.')}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="secondary" size="lg" className="w-full rounded-full px-8 lg:px-10 py-4 border-none text-white font-bold tracking-wide transition-all shadow-xl shadow-accent/20">
                      Book Home Visit
                    </Button>
                  </a>
                  
                  {/* Location Info */}
                  <div className="flex flex-col space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-accent w-3.5 h-3.5 lg:w-5 lg:h-5" />
                      <span className="text-[10px] lg:text-sm font-bold text-primary uppercase tracking-tight">{SERVICE_AREAS.split(',').slice(0, 2).join(' | ')} | Nearby</span>
                    </div>
                    <p className="text-[9px] lg:text-xs text-muted font-medium ml-5 lg:ml-7 uppercase tracking-tighter">📞 {CONTACT_PHONE_DISPLAY}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column - Realistic & Professional with Parallax */}
          <motion.div 
            style={{ y: interactionImgY }}
            className="relative mt-4 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 overflow-hidden shadow-2xl rounded-2xl lg:rounded-3xl"
            >
              <img 
                src="/hero-interaction.webp" 
                alt="Personalized Home Physiotherapy Session"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
              />
              {/* Subtle frame element for medical feel */}
              <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none" />
            </motion.div>
            
            {/* Location Anchor */}
            <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white p-4 lg:p-6 shadow-xl z-20 border-l-4 border-accent hidden sm:block rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Serving Hyderabad</span>
              </div>
              <p className="text-[10px] lg:text-xs text-muted font-medium mt-2 max-w-[150px] lg:max-w-[180px]">Kukatpally, Miyapur, Kondapur, & Gachibowli</p>
            </div>
          </motion.div>
        </div>

        {/* TRUST BAR (New Design based on Image) */}
        <div className="bg-[#0B3D36] py-6 lg:py-10 mt-8 lg:mt-0 relative z-30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:flex lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-0">
              {[
                { 
                  title: 'Certified Pros', 
                  desc: 'BPT/MPT experts',
                  icon: <UserCheck className="w-5 h-5 lg:w-6 lg:h-6" /> 
                },
                { 
                  title: '1-on-1 Care', 
                  desc: 'Focused attention',
                  icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" /> 
                },
                { 
                  title: 'Home Visits', 
                  desc: 'Safe & comfortable',
                  icon: <HomeIcon className="w-5 h-5 lg:w-6 lg:h-6" /> 
                },
                { 
                  title: 'Trusted Care', 
                  desc: 'Honest pricing',
                  icon: <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" /> 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex items-center group">
                  <div className="flex items-center space-x-3 lg:space-x-5 px-0 lg:px-8 w-full">
                    {/* Icon Container with Rounded Square Box */}
                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg bg-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    
                    <div className="flex flex-col">
                      <h4 className="text-white font-serif font-bold text-[10px] lg:text-base leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-[8px] lg:text-xs font-medium leading-relaxed hidden sm:block">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vertical Divider (Desktop Only) */}
                  {idx < 3 && (
                    <div className="hidden lg:block w-[1px] h-12 bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (SHORT – NOT LONG STORY) */}
      <section className="py-10 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-accent" />
                  <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                    Welcome to Flexo Physio
                  </span>
                </div>
                <h2 className="text-3xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                  Expert Care. <br />
                  <span className="text-accent italic font-normal">Pain-Free</span> Living.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-base lg:text-xl text-dark font-medium leading-relaxed opacity-90">
                  We provide professional physiotherapy services at home to help you recover faster and live pain-free.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1 p-4 lg:p-5 bg-surface border-l-4 border-accent shadow-sm">
                    <h4 className="font-serif font-bold text-primary text-base lg:text-lg">Post-Surgery Rehab</h4>
                    <p className="text-xs text-muted font-medium leading-relaxed">Expert recovery protocols for surgical cases in your home.</p>
                  </div>
                  <div className="space-y-1 p-4 lg:p-5 bg-surface border-l-4 border-accent shadow-sm">
                    <h4 className="font-serif font-bold text-primary text-base lg:text-lg">Chronic Pain</h4>
                    <p className="text-xs text-muted font-medium leading-relaxed">Evidence-based management for long-term pain relief.</p>
                  </div>
                </div>

                <p className="text-dark text-sm lg:text-base font-medium leading-relaxed opacity-80 border-t border-primary/5 pt-4">
                  From post-surgery rehab to chronic pain management, our team ensures safe, effective, and personalized treatment in the comfort of your home.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/about">
                  <Button variant="outline" className="group rounded-full px-8">
                    Learn Our Philosophy
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image/Visual Column */}
            <div className="relative max-w-sm mx-auto lg:ml-auto lg:mr-0">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                {/* Main Image with Clinical Border - Reduced Size */}
                <div className="aspect-[4/5] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white bg-surface">
                  <img 
                    src="/founder.avif" 
                    alt="Dr. Bhanu Kumar Vemula - Chief Physiotherapist"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Experience Badge - More Compact */}
                <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-primary p-4 lg:p-6 shadow-xl border-t-4 border-accent hidden md:block rounded-xl">
                  <div className="text-center">
                    <span className="block text-2xl lg:text-3xl font-serif font-bold text-white mb-0.5">6+</span>
                    <span className="block text-[8px] uppercase tracking-[0.2em] font-bold text-accent">Years Experience</span>
                  </div>
                </div>

                {/* Subtle Text Overlay on Image Container */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg border-l-4 border-accent hidden lg:block rounded-r-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Chief Specialist</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR SERVICES (KEEP IT SCANNABLE) */}
      <section className="py-10 lg:py-16 bg-surface overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12">
            <div className="lg:col-span-8">
              <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Our Expertise</span>
              <h2 className="text-3xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                Comprehensive <br />
                <span className="italic text-accent">Home</span> Services.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/services" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-8 lg:mb-10">
            {specialties.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                <Link 
                  to={item.slug ? `/service/${item.slug}` : "/contact"}
                  className="relative overflow-hidden aspect-[3/2] mb-6 shadow-lg rounded-2xl lg:rounded-3xl border-2 border-white group-hover:shadow-xl transition-all duration-700 w-full block"
                >
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[8px] font-bold tracking-[0.2em] uppercase rounded-full shadow-sm text-primary">
                    {item.id}
                  </div>
                </Link>
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-accent mb-2">{item.icon}</div>
                  <Link to={item.slug ? `/service/${item.slug}` : "/contact"}>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight">{item.title}</h3>
                  </Link>
                  <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-5xl mx-auto border-t border-primary/10 pt-10 lg:pt-16">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="flex gap-4 lg:gap-6 items-start p-5 lg:p-6 bg-white shadow-sm border border-primary/5 hover:border-accent/20 transition-all rounded-2xl lg:rounded-3xl">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-bold text-primary mb-1">{service.title}</h4>
                  <p className="text-dark text-xs font-medium opacity-80">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED TREATMENTS (Conditions We Treat) - Redesigned as Marquee */}
      <section className="py-10 lg:py-16 bg-surface/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 lg:mb-8 text-center lg:text-left">
          <div className="flex items-center space-x-3 mb-3 lg:mb-4 justify-center lg:justify-start">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
              Specialized Treatments
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary leading-tight">
            Conditions We <span className="text-accent italic font-normal">Treat</span>
          </h2>
        </div>
        
        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-4 lg:gap-6 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the array for seamless loop */}
            {[...conditions, ...conditions].map((condition, idx) => (
              <div 
                key={idx} 
                className="relative group w-[180px] lg:w-[240px] flex-shrink-0"
              >
                {/* Shining Card Container */}
                <div className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-square shadow-lg bg-white border border-primary/5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <img 
                    src={condition.img} 
                    alt={condition.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  
                  {/* Shining Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white font-serif font-bold text-sm lg:text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {condition.title}
                    </p>
                  </div>
                </div>
                
                {/* Caption below card */}
                <div className="mt-2 text-center">
                  <span className="text-[8px] lg:text-xs font-bold text-primary/60 uppercase tracking-widest group-hover:text-accent transition-colors">
                    {condition.title}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 lg:mt-12 text-center">
          <Link to="/conditions">
            <Button variant="outline" className="group rounded-full px-8">
              View All Conditions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US (IMPORTANT FOR CONVERSION) */}
      <section className="py-10 lg:py-16 bg-surface relative overflow-hidden">
        {/* Large background text with Parallax */}
        <motion.div 
          style={{ y: watermarkY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          FLEXO PHYSIO
        </motion.div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-16 relative z-10">
          
          <div className="space-y-8 lg:space-y-10">
            <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] block">The Advantage</span>
            <h2 className="text-3xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              Why Choose <br />
              <span className="italic font-normal text-accent">Flexo Physio?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-8">
              {[
                { title: 'Home visits for comfort & safety', text: 'Avoid travel stress and recover in your safest environment.' },
                { title: 'Dedicated one-on-one care', text: '100% focus on your personalized recovery.' },
                { title: 'Clinical expertise', text: 'BPT/MPT experts with years of clinical experience.' },
                { title: 'Affordable pricing', text: 'Premium care at honest rates, delivered to your home.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 lg:gap-6 group bg-white/50 p-4 rounded-2xl hover:bg-white transition-all">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                    <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base lg:text-lg font-serif font-bold text-primary">{feature.title}</h4>
                    <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed max-w-sm opacity-80">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-primary/5 absolute -top-10 -right-10 w-full h-full rounded-full -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[2rem] lg:rounded-[5rem] overflow-hidden aspect-square shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                alt="Expert care at home"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-8 bg-white border-y border-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-2">
            <MapPin className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-primary">We Serve</h2>
          <p className="text-2xl font-serif font-medium text-dark italic">
            Kukatpally, Miyapur, Kondapur, Gachibowli
          </p>
          <span className="block text-sm font-bold uppercase tracking-[0.2em] text-muted">(Within 5 KM radius)</span>
        </div>
      </section>

      {/* STRONG CTA (DON’T BE WEAK HERE) */}
      <section className="py-12 lg:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 mask-editorial-1 -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 lg:space-y-10">
          <h2 className="text-3xl lg:text-7xl font-serif font-bold text-primary leading-tight">
            Start Your <br />
            <span className="text-accent italic font-normal">Recovery Today.</span>
          </h2>
          <p className="text-dark max-w-xl mx-auto font-medium text-base lg:text-lg opacity-90">
            Get expert physiotherapy care at home with flexible appointments. Your journey to pain-free living starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-4">
            <a 
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent('Hi Flexo Physio, I would like to book an appointment now.')}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full rounded-full px-10 group border-none text-white hover:bg-accent/90 shadow-xl shadow-accent/20">
                Book Your Appointment Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-1">Speak to a Specialist</span>
              <a href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-base lg:text-lg hover:text-accent transition-colors">
                <PhoneCall className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
