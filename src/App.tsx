import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Analytics from './components/Analytics';

// Optimized Route-based Code Splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Conditions = lazy(() => import('./pages/Conditions'));
const ConditionDetail = lazy(() => import('./pages/ConditionDetail'));
const LocationLanding = lazy(() => import('./pages/LocationLanding'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Packages = lazy(() => import('./pages/Packages'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Initial Loading State
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="w-16 h-16 border-t-2 border-b-2 border-accent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Analytics />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/treatment" element={<Conditions />} />
            <Route path="/treatment/:slug" element={<ConditionDetail />} />
            <Route path="/physiotherapy-hyderabad" element={<LocationLanding />} />
            <Route path="/physiotherapy-kukatpally" element={<LocationLanding />} />
            <Route path="/physiotherapy-miyapur" element={<LocationLanding />} />
            <Route path="/physiotherapy-gachibowli" element={<LocationLanding />} />
            <Route path="/physiotherapy-hitech-city" element={<LocationLanding />} />
            <Route path="/physiotherapy-kondapur" element={<LocationLanding />} />
            <Route path="/physiotherapy-madhapur" element={<LocationLanding />} />
            <Route path="/physiotherapy-kphb" element={<LocationLanding />} />
            <Route path="/physiotherapy-pragathi-nagar" element={<LocationLanding />} />
            <Route path="/physiotherapy-nizampet" element={<LocationLanding />} />
            <Route path="/physiotherapy-hafeezpet" element={<LocationLanding />} />
            <Route path="/physiotherapy-nanakramguda" element={<LocationLanding />} />
            <Route path="/physiotherapy-lingampally" element={<LocationLanding />} />
            <Route path="/physiotherapy-hydernagar" element={<LocationLanding />} />
            <Route path="/physiotherapy-bachupally" element={<LocationLanding />} />
            <Route path="/physiotherapy-vivekananda-nagar" element={<LocationLanding />} />
            <Route path="/physiotherapy-vasantha-nagar" element={<LocationLanding />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
