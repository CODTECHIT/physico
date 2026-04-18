import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import SEO from '../components/SEO';
import { getFAQSchema } from '../lib/seo-schemas';


const faqCategories = [
  {
    title: 'General Questions',
    questions: [
      {
        q: 'What is home physiotherapy?',
        a: 'Home physiotherapy is a service where a qualified physiotherapist visits your home to provide assessment, treatment, and rehabilitation in a comfortable and convenient environment.'
      },
      {
        q: 'Who can benefit from home physiotherapy?',
        a: 'This service is ideal for:\n• Post-surgery patients\n• Elderly individuals\n• Stroke or neurological patients\n• People with severe pain or mobility issues\n• Anyone who prefers treatment at home'
      },
      {
        q: 'What conditions do you treat?',
        a: 'We manage a wide range of conditions including back pain, neck pain, knee pain, sports injuries, post-surgical recovery, stroke rehabilitation, and mobility-related issues.'
      },
      {
        q: 'How does a home physiotherapy session work?',
        a: 'Each session begins with a detailed assessment followed by targeted treatment, guided exercises, and progress monitoring based on your condition.'
      },
      {
        q: 'Do I need a doctor\'s referral?',
        a: 'A referral is not mandatory. However, if you have medical reports or previous consultations, they can help us plan your treatment more effectively.'
      },
      {
        q: 'Is the first consultation really free?',
        a: 'Yes. The initial phone/video call to understand your condition and recommend a plan is completely free. You only pay when you confirm and book a home visit.'
      },
      {
        q: 'Is home physiotherapy as effective as clinic treatment?',
        a: 'Yes. With personalized attention and a structured approach, home physiotherapy can be equally effective, especially for recovery and long-term results.'
      },
      {
        q: `Why choose ${BRAND_NAME}?`,
        a: 'We focus on identifying the root cause, providing personalized treatment, and guiding patients through every stage of recovery to achieve long-term results.'
      }
    ]
  },
  {
    title: 'Booking & Session Details',
    questions: [
      {
        q: 'How do I book a session?',
        a: "You can book by calling us, WhatsApp-ing us, or filling the booking form on this page. We'll confirm your slot within a few hours."
      },
      {
        q: 'How long is each session?',
        a: 'A typical session is 40–60 minutes. The first session may take slightly longer as the therapist will do a full assessment.'
      },
      {
        q: 'What does the therapist bring to the session?',
        a: 'Our therapists carry all necessary equipment   portable ultrasound, TENS machine, resistance bands, and any other tools required for your treatment. You don\'t need to arrange anything.'
      },
      {
        q: 'How many sessions will I need?',
        a: 'The number of sessions depends on your condition, severity, and recovery goals. A personalized plan will be discussed after the initial assessment.'
      },
      {
        q: 'Can I request the same therapist for all my sessions?',
        a: 'Absolutely. For ongoing packages, we assign you a dedicated therapist for continuity of care.'
      },
      {
        q: 'What is your cancellation policy?',
        a: 'You can reschedule or cancel up to 40 to 60 minutes before your session at no charge. Late cancellations may incur a ₹300 fee.'
      },
      {
        q: 'Do you accept insurance?',
        a: 'We currently work on a cash/UPI payment basis. We can provide receipts and session summaries for you to submit to your insurance provider.'
      },
      {
        q: 'Do you offer sessions for elderly patients?',
        a: 'Yes   a significant portion of our patients are elderly. Our therapists are trained in geriatric care and are experienced with home environments.'
      }
    ]
  },
  {
    title: 'Coverage & Team',
    questions: [
      {
        q: 'Which areas in Hyderabad do you cover?',
        a: 'We cover 20+ neighbourhoods including Banjara Hills, Gachibowli, Kondapur, Jubilee Hills, Kukatpally, and more. Call us to check if we cover your area.'
      },
      {
        q: 'Are your therapists qualified?',
        a: 'All our therapists hold a BPT (Bachelor of Physiotherapy) or MPT (Master of Physiotherapy) degree from recognised universities and are registered with the IAP (Indian Association of Physiotherapists).'
      },
      {
        q: 'How quickly can I get a home physiotherapy session near me?',
        a: 'We offer quick scheduling, and in many cases, same-day home visits are available based on appointment availability.'
      }
    ]
  }
];

const FAQ = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const [openIndex, setOpenIndex] = useState<{ [key: number]: number | null }>({});

  const toggleQuestion = (categoryIdx: number, questionIdx: number) => {
    setOpenIndex(prev => ({
      ...prev,
      [categoryIdx]: prev[categoryIdx] === questionIdx ? null : questionIdx
    }));
  };

  const allFaqs = faqCategories.flatMap(cat => cat.questions);
  const faqSchema = getFAQSchema(allFaqs);

  return (
    <div className="bg-white">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about home physiotherapy in Hyderabad, treatment procedures, booking, and more."
        canonical="/faq"
        schema={faqSchema}
      />
      {/* HERO HEADER */}

      <section className="pt-8 pb-6 lg:pt-12 lg:pb-8 relative overflow-hidden min-h-[25vh] lg:min-h-[35vh] flex items-center">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/bg.webp"
            alt="FAQ Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
        </motion.div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase">
          FAQ
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-8 lg:w-12 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                Support & Information
              </span>
              <span className="w-8 lg:w-12 h-[2px] bg-accent" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary leading-tight">
              Frequently Asked <span className="text-accent italic font-normal">Questions</span>
            </h1>
            <p className="text-dark font-medium leading-relaxed text-sm lg:text-lg max-w-2xl mx-auto opacity-80">
              Find answers to common questions about our home physiotherapy services, treatment areas, and how we can help you on your road to recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-4 lg:py-10 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {faqCategories.map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
                className="mb-8 lg:mb-12"
              >
              <div className="text-center mb-6 lg:mb-10">
                <h2 className="text-xl lg:text-3xl font-serif font-bold text-primary">
                  {category.title}
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
              </div>

              <div className="space-y-4 lg:space-y-6">
                {category.questions.map((item, questionIdx) => (
                  <motion.div
                    key={questionIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: questionIdx * 0.05 }}
                    className="bg-surface rounded-2xl lg:rounded-3xl overflow-hidden border border-primary/5"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIdx, questionIdx)}
                      className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                    >
                      <div className="flex items-start gap-4 pr-4">
                        <HelpCircle className="w-5 h-5 lg:w-6 lg:h-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm lg:text-base font-bold text-primary">
                          {item.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 lg:w-6 lg:h-6 text-accent shrink-0 transition-transform duration-300 ${openIndex[categoryIdx] === questionIdx ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex[categoryIdx] === questionIdx ? 'auto' : 0,
                        opacity: openIndex[categoryIdx] === questionIdx ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0 pl-14 lg:pl-16">
                        <div className="text-sm lg:text-base text-dark font-medium leading-relaxed whitespace-pre-line">
                          {item.a}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-6 lg:py-8 bg-primary/[0.02] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,186,155,0.03)_0,transparent_70%)]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl lg:text-4xl font-serif font-bold text-primary mb-4 lg:mb-6">
            Still have questions?
          </h2>
          <p className="text-dark font-medium leading-relaxed mb-6 lg:mb-8 opacity-80">
            Our team is here to help. Contact us directly for personalized answers about your condition and our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6">
            <a
              href={`https://wa.me/919502808581?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I have a question about your services.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto rounded-none px-8 lg:px-10 py-3 lg:py-4 bg-accent hover:bg-accent/90 text-white font-bold text-xs lg:text-sm uppercase tracking-[0.1em] transition-all duration-300">
                WhatsApp Us
              </button>
            </a>
            <a href="tel:+919502808581" className="text-primary font-bold uppercase tracking-widest text-xs lg:text-sm hover:text-accent transition-colors">
              Call: +91 95028 08581
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;