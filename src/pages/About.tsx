import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Heart, ShieldCheck, Users, MapPin, ArrowRight, PhoneCall, CheckCircle2, Bone, Dumbbell, Zap, Home } from 'lucide-react';
import Button from '../components/Button';
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_LINK, SERVICE_AREAS, BRAND_NAME } from '../constants';

const About = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const founderImgY = useTransform(scrollY, [1000, 2000], [0, -50]);

  return (
    <div className="bg-white">

      {/* 1. HERO HEADER */}
      <section className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative overflow-hidden min-h-[45vh] lg:h-[60vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000"
            alt="Clinical Excellence Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="w-6 h-[2px] bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                About {BRAND_NAME}
              </span>
              <span className="w-6 h-[2px] bg-accent" />
            </div>
            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              Trusted Home <span className="text-accent italic font-normal">Physiotherapy</span> <br className="hidden md:block" /> in Hyderabad
            </h1>
            <p className="text-sm lg:text-xl text-dark font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
              {BRAND_NAME} is a leading provider of home-based physiotherapy services in Hyderabad, delivering expert care directly to patients in the comfort of their homes.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-2 text-primary font-bold">
              <MapPin className="text-accent w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-[10px] lg:text-sm uppercase tracking-widest text-center">Serving : {SERVICE_AREAS.split(',').slice(0, 3).join(', ')} & Nearby</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & SPECIALIZATION */}
      <section className="py-10 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-10 focus-ring">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary">Our <span className="text-accent italic font-normal">Mission</span></h2>
                <p className="text-base lg:text-lg text-dark font-medium leading-relaxed">
                  To provide accessible, personalized, and high-quality physiotherapy care at home, enabling patients to recover faster, regain mobility, and live pain-free without the stress of travel.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-5">What We Do</h3>
                <p className="text-sm lg:text-base text-dark font-medium leading-relaxed opacity-80">
                  We offer comprehensive physiotherapy solutions for a wide range of conditions. Our approach focuses on long-term recovery, not just temporary relief.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {[
                    'Back & neck pain',
                    'Knee pain & arthritis',
                    'Stroke & paralysis',
                    'Sports injuries',
                    'Post-surgical recovery',
                    'Joint disorders'
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 group bg-surface/30 p-2 rounded-lg lg:bg-transparent lg:p-0">
                      <CheckCircle2 className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] lg:text-xs font-bold text-primary/80 uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[4/5] rounded-3xl lg:rounded-[5rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200"
                  alt="Specialist during consultation"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-5 shadow-xl border-t-4 border-accent hidden sm:block rounded-xl">
                <div className="text-center">
                  <span className="block text-2xl lg:text-4xl font-serif font-bold text-white mb-0.5">6+</span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] font-bold text-accent">Years Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENT APPROACH */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
                <div className="absolute top-4 right-4 lg:-top-4 lg:right-6 w-8 h-8 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-[10px] lg:text-sm">{item.number}</span>
                </div>

                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h4 className="text-xl lg:text-2xl font-serif font-bold text-primary mb-2 lg:mb-4 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-dark font-medium leading-relaxed text-xs lg:text-base opacity-70 group-hover:opacity-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET THE SPECIALIST */}
      <section className="py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-white via-surface/30 to-white relative">
        {/* Premium decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left side - Image with premium frame */}
            <motion.div
              style={{ y: founderImgY }}
              className="lg:col-span-5 relative"
            >
              {/* Premium border effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent via-accent/50 to-primary rounded-[3rem] opacity-30 blur-lg" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-2 rounded-[3rem] lg:rounded-[5rem]">
                <div className="aspect-[4/5] rounded-[2.5rem] lg:rounded-[4.5rem] overflow-hidden shadow-2xl border-2 border-white/20 bg-white">
                  <img
                    src="/founder.png"
                    alt="Dr. Bhanu Vemula - Founder & Consultant Physiotherapist"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Floating Specialist Badge - Always Visible */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 shadow-lg border-l-4 border-accent z-20 rounded-r-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Chief Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Experience Badge (Always Visible) */}
              <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-primary p-4 lg:p-6 shadow-xl border-t-4 border-accent z-30 rounded-xl">
                <div className="text-center">
                  <span className="block text-2xl lg:text-3xl font-serif font-bold text-white mb-0.5">6+</span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] font-bold text-accent">Years Experience</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="space-y-4 lg:space-y-5">
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">Meet Our Specialist</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">Dr. Bhanu <span className="text-accent italic font-normal">Vemula</span></h2>
                <div className="flex flex-col space-y-2">
                  <span className="text-lg lg:text-xl font-serif font-bold text-primary/90">Founder & Senior. Consultant Physiotherapist</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-gradient-to-r from-accent to-accent/80 text-white text-[10px] font-bold px-3 py-1 rounded-full">MPT (Orthopedics) - Pursuing</span>
                    <span className="text-muted text-[10px] font-bold uppercase tracking-widest">| BPT</span>
                  </div>
                </div>
              </div>

              {/* Premium Bio */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary/5 shadow-lg">
                <p className="text-dark font-medium leading-relaxed text-base lg:text-lg">
                  <span className="text-accent font-bold">Dr. Bhanu Vemula</span> is a leading home-visit physiotherapist in Hyderabad, known for delivering exceptional results in <span className="text-primary font-semibold">pain relief, rehabilitation, and functional recovery</span>. Currently pursuing his Master's in Orthopedics, he combines advanced clinical knowledge with hands-on expertise to provide highly personalized treatment.
                </p>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                {[
                  { icon: <Award className="w-4 h-4" />, text: 'Chiropractic' },
                  { icon: <Zap className="w-4 h-4" />, text: 'Dry Needling' },
                  { icon: <Heart className="w-4 h-4" />, text: 'Cupping Therapy' },
                  { icon: <ShieldCheck className="w-4 h-4" />, text: 'Kinesio Taping' },
                  { icon: <Bone className="w-4 h-4" />, text: 'IASTM' },
                  { icon: <Users className="w-4 h-4" />, text: 'Manual Therapy' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 px-3 py-2 rounded-lg border border-primary/10">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <span className="text-[10px] lg:text-xs font-bold text-primary/80 uppercase tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { value: '1000+', label: 'Patients Treated' },
                  { value: 'Kukatpally', label: 'Area' },
                  { value: 'Miyapur', label: 'Area' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 bg-white border border-primary/10 px-4 py-2 rounded-xl shadow-sm">
                    <span className="text-lg lg:text-xl font-serif font-bold text-primary">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-wider text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-primary to-primary/90 p-5 rounded-2xl text-white">
                <p className="text-sm lg:text-base font-medium italic">
                  "With a mission to make quality physiotherapy accessible at home, Dr. Bhanu continues to transform lives by restoring movement, reducing pain, and improving overall quality of life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-10 lg:py-16 bg-white shrink-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-4 lg:mb-6">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px]">The Advantage</span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-6xl font-serif font-bold text-primary mb-4 lg:mb-6">
              Why Choose <span className="text-accent italic font-normal">{BRAND_NAME}?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Home-Based Care',
                desc: 'Professional treatment without traveling. We bring expert care right to your doorstep.',
                icon: <Home className="w-5 h-5 lg:w-6 lg:h-6" />
              },
              {
                title: 'Personalized Plans',
                desc: 'Tailored treatments designed specifically for your unique condition and lifestyle.',
                icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" />
              },
              {
                title: 'Certified Experts',
                desc: 'Skilled professionals trained in advanced clinical rehabilitation with 6+ years experience.',
                icon: <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
              },
              {
                title: 'Advanced Methods',
                desc: 'Using modern methods like dry needling and mobilization for faster results.',
                icon: <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
              },
              {
                title: 'Affordable Rates',
                desc: 'Cost-effective clinical plans designed for every patient. No hidden charges.',
                icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />
              },
              {
                title: 'Patient-Centered',
                desc: 'One-on-one sessions with 100% attention for your complete recovery.',
                icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group relative bg-surface/30 p-6 lg:p-10 rounded-2xl lg:rounded-[3rem] border border-primary/5 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-6 lg:mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                <h4 className="text-lg lg:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* 6. CTA & LOCATIONS */}
      < section className="py-12 lg:py-20 bg-white text-center relative overflow-hidden" >
        <div className="max-w-4xl mx-auto px-6 space-y-8 lg:space-y-12 relative z-10">
          <h2 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-tight">
            Start Your <br />
            <span className="text-accent italic font-normal">Recovery Journey</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-4">
            <a
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book a home visit.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full rounded-full px-10 group border-none text-white hover:bg-accent/90 shadow-xl shadow-accent/20">
                Book Visit Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex flex-col items-center sm:items-start text-left">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted mb-1">Speak to a Specialist</span>
              <a href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-base lg:text-lg hover:text-accent transition-colors">
                <PhoneCall className="w-4 h-4 text-accent" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-primary/10">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-muted mb-6">Our Principal Locations</h4>
            <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-12">
              <div className="flex items-center space-x-3 bg-surface/50 p-4 rounded-xl border border-primary/5">
                <MapPin className="text-accent w-5 h-5" />
                <span className="text-primary font-bold tracking-wider uppercase text-[10px] lg:text-xs">Miyapur, Hyderabad - 500049</span>
              </div>
              <div className="flex items-center space-x-3 bg-surface/50 p-4 rounded-xl border border-primary/5">
                <MapPin className="text-accent w-5 h-5" />
                <span className="text-primary font-bold tracking-wider uppercase text-[10px] lg:text-xs">Kukatpally, Hyderabad - 500085</span>
              </div>
            </div>
          </div>
        </div>
      </section >

    </div >
  );
};

export default About;
