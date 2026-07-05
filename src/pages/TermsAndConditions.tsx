import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const sections = [
  {
    title: '1. Scope of Services',
    text: 'Flexo Physiotherapy provides professional, home-based physiotherapy and rehabilitation services within designated service areas in and around Hyderabad (including Miyapur, Kukatpally, Gachibowli, and surrounding regions). By scheduling an appointment, you agree that our physiotherapists will provide treatment at your designated residential location in accordance with these terms.',
  },
  {
    title: '2. Clinical Disclaimer',
    text: 'Physiotherapy is a supportive and rehabilitative treatment, not a substitute for emergency medical care, surgical intervention, or primary physician care. Outcomes vary significantly based on the individual’s clinical condition, severity of the injury, age, and strict compliance with the prescribed treatment plan.',
    items: [
      'In case of medical emergencies (e.g., severe chest pain, sudden paralysis), please contact a hospital immediately.',
      'Our physiotherapists will conduct an initial assessment, but you must disclose your full medical history.',
      'Results are highly dependent on the patient’s active participation in prescribed exercises outside of our scheduled sessions.',
    ],
  },
  {
    title: '3. Appointments & Availability',
    text: 'We strive to provide timely and punctual services; however, as a home-visit service, travel times can occasionally be affected by unforeseen circumstances.',
    items: [
      'All treatment sessions are pre-scheduled through our official booking channels.',
      'Patients must ensure they are available at the confirmed time to avoid session cancellations.',
      'Minor delays (up to 30 minutes) may occur due to traffic or weather conditions. We will inform you proactively in such cases.',
    ],
  },
  {
    title: '4. Patient Responsibilities',
    intro: 'To ensure a safe and effective treatment process, patients explicitly agree to:',
    items: [
      'Provide complete and accurate medical history, including past surgeries, current medications, and known allergies.',
      'Inform the attending physiotherapist immediately about any unusual pain, discomfort, or adverse reactions during or after the session.',
      'Follow all prescribed home exercise programs and activity restrictions strictly.',
      'Maintain a safe, clean, and well-lit environment for the physiotherapist to conduct the treatment safely.',
      'Ensure a responsible adult is present during the treatment of minors (under 18 years of age).',
    ],
  },
  {
    title: '5. Payment Terms',
    text: 'To maintain transparency, our pricing is communicated clearly before the commencement of any treatment plan.',
    items: [
      'Fees must be paid as per the mutually agreed per-session rate or package plan.',
      'Advance payment or a partial deposit may be required to confirm bookings for comprehensive packages.',
      'We accept online payments, UPI, and bank transfers. Cash payments are accepted only with prior approval.',
      'Prices are subject to revision without prior notice, though ongoing package prices remain fixed once purchased.',
    ],
  },
  {
    title: '6. Service Area Limitation',
    text: 'While we aim to cover a broad radius across Hyderabad, our core services are primarily focused within a 15-20 km radius of our central base in Miyapur. Requests outside this designated service area may incur additional travel charges or may be declined based on therapist availability.',
  },
  {
    title: '7. Limitation of Liability',
    intro: 'Flexo Physiotherapy and its licensed practitioners shall not be held legally or financially responsible for:',
    items: [
      'Complications or deteriorations arising from undisclosed pre-existing medical conditions.',
      'Lack of expected improvement due to the patient’s failure to adhere to treatment protocols and home exercises.',
      'Any external medical conditions, acute illnesses, or injuries that fall beyond the scope of physiotherapy.',
      'Accidental property damage that may occur during the normal course of providing treatment, provided the therapist exercised reasonable care.',
    ],
  },
  {
    title: '8. Intellectual Property',
    text: 'All content on the Flexo Physiotherapy website, including but not limited to text, branding, logos, clinical graphics, and visual layouts, is the exclusive intellectual property of Flexo Physiotherapy. It may not be reproduced, copied, distributed, or used for commercial purposes without our explicit written permission.',
  },
];

const TermsAndConditions = () => {
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
