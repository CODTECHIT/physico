import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const sections = [
  {
    title: '1. Information We Collect',
    text: 'At Flexo Physiotherapy, we collect various types of information to provide you with the best possible home-based care. We are committed to transparency in our data collection practices.',
    items: [
      'Personal Identification: Name, phone number, email address, date of birth, and emergency contacts.',
      'Location Details: Full residential address and any specific directions required for our physiotherapists to conduct home visit services safely and punctually.',
      'Health Information: Detailed medical history, current symptoms, clinical diagnosis, physician referral notes, MRI/X-ray reports, and ongoing medication records (if shared by you).',
      'Service Data: Comprehensive appointment details, treatment records, clinical progress notes, and billing history.',
      'Communication Records: Logs of phone calls, WhatsApp messages, emails, and any other correspondence between you and our clinical or administrative team.',
    ],
  },
  {
    title: '2. Purpose of Data Usage',
    text: 'The information we collect is strictly utilized to enhance the quality of your healthcare experience and ensure operational efficiency. We do not use your medical data for any unrelated commercial purposes.',
    items: [
      'Delivering personalized, evidence-based physiotherapy treatment directly at your home.',
      'Creating, monitoring, and adjusting customized rehabilitation and exercise plans based on your clinical progress.',
      'Facilitating seamless appointment scheduling, reminders, and essential follow-up communications.',
      'Processing payments and maintaining accurate billing records.',
      'Internal service improvement, clinical audits, and quality assurance to maintain the highest standards of care.',
    ],
  },
  {
    title: '3. Medical Confidentiality & Ethics',
    text: 'All patient data is handled with strict confidentiality, in full compliance with professional physiotherapy ethics and healthcare privacy standards. Your medical information, treatment plans, and recovery progress will never be disclosed to unauthorized third parties without your explicit, written consent, unless legally required by a court of law or regulatory body.',
  },
  {
    title: '4. Data Security Measures',
    text: 'We implement robust security protocols to protect your sensitive personal and medical data against unauthorized access, alteration, disclosure, or destruction.',
    items: [
      'Restricted, role-based access to patient data, ensuring only your assigned physiotherapist and essential administrative staff can view your records.',
      'Secure, encrypted digital storage practices for all electronic health records.',
      'Strict physical security measures for any paper-based records, which are kept in locked, confidential filing systems.',
    ],
  },
  {
    title: '5. Third-Party Disclosure',
    text: 'We strictly adhere to a policy of non-disclosure. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties for marketing or advertising purposes. Data may be shared exclusively with other licensed healthcare professionals directly involved in your multidisciplinary care (such as your referring orthopedic surgeon or physician), or when formally required by law enforcement or regulatory authorities.',
  },
  {
    title: '6. Website Tracking & Cookies',
    intro: 'Our website may use cookies, web beacons, and similar analytics tools to improve your browsing experience. These tools collect non-identifiable, aggregated data.',
    items: [
      'User experience enhancement by remembering your preferences and settings.',
      'Website performance monitoring to ensure fast load times and reliable access.',
      'Service optimization by analyzing which pages and treatments our visitors find most relevant.',
    ],
  },
  {
    title: '7. Patient Rights',
    intro: 'You retain full rights and control over your personal data. At any time, you may request:',
    items: [
      'Full access to a copy of your clinical records and personal data.',
      'Correction of any inaccurate, incomplete, or outdated information in our systems.',
      'Deletion of non-essential personal data, subject to our legal and regulatory obligations to retain medical records for a stipulated period.',
    ],
  },
  {
    title: '8. Policy Updates',
    text: 'This Privacy Policy may be updated periodically to reflect changes in our clinical practices, operational procedures, or legal obligations. We encourage you to review this page occasionally. Continued use of our home physiotherapy services implies your informed acceptance of any updates.',
  },
];

const PrivacyPolicy = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="bg-white">
      {/* HERO HEADER */}
      <section className="pt-20 pb-4 lg:pt-28 lg:pb-8 relative overflow-hidden min-h-[30vh] lg:min-h-[35vh] flex items-center">
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

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
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
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
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
                <h2 className="text-2xl lg:text-3xl font-bold text-primary border-l-4 border-accent pl-4">
                  <span className="font-sans">{section.title.split(' ')[0]}</span>{' '}
                  <span className="font-serif">{section.title.split(' ').slice(1).join(' ')}</span>
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
