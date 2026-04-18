import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Target,
  Clock,
  MapPin,
  Calendar,
  Activity,
  Users
} from 'lucide-react';
import { conditionsData } from '../data/conditionsData';
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_LINK, BRAND_NAME } from '../constants';
import Button from '../components/Button';
import SEO from '../components/SEO';

const ConditionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const condition = (slug && conditionsData[slug as keyof typeof conditionsData]) ? conditionsData[slug as keyof typeof conditionsData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!condition) {
    return <Navigate to="/treatment" replace />;
  }

  // SEO Schema
  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "description": condition.description,
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Physiotherapy",
      "provider": {
        "@type": "MedicalBusiness",
        "name": BRAND_NAME
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${condition.title} Treatment at Home in Hyderabad`}
        description={`Get expert home visit physiotherapy for ${condition.title} in Hyderabad. Specialized care for fast recovery and pain relief. Book your session today!`}
        schema={conditionSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Treatments", item: "/treatment" },
          { name: condition.title, item: `/treatment/${slug}` }
        ]}
      />
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 lg:pt-36 pb-12 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={condition.img} 
            alt={condition.fullTitle}
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto responsive-padding">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/treatment" 
              className="inline-flex items-center text-primary/60 hover:text-accent font-bold uppercase tracking-widest text-[10px] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              All Treatment
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">{condition.category} Specialist</span>
              </div>
              <h1 className="editorial-heading text-primary leading-tight mb-4">
                {condition.title} <span className="text-accent italic font-normal">Care</span>
              </h1>
              <p className="text-xl text-dark/80 font-medium leading-relaxed mb-6">
                {condition.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-none px-8 bg-primary hover:bg-primary/90 text-white group shadow-xl whitespace-nowrap">
                    Book Home Visit <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href={`tel:${CONTACT_PHONE_DISPLAY}`}>
                  <Button variant="outline" size="lg" className="rounded-none px-8 border-primary text-primary hover:bg-primary/5">
                    Call specialist
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img 
                src={condition.img} 
                alt={condition.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary text-lg leading-tight">Home Service Area</h4>
                    <p className="text-dark/60 text-sm font-medium mt-1">{condition.serviceArea}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL APPROACH */}
      <section className="section-spacing bg-surface/30">
        <div className="max-w-[1400px] mx-auto responsive-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Assessment Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-accent" />
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">Step 01: Assessment</span>
                </div>
                <h2 className="editorial-heading text-primary">
                  Clinical <span className="text-accent italic font-normal">Diagnosis</span>
                </h2>
                <p className="text-dark/60 text-lg font-medium leading-relaxed">
                  We look beyond the symptoms to identify root causes using clinical movement analysis and neuro-musculoskeletal testing at your home.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {condition.assessmentPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-primary/5 shadow-sm group hover:border-accent/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-primary font-bold uppercase tracking-tight text-xs leading-tight">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Treatment Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-accent" />
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">Step 02: Intervention</span>
                </div>
                <h2 className="editorial-heading text-primary">
                  The <span className="text-accent italic font-normal">Rehab Program</span>
                </h2>
                <p className="text-dark/60 text-lg font-medium leading-relaxed">
                  Every program is evidence-based and adjusted in real-time based on your specific biomechanical feedback and recovery speed.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {condition.rehabProgram.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-primary/5 shadow-sm group hover:border-accent/30 transition-colors text-right flex-row-reverse"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-primary font-bold uppercase tracking-tight text-xs leading-tight">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GOAL & COMMITMENT */}
      <section className="section-spacing">
        <div className="max-w-[1400px] mx-auto responsive-padding">
          <div className="bg-primary p-6 lg:p-16 rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 text-center max-w-4xl mx-auto space-y-8">
                <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="editorial-heading text-white leading-tight">
                  {condition.goal}
                </h2>
                <div className="w-24 h-[1px] bg-white/20 mx-auto" />
                <p className="text-white/60 text-xl font-medium tracking-widest uppercase">
                  Quality Home-Based Care in {condition.serviceArea}
                </p>
                <div className="pt-8">
                  <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-none px-12 bg-white text-primary hover:bg-white/90 border-none font-bold shadow-2xl">
                      Consult with a specialist
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL PHILOSOPHY STATS */}
      <section className="section-spacing border-t border-primary/5">
        <div className="max-w-[1400px] mx-auto responsive-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-4">
              <Clock className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-serif font-bold text-primary">60+ Min Sessions</h3>
              <p className="text-dark/60 font-medium">Unlike clinics, we provide focused 1-on-1 care without rushing your rehabilitation process.</p>
            </div>
            <div className="space-y-4">
              <Calendar className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-serif font-bold text-primary">Daily Monitoring</h3>
              <p className="text-dark/60 font-medium">Your progress is tracked daily and exercises are modified in real-time for optimal results.</p>
            </div>
            <div className="space-y-4">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-serif font-bold text-primary">Patient First</h3>
              <p className="text-dark/60 font-medium">Every protocol is customized to your home environment, ensuring long-term recovery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConditionDetail;
