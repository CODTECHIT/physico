import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const sections = [
  {
    title: '1. Information We Collect',
    items: [
      'Personal Identification: Name, phone number, email address',
      'Location Details: Address for home visit services',
      'Health Information: Medical history, diagnosis, reports (if shared)',
      'Service Data: Appointment details, treatment records, progress notes',
      'Communication Records: Calls, WhatsApp messages, emails',
    ],
  },
  {
    title: '2. Purpose of Data Usage',
    items: [
      'Delivering physiotherapy treatment at home',
      'Creating personalized rehabilitation plans',
      'Monitoring recovery and clinical progress',
      'Appointment scheduling and follow-ups',
      'Internal service improvement and quality assurance',
    ],
  },
  {
    title: '3. Medical Confidentiality & Ethics',
    text: 'All patient data is handled with strict confidentiality, in line with professional physiotherapy ethics. Your medical information will never be disclosed without consent unless legally required.',
  },
  {
    title: '4. Data Security Measures',
    items: [
      'Restricted access to patient data',
      'Secure digital storage practices',
      'Confidential handling by authorized personnel only',
    ],
  },
  {
    title: '5. Third-Party Disclosure',
    text: 'We do not sell or share your personal data. Data may be shared only with licensed professionals involved in your care, or when required by law or regulatory authorities.',
  },
  {
    title: '6. Website Tracking & Cookies',
    items: [
      'User experience',
      'Website performance',
      'Service optimization',
    ],
    intro: 'Our website may use cookies or analytics tools to improve:',
  },
  {
    title: '7. Patient Rights',
    items: [
      'Access to your data',
      'Correction of inaccurate information',
      'Deletion of non-essential data (subject to legal obligations)',
    ],
    intro: 'You may request:',
  },
  {
    title: '8. Policy Updates',
    text: 'This Privacy Policy may be updated periodically. Continued use of our services implies acceptance of updates.',
  },
];

const PrivacyPolicy = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-white">
      {/* HERO HEADER */}
      <section className="pt-20 pb-4 lg:pt-28 lg:pb-8 relative overflow-hidden min-h-[30vh] lg:h-[35vh] flex items-center">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000"
            alt="Privacy Policy Background"
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
                {BRAND_NAME}
              </span>
              <span className="w-6 h-[2px] bg-accent" />
            </div>
            <h1 className="text-4xl lg:text-7xl font-serif font-bold text-primary leading-tight">
              Privacy <span className="text-accent italic font-normal">Policy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-4 pb-10 lg:pt-8 lg:pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-white p-6 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] shadow-xl border border-primary/5 space-y-8 lg:space-y-12">
            {/* Intro */}
            <div className="flex items-start gap-4 lg:gap-6 bg-accent/5 p-5 lg:p-6 rounded-xl lg:rounded-2xl">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <p className="text-dark font-medium leading-relaxed text-sm lg:text-base">
                At {BRAND_NAME}, we respect your privacy and are committed to protecting your personal and medical information in accordance with applicable healthcare and data protection standards.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="space-y-3 lg:space-y-4"
              >
                <h2 className="text-xl lg:text-2xl font-serif font-bold text-primary border-l-4 border-accent pl-4">
                  {section.title}
                </h2>
                {section.text && (
                  <p className="text-dark font-medium leading-relaxed text-sm lg:text-base opacity-80 pl-4">
                    {section.text}
                  </p>
                )}
                {section.intro && (
                  <p className="text-dark font-medium leading-relaxed text-sm lg:text-base opacity-80 pl-4">
                    {section.intro}
                  </p>
                )}
                {section.items && (
                  <ul className="space-y-2 lg:space-y-3 pl-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark font-medium text-sm lg:text-base opacity-80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
