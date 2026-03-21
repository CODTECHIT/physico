import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronDown, MessageCircle } from 'lucide-react';
import Button from './Button';
import { cn } from '../lib/utils';
import { CONTACT_WHATSAPP_LINK } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Cardio-Respiratory', path: '/service/cardio' },
        { name: 'Neuro Rehabilitation', path: '/service/neurological' },
        { name: 'Orthopedic Rehabilitation', path: '/service/orthopedic' },
        { name: 'Sports Rehabilitation', path: '/service/sports' },
        { name: 'Chiropractic Care', path: '/service/chiropractic' },
        { name: 'Cupping & Dry Needling', path: '/service/cupping' },
      ]
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Conditions', path: '/conditions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 transition-all duration-500',
        isOpen 
          ? 'z-[99999] bg-white h-screen' 
          : isScrolled 
            ? 'z-50 bg-secondary/95 backdrop-blur-md py-3 lg:py-3 shadow-sm border-b border-primary/5' 
            : 'z-50 bg-transparent py-4 lg:py-6'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between transition-opacity duration-300",
        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <Link to="/" className="group flex items-center gap-2 xl:gap-4 shrink-0">
          <div className="relative shrink-0">
            {/* Desktop: Horizontal Logo */}
            <img 
              src="/logo-horizontal.jpeg" 
              alt="Flexo Physio" 
              className="hidden lg:block h-10 xl:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
            {/* Mobile: Square Logo */}
            <img 
              src="/logo-square.jpeg" 
              alt="Flexo Physio" 
              className="lg:hidden h-11 w-auto object-contain group-hover:opacity-80 transition-opacity rounded-lg"
            />
          </div>
          <div className="flex flex-col border-l border-primary/10 pl-2 xl:pl-4 py-0.5 lg:py-1">
            <span className="text-sm xl:text-xl font-serif font-bold text-primary tracking-tighter leading-none group-hover:opacity-80 transition-opacity whitespace-nowrap">
              FLEXO <span className="text-accent italic">PHYSIO</span>
            </span>
            <span className="text-[6px] xl:text-[8px] uppercase tracking-[0.15em] lg:tracking-[0.2em] text-muted font-sans font-bold mt-1 lg:mt-1">
              Bespoke Home Care
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/nav-item py-4">
              <Link
                to={link.path}
                className={cn(
                  'text-[10px] xl:text-[13px] uppercase tracking-widest font-bold transition-colors hover:text-primary flex items-center gap-1 xl:gap-1.5',
                  location.pathname === link.path || (link.dropdown && location.pathname.startsWith('/service/')) ? 'text-primary' : 'text-muted'
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 opacity-50 group-hover/nav-item:rotate-180 transition-transform duration-300" />}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/nav-item:w-full",
                  location.pathname === link.path || (link.dropdown && location.pathname.startsWith('/service/')) ? "w-full" : "w-0"
                )} />
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-300 z-[100]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-primary/5 p-3 min-w-[260px] backdrop-blur-sm overflow-hidden relative">
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 grid gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={cn(
                            "px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group/link hover:bg-accent/5",
                            location.pathname === item.path ? "text-accent bg-accent/10" : "text-primary/70 hover:text-accent"
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
            size="sm" 
            className="ml-2 xl:ml-4 rounded-full px-4 xl:px-7 bg-accent hover:bg-accent/90 border-none shadow-lg shadow-accent/20 transition-all duration-300 transform hover:scale-105 active:scale-95 text-[10px] xl:text-xs font-bold tracking-widest"
            onClick={() => window.open(`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent('Hi Flexo Physio, I would like to book an appointment.')}`, '_blank')}
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1.5 xl:mr-2" />
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <a href="tel:+919502808581" className="p-2.5 text-accent hover:bg-accent/5 rounded-full transition-colors active:scale-90">
            <PhoneCall size={22} />
          </a>
          <button
            className="text-primary p-2.5 hover:bg-primary/5 rounded-full transition-colors focus:outline-none active:scale-90"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-[99999] lg:hidden flex flex-col transition-all duration-500 ease-in-out',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-primary/5 shadow-sm bg-white shrink-0">
          <div className="flex items-center gap-2">
            <img src="/logo-square.jpeg" className="h-9 w-auto rounded-lg" alt="Logo" />
            <span className="font-serif font-bold text-primary tracking-tighter text-lg underline decoration-accent/30 decoration-2 underline-offset-4">FLEXO PHYSIO</span>
          </div>
          <button
            className="text-primary p-2.5 focus:outline-none active:scale-90 bg-primary/5 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>
        
        {/* Mobile Menu Links */}
        <div className="flex-grow overflow-y-auto scrollbar-hide">
          <div className="px-6 py-10 flex flex-col items-center space-y-12">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center w-full">
                <Link
                  to={link.path}
                  className={cn(
                    "text-4xl font-serif font-bold tracking-tight transition-all active:scale-95",
                    location.pathname === link.path || (link.dropdown && location.pathname.startsWith('/service/')) 
                      ? "text-accent border-b-2 border-accent/20 pb-1" 
                      : "text-primary hover:text-accent/70"
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
                            : "text-primary/60"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name.replace(' Rehabilitation', '').replace(' Care', '').replace(' Therapy', '')}
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
            className="w-full rounded-2xl h-16 text-sm font-black uppercase tracking-[0.2em] bg-accent hover:bg-accent/90 border-none shadow-2xl shadow-accent/40 text-white"
            onClick={() => {
              setIsOpen(false);
              window.open(`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent('Hi Flexo Physio, I would like to book an appointment.')}`, '_blank');
            }}
          >
            Check Availability Now
          </Button>
          <div className="flex items-center justify-center space-x-4 mt-8 opacity-40">
            <span className="w-8 h-[1px] bg-primary" />
            <p className="font-bold tracking-[0.3em] text-[9px] uppercase text-primary">
              Bespoke Home Care
            </p>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
