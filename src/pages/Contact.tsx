import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  PhoneCall,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowRight,
  User,
  Calendar,
  ChevronDown
} from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY, 
  CONTACT_WHATSAPP_LINK, 
  SERVICE_AREAS, 
  SERVICE_AREAS_LINKS,
  INSTAGRAM_LINK, 
  FACEBOOK_LINK, 
  YOUTUBE_LINK, 
  LINKEDIN_LINK, 
  BRAND_NAME, 
  CONTACT_EMAIL 
} from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    location: '',
    gender: 'Male',
    age: '',
    service: 'Orthopedic physiotherapy',
    condition: ''
  });

  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const watermarkY = useTransform(scrollY, [0, 2000], [0, 300]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Assessment Request from Website*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Location:* ${formData.location}%0A*Gender:* ${formData.gender}%0A*Age:* ${formData.age}%0A*Service:* ${formData.service}%0A*Condition:* ${formData.condition}`;

    const whatsappUrl = `${CONTACT_WHATSAPP_LINK}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      <SEO 
        title={`Contact ${BRAND_NAME} | Book Your Home Visit`}
        description={`Contact ${BRAND_NAME} to book your home visit physiotherapy in Hyderabad. We serve Kukatpally, Miyapur, Gachibowli, and more.`}
      />

      {/* 1. HERO HEADER */}
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 relative overflow-hidden min-h-[30vh] lg:min-h-[50vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt={`${BRAND_NAME} Contact Background`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto responsive-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="w-6 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[9px] lg:text-[10px]">
                Connect With Us
              </span>
              <span className="w-6 h-[2px] bg-accent" />
            </div>
            <h1 className="editorial-display text-primary">
              Let’s Start Your <br className="hidden md:block" />
              <span className="text-accent italic font-normal">Recovery</span> Journey
            </h1>
            <p className="text-sm lg:text-xl text-dark font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
              Ready to book a home visit or have questions about our specialties? Our clinical team is ready to assist you in Hyderabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-4 lg:py-8 relative overflow-hidden">
        {/* Large background text with Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-10 lg:top-20 left-1/2 -translate-x-1/2 text-[15vw] lg:text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {BRAND_NAME.toUpperCase()}
        </motion.div>

        <div className="max-w-[1400px] mx-auto responsive-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-5 lg:space-y-8">
              <div className="space-y-2 lg:space-y-3">
                <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[9px] lg:text-[10px] block">Our Reach</span>
                <h2 className="editorial-heading text-primary leading-tight">Get in <span className="text-accent italic font-normal">Touch</span></h2>
              </div>

              <div className="space-y-3 lg:space-y-4">
                {[
                  { icon: <PhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />, label: 'Direct Support', value: CONTACT_PHONE_DISPLAY, type: 'phone', sub: 'Available Mon-Sat, 8am to 8pm' },
                  { icon: <Mail className="w-5 h-5 lg:w-6 lg:h-6" />, label: 'Clinical Inquiries', value: CONTACT_EMAIL, type: 'email', sub: 'Expect a reply within 12 hours' },
                  { icon: <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />, label: 'Service Areas', value: 'Hyderabad, India', type: 'text', sub: SERVICE_AREAS.split(',').slice(0, 4).join(', ') }
                ].map((item, i) => (
                  <div key={i} className="group relative bg-surface/30 p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] border border-primary/5 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <div className="flex gap-4 lg:gap-6 items-start">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-sm text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 rounded-xl lg:rounded-2xl">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[8px] lg:text-[9px] uppercase tracking-[0.3em] font-bold text-accent">{item.label}</span>
                        {item.type === 'phone' ? (
                          <a 
                            href={`tel:+91${CONTACT_PHONE}`}
                            onClick={() => (window as any).trackPhoneClick?.()}
                            className="hover:text-accent transition-colors"
                          >
                            <p className="text-lg lg:text-2xl font-serif font-bold text-primary">{item.value}</p>
                          </a>
                        ) : item.type === 'email' ? (
                          <a 
                            href={`mailto:${item.value}`}
                            className="hover:text-accent transition-colors"
                          >
                            <p className="text-lg lg:text-2xl font-serif font-bold text-primary">{item.value}</p>
                          </a>
                        ) : (
                          <p className="text-lg lg:text-2xl font-serif font-bold text-primary">{item.value}</p>
                        )}
                        {item.label === 'Service Areas' ? (
                          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                            {SERVICE_AREAS_LINKS.slice(0, 5).map((area, idx) => (
                              <Link 
                                key={area.name} 
                                to={area.path}
                                className="text-accent hover:underline text-[10px] lg:text-[11px] font-bold uppercase tracking-widest"
                              >
                                {area.name}{idx < 4 ? ',' : ''}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-dark text-[10px] lg:text-[11px] font-bold uppercase tracking-widest opacity-60 leading-relaxed">{item.sub}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-5 lg:pt-8 border-t border-primary/5 space-y-4 lg:space-y-5 text-center lg:text-left">
                <span className="block text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">Follow Our Updates</span>
                <div className="flex justify-center lg:justify-start gap-4 lg:gap-6">
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-14 lg:h-14 border border-primary/5 rounded-xl lg:rounded-2xl flex items-center justify-center text-primary hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-accent transition-all duration-500">
                    <Instagram className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                  <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-14 lg:h-14 border border-primary/5 rounded-xl lg:rounded-2xl flex items-center justify-center text-primary hover:bg-[#1877F2] hover:text-white hover:border-accent transition-all duration-500">
                    <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                  <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-14 lg:h-14 border border-primary/5 rounded-xl lg:rounded-2xl flex items-center justify-center text-primary hover:bg-[#FF0000] hover:text-white hover:border-accent transition-all duration-500">
                    <Youtube className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                  <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 lg:w-14 lg:h-14 border border-primary/5 rounded-xl lg:rounded-2xl flex items-center justify-center text-primary hover:bg-[#0A66C2] hover:text-white hover:border-accent transition-all duration-500">
                    <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-5 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-primary/5 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-accent/5 rounded-bl-full" />

                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary">Request an <span className="text-accent italic font-normal">Initial Assessment</span></h3>
                    <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed opacity-80">
                      Our experts visit your home to diagnose your condition and create a personalized treatment plan. Fill in your details below and a clinical coordinator will contact you to confirm your home visit schedule.
                    </p>
                  </div>

                  <form className="space-y-4 lg:space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                      <div className="space-y-1.5 focus-ring">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Rahul Sharma"
                          className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 lg:py-3.5 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary placeholder:text-primary/20 text-sm"
                        />
                      </div>
                      <div className="space-y-1.5 focus-ring">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 00000 00000"
                          className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 lg:py-3.5 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary placeholder:text-primary/20 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                      <div className="col-span-1 lg:col-span-2 space-y-1.5 focus-ring">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Gender</label>
                        <div className="relative">
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 lg:py-3.5 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary appearance-none cursor-pointer text-sm"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                            <User className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 lg:col-span-2 space-y-1.5 focus-ring">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Age</label>
                        <div className="relative">
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. 45"
                            className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 lg:py-3.5 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary placeholder:text-primary/20 text-sm"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                            <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                      <div className="space-y-1.5 focus-ring">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Service Required</label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 lg:py-3.5 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary appearance-none cursor-pointer text-sm"
                          >
                            <option>Neuro Rehabilitation</option>
                            <option>Orthopedic Rehabilitation</option>
                            <option>Sports Rehabilitation</option>
                            <option>Chiropractic Care</option>
                            <option>Geriatric Physiotherapy</option>
                            <option>Dry Needling Therapy</option>
                            <option>Cupping Therapy</option>
                            <option>IASTM Therapy</option>
                            <option>Kinesio Taping</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                            <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1.5 focus-ring">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          placeholder="Your area/address"
                          className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 lg:py-3.5 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary placeholder:text-primary/20 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 focus-ring">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/40 ml-1">Describe Your Condition</label>
                      <textarea
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        placeholder="Briefly describe your symptoms..."
                        className="w-full bg-surface/50 border border-primary/5 rounded-xl lg:rounded-2xl px-5 py-3 focus:outline-none focus:border-accent focus:bg-white transition-all font-medium text-primary placeholder:text-primary/20 resize-none text-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="primary" size="lg" className="w-full rounded-xl lg:rounded-2xl py-3.5 lg:py-4 group bg-accent hover:bg-accent/90 border-none text-white font-bold tracking-widest shadow-xl shadow-accent/20">
                        Send Request <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Contact;
