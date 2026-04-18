import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, ChevronDown, MessageCircle } from "lucide-react";
import Button from "./Button";
import { cn } from "../lib/utils";
import { CONTACT_WHATSAPP_LINK, BRAND_NAME } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  interface DropdownItem {
    name: string;
    path: string;
  }

  interface NavLink {
    name: string;
    path: string;
    dropdown?: DropdownItem[];
  }

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
    },
    { name: "Treatment", path: "/treatment" },
    { name: "Packages", path: "/packages" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500",
        isOpen
          ? "z-[99999] bg-white h-screen"
          : "z-50 bg-secondary/95 backdrop-blur-md py-4 lg:py-5 shadow-lg border-b border-primary/5",
      )}
    >
      <div
        className={cn(
          "max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between gap-3 transition-opacity duration-300",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
      >
        <Link
          to="/"
          className="group flex min-w-0 flex-1 items-center gap-2 xl:gap-3 lg:flex-none"
        >
          <div className="relative shrink-0">
            {/* Desktop: Horizontal Logo */}
            <img
              src="/logo-square.png"
              alt={BRAND_NAME}
              className="hidden lg:block h-6 xl:h-9 w-auto object-contain group-hover:opacity-80 transition-opacity"
              loading="eager"
              decoding="async"
            />
            {/* Mobile: Square Logo */}
            <img
              src="/logo-square.png"
              alt={BRAND_NAME}
              className="lg:hidden h-11 w-auto object-contain group-hover:opacity-80 transition-opacity rounded-lg"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="min-w-0 border-l border-primary/10 pl-1.5 py-0.5 xl:pl-4">
            <span className="block whitespace-nowrap text-[clamp(0.75rem,4vw,1.1rem)] font-serif font-bold leading-[1.05] tracking-[-0.01em] text-primary transition-opacity group-hover:opacity-80 lg:text-base lg:tracking-normal xl:text-2xl">
              FLEXO <span className="text-accent italic">PHYSIOTHERAPY</span>
            </span>
            <span className="mt-0.5 block font-sans text-[6px] font-bold tracking-[0.1em] text-accent min-[360px]:text-[7px] lg:mt-1.5 lg:text-[10px] lg:tracking-[0.22em] xl:text-[11px]">
              Mobility Flexibility Stability
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/nav-item py-4">
              <Link
                to={link.path}
                className={cn(
                  "text-[10px] lg:text-[11px] xl:text-[13px] uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:text-accent flex items-center gap-1 xl:gap-1.5",
                  location.pathname === link.path ||
                    (link.dropdown &&
                      (location.pathname.startsWith("/service/") ||
                        location.pathname.startsWith("/treatment/")))
                    ? "text-accent"
                    : "text-primary",
                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 opacity-40 group-hover/nav-item:rotate-180 transition-transform duration-500" />
                )}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover/nav-item:w-full",
                    location.pathname === link.path ||
                      (link.dropdown &&
                        (location.pathname.startsWith("/service/") ||
                          location.pathname.startsWith("/treatment/")))
                      ? "w-full"
                      : "w-0",
                  )}
                />
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-3 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-500 z-[100]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-primary/5 p-3 min-w-[240px] max-h-[400px] overflow-y-auto backdrop-blur-sm overflow-hidden relative">
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 grid gap-0.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={cn(
                            "px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group/link hover:bg-accent/5",
                            location.pathname === item.path
                              ? "text-accent bg-accent/10"
                              : "text-primary/70 hover:text-accent",
                          )}
                        >
                          {item.name}
                          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button
            variant="secondary"
            className="ml-2 xl:ml-4 rounded-full px-4 xl:px-8 py-2.5 xl:py-3.5 bg-accent hover:bg-accent/90 border-none shadow-lg shadow-accent/20 transition-all duration-500 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] text-[9px] xl:text-[11px] font-bold tracking-[0.12em] uppercase whitespace-nowrap"
            onClick={() =>
              window.open(
                `${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book an appointment.`)}`,
                "_blank",
              )
            }
          >
            <MessageCircle className="w-3.5 h-3.5 xl:w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <a
            href="tel:+919502808581"
            className="rounded-full border border-accent/10 p-1.5 text-accent transition-all hover:bg-accent/5 active:scale-90 min-[360px]:p-2"
          >
            <PhoneCall size={16} />
          </a>
          <button
            className="rounded-full border border-primary/10 p-1.5 text-primary transition-all hover:bg-primary/5 focus:outline-none active:scale-90 min-[360px]:p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-[99999] lg:hidden flex flex-col transition-all duration-500 ease-in-out",
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between gap-2 px-4 py-5 border-b border-primary/5 bg-white shadow-sm shrink-0 sm:px-6 sm:py-6">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src="/logo-square.png"
              className="h-8 w-auto rounded-lg sm:h-12"
              alt="Logo"
              loading="eager"
              decoding="async"
            />
            <div className="min-w-0 border-l border-primary/10 pl-2 py-0.5">
              <span className="block whitespace-nowrap font-serif text-[clamp(0.9rem,4vw,1.35rem)] font-bold tracking-tight text-primary sm:text-2xl">
                FLEXO <span className="text-accent italic">PHYSIOTHERAPY</span>
              </span>
              <span className="block font-sans text-[6px] font-bold text-accent sm:text-[8px]">
                Mobility Flexibility Stability
              </span>
            </div>
          </div>
          <button
            className="text-primary p-2 focus:outline-none active:scale-90 bg-primary/5 rounded-full hover:bg-accent/10 hover:text-accent transition-all shrink-0"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} className="sm:size-7" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-grow overflow-y-auto scrollbar-hide">
          <div className="px-6 py-10 flex flex-col items-center space-y-12">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col items-center w-full"
              >
                <Link
                  to={link.path}
                  className={cn(
                    "text-3xl sm:text-4xl font-serif font-bold tracking-tight transition-all active:scale-95",
                    location.pathname === link.path ||
                      (link.dropdown &&
                        (location.pathname.startsWith("/service/") ||
                          location.pathname.startsWith("/treatment/")))
                      ? "text-accent border-b-2 border-accent/20 pb-1"
                      : "text-primary hover:text-accent/70",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "text-[10px] uppercase tracking-wider font-bold text-center py-4 px-3 border border-primary/5 bg-primary/[0.01] rounded-2xl transition-all shadow-sm active:bg-accent/10 active:scale-95",
                          location.pathname === item.path
                            ? "bg-accent/10 text-accent border-accent/20 shadow-none font-black"
                            : "text-primary/60",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name
                          .replace(" Rehabilitation", "")
                          .replace(" Care", "")
                          .replace(" Therapy", "")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-8 w-full border-t border-primary/5 bg-surface shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] text-center">
          <Button
            variant="secondary"
            className="w-full rounded-2xl h-14 text-sm font-bold uppercase tracking-[0.15em] bg-accent hover:bg-accent/90 border-none shadow-2xl shadow-accent/20 text-white transition-all duration-300 active:scale-95"
            onClick={() => {
              setIsOpen(false);
              window.open(
                `${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book an appointment.`)}`,
                "_blank",
              );
            }}
          >
            Check Availability
          </Button>
          <div className="flex items-center justify-center space-x-4 mt-8 opacity-40">
            <span className="w-8 h-[1px] bg-primary" />
            <p className="font-bold tracking-[0.3em] text-[7px] text-accent">
              Mobility Flexibility Stability
            </p>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
