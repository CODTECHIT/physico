import { motion, useScroll, useTransform } from "framer-motion";
import {
  ClipboardCheck,
  BookOpen,
  Activity,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import { BRAND_NAME } from "../constants";
import Button from "../components/Button";

const Conditions = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-white">
      {/* 1. CLINICAL HEADER */}
      <section className="pt-28 pb-10 lg:pt-44 lg:pb-14 relative overflow-hidden text-center min-h-[50vh] lg:min-h-[70vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/images/treatments/back_pain_treatment-opt.webp"
            alt={`${BRAND_NAME} Conditions Background`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
        </motion.div>

        {/* Large background text for editorial feel */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[18vw] font-serif font-bold text-primary/[0.03] select-none pointer-events-none whitespace-nowrap uppercase tracking-widest">
          TREATMENT
        </div>

        <div className="max-w-5xl mx-auto responsive-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 lg:space-y-16"
          >
            <div className="space-y-8 lg:space-y-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="w-8 lg:w-12 h-[2px] bg-accent" />
                <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                  Professional Clinical Expertise
                </span>
                <span className="w-8 lg:w-12 h-[2px] bg-accent" />
              </div>

              <div className="space-y-6 lg:space-y-10">
                <h1 className="editorial-heading text-primary max-w-3xl mx-auto leading-[1.2]">
                  At Flexo Physiotherapy Every treatment begins with a{" "}
                  <span className="text-accent italic font-normal">
                    detailed clinical assessment,
                  </span>{" "}
                  not just symptom relief.
                </h1>

                <p className="text-base lg:text-xl text-dark font-medium leading-relaxed max-w-2xl mx-auto opacity-80">
                  We evaluate the exact cause
                  of your condition before designing a treatment plan. Your
                  medical history, movement patterns, joint mobility, and past
                  surgeries are all reviewed to ensure safe, accurate, and
                  personalised care.
                </p>
              </div>
            </div>

            {/* Side-by-side assessment deep-dive boxes */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-10">
              <div className="bg-surface/30 px-5 py-4 lg:px-7 lg:py-5 rounded-2xl border-l-4 border-accent text-left hover:bg-white hover:shadow-xl transition-all duration-500">
                <p className="text-xs lg:text-sm text-dark/70 font-medium leading-snug">
                  We evaluate joint range of motion, muscle strength, and movement patterns reviewing your medical reports and surgical history for a complete picture.
                </p>
              </div>

              <div className="bg-surface/30 px-5 py-4 lg:px-7 lg:py-5 rounded-2xl border-l-4 border-accent text-left hover:bg-white hover:shadow-xl transition-all duration-500">
                <p className="text-xs lg:text-sm text-dark/70 font-medium leading-snug">
                  We perform guided movements to identify mobility restrictions, then design a personalised rehabilitation program tailored to your condition and recovery goals.
                </p>
              </div>

              <div className="col-span-2">
                <div className="bg-primary/5 px-5 py-4 lg:px-7 lg:py-5 rounded-2xl border-l-4 border-primary text-center">
                  <p className="text-sm lg:text-base text-primary font-bold leading-snug italic">
                    Our focus is not only on improving your current condition but restoring function, enhancing movement quality, and guiding you toward long-term physical health.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CLINICAL PROCESS METHODOLOGY */}
      <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/2 opacity-50 -skew-x-12 translate-x-1/2" />

        <div className="max-w-[1600px] mx-auto responsive-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                id: "01",
                title: "Comprehensive Assessment",
                desc: "Detailed evaluation of joint mobility, muscle strength, and movement patterns to understand the exact problem.",
                icon: <ClipboardCheck className="w-6 h-6 lg:w-8 lg:h-8" />,
              },
              {
                id: "02",
                title: "Clinical Understanding",
                desc: "Review of medical history, reports, and previous treatments to ensure safe and accurate care.",
                icon: <BookOpen className="w-6 h-6 lg:w-8 lg:h-8" />,
              },
              {
                id: "03",
                title: "Functional Movement Analysis",
                desc: "Identifying limitations, imbalances, and restrictions affecting daily activities.",
                icon: <Activity className="w-6 h-6 lg:w-8 lg:h-8" />,
              },
              {
                id: "04",
                title: "Targeted Intervention",
                desc: "Application of appropriate techniques and exercises based on your condition and recovery stage.",
                icon: <Target className="w-6 h-6 lg:w-8 lg:h-8" />,
              },
              {
                id: "05",
                title: "Progressive Rehabilitation",
                desc: "Step-by-step recovery plan focused on improving strength, mobility, and function.",
                icon: <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />,
              },
              {
                id: "06",
                title: "Long-Term Prevention",
                desc: "Guidance to maintain results, prevent recurrence, and support a healthier lifestyle.",
                icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8" />,
              },
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex gap-4 p-6 bg-surface/30 rounded-3xl border border-primary/5 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:-rotate-3">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-accent tracking-[0.3em] font-sans">
                      STEP {step.id}
                    </span>
                    <div className="h-[1px] w-6 bg-accent/20" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-dark/70 font-medium leading-relaxed text-sm lg:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADVANCED TECHNIQUES SECTION */}
      <section className="py-12 lg:py-24 bg-primary/[0.02] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,186,155,0.03)_0,transparent_70%)]" />
        </div>

        <div className="max-w-[1700px] mx-auto responsive-padding relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs">
                Precision & Technical Expertise
              </span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="editorial-heading text-primary mb-6">
              Advanced Techniques{" "}
              <span className="text-accent italic font-normal">We Use</span>
            </h2>
            <p className="text-dark/60 font-medium tracking-[0.1em] uppercase text-[10px] lg:text-sm">
              Comprehensive Clinical Modalities for Targeted Recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                category: "Manual & Joint-Based",
                items: [
                  {
                    title: "Manual Therapy & Joint Mobilization",
                    desc: "Specialized hands-on techniques for joint mechanics and movement correction.",
                  },
                  {
                    title: "Manipulation Therapy (HVLA)",
                    desc: "Advanced manual intervention applied to restore joint function and mobility.",
                  },
                  {
                    title: "Chiropractic Techniques",
                    desc: "Spinal and joint adjustments performed by our certified chiropractor.",
                    badge: "Specialist"
                  },
                ],
              },
              {
                category: "Soft Tissue & Myofascial",
                items: [
                  {
                    title: "Myofascial Release (IASTM)",
                    desc: "Instrument-assisted method for addressing soft tissue and fascial dysfunction.",
                  },
                  {
                    title: "Cupping Therapy",
                    desc: "Therapeutic soft tissue approach using controlled negative pressure.",
                  },
                  {
                    title: "Kinesio Taping",
                    desc: "Elastic taping to support muscles and joints without restricting movement.",
                    badge: "Certified"
                  },
                ],
              },
              {
                category: "Neuromuscular & Neural",
                items: [
                  {
                    title: "Dry Needling Therapy",
                    desc: "Advanced neuromuscular intervention for targeted muscle regulation.",
                    badge: "Certified"
                  },
                  {
                    title: "Neurodynamic Techniques",
                    desc: "Nerve Gliding & Nerve Flossing to improve nerve mobility and reduce neural tension.",
                  },
                  {
                    title: "PNF Neuromuscular Facilitation",
                    desc: "Technique to enhance coordination, control, and range of motion.",
                  },
                ],
              },
              {
                category: "Movement & Rehabilitation",
                items: [
                  {
                    title: "Exercise Therapy & Functional Training",
                    desc: "Progressive rehabilitation focused on restoring functional performance.",
                  },
                  {
                    title: "Dynamic Stretching Techniques",
                    desc: "Improve flexibility, mobility, and muscle activation.",
                  },
                  {
                    title: "Motor Control & Movement Re-education",
                    desc: "Retrain movement patterns and improve functional efficiency.",
                  },
                ],
              },
              {
                category: "Electrotherapy & Modalities",
                items: [
                  {
                    title: "EMS Electrical Muscle Stimulation",
                    desc: "Muscle activation and neuromuscular stimulation.",
                  },
                  {
                    title: "TENS & IFT Therapy",
                    desc: "Pain management using low and medium frequency electrical currents.",
                  },
                  {
                    title: "Ultrasound & Thermotherapy",
                    desc: "Deep tissue healing and superficial tissue relaxation modalities.",
                  },
                  {
                    title: "Cryotherapy (Cold Therapy)",
                    desc: "Cooling technique applied for acute tissue management.",
                  },
                ],
              },
              {
                category: "Assessment & Analysis",
                items: [
                  {
                    title: "MMT Manual Muscle Testing",
                    desc: "Clinical method to evaluate muscle strength and functional capacity.",
                  },
                  {
                    title: "FMS-Based Assessment",
                    desc: "Movement analysis to identify imbalances and potential risk factors.",
                  },
                  {
                    title: "Postural & Gait Analysis",
                    desc: "Detailed analysis of standing posture and walking patterns to guide treatment planning.",

                  },
                ],
              },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="space-y-6 p-6 lg:p-8 bg-white rounded-2xl border border-primary/5 shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                <div className="space-y-2">
                  <div className="w-10 h-1 bg-accent rounded-full mb-4 group-hover:w-16 transition-all duration-500" />
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {cat.items.map((item, i) => (
                    <div key={i} className="space-y-2 group/item">
                      <h4 className="text-sm lg:text-base font-bold text-primary border-l-2 border-accent/20 pl-4 group-hover/item:border-accent transition-colors duration-300 flex items-center flex-wrap gap-2">
                        {item.title}
                        {item.badge && (
                          <span className="bg-accent/10 text-accent text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {item.badge}
                          </span>
                        )}
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
        </div>
      </section>

      {/* 4. CONDITIONS WE TREAT AT HOME */}
      <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto responsive-padding relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Conditions We Treat at Home</span>
              <span className="w-8 h-[2px] bg-accent" />
            </div>
            <p className="text-dark/70 font-medium text-sm lg:text-base">
              Expert home-visit physiotherapy for all these conditions across Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {[
              "Back & Neck Pain",
              "Knee Pain & Arthritis",
              "Stroke & Paralysis Rehab",
              "Sports Injuries",
              "Post-Surgical Recovery",
              "Joint Disorders",
              "Frozen Shoulder",
              "Sciatica & Disc Problems",
              "Elderly & Geriatric Care"
            ].map((condition, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface/30 p-4 lg:p-6 rounded-2xl flex items-center gap-4 hover:bg-accent/5 hover:border-accent/20 border border-transparent transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm lg:text-lg font-bold text-primary">{condition}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto responsive-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-8 lg:p-16 rounded-[2.5rem] lg:rounded-[4rem] text-center space-y-8 lg:space-y-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="space-y-4 relative z-10">
              <h2 className="text-2xl lg:text-5xl font-serif font-bold text-white leading-tight italic">
                Start Your Recovery Journey
              </h2>
              <p className="text-white/80 font-medium text-sm lg:text-lg max-w-2xl mx-auto">
                First assessment included. Our therapist comes to your home (Kukatpally, Miyapur, Kondapur & nearby areas).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 relative z-10">
              <a
                href={`https://wa.me/919502808581?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book a home visit.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full rounded-full px-10 group bg-accent hover:bg-accent/90 border-none text-white font-bold"
                >
                  Book a Home Visit
                </Button>
              </a>
              <a
                href={`https://wa.me/919502808581?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I have a query about your treatments.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full px-10 border-white text-white hover:bg-white hover:text-primary transition-all font-bold"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <p className="text-white/60 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] relative z-10">
              Call us: +91 95028 08581 · No hidden charges · 1,000+ patients treated
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Conditions;
