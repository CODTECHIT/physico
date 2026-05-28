import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  PhoneCall,
  ShieldCheck,
  Clock,
  ChevronRight,
  Star,
  Activity,
  Brain,
  Dumbbell
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { BRAND_NAME, CONTACT_WHATSAPP_LINK, CONTACT_PHONE_DISPLAY } from '../constants';

import { locationData } from '../data/locationData';

const LocationLanding = () => {
  const { location: paramLocation } = useParams<{ location: string }>();

  // Extract location from URL path if param is missing (e.g. /physiotherapy-hitech-city)
  const path = window.location.pathname;
  const derivedLocation = path.includes('physiotherapy-')
    ? path.split('physiotherapy-')[1].toLowerCase()
    : paramLocation;

  const data = (derivedLocation && locationData[derivedLocation]) || locationData['hyderabad'];

  if (!data) return <div>Location not found</div>;

  const bookingLink = `${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I am looking for a physiotherapy session at home in ${data.name}.`)}`;

  return (
    <div className="bg-white">
      <SEO
        title={`${data.title} - Near Me`}
        description={data.description}
        canonical={`/physiotherapy-${derivedLocation}`}
        keywords={`${data.keywords}, physiotherapist near me, home visit physiotherapy near me, best physiotherapy near me`}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Serving {data.name} & Nearby Areas</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            {data.title} Near You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
          >
            Recover faster with personalized, evidence-based physiotherapy sessions delivered right to your home in {data.name}. No traffic, no waiting just expert care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href={bookingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag && (window as any).gtag('event', 'whatsapp_booking_click', { location: data.name })}
            >
              <Button size="lg" className="w-full sm:w-auto">Book Home Visit Now</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">Enquire Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why Choose Flexo Physio in {data.name}?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We bring clinical excellence to your doorstep, ensuring you receive the highest quality care in the comfort of your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-8 h-8 text-accent" />, title: 'Flexible Scheduling', desc: 'Book sessions that fit your busy lifestyle, available 7 days a week.' },
              { icon: <ShieldCheck className="w-8 h-8 text-accent" />, title: 'Certified Experts', desc: 'All our physiotherapists are highly qualified (BPT/MPT) with years of experience.' },
              { icon: <Star className="w-8 h-8 text-accent" />, title: 'Personalized Care', desc: 'One-on-one sessions tailored specifically to your condition and recovery goals.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Specialized Treatments in {data.name}</h2>
              <p className="text-gray-600">Comprehensive physiotherapy solutions for various conditions.</p>
            </div>
            <Link to="/services" className="text-accent font-bold flex items-center gap-2 hover:underline mt-4 md:mt-0">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Activity className="w-6 h-6" />, title: 'Orthopedic Rehab', desc: 'Expert care for joint pain, fractures, and post-surgery recovery.' },
              { icon: <Brain className="w-6 h-6" />, title: 'Neuro Rehab', desc: 'Specialized treatment for stroke, paralysis, and neurological disorders.' },
              { icon: <Dumbbell className="w-6 h-6" />, title: 'Sports Injury', desc: 'Fast recovery from ligament tears, muscle strains, and gym injuries.' }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold text-sm">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: `Do you provide home physiotherapy in ${data.name}?`, a: `Yes, we provide expert home visit physiotherapy across all areas of ${data.name}.` },
              { q: 'How long is each session?', a: 'Each session typically lasts 45 to 60 minutes, depending on the patient\'s condition and treatment plan.' },
              { q: 'What should I prepare for a home visit?', a: 'Just ensure a comfortable space for treatment. Our physiotherapist will bring all necessary equipment.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to Start Your Recovery in {data.name}?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag && (window as any).gtag('event', 'whatsapp_booking_click', { location: data.name })}
              className="bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Book Your Appointment
            </a>
            <a
              href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, "")}`}
              onClick={() => (window as any).gtag && (window as any).gtag('event', 'click_to_call', { location: data.name })}
              className="flex items-center justify-center gap-3 text-white font-bold text-lg"
            >
              <PhoneCall className="w-6 h-6" />
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationLanding;
