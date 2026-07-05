import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <SEO title="Page Not Found" noindex={true} />
      <h1 className="text-[15vw] font-serif font-black text-primary leading-none opacity-5">404</h1>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">Page <span className="text-accent italic">Not Found</span></h2>
        <p className="text-lg text-muted font-medium max-w-sm">The recovery path you're looking for doesn't exist. Let's get you back home.</p>
        <Link to="/">
          <Button variant="primary" size="lg" className="rounded-none px-12 group transition-all">
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
