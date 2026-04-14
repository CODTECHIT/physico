import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check,
  Star,
  Clock,
  User,
  ClipboardList,
  ShieldCheck,
  Heart,
  TrendingUp,
  ArrowRight,
  Zap,
  Phone,
  MessageCircle,
  AlertCircle,
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
    note: "Final price confirmed after assessment",
    popular: false,
    gradient: "from-blue-50 to-white",
    icon: <User className="w-6 h-6" />,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
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
    note: "Sessions & price finalised after assessment",
    popular: true,
    gradient: "from-primary to-[#124d85]",
    icon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-white/20",
    iconColor: "text-white",
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
    note: "Sessions per month decided after assessment",
    popular: false,
    gradient: "from-emerald-50 to-white",
    icon: <Heart className="w-6 h-6" />,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const pricingSteps = [
  {
    num: 1,
    title: "You contact us",
    body: "WhatsApp or call to describe your condition briefly. We'll suggest the right package type.",
  },
  {
    num: 2,
    title: "Home assessment visit",
    body: "Dr. Bhanu visits your home and clinically assesses your condition, severity, and treatment needs.",
  },
  {
    num: 3,
    title: "Transparent quote given",
    body: "After assessment, Dr. Bhanu gives you the exact session cost or package price. No pressure, no surprises.",
  },
  {
    num: 4,
    title: "Treatment begins",
    body: "Once you're comfortable with the plan and price, treatment starts — at your pace, in your home.",
  },
];

const faqs = [
  {
    q: "Why isn't there a fixed price per session?",
    a: (
      <>
        A back pain patient needing 2 techniques and a stroke patient needing
        neurological rehab for 90 minutes require very different clinical
        effort.{" "}
        <strong>
          Charging both the same rate would either overcharge one patient or
          undervalue expert care for another.
        </strong>{" "}
        Our pricing is honest and condition-specific.
      </>
    ),
  },
  {
    q: "Can I negotiate the price after assessment?",
    a: (
      <>
        The price Dr. Bhanu quotes after your assessment is based on the
        clinical requirements of your condition — not a starting point for
        bargaining. <strong>We don't inflate prices expecting negotiation.</strong>{" "}
        What is quoted is the fair, final price for the care your condition needs.
      </>
    ),
  },
  {
    q: "What if I only want a few sessions to \"try it\"?",
    a: (
      <>
        You can absolutely start with a Single Home Visit. After your
        assessment, Dr. Bhanu will recommend the right number of sessions for
        your condition. <strong>Starting a package gives better results</strong>{" "}
        because physiotherapy works progressively — single sessions help but
        consistent treatment heals.
      </>
    ),
  },
  {
    q: "Are there any hidden charges?",
    a: (
      <>
        <strong>No.</strong> The price quoted after your assessment is
        all-inclusive — therapist travel, equipment, exercise plan, and WhatsApp
        support are all included. You will never receive an unexpected bill.
      </>
    ),
  },
  {
    q: "Do prices change if I live far from Kukatpally or Miyapur?",
    a: (
      <>
        Travel distance may be a factor for areas beyond our primary service
        zones. Dr. Bhanu will be transparent about this during your initial
        consultation — <strong>before any commitment is made.</strong>
      </>
    ),
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
    <div className="bg-white selection:bg-accent selection:text-white">
      {/* HERO SECTION */}
      <section className="pt-24 pb-12 lg:pt-40 lg:pb-16 relative overflow-hidden flex items-center">
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
              <span className="text-secondary font-sans font-bold uppercase tracking-[0.25em] text-[9px] lg:text-[10px]">
                Transparent Value-Based Pricing
              </span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-[1.1] tracking-tight">
              Honest Pricing for <br />
              <span className="text-accent italic font-normal">
                Expert
              </span>{" "}
              Recovery.
            </h1>

            <p className="text-dark/70 font-medium leading-relaxed text-base lg:text-xl max-w-3xl mx-auto">
              Every patient and every condition is different. Our pricing is
              guided by your assessment — not a fixed rate card. Below are
              indicative ranges to help you plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FAEEDA] border-[1.5px] border-[#EF9F27] rounded-3xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-[#EF9F27] rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-[#633806] font-bold text-sm lg:text-base">
                Important — Please read before comparing prices
              </h3>
            </div>
            <div className="space-y-4 text-[#854F0B] text-sm lg:text-[15px] leading-relaxed">
              <p>
                The prices shown below are{" "}
                <strong className="text-[#633806]">
                  indicative starting ranges only.
                </strong>{" "}
                Your actual session cost or package price will be confirmed by
                Dr. Bhanu{" "}
                <strong className="text-[#633806]">
                  after a detailed home assessment
                </strong>{" "}
                of your condition, severity, location, and treatment
                requirements.
              </p>
              <p>
                <strong className="text-[#633806]">Why do prices vary?</strong>{" "}
                A mild muscle strain and a post-stroke paralysis case require
                very different clinical time, techniques, and equipment.
                Charging both the same price would not be fair or accurate.
              </p>
              <p>
                We do not negotiate prices after assessment — our pricing
                reflects the clinical effort required for your specific
                condition, not a general market rate.{" "}
                <strong className="text-[#633806]">
                  What Dr. Bhanu quotes after assessment is the final, honest
                  price.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="pb-24 lg:pb-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
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
                className={`relative group flex flex-col rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden ${
                  pkg.popular
                    ? "shadow-[0_40px_100px_-20px_rgba(24,95,165,0.3)] z-10 scale-[1.02] border-primary/10"
                    : "bg-white border border-primary/5 shadow-xl hover:shadow-2xl hover:border-accent/20"
                } transition-all duration-700`}
              >
                {/* Background Gradient Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-100 -z-10`}
                />

                {pkg.popular && (
                  <div className="absolute top-0 right-0 p-8">
                    <div className="bg-accent text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-lg shadow-accent/20">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-12 h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="mb-10">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner ${pkg.iconBg} ${pkg.iconColor}`}
                    >
                      {pkg.icon}
                    </div>
                    <h3
                      className={`text-2xl lg:text-3xl font-serif font-bold mb-3 ${
                        pkg.popular ? "text-white" : "text-[#185FA5]"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs lg:text-sm font-medium leading-relaxed opacity-70 ${
                        pkg.popular ? "text-white/80" : "text-dark"
                      }`}
                    >
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-3xl lg:text-4xl font-serif font-bold tracking-tighter ${
                            pkg.popular ? "text-white" : "text-[#185FA5]"
                          }`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] mt-2 ${
                          pkg.popular ? "text-white/70" : "text-dark/60"
                        }`}
                      >
                        {pkg.unit}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`mb-10 text-[10px] lg:text-[11px] font-bold px-3 py-1.5 rounded-lg inline-block self-start ${
                      pkg.popular
                        ? "bg-white/10 text-white"
                        : "bg-[#FAEEDA] text-[#854F0B]"
                    }`}
                  >
                    {pkg.note}
                  </div>

                  {/* Features List */}
                  <div className="flex-grow space-y-5 lg:space-y-6 mb-12">
                    <div
                      className={`h-[1px] w-full ${pkg.popular ? "bg-white/10" : "bg-primary/5"}`}
                    />
                    {pkg.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-4 group/item"
                      >
                        <div
                          className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${
                            pkg.popular
                              ? "bg-white/10 text-white"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={`text-sm lg:text-[15px] font-medium leading-tight ${
                            pkg.popular ? "text-white/90" : "text-dark/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button Wrapper */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => onBook(pkg.name)}
                      variant={pkg.popular ? "secondary" : "primary"}
                      className={`w-full rounded-2xl py-5 lg:py-6 group shadow-2xl transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] border-none font-black tracking-[0.15em] text-[11px] lg:text-xs ${
                        pkg.popular
                          ? "bg-accent text-white hover:bg-white hover:text-primary shadow-accent/20"
                          : "bg-white text-[#185FA5] hover:bg-[#185FA5] hover:text-white ring-1 ring-[#185FA5] shadow-none"
                      }`}
                    >
                      {pkg.cta.toUpperCase()}
                      <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-surface rounded-3xl lg:rounded-[3rem] p-10 lg:p-16 border border-primary/5 shadow-sm">
            <h2 className="text-2xl lg:text-4xl font-serif font-bold text-primary text-center mb-16">
              How our pricing actually works — 4 simple steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {pricingSteps.map((step) => (
                <div key={step.num} className="text-center group">
                  <div className="w-12 h-12 bg-[#185FA5] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-lg shadow-[#185FA5]/20 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h4 className="font-serif font-bold text-primary text-lg mb-3">
                    {step.title}
                  </h4>
                  <p className="text-dark/60 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-4xl font-serif font-bold text-primary mb-12">
            Common questions about our pricing
          </h2>
          <div className="divide-y divide-primary/5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-8 first:pt-0 group">
                <h4 className="text-[#185FA5] font-bold text-base lg:text-lg mb-4 flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 border border-[#185FA5]/20 rounded-full flex items-center justify-center text-[10px] font-black">
                    Q
                  </span>
                  {faq.q}
                </h4>
                <div className="text-dark/70 text-sm lg:text-[15px] leading-relaxed pl-9">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F6E56] rounded-[2.5rem] lg:rounded-[4rem] p-10 lg:p-24 relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Not sure which package suits you?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto font-medium text-base lg:text-lg">
                WhatsApp Dr. Bhanu with your condition — he'll guide you to the
                right plan before any commitment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-4">
                <a
                  href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I'd like to consult about the best package for my recovery.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full rounded-full py-5 px-12 group bg-white text-[#0F6E56] hover:bg-accent hover:text-white shadow-xl shadow-black/20 border-none font-bold"
                  >
                    WHATSAPP US NOW
                    <MessageCircle className="ml-3 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
                <a
                  href="tel:+919502808581"
                  className="group flex flex-col items-center sm:items-start"
                >
                  <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white/40 mb-1 group-hover:text-accent transition-colors">
                    Direct Call
                  </span>
                  <div className="text-white font-bold uppercase tracking-[0.2em] text-sm lg:text-base flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    +91 95028 08581
                  </div>
                </a>
              </div>
              <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">
                No booking fees • Assessment-based pricing • No hidden charges
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
