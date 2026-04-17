import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Heart,
  ShieldCheck,
  MapPin,
  ArrowRight,
  PhoneCall,
  Zap,
  Activity,
  FileCheck,
  Target,
} from "lucide-react";
import Button from "../components/Button";
import SEO from "../components/SEO";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_LINK,
  BRAND_NAME,
} from "../constants";

const About = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const founderImgY = useTransform(scrollY, [1000, 2000], [0, -50]);
  const watermarkY = useTransform(scrollY, [0, 3000], [0, 400]);

  return (
    <div className="bg-white">
      <SEO
        title={`About ${BRAND_NAME} | Expert Physiotherapy at Home`}
        description={`Learn more about ${BRAND_NAME}, our mission, and why we are the preferred choice for home visit physiotherapy in Hyderabad.`}
      />
      {/* 1. HERO HEADER */}
      <section className="pt-8 pb-6 lg:pt-12 lg:pb-8 relative overflow-hidden min-h-[30vh] lg:min-h-[45vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000"
            alt="Professional physiotherapy clinic environment for expert home care in Hyderabad"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto responsive-padding text-center relative z-10">
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
            <h1 className="editorial-display text-primary">
              Trusted Home{" "}
              <span className="text-accent italic font-normal">
                Physiotherapy
              </span>{" "}
              <br className="hidden md:block" /> in Hyderabad
            </h1>
            <p className="text-sm lg:text-xl text-dark font-medium leading-relaxed max-w-5xl mx-auto opacity-90">
              {BRAND_NAME} is a leading provider of home-based physiotherapy
              services in Hyderabad, delivering expert care directly to patients
              in the comfort of their homes.
            </p>

          </motion.div>
        </div>
      </section>

      {/* 2. MISSION & SPECIALIZATION */}
      <section className="py-4 lg:py-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto responsive-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-10 focus-ring">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="editorial-heading text-primary leading-tight">
                  Our{" "}
                  <span className="text-accent italic font-normal">
                    Mission
                  </span>
                </h2>
                <div className="space-y-5 lg:space-y-6">
                  <p className="editorial-body text-dark/80 leading-relaxed text-justify">
                    Flexo Physiotherapy was born from one simple belief every
                    patient deserves expert care without the burden of travel.
                    Dr. Bhanu Vemula founded Flexo Physiotherapy Home Services with a deep passion for
                    physiotherapy and an unwavering commitment to patient
                    convenience.
                  </p>
                  <div className="border-l-4 border-accent bg-accent/5 px-5 py-4 lg:px-6 lg:py-5 rounded-r-2xl">
                    <p className="editorial-body text-primary font-semibold italic leading-relaxed">
                      “We don’t just treat pain, we restore confidence,
                      mobility, and quality of life. At your home, on your
                      terms.”
                    </p>
                  </div>
                  <p className="editorial-body text-dark/80 leading-relaxed text-justify">
                    From day one, his approach has been personal: understand
                    each patient's unique condition, design a treatment plan
                    built around their life, and deliver 100% effort every
                    session, every home visit, without exception. That passion,
                    reflected in hundreds of five-star Google reviews, is what
                    drives every therapist at Flexo to keep raising the standard
                    of home physiotherapy in Hyderabad.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto flex items-center justify-center bg-surface/50 rounded-3xl lg:rounded-[5rem] overflow-hidden shadow-xl border-4 lg:border-8 border-white p-8 lg:p-12">
                <img
                  src="/logo-square.png"
                  alt="Flexo Physio Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-5 shadow-xl border-t-4 border-accent hidden sm:block rounded-xl">
                <div className="text-center">
                  <span className="block text-2xl lg:text-3xl font-sans font-bold text-white mb-0.5 numerics">
                    6+
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] font-bold text-accent">
                    Years Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE SPECIALIST */}
      <section className="py-4 lg:py-10 overflow-hidden bg-gradient-to-br from-white via-surface/30 to-white relative">
        {/* Premium decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left side - Image with premium frame */}
            <motion.div
              style={{ y: founderImgY }}
              className="lg:col-span-5 relative"
            >
              {/* Founder Design with Blue Border */}
              <div className="relative p-2 lg:p-4 border-[4px] lg:border-[10px] border-primary rounded-[2.5rem] lg:rounded-[5rem] shadow-xl overflow-visible max-w-sm mx-auto">
                <div className="aspect-[4/5] rounded-[2rem] lg:rounded-[4rem] overflow-hidden bg-white">
                  <img
                    src="/founder.jpg"
                    alt="Dr. Bhanu Vemula - Founder & Consultant Physiotherapist"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Experience Badge: Optimized for mobile */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-right-8 bg-white shadow-2xl rounded-2xl p-3 lg:p-5 border border-primary/10 z-30 min-w-[100px] lg:min-w-[160px]">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-xl lg:text-3xl font-sans font-bold text-accent leading-none numerics">
                      6+
                    </span>
                    <span className="text-[6px] lg:text-[9px] uppercase tracking-[0.2em] font-bold text-primary mt-1">
                      Years Excellence
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="space-y-4 lg:space-y-5">
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">
                    Meet Our Specialist
                  </span>
                </div>
                <h2 className="editorial-heading text-primary leading-tight">
                  Dr. Bhanu{" "}
                  <span className="text-accent italic font-normal">Vemula</span>
                </h2>
                <div className="flex flex-col space-y-2">
                  <span className="text-lg lg:text-xl font-serif font-bold text-primary/90">
                    Founder & Senior. Consultant Physiotherapist
                  </span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-gradient-to-r from-accent to-accent/80 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                      MPT (Orthopedics) (Pursuing)
                    </span>
                    <span className="text-muted text-[10px] font-bold uppercase tracking-widest">
                      | BPT
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium Bio */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary/5 shadow-lg">
                <p className="text-dark font-medium leading-relaxed text-base lg:text-lg">
                  <span className="text-accent font-bold">
                    Dr. Bhanu Vemula
                  </span>{" "}
                  is a leading home-visit physiotherapist in Hyderabad, known
                  for delivering exceptional results in{" "}
                  <span className="text-primary font-semibold">
                    pain relief, rehabilitation, and functional recovery
                  </span>
                  . Currently pursuing his Master's in Orthopedics, he combines
                  advanced clinical knowledge with hands-on expertise to provide
                  highly personalized treatment.
                </p>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                {[
                  { icon: <Award className="w-4 h-4" />, text: "Chiropractic" },
                  { icon: <Zap className="w-4 h-4" />, text: "Dry Needling" },
                  {
                    icon: <Heart className="w-4 h-4" />,
                    text: "Cupping Therapy",
                  },
                  {
                    icon: <ShieldCheck className="w-4 h-4" />,
                    text: "Kinesio Taping",
                  },
                  { icon: <Target className="w-4 h-4" />, text: "IASTM" },
                  {
                    icon: <Activity className="w-4 h-4" />,
                    text: "Manual Therapy",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 px-3 py-2 rounded-lg border border-primary/10"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <span className="text-[10px] lg:text-xs font-bold text-primary/80 uppercase tracking-wide">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 pt-4">
                {[
                  { value: "1000+", label: "Patients Treated" },
                  { value: "3600+", label: "Sessions" },
                  { value: "110+", label: "Surgeries Avoided" },
                  { value: "140+", label: "Recoveries through Rehab" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white border border-primary/10 px-4 py-2 rounded-xl shadow-sm"
                  >
                    <span className="text-lg lg:text-xl font-serif font-bold text-primary numerics">
                      {stat.value}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-muted">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-primary to-primary/90 p-5 rounded-2xl text-white">
                <p className="text-sm lg:text-base font-medium italic">
                  "With a mission to make quality physiotherapy accessible at
                  home, Dr. Bhanu continues to transform lives by restoring
                  movement, reducing pain, and improving overall quality of
                  life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-4 lg:py-10 bg-surface relative overflow-hidden">
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {BRAND_NAME.toUpperCase()}
        </motion.div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-4 lg:mb-6">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
                The Advantage
              </span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="editorial-heading text-primary leading-tight">
              What Makes Flexo{" "}
              <span className="text-accent italic font-normal">Different</span>
            </h2>
            <p className="text-dark/70 font-medium leading-relaxed max-w-2xl mx-auto mt-4 text-sm lg:text-base">
              Six years ago Dr. Bhanu started Flexo with one belief  patients
              deserve better than rushed clinic appointments. Here's how that
              belief shaped everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                title: "Born from a passion for patient convenience",
                desc: 'Dr. Bhanu didn\'t open a clinic, he came to patients. Flexo was built around one question: "Why should a patient in pain travel to get better?" Every decision since has been guided by that.',
                icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6" />,
              },
              {
                title: "BPT + MPT qualified with 6 advanced certifications",
                desc: "Dry Needling, Kinesio Taping, Cupping, IASTM, Chiropractic, Manual Therapy, Dr. Bhanu brings clinic-grade specialist skills directly to your home. No compromise on quality.",
                icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />,
              },
              {
                title: "Long-term recovery, not just pain relief",
                desc: "We don't just reduce pain and discharge you. We identify the root cause, fix it structurally, and teach you how to stay pain-free, reducing the chance of the problem ever returning.",
                icon: <Activity className="w-5 h-5 lg:w-6 lg:h-6" />,
              },
              {
                title: "Every patient gets a personalised treatment plan",
                desc: "No generic exercise sheets. Every plan is built around your exact diagnosis, your daily routine, your lifestyle, and reviewed every session so it evolves as you improve.",
                icon: <FileCheck className="w-5 h-5 lg:w-6 lg:h-6" />,
              },
              {
                title: "Quick response, flexible scheduling",
                desc: "WhatsApp or call, we respond fast. Sessions are scheduled around your life, not our clinic hours. Morning, evening, or weekend, we fit into your routine, not the other way around.",
                icon: <PhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />,
              },
              {
                title: "Serving Hyderabad for 6+ years",
                desc: "Kukatpally, Miyapur, Kondapur, Nizampet, KPHB, Madhapur and nearby, 1,000+ patients trust Flexo as Hyderabad's most recommended home physiotherapy service.",
                icon: <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />,
              },
            ].map((item, idx) => {
              const stats = [
                "Home visit · Comfort",
                "6+ Certifications",
                "Long-term results",
                "Personalized plan",
                "Flexible hours",
                "6+ Years trust",
              ];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent lg:border-transparent group cursor-pointer h-full flex flex-col"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-base lg:text-lg font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed opacity-80 mb-4">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-primary/5">
                    <span className="inline-block bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider numerics">
                      {stats[idx]}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA & LOCATIONS */}
      <section className="py-4 lg:py-10 bg-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-8 lg:space-y-12 relative z-10">
          <h2 className="editorial-heading text-primary leading-tight">
            Start Your <br />
            <span className="text-accent italic font-normal">
              Recovery Journey
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-4">
            <a
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book a home visit.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full rounded-full px-10 group border-none text-white hover:bg-accent/90 shadow-xl shadow-accent/20"
              >
                Book Visit Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex flex-col items-center sm:items-start text-left">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted mb-1">
                Speak to a Specialist
              </span>
              <a
                href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-base lg:text-lg hover:text-accent transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-accent" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
