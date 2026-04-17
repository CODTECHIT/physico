import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Clock,
  Youtube,
  Linkedin,
} from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  SERVICE_AREAS,
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
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-1 lg:space-y-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <Link to="/" className="inline-block group">
              <img
                src="/footerpng.png"
                alt={BRAND_NAME}
                className="h-14 lg:h-16 w-auto object-contain group-hover:opacity-80 transition-opacity mb-2 rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-accent font-sans font-medium mt-1 block">
                Home Visit Excellence
              </span>
            </Link>
            <p className="text-secondary/70 text-xs lg:text-sm leading-relaxed max-w-xs">
              Bringing expert, personalized physiotherapy care to your doorstep
              in Hyderabad. Professional recovery in the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                {
                  icon: <Instagram className="w-5 h-5" />,
                  link: INSTAGRAM_LINK,
                  hover:
                    "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
                  label: "Instagram",
                },
                {
                  icon: <Facebook className="w-5 h-5" />,
                  link: FACEBOOK_LINK,
                  hover: "hover:bg-[#1877F2]",
                  label: "Facebook",
                },
                {
                  icon: <Youtube className="w-5 h-5" />,
                  link: YOUTUBE_LINK,
                  hover: "hover:bg-[#FF0000]",
                  label: "YouTube",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  link: LINKEDIN_LINK,
                  hover: "hover:bg-[#0A66C2]",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-500 ${social.hover} hover:text-white hover:scale-110 hover:shadow-xl group/social`}
                  title={social.label}
                >
                  <div className="transition-transform duration-500 group-hover/social:rotate-[360deg]">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:space-y-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Service Areas
            </h4>
            <ul className="grid grid-cols-1 gap-3 lg:gap-4">
              {[
                "Kukatpally",
                "Miyapur",
                "Gachibowli",
                "Kondapur",
                "Hitech City",
                "Hyderabad",
                "Nizampet",
              ].map((name) => (
                <li key={name}>
                  <div className="text-secondary/60 hover:text-accent text-[10px] lg:text-xs uppercase tracking-widest transition-colors flex items-center group cursor-default">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all mr-0 group-hover:mr-2" />
                    {name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:space-y-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Quick Links
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "services", path: "/services" },
                { name: "Treatment", path: "/treatment" },
                { name: "Packages", path: "/packages" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary/60 hover:text-accent text-[10px] lg:text-xs uppercase tracking-widest transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:space-y-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Specialties
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              {[
                { name: "Orthopedic Physiotherapy", path: "/service/orthopedic" },
                { name: "Neuro Physiotherapy", path: "/service/neurological" },
                { name: "Stroke Rehab at Home", path: "/service/stroke-rehabilitation" },
                { name: "Sports Rehab at Home", path: "/service/sports" },
                { name: "Geriatric Physiotherapy", path: "/service/geriatric" },
                { name: "Post-Surgical Rehab", path: "/service/orthopedic" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-secondary/60 hover:text-accent text-[10px] lg:text-xs uppercase tracking-widest transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all mr-0 group-hover:mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-1 lg:space-y-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h4 className="text-base lg:text-lg font-serif font-bold tracking-tight border-b border-secondary/20 pb-2 inline-block pr-8">
              Get in Touch
            </h4>
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-start space-x-3 lg:space-x-4">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent mt-1 shrink-0" />
                <div className="space-y-1.5 lg:space-y-2">
                  <p className="text-secondary/70 text-xs lg:text-sm leading-relaxed">
                    Flat No:G-1 1st Floor, Rangam Nilayam, Laxminagar, Miyapur,
                    HYDERABAD 500049
                  </p>

                  <p className="text-[10px] lg:text-[11px] text-accent font-bold uppercase tracking-wider mt-1 lg:mt-2 opacity-80">
                    Serving: {SERVICE_AREAS.split(",").slice(0, 3).join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-accent shrink-0" />
                <p className="text-secondary/70 text-xs lg:text-sm font-medium">
                  {CONTACT_PHONE_DISPLAY}
                </p>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-accent shrink-0" />
                <p className="text-secondary/70 text-[10px] lg:text-xs">
                  Mon to Sat: 8:00 AM to 8:00 PM
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 place-items-center sm:flex sm:justify-center sm:space-x-4">
                <img
                  src="/qr.jpeg"
                  alt="QR Code"
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg border border-white/10"
                  loading="lazy"
                  decoding="async"
                />
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg border border-white/10 bg-white p-0.5 flex items-center justify-center">
                  <img
                    src="/lo.jpeg"
                    alt="Logo"
                    className="w-full h-full object-contain rounded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary/40 text-[8px] lg:text-[10px] uppercase tracking-widest text-center md:text-left">
            © 2026 {BRAND_NAME.toUpperCase()}. ALL RIGHTS RESERVED.
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
