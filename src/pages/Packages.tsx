import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check,
  Calendar,
  User,
  ClipboardList,
  Heart,
  TrendingUp,
  ArrowRight,
  Zap,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { BRAND_NAME, CONTACT_WHATSAPP_LINK } from "../constants";
import Button from "../components/Button";

const packages = [
  {
    name: "Single Home Visit",
    price: "₹ 800 – 1,200",
    unit: "per session (indicative)",
    desc: "Perfect for initial consultation or immediate pain relief",
    features: [
      "45–60 min one-on-one session",
      "Full clinical assessment included",
      "Personalised home exercise plan",
      "All equipment carried by therapist",
      "WhatsApp support after session",
    ],
    cta: "Book a Session",
    popular: false,
    gradient: "from-blue-50 to-white",
    icon: <User className="w-6 h-6" />,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    note: "Final price confirmed after assessment",
  },
  {
    name: "Recovery Package",
    price: "₹ 8,000 – 15,000",
    unit: "for 10–15 sessions (indicative)",
    desc: "Deeply focused rehabilitation for post-surgery or chronic conditions",
    features: [
      "Best for post-surgery & chronic conditions",
      "Priority scheduling guaranteed",
      "Progress tracked across every session",
      "Treatment plan updated as you improve",
      "WhatsApp support between sessions",
      "Home exercise program included",
    ],
    cta: "Get This Package",
    popular: true,
    gradient: "from-primary to-[#1e40af]",
    icon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-white/20",
    iconColor: "text-white",
    note: "Sessions & price finalised after assessment",
  },
  {
    name: "Monthly Wellness Plan",
    price: "₹ 18,000 – 28,000",
    unit: "per month / 20–30 sessions (indicative)",
    desc: "Comprehensive ongoing care for elderly, seniors, and chronic conditions",
    features: [
      "Ideal for elderly & ongoing conditions",
      "Dedicated assigned therapist",
      "Monthly progress report shared",
      "Family briefed on home care routine",
      "Priority booking every month",
    ],
    cta: "Enquire Now",
    popular: false,
    gradient: "from-emerald-50 to-white",
    icon: <Calendar className="w-6 h-6" />,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    note: "Sessions per month decided after assessment",
  },
];

const faqs = [
  {
    q: "Why isn't there a fixed price per session?",
    a: "A back pain patient needing 2 techniques and a stroke patient needing neurological rehab for 90 minutes require very different clinical effort. **Charging both the same rate would either overcharge one patient or undervalue expert care for another.** Our pricing is honest and condition-specific.",
  },
  {
    q: "Can I negotiate the price after assessment?",
    a: "The price Dr. Bhanu quotes after your assessment is based on the clinical requirements of your condition  not a starting point for bargaining. **We don't inflate prices expecting negotiation.** What is quoted is the fair, final price for the care your condition needs.",
  },
  {
    q: "What if I only want a few sessions to \"try it\"?",
    a: "You can absolutely start with a Single Home Visit. After your assessment, Dr. Bhanu will recommend the right number of sessions for your condition. **Starting a package gives better results** because physiotherapy works progressively  single sessions help but consistent treatment heals.",
  },
  {
    q: "Are there any hidden charges?",
    a: "**No.** The price quoted after your assessment is all-inclusive  therapist travel, equipment, exercise plan, and WhatsApp support are all included. You will never receive an unexpected bill.",
  },
  {
    q: "Do prices change if I live far away?",
    a: "Travel distance may be a factor for areas beyond our primary service zones. Dr. Bhanu will be transparent about this during your initial consultation  **before any commitment is made.**",
  },
];

const steps = [
  {
    num: 1,
    title: "You contact us",
    desc: "WhatsApp or call to describe your condition briefly. We'll suggest the right package type.",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    num: 2,
    title: "Home assessment visit",
    desc: "Dr. Bhanu visits your home and clinically assesses your condition, severity, and treatment needs.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    num: 3,
    title: "Transparent quote given",
    desc: "After assessment, Dr. Bhanu gives you the exact session cost or package price. No pressure, no surprises.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    num: 4,
    title: "Treatment begins",
    desc: "Once you're comfortable with the plan and price, treatment starts  at your pace, in your home.",
    icon: <Heart className="w-6 h-6" />,
  },
];

const Packages = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);

  const onBook = (pkgName: string) => {
    const text = encodeURIComponent(
      `Hi ${BRAND_NAME}, I'm interested in the ${pkgName}. Please provide more details.`,
    );
    window.open(`${CONTACT_WHATSAPP_LINK}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white selection:bg-accent selection:text-white font-sans">
      {/* HERO SECTION */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-8 relative overflow-hidden flex items-center">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/bg.webp"
            alt="Packages Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary/10">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                Transparent Value-Based Pricing
              </span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              Honest Pricing for <br />
              <span className="text-accent italic font-normal">Expert</span> Recovery.
            </h1>

            <p className="text-dark/70 font-medium leading-relaxed text-base lg:text-xl max-w-3xl mx-auto">
              Every patient and every condition is different. Our pricing is guided by your assessment  not a fixed rate card. Below are indicative ranges to help you plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="pb-4 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-dark/50 text-xs lg:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
            <span className="font-bold text-accent uppercase tracking-wider mr-2">Note:</span>
            Prices shown are indicative starting ranges. Final costs are confirmed by Dr. Bhanu after a home assessment based on your specific condition and clinical requirements.
            <br className="hidden sm:block" />
            Depending on the condition and complexity, we charge for the clinical effort required.
          </p>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="py-6 lg:py-10 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9],
                }}
                className={`relative group flex flex-col rounded-[2.5rem] overflow-hidden ${pkg.popular
                    ? "shadow-2xl z-10 scale-[1.02] ring-1 ring-primary/20"
                    : "bg-white border border-primary/5 shadow-xl hover:shadow-2xl"
                  } transition-all duration-700`}
              >
                {/* Background Gradient Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-100 -z-10`}
                />

                {pkg.popular && (
                  <div className="absolute top-0 right-0 p-8">
                    <div className="bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-10 h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${pkg.iconBg} ${pkg.iconColor}`}
                    >
                      {pkg.icon}
                    </div>
                    <h3
                      className={`text-2xl font-serif font-bold mb-3 ${pkg.popular ? "text-white" : "text-primary"
                        }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed opacity-80 ${pkg.popular ? "text-white/80" : "text-dark/70"
                        }`}
                    >
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline flex-wrap gap-x-2">
                        <span
                          className={`text-2xl lg:text-3xl font-numeric font-bold tracking-tight ${pkg.popular ? "text-white" : "text-primary"
                            }`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-widest ${pkg.popular ? "text-white/70" : "text-accent"
                          }`}
                      >
                        {pkg.unit}
                      </span>
                    </div>
                    <div className={`mt-5 inline-block px-3 py-1.5 rounded-lg text-[10px] lg:text-[11px] font-bold ${pkg.popular ? "bg-white/15 text-white" : "bg-[#FAEEDA] text-[#854F0B]"
                      }`}>
                      {pkg.note}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow space-y-4 mb-10">
                    <div
                      className={`h-[1px] w-full ${pkg.popular ? "bg-white/10" : "bg-primary/5"}`}
                    />
                    {pkg.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-3 group/item text-balance"
                      >
                        <div
                          className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${pkg.popular
                              ? "bg-white/10 text-white"
                              : "bg-accent/10 text-accent"
                            }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={`text-sm font-medium leading-snug ${pkg.popular ? "text-white/90" : "text-dark/80"
                            }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => onBook(pkg.name)}
                    variant={pkg.popular ? "secondary" : "primary"}
                    className={`w-full rounded-2xl py-4 group shadow-xl transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] font-bold tracking-wider text-xs ${pkg.popular
                        ? "bg-accent text-white hover:bg-white hover:text-primary"
                        : "bg-primary text-white hover:bg-accent"
                      }`}
                  >
                    {pkg.cta.toUpperCase()}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-8 lg:py-12 bg-surface/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary">
              How our pricing actually works
            </h2>
            <p className="text-dark/60 font-medium text-lg">Four simple steps to starting your recovery journey</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-primary/5 hover:shadow-md transition-all text-center group"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold font-serif group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-dark/60 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary">
              Common questions about our pricing
            </h2>
          </div>

          <div className="divide-y divide-primary/5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="py-8 space-y-3 group"
              >
                <h3 className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors">
                  {faq.q}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm lg:text-base font-medium">
                  {faq.a.split("**").map((part, index) =>
                    index % 2 === 1 ? <strong key={index} className="text-primary">{part}</strong> : part
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-8 lg:py-12 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0F6E56] rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-center text-white"
          >
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-xl lg:text-2xl font-serif font-bold">
                Not sure which package suits you?
              </h2>
              <p className="text-white/80 text-sm font-medium">
                WhatsApp Dr. Bhanu with your condition - he'll guide you to the right plan.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I'd like to consult about the best package for my recovery.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold bg-white text-[#0F6E56] px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  WhatsApp Us Now
                </a>
                <a
                  href="tel:+919502808581"
                  className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  Call +91 95028 08581
                </a>
              </div>

              <div className="text-white/40 text-[10px] font-medium pt-2">
                No booking fees • Assessment-based pricing • No hidden charges
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
