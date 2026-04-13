import { motion, useScroll, useTransform } from 'framer-motion';
import { Bone, Brain, Dumbbell, Target, Zap, ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

const Services = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const watermarkY = useTransform(scrollY, [0, 2000], [0, 300]);

  const allServices = [
    {
      id: '01',
      slug: 'neurological',
      title: 'Neuro Rehabilitation',
      popular: true,
      desc: 'Stroke, paralysis, and neurological conditions require specialist hands-on care — not just exercises. Dr. Bhanu delivers evidence-based neuro rehab directly at your home in Kukatpally, Miyapur, Kondapur and nearby areas, helping patients regain movement, balance, and daily independence.',
      features: [
        'Stroke Recovery & Rehab',
        "Parkinson's Support",
        'Pediatric Neuro Therapy',
        'Spinal Injury Rehabilitation'
      ],
      focus: 'Restore function & improve quality of life',
      idealFor: "Stroke survivors, paralysis patients, Parkinson's patients, children with neuro conditions.",
      icon: <Brain className="w-8 h-8" />,
      img: '/images/treatments/stroke_rehab_session-opt.webp'
    },
    {
      id: '02',
      slug: 'orthopedic',
      title: 'Orthopedic Rehabilitation',
      popular: true,
      desc: 'Whether it\'s joint pain, post-surgery stiffness, or a musculoskeletal injury, recovery should happen at your pace — in your own home. Our orthopedic physiotherapy combines manual therapy, targeted exercises, and advanced modalities to eliminate pain at the root cause, not just the symptoms.',
      features: [
        'Post-Surgery Joint Recovery',
        'Muscle & Joint Pain Relief',
        'Improved Flexibility & Strength',
        'Customised Treatment Plans'
      ],
      focus: 'Reduce pain & restore movement',
      outcome: 'Patients with knee pain, frozen shoulder & post-surgical stiffness typically recover full function in 6–10 sessions.',
      idealFor: 'Post-surgery patients, knee & hip pain, office workers with chronic back or neck pain.',
      icon: <Bone className="w-8 h-8" />,
      img: '/images/treatments/back_pain_treatment-opt.webp'
    },
    {
      id: '03',
      slug: 'sports',
      title: 'Sports Rehabilitation',
      desc: 'Sports injuries demand fast, precise recovery so you can return to peak performance without re-injury. From ligament tears to muscle strains, our sports physio program combines injury-specific treatment with functional training — designed around your sport and your body.',
      features: [
        'Injury Recovery & Pain Management',
        'Post-Surgical Sports Rehab',
        'Performance enhancement',
        'Return-to-sport Guidance'
      ],
      focus: 'Faster recovery & injury prevention',
      outcome: 'Athletes return to training significantly faster with structured home-based sports rehab compared to rest alone.',
      idealFor: 'Athletes, gym-goers, runners, cricket & football players, and anyone with a sports-related injury.',
      icon: <Dumbbell className="w-8 h-8" />,
      img: '/images/treatments/acl_rehab_exercise-opt.webp'
    },
    {
      id: '04',
      slug: 'chiropractic',
      title: 'Chiropractic Care',
      desc: 'Most pain originates from spinal misalignment and joint dysfunction — not just muscle tightness. Dr. Bhanu\'s chiropractic expertise, combined with physiotherapy, delivers precise spinal and joint corrections at your home for lasting relief without dependency on medication.',
      features: [
        'Spinal Adjustments & Mobilization',
        'Postural Correction',
        'Combined rehabilitation approach',
        'Long-term stability'
      ],
      focus: 'Restore joint mobility & optimise spinal function',
      outcome: 'Patients with chronic back and neck pain report significant relief after just 3–5 chiropractic sessions.',
      idealFor: 'Chronic back & neck pain, poor posture, desk workers, spinal stiffness patients.',
      icon: <Activity className="w-8 h-8" />,
      img: '/images/treatments/chiropractic_adjustment-opt.webp'
    },
    {
      id: '08',
      slug: 'geriatric',
      title: 'Geriatric Physiotherapy',
      desc: 'Ageing should not mean losing independence. Our geriatric physiotherapy brings gentle, evidence-based care to elderly patients at home — improving balance, preventing falls, building strength, and supporting a healthy, active lifestyle in the comfort of familiar surroundings.',
      features: [
        'Balance & Fall Prevention',
        'Strength Training',
        'Mobility & gait training',
        'Pain management'
      ],
      focus: 'Stay active & independent',
      outcome: 'Regular geriatric physio significantly reduces fall risk and helps elderly patients maintain independence longer.',
      idealFor: 'Elderly adults (60+), post-fall recovery, age-related joint pain, mobility decline.',
      icon: <Activity className="w-8 h-8" />,
      img: '/images/treatments/geriatric_physiotherapy_home.png'
    },
    {
      id: '05',
      slug: 'dry-needling',
      title: 'Dry Needling Therapy',
      desc: 'Stubborn muscle pain that doesn\'t respond to massage or rest is often caused by myofascial trigger points. Dr. Bhanu\'s certified dry needling precisely targets these knots to deactivate them, restore normal muscle function, and provide fast, lasting relief — all at your home.',
      features: [
        'Myofascial trigger point release',
        'Targeted needle insertion',
        'Combined with corrective exercises',
        'Root cause rehabilitation'
      ],
      focus: 'Release trigger points & restore muscle function',
      outcome: 'Patients with chronic muscle pain and tightness often experience significant relief within 2–4 sessions.',
      idealFor: 'Chronic muscle pain, neck & shoulder tightness, trigger points, headache from muscle tension.',
      icon: <Zap className="w-8 h-8" />,
      img: '/images/treatments/dry_needling_therapy.png'
    },
    {
      id: '06',
      slug: 'cupping',
      title: 'Cupping Therapy',
      desc: 'Cupping therapy uses controlled negative pressure to lift and release tight fascia, improve blood circulation, and accelerate tissue healing — an ancient technique now backed by modern clinical evidence. Ideal as a standalone treatment or combined with physiotherapy for faster recovery.',
      features: [
        'Dynamic & static cupping',
        'Tissue mobility improvement',
        'Enhanced blood circulation',
        'Combined with exercise therapy'
      ],
      focus: 'Improve tissue mobility & muscle relaxation',
      outcome: 'Best results seen when combined with manual therapy — most patients report reduced stiffness and improved range of motion within 3–5 sessions.',
      idealFor: 'Muscle tightness, back stiffness, sports recovery, chronic pain with poor circulation.',
      icon: <Zap className="w-8 h-8" />,
      img: '/images/treatments/cupping_therapy_session.png'
    },
    {
      id: '07',
      slug: 'iastm',
      title: 'IASTM Therapy',
      desc: 'IASTM (Instrument Assisted Soft Tissue Mobilisation) uses specially designed tools to detect and break down scar tissue, adhesions, and fascial restrictions that limit movement and cause pain — restoring smooth, pain-free function in ways that hands alone cannot achieve.',
      features: [
        'Soft tissue adhesion release',
        'Scar tissue management',
        'Improved tissue glide',
        'Combined with active rehabilitation'
      ],
      focus: 'Restore tissue health & movement quality',
      outcome: 'Particularly effective for post-surgical scar tissue and chronic tendon issues — results visible within 4–6 sessions.',
      idealFor: 'Post-surgery scar tissue, tendon pain, restricted movement, chronic soft tissue injuries.',
      icon: <Zap className="w-8 h-8" />,
      img: '/images/treatments/iastm_therapy_tool.png'
    },
    {
      id: '09',
      slug: 'kinesio-taping',
      title: 'Kinesio Taping',
      desc: 'Kinesio taping provides continuous therapeutic support between sessions — reducing pain, stabilising joints, and enhancing circulation 24 hours a day without restricting natural movement. A powerful complement to physiotherapy that keeps your recovery progressing even when the therapist isn\'t there.',
      features: [
        'Pain reduction & management',
        'Muscle support & stabilization',
        'Improved circulation & healing',
        'Enhanced performance & recovery'
      ],
      focus: 'Support muscles & accelerate recovery',
      outcome: 'When combined with physiotherapy, Kinesio taping reduces recovery time and helps maintain treatment gains between sessions.',
      idealFor: 'Sports injuries, muscle strains, joint instability, swelling management, post-exercise recovery.',
      icon: <Zap className="w-8 h-8" />,
      img: '/images/treatments/Flexophysio New Website Images (3).jpg.jpeg'
    }
Website Images (3).jpg.jpeg'
    }
  ];


  return (
    <div className="bg-white">

      {/* 1. HERO HEADER */}
      <section className="pt-40 pb-12 lg:pt-56 lg:pb-16 relative overflow-hidden min-h-[55vh] lg:h-[75vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/bg.webp"
            alt={`${BRAND_NAME} Services Background`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        <div className="max-w-[1650px] mx-auto responsive-padding text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                Our Specialized Services
              </span>
            </div>
            <h1 className="editorial-display text-primary">
              Comprehensive <span className="text-accent italic font-normal">Physiotherapy</span> <br className="hidden lg:block" /> Care at Home
            </h1>
            <p className="text-sm lg:text-2xl text-dark font-medium leading-relaxed max-w-5xl opacity-90">
              We offer specialized physiotherapy services designed to help you recover faster, reduce pain, and regain mobility   all from the comfort of your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Large background text with Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {BRAND_NAME.toUpperCase()}
        </motion.div>

        <div className="max-w-[1650px] mx-auto responsive-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {allServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group flex flex-col"
              >
                {/* Image Container with Rounded Corners & Shine Effect */}
                <Link
                  to={service.slug ? `/service/${service.slug}` : "/contact"}
                  className="relative mb-8 overflow-hidden aspect-[3/2] rounded-3xl lg:rounded-[2.5rem] shadow-lg border-2 border-white group-hover:shadow-xl transition-all duration-700 max-w-sm mx-auto w-full block"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Shining Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>

                  {/* Service ID Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full shadow-sm text-primary">
                    {service.id}
                  </div>
                </Link>

                <div className="flex-grow flex flex-col px-4">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                        {service.icon}
                      </div>
                      <Link to={service.slug ? `/service/${service.slug}` : "/contact"}>
                        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-500 flex items-center gap-3">
                          {service.title}
                          {service.popular && (
                            <span className="bg-[#FAEEDA] text-[#633806] text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                              Most Popular
                            </span>
                          )}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-dark font-medium leading-relaxed opacity-80 text-base">
                      {service.desc}
                    </p>

                    <div className="pt-6 border-t border-primary/5">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-4 group/item">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent group-hover/item:text-white transition-colors duration-300" />
                            </div>
                            <span className="text-[11px] font-bold text-primary/80 uppercase tracking-tight group-hover/item:text-primary transition-colors leading-relaxed">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Footer Section - Pushed to bottom and aligned */}
                  <div className="mt-auto pt-8 space-y-6">
                    {/* Focus Point Redesign - Premium Clinical Highlight */}
                    <div className="pt-4 border-t border-primary/5 space-y-4">
                      {/* Clinical Focus Bar */}
                      <div className="bg-accent/5 p-5 rounded-2xl border-l-4 border-accent relative overflow-hidden group/focus">
                        {/* Subtle background icon */}
                        <Target className="absolute -right-4 -bottom-4 w-16 h-16 text-accent/10 -rotate-12 group-hover/focus:rotate-0 transition-transform duration-700" />

                        <div className="relative z-10">
                          <span className="text-[9px] font-bold text-accent uppercase tracking-[0.3em] block mb-2">Clinical Focus</span>
                          <p className="text-sm font-serif font-bold text-primary leading-snug">
                            {service.focus}
                          </p>
                        </div>
                      </div>

                      {/* Outcome Line */}
                      {service.outcome && (
                        <div className="bg-[#FAEEDA]/50 p-4 rounded-xl border-l-4 border-[#633806]/30">
                          <p className="text-xs italic text-[#633806] font-medium leading-relaxed">
                            {service.outcome}
                          </p>
                        </div>
                      )}

                      {/* Ideal For / Who Section */}
                      {service.idealFor && (
                        <div className="px-1">
                          <p className="text-xs text-dark/70 leading-relaxed">
                            <strong className="text-primary font-bold">Ideal for:</strong> {service.idealFor}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <Link
                        to={service.slug ? `/service/${service.slug}` : "/contact"}
                        className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-all group/link"
                      >
                        <span className="w-10 h-[1px] bg-primary/10 group-hover/link:w-16 group-hover/link:bg-accent transition-all duration-500" />
                        Explore Service
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE SECTION */}
      <section className="section-spacing bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto responsive-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 relative z-10">
            <div className="space-y-4">
              <span className="text-white/80 font-sans font-bold uppercase tracking-[0.3em] text-[10px] block">The Standard</span>
              <h2 className="editorial-heading text-white leading-tight">
                Uncompromising <br className="hidden md:block" />
                <span className="text-secondary italic font-normal">Clinical</span> Excellence.
              </h2>
            </div>
            <p className="text-white/90 font-medium leading-relaxed text-lg lg:text-xl">
              Our therapists follow rigorous evidence-based protocols to ensure your recovery is measurable and sustainable. We bring hospital-grade clinical outcomes directly to your home.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { title: 'Home Ready', text: 'Specialized portable equipment for clinical grade treatment.' },
                { title: 'Data Driven', text: 'Regular progress audits and recovery tracking reports.' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4 p-8 bg-white/10 rounded-[2rem] border border-white hover:bg-white/15 hover:border-white/40 transition-all duration-500">
                  <h4 className="text-xl font-serif font-bold text-white flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-12 rounded-none group">
                  Book a Clinical Specialist
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white/10"
            >
              <img
                src="/images/treatments/hero_physio_interaction_retry.png"
                alt="Expert clinical treatment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
