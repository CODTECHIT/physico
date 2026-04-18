import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_EMAIL,
  SERVICE_AREAS,
  SERVICE_AREAS_LINKS,
  CONDITIONS_LINKS,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  YOUTUBE_LINK,
  LINKEDIN_LINK,
  BRAND_NAME,
} from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-secondary pt-12 pb-8 lg:pt-16 lg:pb-12 border-t border-secondary/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-x-16 lg:gap-y-16">
          {/* Row 1, Col 1: Logo & Social */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <img
                src="/footerpng.png"
                alt={BRAND_NAME}
                className="h-16 lg:h-20 w-auto object-contain group-hover:opacity-80 transition-opacity mb-2 rounded-lg"
              />
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans font-medium mt-1 block">
                Home Visit Excellence
              </span>
            </Link>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: <Instagram className="w-5 h-5" />, link: INSTAGRAM_LINK, hover: "hover:text-[#dc2743]", label: "Instagram" },
                { icon: <Facebook className="w-5 h-5" />, link: FACEBOOK_LINK, hover: "hover:text-[#1877F2]", label: "Facebook" },
                { icon: <Youtube className="w-5 h-5" />, link: YOUTUBE_LINK, hover: "hover:text-[#FF0000]", label: "YouTube" },
                { icon: <Linkedin className="w-5 h-5" />, link: LINKEDIN_LINK, hover: "hover:text-[#0A66C2]", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/40 transition-colors ${social.hover}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Row 1, Col 2: About */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">About</h4>
            <p className="text-secondary/70 text-sm leading-relaxed">
              At {BRAND_NAME}, we are committed to bringing expert, personalized physiotherapy care through ultra-modern techniques and high-skilled practitioners directly to your doorstep in Hyderabad.
            </p>
          </div>

          {/* Row 1, Col 3: Treatments */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Treatments</h4>
            <ul className="space-y-4">
              {[
                "Manual Therapy",
                "Joint Mobilization",
                "Chiropractic Method",
                "Cupping Therapy",
                "Dry Needling",
                "Kinesio Taping",
                "Exercise Therapy",
                "Electrotherapy (TENS)"
              ].map((item) => (
                <li key={item} className="text-secondary/60 text-xs uppercase tracking-widest transition-colors hover:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Row 1, Col 4: Conditions */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Conditions</h4>
            <ul className="space-y-4">
              {CONDITIONS_LINKS.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={`/treatment/${item.slug}`}
                    className="text-secondary/60 text-xs uppercase tracking-widest transition-colors hover:text-accent block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 2, Col 1: Navigate */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Navigate</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Treatment", path: "/treatment" },
                { name: "Packages", path: "/packages" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary/60 hover:text-accent text-xs uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 2, Col 2: Specialties */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Specialties</h4>
            <ul className="space-y-4">
              {[
                { name: "Orthopedic Physio", path: "/service/orthopedic" },
                { name: "Neuro Physiotherapy", path: "/service/neurological" },
                { name: "Stroke Rehab at Home", path: "/service/stroke-rehabilitation" },
                { name: "Sports Rehab at Home", path: "/service/sports" },
                { name: "Geriatric Physio", path: "/service/geriatric" },
                { name: "Post-Surgical Rehab", path: "/service/orthopedic" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-secondary/60 hover:text-accent text-xs uppercase tracking-widest transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 2, Col 3: Service Areas */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Service Areas</h4>
            <ul className="space-y-4">
              {SERVICE_AREAS_LINKS.slice(0, 6).map((area) => (
                <li key={area.name}>
                  <Link 
                    to={area.path}
                    className="text-secondary/60 text-xs uppercase tracking-widest hover:text-accent transition-colors block"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 italic">
                <Link 
                  to="/physiotherapy-hyderabad"
                  className="text-accent text-xs uppercase tracking-[0.2em] font-medium hover:underline"
                >
                  and more...
                </Link>
              </li>
            </ul>
          </div>

          {/* Row 2, Col 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold tracking-tight mb-6 uppercase tracking-[0.1em]">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-secondary/70 text-sm leading-relaxed">
                  Flat No: G-1, 1st Floor, <br />
                  Rangam Nilayam, Laxminagar, <br />
                  Miyapur, HYDERABAD 500049
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-secondary/70 text-sm font-medium">
                  {CONTACT_PHONE_DISPLAY}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-secondary/70 text-sm font-medium hover:text-accent transition-colors truncate"
                  title={CONTACT_EMAIL}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest text-center md:text-left">
            © 2026 {BRAND_NAME.toUpperCase()}. ALL RIGHTS RESERVED. | DESIGNED BY <a href="https://codtechitsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">CODTECH IT SOLUTIONS</a>
          </p>
          <div className="flex space-x-6 lg:space-x-8">
            <Link
              to="/privacy-policy"
              className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/refund-policy"
              className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest hover:text-white transition-colors"
            >
              Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
