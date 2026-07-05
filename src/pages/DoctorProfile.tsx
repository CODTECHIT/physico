import { motion } from "framer-motion";
import {
  Award,
  Check,
  GraduationCap,
  Briefcase,
  Star,
  PhoneCall,
  Activity,
  Zap,
  Target,
  Brain
} from "lucide-react";
import SEO from "../components/SEO";
import Button from "../components/Button";
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_LINK } from "../constants";
import { getPhysicianSchema } from "../lib/seo-schemas";

const DoctorProfile = () => {
  const schema = getPhysicianSchema();

  const bookingLink = `${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi Dr. Bhanu, I am looking to consult you for a home visit physiotherapy session.`)}`;

  const certifications = [
    "Certified Chiropractic Practitioner (Spinal & Joint Adjustments)",
    "Certified Trigger Point Dry Needling Practitioner",
    "Certified Myofascial Cupping Therapist",
    "Certified Instrument Assisted Soft Tissue Mobilization (IASTM) Practitioner",
    "Certified Kinesio Taping Therapist",
    "Advanced Manual Therapy Specialist"
  ];

  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "1000+", label: "Patients Treated" },
    { value: "3600+", label: "Sessions Conducted" },
    { value: "110+", label: "Surgeries Avoided" }
  ];

  const clinicalInterests = [
    {
      icon: <Brain className="w-5 h-5 text-accent" />,
      title: "Neurological Rehabilitation",
      desc: "Recovering motor skills and balance after strokes, paralysis, or spinal injuries using neuroplasticity-driven techniques."
    },
    {
      icon: <Activity className="w-5 h-5 text-accent" />,
      title: "Orthopedic Rehabilitation",
      desc: "Treating chronic back pain, cervical spondylosis, neck stiffness, and osteoarthritic joint pain without surgical intervention."
    },
    {
      icon: <Target className="w-5 h-5 text-accent" />,
      title: "Chiropractic Adjustments",
      desc: "Realigning subluxations in the spine and extremities to restore mechanical movement and relieve pressure on nerves."
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: "Myofascial Trigger Point Release",
      desc: "Using clinical dry needling, cupping, and IASTM tools to release stubborn muscle adhesions and knots."
    }
  ];

  const testimonials = [
    {
      name: "Suneeta Chandra (Sciatica Recovery)",
      content: "After suffering from debilitating sciatica pain for nearly four years and undergoing two microdiscectomy surgeries in the USA, I found relief in just a few sessions with Dr. Bhanu. His knowledge and experience in spinal conditions are exemplary. The best part is his home visits, which saved me from Hyderabad traffic."
    },
    {
      name: "SRK Bharath Dev (Cervical & Dizziness)",
      content: "Dr. Bhanu Sir has done a tremendous job in treating my cervical problem. I was having dizziness and lightheadedness for last 3 years and visited more than 20 doctors. Dr. Bhanu's approach is polite, professional, and highly effective. I'm completely relaxed now."
    }
  ];

  return (
    <div className="bg-white selection:bg-accent selection:text-white font-sans min-h-screen pt-12">
      <SEO
        title="Dr. BhanuKumar Vemula, PT | Senior Physiotherapist in Hyderabad"
        description="Meet Dr. BhanuKumar Vemula, PT, founder of Flexo Physiotherapy. Certified BPT/MPT physiotherapist specializing in home visit orthopedic, neuro, and chiropractic care in Kukatpally & Miyapur."
        canonical="/dr-bhanukumar-vemula"
        keywords="Dr BhanuKumar Vemula physiotherapist, home physiotherapist Hyderabad, chiropractor Kukatpally, physical therapist Miyapur, TSPMB Reg. C-13470"
        schema={schema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" },
          { name: "Dr. BhanuKumar Vemula", item: "/dr-bhanukumar-vemula" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-white to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-accent blur-[100px] rounded-full" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative p-2 border-4 border-primary rounded-[2.5rem] shadow-2xl max-w-sm"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src="/founder.jpg"
                    alt="Dr. BhanuKumar Vemula - Founder & Consultant Physiotherapist"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-2xl p-4 border border-primary/10 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm font-bold text-primary">Reg No: C-13470</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted">TSPMB Certified</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Profile Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">
                  Senior Consultant Physiotherapist
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary">
                Dr. BhanuKumar <span className="text-accent italic font-normal">Vemula</span>
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                  MPT (Orthopedics) (Pursuing)
                </span>
                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                  BPT (Bachelor of Physiotherapy)
                </span>
              </div>

              <p className="text-dark/80 text-base lg:text-lg leading-relaxed font-medium">
                Dr. BhanuKumar Vemula, PT, is the founder and clinical lead of Flexo Physiotherapy.
                With a passion for delivering clinical-grade rehabilitation to patients in their home environment,
                he has pioneered personalized home visit healthcare across Hyderabad. By bypassing the limitations of
                rushed clinic appointments, he focuses on detailed root-cause diagnoses, posture adjustments,
                and progressive movement recovery.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-primary/10 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold text-accent numerics">{stat.value}</div>
                    <div className="text-xs text-muted font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full justify-center">Consult Dr. Bhanu Now</Button>
                </a>
                <a href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, "")}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full justify-center text-primary border-primary hover:bg-primary/5">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Call {CONTACT_PHONE_DISPLAY}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Detail */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Academic & Professional Registration */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-accent" /> Professional Credentials
          </h2>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 lg:p-8 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Telangana State Physiotherapy Board (TSPMB)</h3>
                <p className="text-sm text-muted mt-1 font-medium">Registered Physical Therapist</p>
                <p className="text-xs text-accent font-bold mt-1">Registration Number: C-13470</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Master of Physiotherapy (MPT) in Orthopedics</h3>
                <p className="text-sm text-muted mt-1 font-medium">Specialized postgraduate study currently being pursued to integrate advanced joint manipulation and sports recovery strategies.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Bachelor of Physiotherapy (BPT)</h3>
                <p className="text-sm text-muted mt-1 font-medium">Comprehensive medical foundations in anatomy, exercise physiology, biomechanics, and clinical physical therapy treatments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" /> Special Certifications
          </h2>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 lg:p-8 space-y-4">
            <p className="text-sm text-muted font-medium pb-2 border-b border-gray-200/60">
              Dr. Bhanu has completed advanced training and holds recognized certifications in clinical specialties:
            </p>
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="text-sm font-bold text-primary/80">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary">Clinical Focus & Specializations</h2>
            <p className="text-muted font-medium mt-3">Combining joint adjustment techniques and neuro-rehabilitation to deliver holistic recovery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicalInterests.map((interest, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 lg:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  {interest.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-primary">{interest.title}</h3>
                  <p className="text-sm text-muted leading-relaxed font-medium">{interest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-primary">What Patients Say About Dr. Bhanu</h2>
          <p className="text-muted font-medium mt-2">Read testimonials from real cases treated at home.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white border border-primary/10 p-8 rounded-3xl relative shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-dark font-medium italic leading-relaxed text-sm mb-6">
                "{test.content}"
              </p>
              <div className="text-xs font-bold text-primary uppercase tracking-wider">{test.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section className="py-12 bg-accent/5 border-t border-b border-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary">Schedule a Home Visit Session with Dr. Bhanu</h3>
          <p className="text-sm text-muted font-medium max-w-2xl mx-auto">
            Available for consultations and sessions in Kukatpally, Miyapur, Kondapur, and Gachibowli.
            All assessments are personalized, and clinical equipment is carried directly to your location.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="shadow-lg shadow-accent/20">Book Home Session</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;