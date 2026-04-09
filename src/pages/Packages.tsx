import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Star, Clock, User, ClipboardList, ShieldCheck, Heart, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import { BRAND_NAME, CONTACT_WHATSAPP_LINK } from '../constants';
import Button from '../components/Button';

const packages = [
  {
    name: 'Single Home Visit',
    price: '₹ 800 to 1200',
    unit: 'per session',
    desc: 'Perfect for immediate relief or initial consultation.',
    features: [
      '45–60 minute one-on-one session',
      'Full assessment + treatment',
      'Personalised home exercise plan',
      'All equipment carried by therapist'
    ],
    cta: 'Book a Session',
    popular: false,
    gradient: 'from-blue-50 to-white',
    icon: <User className="w-6 h-6" />,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Recovery Package',
    price: '₹ 15000',
    unit: 'for 15 sessions',
    desc: 'Deeply focused rehabilitation for long-term health.',
    features: [
      'Best for post-surgery or chronic conditions',
      'Priority scheduling',
      'Progress tracking across sessions',
      'WhatsApp support between sessions'
    ],
    cta: 'Get This Package',
    popular: true,
    gradient: 'from-primary to-[#1e40af]',
    icon: <TrendingUp className="w-6 h-6" />,
    iconBg: 'bg-white/20',
    iconColor: 'text-white'
  },
  {
    name: 'Monthly Wellness Plan',
    price: '₹ 26000/-',
    unit: 'month',
    desc: 'Comprehensive daily care for seniors and chronic needs.',
    features: [
      '30 sessions per month',
      'Ideal for ongoing conditions or elderly care',
      'Dedicated assigned therapist',
      'Monthly progress report'
    ],
    cta: 'Enquire Now',
    popular: false,
    gradient: 'from-emerald-50 to-white',
    icon: <Heart className="w-6 h-6" />,
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent'
  }
];

const Packages = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);

  const onBook = (pkgName: string) => {
    const text = encodeURIComponent(`Hi ${BRAND_NAME}, I'm interested in the ${pkgName}. Please provide more details.`);
    window.open(`${CONTACT_WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white selection:bg-accent selection:text-white">
      {/* HERO SECTION - REDESIGNED FOR IMPACT */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative overflow-hidden flex items-center">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/bg.webp"
            alt="Packages Background"
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
          
          {/* Decorative mesh gradients */}
          <div className="absolute top-1/4 -right-1/4 w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-surface rounded-full border border-primary/5">
              <Zap className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="text-primary font-sans font-bold uppercase tracking-[0.25em] text-[9px] lg:text-[10px]">
                Transparent Value-Based Pricing
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] tracking-tight">
              Honest Pricing for <br />
              <span className="text-accent italic font-normal">Expert</span> Recovery.
            </h1>
            
            <p className="text-dark/70 font-medium leading-relaxed text-base lg:text-xl max-w-3xl mx-auto">
              Our plans are designed to provide maximum therapeutic value. No hidden costs, just professional physiotherapy delivered at your convenience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES GRID - ENHANCED CARDS */}
      <section className="pb-24 lg:pb-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className={`relative group flex flex-col rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden ${
                  pkg.popular 
                    ? 'shadow-[0_40px_100px_-20px_rgba(37,99,235,0.3)] z-10 scale-[1.02] border-primary/10' 
                    : 'bg-white border border-primary/5 shadow-xl hover:shadow-2xl hover:border-accent/20'
                } transition-all duration-700`}
              >
                {/* Background Gradient Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-100 -z-10`} />
                
                {pkg.popular && (
                  <div className="absolute top-0 right-0 p-8">
                     <div className="bg-accent text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-lg shadow-accent/20">
                      Popular Choice
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-12 h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="mb-10 lg:mb-12">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner ${pkg.iconBg} ${pkg.iconColor}`}>
                      {pkg.icon}
                    </div>
                    <h3 className={`text-2xl lg:text-3xl font-serif font-bold mb-3 ${
                      pkg.popular ? 'text-white' : 'text-primary'
                    }`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs lg:text-sm font-medium leading-relaxed opacity-70 ${
                      pkg.popular ? 'text-white/80' : 'text-dark'
                    }`}>
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-10 lg:mb-12">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-4xl lg:text-5xl font-serif font-bold tracking-tighter ${
                          pkg.popular ? 'text-white' : 'text-primary'
                        }`}>
                          {pkg.price}
                        </span>
                      </div>
                      <span className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] mt-2 ${
                        pkg.popular ? 'text-accent' : 'text-accent'
                      }`}>
                        {pkg.unit}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow space-y-5 lg:space-y-6 mb-12">
                    <div className={`h-[1px] w-full ${pkg.popular ? 'bg-white/10' : 'bg-primary/5'}`} />
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-4 group/item">
                        <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${
                          pkg.popular ? 'bg-white/10 text-accent' : 'bg-accent/10 text-accent'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={`text-sm lg:text-[15px] font-medium leading-tight ${
                          pkg.popular ? 'text-white/90' : 'text-dark/80'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button Wrapper to push to bottom */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => onBook(pkg.name)}
                      variant={pkg.popular ? 'secondary' : 'primary'}
                      className={`w-full rounded-2xl py-5 lg:py-6 group shadow-2xl transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] border-none font-black tracking-[0.15em] text-[11px] lg:text-xs ${
                        pkg.popular 
                        ? 'bg-accent text-white hover:bg-white hover:text-primary shadow-accent/20' 
                        : 'bg-primary text-white hover:bg-accent ring-1 ring-primary/5'
                      }`}
                    >
                      {pkg.cta.toUpperCase()}
                      <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </Button>
                  </div>
                </div>

                {/* Aesthetic Glossy Overlays */}
                {pkg.popular && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* ADDITIONAL FOOTNOTE - REDESIGNED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-32 relative group"
          >
            <div className="absolute inset-0 bg-surface rounded-[3rem] lg:rounded-[4.5rem] -z-10 group-hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.05)] transition-all duration-1000" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-10 lg:p-20">
              <div className="lg:col-span-5 space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-accent">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-3xl lg:text-4xl font-serif font-bold text-primary leading-tight">Professional <br /><span className="text-accent italic font-normal">Commitment.</span></h4>
                <p className="text-dark/70 text-sm lg:text-lg font-medium leading-relaxed">
                  All prices include travel within covered areas. Session frequency recommended by therapist after first visit.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {[
                  { icon: <Clock className="w-5 h-5" />, title: 'Flexible Scheduling', text: 'Morning, afternoon, or evening slots tailored to your lifestyle.' },
                  { icon: <ClipboardList className="w-5 h-5" />, title: 'No Hidden Fees', text: 'What you see is what you pay. No extra travel or equipment charges.' },
                  { icon: <Star className="w-5 h-5" />, title: 'Dedicated Support', text: 'Direct line to your therapist for guidance between regular sessions.' },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Clinical Precision', text: 'Evidence-based protocols designed for your specific medical condition.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-sm border border-primary/5 hover:shadow-md transition-all">
                    <div className="text-accent mb-4">{item.icon}</div>
                    <h5 className="font-serif font-bold text-primary text-base lg:text-lg mb-2">{item.title}</h5>
                    <p className="text-dark/60 text-xs lg:text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA - HIGH IMPACT */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 lg:space-y-12">
          <div className="space-y-4">
             <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-full border border-primary/10 p-2"><img src="/logo-square.png" className="w-full h-full object-contain" /></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">Ready to start?</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">
              Let's build your <br />
              <span className="text-accent italic font-normal">Recovery Roadmap.</span>
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto font-medium text-base lg:text-xl">
              Schedule a telephone consultation today and we'll help you select the most effective care plan for your condition.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-4">
            <a
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I'd like to consult about the best package for my recovery.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full rounded-full py-5 px-12 group bg-accent text-white hover:bg-primary shadow-[0_20px_40px_-10px_rgba(22,163,74,0.3)] border-none">
                WHATSAPP CONSULTATION
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex flex-col items-center sm:items-start group cursor-pointer">
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 mb-1 group-hover:text-accent transition-colors">Speak with us</span>
              <a href="tel:+919502808581" className="text-primary font-bold uppercase tracking-[0.2em] text-sm lg:text-base hover:text-accent transition-all flex items-center">
                +91 95028 08581
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
