import { motion, useScroll, useTransform } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const sections = [
  {
    title: '1. Appointment Cancellation',
    items: [
      'Cancellations must be communicated at least 6 hours prior to the scheduled home visit to avoid any inconvenience to our therapists and other patients.',
      'Late cancellations (within 6 hours of the appointment) may incur a cancellation fee equivalent to 50% of the session charge.',
      'To cancel an appointment, please contact us directly via phone call or our official WhatsApp number.',
    ],
  },
  {
    title: '2. Rescheduling Policy',
    items: [
      'Patients may request to reschedule an appointment up to 4 hours before the scheduled time without any penalty.',
      'Rescheduling requests are strictly subject to the availability of the physiotherapist.',
      'In genuine emergency situations (e.g., sudden severe illness or hospitalization), late rescheduling may be considered without penalty on a case-by-case basis.',
    ],
  },
  {
    title: '3. Refund Policy',
    intro: 'Because we provide a service rather than a physical product, our standard policy dictates that all payments made for completed physiotherapy sessions are strictly non-refundable. However, we strive for patient satisfaction and will review specific scenarios as outlined below:',
    items: [
      'If you accidentally made a duplicate payment due to a technical glitch, the duplicate amount will be refunded in full within 5-7 business days.',
      'If you have paid in advance for a single session and cancel with appropriate notice (more than 6 hours prior), you may request a refund, minus any transaction processing fees.',
      'Any decisions regarding refunds rest solely with the management of Flexo Physiotherapy.',
    ],
  },
  {
    title: '4. Session Packages',
    items: [
      'Discounted treatment packages (e.g., 5, 10, or 15 sessions) are non-transferable to other individuals unless specifically approved by management.',
      'Packages must be fully utilized within their stated validity period (typically 3 to 6 months depending on the package type).',
      'Unused sessions within an expired package are non-refundable and will lapse.',
      'If a patient relocates outside our service area mid-package, partial refunds for unused sessions may be considered on a pro-rata basis.',
    ],
  },
  {
    title: '5. Missed Appointments ("No-Shows")',
    text: 'If our physiotherapist arrives at the designated home location at the scheduled time, and the patient is unavailable or refuses treatment without prior notice, the session will be considered completed. The full session fee will be charged, and for package holders, one session will be deducted from their balance.',
  },
  {
    title: '6. Therapist Cancellation',
    text: 'In the rare event that a physiotherapist is unable to attend a scheduled session due to illness, vehicle breakdown, or other unforeseen emergencies, we will notify you as soon as possible. The session will be rescheduled to the earliest convenient date without any additional charges.',
  },
  {
    title: '7. Clinical Outcome Disclaimer',
    text: 'Please note that we do not offer refunds based on clinical outcomes. Physiotherapy requires time, patience, and active participation. Because physiological responses vary from person to person, we cannot guarantee specific healing timeframes or absolute recovery, and dissatisfaction with the pace of recovery is not grounds for a refund.',
  },
];

const RefundPolicy = () => {
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
            alt="Refund Policy Background"
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
              Refund & <span className="text-accent italic font-normal">Cancellation</span> Policy
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
                <RefreshCw className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <p className="text-dark font-medium leading-relaxed text-sm lg:text-base">
                Please review our refund and cancellation terms carefully. These policies help us maintain quality service and fair scheduling for all patients.
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

export default RefundPolicy;
