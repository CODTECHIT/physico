import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  PhoneCall,
  Activity,
  Brain,
  ShieldCheck,
  Clock
} from "lucide-react";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { BRAND_NAME, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_LINK } from "../constants";

const PhysiotherapyMiyapur = () => {
  const bookingLink = `${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I am looking for a home visit physiotherapy session in Miyapur.`)}`;

  const conditions = [
    "Chronic Back & Neck Pain Relief",
    "Frozen Shoulder & Shoulder Rehab",
    "Post-Surgical Orthopedic Recovery (Knee/Hip Replacement)",
    "Stroke & Neurological Rehabilitation"
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Physiotherapy at Home in Miyapur | Flexo Physio Hyderabad"
        description="Get professional physiotherapy at home in Miyapur. Expert treatment for back pain, frozen shoulder, post-surgical, and neuro rehab by Dr. BhanuKumar Vemula's team."
        canonical="/physiotherapy-home-visit-miyapur"
        keywords="physiotherapy at home Miyapur, home visit physiotherapist Miyapur, home physiotherapy services Miyapur"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden text-center min-h-[50vh] flex items-center justify-center">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent blur-[120px] rounded-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/50 to-primary" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Serving Miyapur & Surrounding Neighborhoods
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Physiotherapy at Home in Miyapur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
          >
            Clinical-grade recovery and chiropractic care brought directly to your doorstep in Miyapur. 
            Avoid travel stress and recover in the comfort of your own home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">Book Appointment</Button>
            </Link>
            <a 
              href={bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                WhatsApp Booking
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Unique Content Text Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] block">Doorstep Care</span>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary leading-tight">
                  Expert Home Physiotherapy in <span className="text-accent italic font-normal">Miyapur</span>
                </h2>
              </div>

              <div className="space-y-6 text-dark/80 text-base lg:text-lg leading-relaxed font-medium">
                <p>
                  Miyapur is home to busy IT professionals, growing families, and elderly residents who often face major transit delays when seeking medical treatment. Standing in long queues or traveling through peak traffic for daily physiotherapy sessions can aggravate joint pain or acute spine problems. At Flexo Physiotherapy, we eliminate these travel stresses completely by delivering certified clinical care directly to your residential flat or independent home in Miyapur.
                </p>
                <p>
                  Our dedicated team, trained under senior physiotherapist <strong>Dr. BhanuKumar Vemula</strong>, specializes in treating a comprehensive range of conditions. From persistent lower back pain and stiff joints to advanced neurological rehabilitation for stroke survivors and post-operative orthopedic recovery (such as total knee or hip replacements), we design customized treatment plans tailored specifically to your daily mobility needs and recovery goals.
                </p>
                <p>
                  We bring all required assessment materials, mobilization tools, and therapy modalities to each session. Our therapists are trained to work in standard home layouts, guiding you through progressive strengthening, manual joint adjustments, and functional movement training in a comfortable, familiar, and highly focused environment.
                </p>
              </div>
            </div>

            {/* Structured Details Column */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Conditions We Treat Locally</h3>
                <div className="space-y-3">
                  {conditions.map((condition, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm font-bold text-primary/80">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200/60 pt-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Service Highlights</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">Certified Practitioners</h4>
                      <p className="text-xs text-muted font-medium mt-0.5">BPT & MPT qualified therapists managed directly by Dr. BhanuKumar Vemula.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">Flexible Hours</h4>
                      <p className="text-xs text-muted font-medium mt-0.5">Sessions scheduled at your convenience from 7:00 AM to 9:00 PM, 7 days a week.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-accent/5 border-t border-accent/10 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-primary">Start Your Recovery Journey Today</h2>
          <p className="text-sm text-muted font-medium max-w-2xl mx-auto">
            Book a personalized home visit physiotherapy session in Miyapur. No travel, no waiting, just focused rehabilitation care designed around your comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">Schedule Assessment</Button>
            </Link>
            <a href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, "")}`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-primary border-primary hover:bg-primary/5">
                <PhoneCall className="w-4 h-4 mr-2" />
                Call {CONTACT_PHONE_DISPLAY}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysiotherapyMiyapur;
