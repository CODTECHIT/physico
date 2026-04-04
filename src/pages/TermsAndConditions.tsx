import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const sections = [
  {
    title: '1. Scope of Services',
    text: 'Flexo Physiotherapy provides professional home-based physiotherapy and rehabilitation services within designated service areas near Miyapur, Hyderabad.',
  },
  {
    title: '2. Clinical Disclaimer',
    text: 'Physiotherapy is a supportive and rehabilitative treatment, not a substitute for emergency or medical care. Outcomes vary based on individual condition, severity, and compliance. Results may vary depending on individual condition and adherence to treatment.',
    items: [
      'Physiotherapy is a supportive and rehabilitative treatment, not a substitute for emergency or medical care',
      'Outcomes vary based on individual condition, severity, and compliance',
      'Results may vary depending on individual condition and adherence to treatment',
    ],
  },
  {
    title: '3. Appointments & Availability',
    items: [
      'All sessions are pre-scheduled',
      'Patients must be available at the confirmed time',
      'Minor delays may occur due to travel or unavoidable circumstances',
    ],
  },
  {
    title: '4. Patient Responsibilities',
    intro: 'Patients agree to:',
    items: [
      'Provide accurate medical history',
      'Inform about any pain/discomfort during sessions',
      'Follow prescribed exercises and precautions',
      'Maintain a safe and suitable environment for treatment',
    ],
  },
  {
    title: '5. Payment Terms',
    items: [
      'Fees must be paid as per agreed session/package plan',
      'Advance payment may be required',
      'Prices are subject to revision without prior notice',
    ],
  },
  {
    title: '6. Service Area Limitation',
    text: 'Services are provided within Miyapur and nearby areas within approximately 5 km radius.',
  },
  {
    title: '7. Limitation of Liability',
    intro: 'Flexo Physiotherapy shall not be held responsible for:',
    items: [
      'Complications arising from pre-existing conditions',
      'Lack of adherence to treatment protocols',
      'External medical conditions beyond physiotherapy scope',
    ],
  },
  {
    title: '8. Intellectual Property',
    text: 'All website content (text, branding, visuals) belongs to Flexo Physiotherapy and cannot be reproduced without permission.',
  },
];

const TermsAndConditions = () => {
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
            alt="Terms & Conditions Background"
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
              Terms & <span className="text-accent italic font-normal">Conditions</span>
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
                <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <p className="text-dark font-medium leading-relaxed text-sm lg:text-base">
                Please read these terms and conditions carefully before using our home physiotherapy services. By accessing or using our services, you agree to be bound by these terms.
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

export default TermsAndConditions;
