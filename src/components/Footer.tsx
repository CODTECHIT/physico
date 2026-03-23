import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Clock, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY, SERVICE_AREAS, INSTAGRAM_LINK, FACEBOOK_LINK, YOUTUBE_LINK, LINKEDIN_LINK, BRAND_NAME } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-secondary pt-12 pb-8 lg:pt-16 lg:pb-12 border-t border-secondary/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6 lg:space-y-8">
            <Link to="/" className="inline-block group">
              <img
                src="/logo-square.jpeg"
                alt={BRAND_NAME}
                className="h-14 lg:h-16 w-auto object-contain group-hover:opacity-80 transition-opacity mb-2 rounded-lg"
              />
              <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-accent font-sans font-medium mt-1 block">
                Home Visit Excellence
              </span>
            </Link>
            <p className="text-secondary/70 text-xs lg:text-sm leading-relaxed max-w-xs">
              Bringing expert, personalized physiotherapy care to your doorstep in Hyderabad. Professional recovery in the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="group" title="Instagram">
                <Instagram className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="group" title="Facebook">
                <Facebook className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
              </a>
              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="group" title="YouTube">
                <Youtube className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
              </a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="group" title="LinkedIn">
                <Linkedin className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Quick Links
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Conditions', path: '/conditions' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-secondary/60 hover:text-accent text-[10px] lg:text-xs uppercase tracking-widest transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Specialties
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: 'Orthopedic', path: '/service/orthopedic' },
                { name: 'Neurological', path: '/service/neurological' },
                { name: 'Sports rehab', path: '/service/sports' },
                { name: 'Geriatric', path: '/services' },
                { name: 'Post-surgical', path: '/services' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-secondary/60 hover:text-accent text-[10px] lg:text-xs uppercase tracking-widest transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all mr-0 group-hover:mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Get in Touch
            </h4>
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-start space-x-3 lg:space-x-4">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent mt-1 shrink-0" />
                <div className="space-y-1.5 lg:space-y-2">
                  <p className="text-secondary/70 text-xs lg:text-sm leading-relaxed">
                    Miyapur, Hyderabad – 500049
                  </p>
                  <p className="text-secondary/70 text-xs lg:text-sm leading-relaxed border-t border-secondary/10 pt-1.5 lg:pt-2">
                    Kukatpally, Hyderabad – 500085
                  </p>
                  <p className="text-[10px] lg:text-[11px] text-accent font-bold uppercase tracking-wider mt-1 lg:mt-2 opacity-80">
                    Serving: {SERVICE_AREAS.split(',').slice(0, 3).join(', ')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-accent shrink-0" />
                <p className="text-secondary/70 text-xs lg:text-sm font-medium">{CONTACT_PHONE_DISPLAY}</p>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-accent shrink-0" />
                <p className="text-secondary/70 text-[10px] lg:text-xs">Mon - Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest text-center md:text-left">
            © 2026 {BRAND_NAME.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 lg:space-x-8">
            <Link to="/" className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest hover:text-white transition-colors">Terms</Link>
            <Link to="/" className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest hover:text-white transition-colors">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
