import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  PhoneCall,
  ChevronRight,
  MapPin,
  Home as HomeIcon,
  UserCheck,
  Quote,
  Star,
  Bone,
  Brain,
  Dumbbell,
  Activity,
  Target,
  Calendar,
  FileCheck,
  ThumbsUp,
  Award,
} from "lucide-react";
import Button from "../components/Button";
import TreatmentTicker from "../components/TreatmentTicker";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_LINK,
  SERVICE_AREAS,
  BRAND_NAME,
} from "../constants";

const Home = () => {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroContentY = useTransform(scrollY, [0, 500], [0, -50]);
  const interactionImgY = useTransform(scrollY, [0, 500], [0, 50]);
  const watermarkY = useTransform(scrollY, [0, 3000], [0, 400]);

  const specialties = [
    {
      id: "01",
      slug: "orthopedic",
      title: "Orthopedic Rehabilitation",
      desc: "Recovery for joint pain, post-surgery stiffness, and musculoskeletal injuries delivered at your home.",
      icon: <Bone className="w-6 h-6" />,
      img: "/images/treatments/back_pain_treatment-opt.webp",
      color: "primary",
    },
    {
      id: "02",
      slug: "neurological",
      title: "Neuro Rehabilitation",
      desc: "Specialist hands-on care for stroke recovery, paralysis, and neurological conditions in Kukatpally and Miyapur.",
      icon: <Brain className="w-6 h-6" />,
      img: "/images/treatments/stroke_rehab_session-opt.webp",
      color: "dark",
    },
    {
      id: "03",
      slug: "sports",
      title: "Sports Rehabilitation",
      desc: "Fast, precise recovery from ligament tears and muscle strains to return you to peak performance.",
      icon: <Dumbbell className="w-6 h-6" />,
      img: "/images/treatments/acl_rehab_exercise-opt.webp",
      color: "accent",
    },
  ];

  const additionalServices = [
    {
      title: "Chiropractic Care",
      desc: "Precise spinal and joint corrections at home for lasting relief from misalignment and dysfunction.",
    },
    {
      title: "Dry Needling & Cupping",
      desc: "Advanced clinical techniques to release muscle trigger points and improve tissue mobility.",
    },
    {
      title: "Geriatric Physiotherapy",
      desc: "Gentle, evidence-based care to improve balance, prevent falls, and build strength for elderly patients.",
    },
  ];


  const testimonials = [
    {
      id: 1,
      name: "Sumanth Choudhary",
      treatment: "Joint Pain Treatment",
      content:
        "Dr. Bhanu is extremely professional in his job. I'm very happy with the depth of his knowledge, skills and punctuality. He is very flexible in terms of patient needs. Really appreciate his work.",
    },
    {
      id: 2,
      name: "Jaya Karthik",
      content:
        "Very very nice and professional person. Dr. Bhanu will analyze the condition correctly and then he will create a custom plan based on the condition rather than fixed sets. I would definitely recommend him for others. please do try. 😁",
    },
    {
      id: 3,
      name: "K Deepthi",
      content:
        "I had gotten my prenatal exercise program done by Dr. Bhanu and he was so professional and humble. He would take adequate amount of time to wait between exercises rather than rushing for the time. These exercises for sure helped me in normal delivery. Professional and patient, would definitely recommend him.",
    },
    {
      id: 4,
      name: "Lavanya Ponigeti",
      content:
        "Dr. Bhanu is giving us service to our family over last few years. He has got great experience towards the physiotherapy. He is so dedicated and committed doctor. I have been suffering from many years with my ankle pain, and in the recent days with neck stiffness as well. I made a short trip to India and got treatment from him, I'm feeling better now and he advised me to continue with exercises and need to dedicate time to take care of my health properly. Thank you Dr. Bhanu for your kindness",
    },
    {
      id: 5,
      name: "Krity Sondhi",
      content:
        "Services are really good and I got it little healed in just 2 sessions but I had to stop it in between because they are little overpriced and they suggested to have 10 sessions. But I stopped in 2 sessions only because of overpricing only. If it would have been cheaper than I would have been taken at least 5 sessions. Apart from this issue, services are good and well behaved staff. They have a lot of patience also and understands where is the pain and where needs more pressure. 😊",
    },
    {
      id: 6,
      name: "Revathi Devi Ganta",
      content:
        "I thank Dr. Bhanu for the incredible care and support you provided during my recovery from rotator cuff repair surgery. Your expertise and dedication have been instrumental in my healing process. From the initial stages of immobilization and gentle passive exercises to the more advanced strengthening and mobility phases, your guidance has been invaluable. Your encouragement and personalized approach made a significant difference in my wife's recovery journey. Thank you for your patience, professionalism, and unbelievable support.",
    },
    {
      id: 7,
      name: "Suneeta Chandra",
      content:
        "After suffering from debilitating sciatica pain for nearly four years and undergoing two microdiscectomy surgeries and numerous physiotherapy sessions in the USA, I found myself seeking further treatment during a recent visit to Hyderabad. I had the pleasure of being treated by Dr. Bhanu, and I am incredibly grateful for the relief I experienced in just a few sessions. Dr. Bhanu's knowledge and experience in treating complex spinal conditions like sciatica are exemplary. He approached my case with sincerity and a deep understanding of my condition, which was evident in his thorough assessment and personalized treatment plan. What impressed me most was his approachability and willingness to explain every aspect of the treatment process, ensuring I felt informed and involved in my own recovery. One of the standout qualities of Dr. Bhanu is his punctuality and professionalism. Unlike my previous experiences, I never had to wait beyond my scheduled appointment time, which added to the overall efficiency and convenience of my treatment. I noticed significant improvement in my condition after each session with Dr. Bhanu. His treatments were not only effective but also sustainable, providing me with exercises and strategies to manage my condition long-term. Also, the best part is his home visits which helped not waste time in Hyderabad traffic and had a comfortable and focused atmosphere at my own space. In conclusion, Dr. Bhanu's expertise and compassionate care have made a profound difference in my life. I wholeheartedly recommend him to anyone seeking relief from persistent sciatica pain or any other musculoskeletal issues. Thank you, Dr. Bhanu, for your exceptional service and dedication to your patients' well-being.",
    },
    {
      id: 8,
      name: "SRK Bharath Dev",
      content:
        "Very very nice and professional person. Dr. Bhanu sir has done tremendous job in treating my cervical problem. To be In- Detail: I was having dizziness and Light headedness from last 3 Years and visited more than 20 doctors, (Nothing worked out in my favour) last month - One of the doctor suggested that root cause for his might be cervical issue and suggested me to meet Dr. Bhanu. I feel very relaxed now as the pain has been completely gone and I don't feel any dizziness / Nausea. Dr. Bhanu has few qualities to make him stand out of other physiotherapists: 1. always on Time. 2. Focuses much on stretches and exercises not on machines. 3. very well behaving. 4. Ground to earth and polite attitude. I asked him for guest lecture in my office as I found many colleagues having similar issues and he guided everyone in office in 5 hrs. session with lot of patience.",
    },
    {
      id: 9,
      name: "Nageshwar Rao",
      content:
        "I have been getting treatment for long term from Dr. Bhanu. I have whole body weakness and he has been helping me greatly to be active and walk. He is very kind and patient with old people like me. I would highly suggest him for physiotherapy for old people as he listens patiently and provides care during treatment.",
    },
    {
      id: 10,
      name: "Kalyan Kumar S",
      content:
        "I had been suffering from severe neck pain for quite some time, and after trying various treatments without much relief, I finally consulted Bhanu and I'm so glad I did! From the very first session, Bhanu's professionalism, knowledge, and caring approach stood out. He took the time to understand the root cause of my pain and designed a treatment plan that was both effective and easy to follow. Within just a few sessions, I noticed a remarkable improvement in my mobility and a significant reduction in pain. Bhanu's techniques, combined with his patient explanations and attention to detail, made a world of difference. I'm now almost completely pain-free and feeling so much better. Highly recommend Bhanu to anyone struggling with neck or spine issues he's truly exceptional!",
    },
    {
      id: 11,
      name: "Sravya Chinnu",
      content:
        "I recently received treatment from Dr. Bhanu Kumar Vemula for treatment of a shoulder injury. Dr. Bhanu conducted a thorough initial assessment and created a tailored treatment plan that included a mix of manual therapy and exercises. He was very attentive and made sure I understood each step of the process. After several sessions, I noticed significant improvement in my mobility and a substantial reduction in pain. His guidance on home exercises was particularly beneficial. Dr. Bhanu was always professional, punctual, and approachable. He patiently answered all my questions and provided clear instructions. One thing that really impressed me was how Dr. Bhanu remembered small details about my daily activities and adjusted my treatment accordingly. Overall, I highly recommend Dr. Bhanu to anyone seeking a knowledgeable and caring physiotherapist. His expertise and dedication truly made a difference in my recovery. Thank you",
    },
    {
      id: 12,
      name: "Sai Pranitha",
      content:
        "We received physiotherapy treatment for 10 days for my mother-in-law, my mother, and myself, and the experience was truly excellent. The therapist was professional, patient, and extremely knowledgeable. He understood each of our individual needs and provided personalized care that made a big difference in our recovery. We are very happy with the improvement we've seen, especially in pain relief and mobility. His dedication, punctuality, and gentle approach made the sessions comfortable and effective. Highly recommended for anyone looking for quality physiotherapy at home. Thank you for the wonderful service!",
    },
    {
      id: 13,
      name: "Ekkirala Sree Lakshmi",
      content:
        "Highly recommend Dr. Bhanu. He doesn't just focus on instant pain relief but takes time to find the root cause, target it, and instruct proper exercises. Anyone looking for relief from chronic issues should look no further.",
    },
    {
      id: 14,
      name: "Praveen Kumar",
      content:
        "Hi Bhanu, thank you for the excellent service. I highly recommend it to anyone seeking reliable, personalized care. The therapist was punctual, professional, and attentive throughout each session. I appreciated the personalized approach and clear guidance during every visit. By the end of the treatment, my discomfort had significantly reduced and I felt far more relaxed. Each session was carried out with professionalism, care, and genuine attention to my comfort.",
    },
    {
      id: 15,
      name: "Rajeswari Chitikela",
      content:
        "I have taken treatment from Dr. Bhanu for my ligament problem. Orthopedic suggestions did not help much, but within 4–5 sessions and following his exercise routines, my pain reduced significantly. Highly recommended for this type of professional support at home.",
    },
    {
      id: 16,
      name: "Meghana Devabakthuni",
      content:
        "Thank you for treating my back pain condition (lumbar lordosis), which gave me huge relief. Bhanu garu is very professional and humble, and makes patients comfortable during treatment. He is well trained, punctual, and understands every concern. I strongly recommend their home physiotherapy services for those looking for real improvement. Thank you once again.",
    },
    {
      id: 17,
      name: "Sri Saikanth Reddy G",
      content:
        "I was experiencing severe upper back and neck muscle pain affecting my daily routine. Bhanu garu explained the root cause clearly and provided highly effective treatment that completely relieved my stiffness. I truly appreciate his expertise, care, and professional approach. Thank you.",
    },
  ];

  const conditions = [
    {
      title: "Back Pain",
      slug: "back-pain",
      img: "/images/treatments/back_pain_treatment-opt.webp",
    },
    {
      title: "Neck Pain",
      slug: "neck-pain",
      img: "/images/treatments/neck_pain_treatment-opt.webp",
    },
    {
      title: "Shoulder Pain",
      slug: "shoulder-pain",
      img: "/images/treatments/shoulder_pain_rehab-opt.webp",
    },
    {
      title: "Stroke Recovery",
      slug: "stroke-rehabilitation",
      img: "/images/treatments/stroke_rehab_session-opt.webp",
    },
    {
      title: "Parkinson’s Care",
      slug: "parkinsons-disease",
      img: "/images/treatments/parkinsons_care_physio-opt.webp",
    },
    {
      title: "ACL Rehabilitation",
      slug: "acl-rehabilitation",
      img: "/images/treatments/acl_rehab_exercise-opt.webp",
    },
    {
      title: "Tennis Elbow",
      slug: "tennis-elbow",
      img: "/images/treatments/tennis_elbow_therapy-opt.webp",
    },
    {
      title: "Chiropractic Care",
      slug: "chiropractic-care",
      img: "/images/treatments/chiropractic_adjustment-opt.webp",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* 1. CLINICAL AUTHORITY HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Primary Background Image Layer with Parallax */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src="/bg.webp"
            alt="Physiotherapy Clinical Background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Clinical White Overlay for Readability & Clean Aesthetic */}
          <div className="absolute inset-0 bg-white/85" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto responsive-padding grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center pt-32 sm:pt-40 lg:pt-0 flex-grow">
          {/* Content Column - Structured & Professional with Parallax */}
          <motion.div
            style={{ y: heroContentY }}
            className="space-y-4 lg:space-y-8 relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center gap-3 lg:mb-6">
                <span className="w-8 lg:w-10 h-1 bg-accent" />
                <span className="text-accent font-sans font-bold uppercase tracking-[0.18em] text-[9px] leading-relaxed sm:text-[10px] lg:text-xs">
                  Expert Physiotherapy at Home in Hyderabad
                </span>
              </div>

              <h1 className="editorial-display text-primary">
                Physiotherapy at Home for Pain Relief,{" "}
                <span className="text-accent italic font-normal">
                  Recovery,
                </span>{" "}
                and Mobility.
              </h1>

              <div className="mt-4 lg:mt-8 max-w-xl">
                <p className="text-sm lg:text-xl text-dark font-medium leading-relaxed opacity-90">
                  Expert physiotherapy at home for pain relief, injury recovery,
                  and post-surgery rehab delivered with personalized care.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6 mt-6 lg:mt-10">
                  <a
                    href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book a physiotherapy session at home.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto rounded-full px-6 lg:px-10 py-4 border-none text-white font-bold tracking-wide transition-all shadow-xl shadow-accent/20 whitespace-nowrap text-xs sm:text-sm lg:text-base"
                    >
                      Book Home Visit
                    </Button>
                  </a>

                  {/* Location Info */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <MapPin className="text-accent w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                    <span className="text-xs lg:text-sm font-bold uppercase tracking-tight text-primary">
                      {SERVICE_AREAS.split(",").slice(0, 2).join(" | ")} |
                      Nearby
                    </span>
                    <span className="text-primary/30">|</span>
                    <a
                      href={`tel:${CONTACT_PHONE_DISPLAY?.replace(/\s/g, "")}`}
                      className="text-xs lg:text-sm text-accent font-bold tracking-wide flex items-center gap-1 hover:opacity-80 transition-opacity"
                    >
                      📞 {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column - Realistic & Professional with Parallax */}
          <motion.div
            style={{ y: interactionImgY }}
            className="relative mt-4 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 overflow-hidden shadow-2xl rounded-2xl lg:rounded-3xl"
            >
              <img
                src="/images/treatments/hero_physio_interaction_retry-opt.webp"
                alt="Personalized Home Physiotherapy Session"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                loading="eager"
                decoding="async"
              />
              {/* Subtle frame element for medical feel */}
              <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none" />
            </motion.div>

            {/* Location Anchor */}
            <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white p-4 lg:p-6 shadow-xl z-20 border-l-4 border-accent hidden sm:block rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                  Serving Hyderabad
                </span>
              </div>
              <p className="text-xs lg:text-sm text-muted font-medium mt-2 max-w-[150px] lg:max-w-[180px]">
                Nizampet, Kondapur, Madinaguda & Gachibowli
              </p>
            </div>
          </motion.div>
        </div>

        {/* TRUST BAR */}
        <div className="bg-[#0B3D36] py-5 lg:py-10 mt-6 lg:mt-0 relative z-30">
          <div className="max-w-[1400px] mx-auto responsive-padding">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-0 items-center">
              {[
                {
                  title: "Certified Doctors",
                  desc: "BPT/MPT experts",
                  icon: <UserCheck className="w-4 h-4 lg:w-6 lg:h-6" />,
                },
                {
                  title: "1-on-1 Care",
                  desc: "Focused attention",
                  icon: <Users className="w-4 h-4 lg:w-6 lg:h-6" />,
                },
                {
                  title: "Home Visits",
                  desc: "Safe & comfortable",
                  icon: <HomeIcon className="w-4 h-4 lg:w-6 lg:h-6" />,
                },
                {
                  title: "Trusted Care",
                  desc: "Honest pricing",
                  icon: <ShieldCheck className="w-4 h-4 lg:w-6 lg:h-6" />,
                },
                {
                  title: "1000+ Recoveries",
                  desc: "Happy patients",
                  icon: <ThumbsUp className="w-4 h-4 lg:w-6 lg:h-6" />,
                },
                {
                  title: "6+ Years",
                  desc: "Proven expertise",
                  icon: <Award className="w-4 h-4 lg:w-6 lg:h-6" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center group py-1"
                >
                  <div className="flex items-center gap-2.5 lg:gap-4">
                    <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-lg bg-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <h4 className="text-white font-serif font-bold text-[10px] lg:text-sm leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-[8px] lg:text-[11px] font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {/* Vertical Divider on Desktop */}
                  {idx < 5 && (
                    <div className="hidden lg:block w-[1px] h-10 bg-white/10 ml-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT EDUCATION & GUIDED RECOVERY APPROACH */}
      <section className="section-spacing bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto responsive-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-accent" />
                <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                  Patient Education & Guided Recovery Approach
                </span>
              </div>
              <h2 className="editorial-heading text-primary leading-tight">
                We Don't Just Treat Your Pain <br className="hidden md:block" />
                <span className="text-accent italic font-normal">
                  We Help You Understand It.
                </span>
              </h2>
              <p className="text-base lg:text-lg text-dark font-medium leading-relaxed opacity-90">
                At {BRAND_NAME}, we follow a guided recovery approach where
                patients are educated about their condition, movement patterns,
                and home exercise program to ensure better understanding and
                faster recovery.
              </p>
            </div>

            <div className="relative max-w-sm mx-auto lg:ml-auto lg:mr-0">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                {/* Main Image with Clinical Border - No Cropping */}
                <div className="aspect-[4/5] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white bg-white">
                  <img
                    src="/founder.png"
                    alt="Dr. Bhanu Kumar Vemula - Chief Physiotherapist"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Floating Specialist Badge - Always Visible */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 shadow-lg border-l-4 border-accent z-20 rounded-r-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest">
                        Chief Specialist
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Badge - Always Visible */}
                <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-primary p-4 lg:p-6 shadow-xl border-t-4 border-accent z-30 rounded-xl">
                  <div className="text-center">
                    <span className="block text-2xl lg:text-3xl font-serif font-bold text-white mb-0.5">
                      6+
                    </span>
                    <span className="block text-[8px] uppercase tracking-[0.2em] font-bold text-accent">
                      Years Experience
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-12">
            {[
              {
                title: "Identify the Root Cause",
                desc: "Clear understanding of your condition and movement patterns for targeted recovery.",
              },
              {
                title: "Structured Rehabilitation",
                desc: "Focused sessions designed to improve mobility, reduce discomfort, and accelerate healing.",
              },
              {
                title: "Sustain the Results",
                desc: "Practical routines that help you stay pain-free and prevent future issues.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full rounded-xl border-l-4 border-accent bg-white p-5 shadow-sm lg:p-6"
              >
                <h4 className="mb-2.5 font-serif text-base font-bold leading-snug text-primary lg:text-lg">
                  {item.title}
                </h4>
                <p className="text-xs font-medium leading-relaxed text-muted/90 lg:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES (KEEP IT SCANNABLE) */}
      <section className="section-spacing bg-surface overflow-hidden">
        <div className="max-w-[1600px] mx-auto responsive-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12">
            <div className="lg:col-span-8">
              <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">
                Our Expertise
              </span>
              <h2 className="editorial-heading text-primary leading-tight">
                Comprehensive <br className="hidden md:block" />
                <span className="italic text-accent">Home</span> Treatment.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/services"
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
              >
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-8 lg:mb-10">
            {specialties.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group ${idx % 2 !== 0 ? "md:mt-12" : ""}`}
              >
                <Link
                  to={item.slug ? `/service/${item.slug}` : "/contact"}
                  className={`relative overflow-hidden aspect-[3/2] mb-6 shadow-lg rounded-2xl lg:rounded-3xl border-2 border-white group-hover:border-[#5182EF] group-hover:shadow-xl transition-all duration-700 w-full block`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[#5182EF]/0 group-hover:bg-[#5182EF]/20 transition-all duration-500 rounded-2xl lg:rounded-3xl" />
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[8px] font-bold tracking-[0.2em] uppercase rounded-full shadow-sm text-primary">
                    {item.id}
                  </div>
                </Link>
                <div className="space-y-2 lg:space-y-3">
                  <div className="mb-2 text-accent group-hover:text-[#5182EF] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <Link to={item.slug ? `/service/${item.slug}` : "/contact"}>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-accent group-hover:text-[#5182EF] transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed opacity-80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto border-t border-primary/10 pt-10 lg:pt-16">
            {additionalServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border-l-4 border-accent bg-white p-5 shadow-sm lg:gap-6 lg:p-6"
              >
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-bold text-primary mb-1">
                    {service.title}
                  </h4>
                  <p className="text-dark text-xs font-medium opacity-80">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED TREATMENTS (Conditions We Treat) - Redesigned as Marquee */}
      <section className="section-spacing bg-surface/50 overflow-hidden">
        <div className="max-w-7xl mx-auto responsive-padding mb-8 lg:mb-12 text-center lg:text-left">
          <div className="flex items-center space-x-3 mb-3 lg:mb-4 justify-center lg:justify-start">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
              Specialized Conditions
            </span>
          </div>
          <h2 className="editorial-heading text-primary leading-tight flex flex-wrap justify-center lg:justify-start items-center gap-x-3">
            <span>Treatments We</span>
            <span className="text-accent italic font-normal">Offer</span>
            <TreatmentTicker />
          </h2>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          <div className="marquee-track flex whitespace-nowrap gap-4 py-2 lg:gap-6">
            {/* Double the array for seamless loop */}
            {[...conditions, ...conditions].map((condition, idx) => (
              <Link
                key={idx}
                to={`/treatment/${condition.slug}`}
                className="relative group w-[180px] lg:w-[240px] flex-shrink-0"
              >
                {/* Shining Card Container */}
                <div className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-square shadow-lg bg-white border border-primary/5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <img
                    src={condition.img}
                    alt={condition.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Shining Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white font-serif font-bold text-sm lg:text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {condition.title}
                    </p>
                  </div>
                </div>

                {/* Caption below card */}
                <div className="mt-2 text-center">
                  <span className="text-[8px] lg:text-xs font-bold text-primary/60 uppercase tracking-widest group-hover:text-accent transition-colors">
                    {condition.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 lg:mt-12 text-center">
          <Link to="/treatment">
            <Button variant="outline" className="group rounded-full px-8">
              View All Treatment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US (IMPORTANT FOR CONVERSION) */}
      <section className="py-10 lg:py-16 bg-surface relative overflow-hidden">
        {/* Large background text with Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {BRAND_NAME.toUpperCase()}
        </motion.div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] block mb-3">
              The Advantage
            </span>
            <h2 className="editorial-heading text-primary leading-tight">
              Why Choose{" "}
              <span className="italic font-normal text-accent">
                {BRAND_NAME}?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                title: "Faster Results with Regular Monitoring",
                text: "We track your progress session-by-session and modify treatment plans to ensure faster and safer recovery.",
                icon: <Activity className="w-5 h-5" />,
              },
              {
                title: "Focus on Long-Term Recovery",
                text: "We don't just reduce pain – we work on: strength, mobility, function, prevention of recurrence.",
                icon: <Target className="w-5 h-5" />,
              },
              {
                title: "One-on-One Dedicated Sessions",
                text: "Complete attention with no rushed treatments or multiple patients at once.",
                icon: <UserCheck className="w-5 h-5" />,
              },
              {
                title: "Easy Booking & Support",
                text: "Simple appointment process with quick response and flexible scheduling.",
                icon: <Calendar className="w-5 h-5" />,
              },
              {
                title: "Personalized Treatment Plans",
                text: "No generic exercises. Every patient receives a customized rehab program based on their condition, lifestyle, and recovery goals.",
                icon: <FileCheck className="w-5 h-5" />,
              },
              {
                title: "Home Visit Convenience & Safety",
                text: "Receive expert physiotherapy in the comfort of your home. No travel, no waiting. Ideal for post-surgery, elderly patients and those with limited mobility.",
                icon: <HomeIcon className="w-5 h-5" />,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent lg:border-transparent group cursor-pointer h-full flex flex-col"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-base lg:text-lg font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h4>
                <p className="text-dark text-xs lg:text-sm font-medium leading-relaxed opacity-80">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE (New Position - Social Proof) */}
      <section className="py-10 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-accent" />
                <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                  Patient Success Stories
                </span>
              </div>
              <h2 className="editorial-heading text-primary leading-tight">
                What Our{" "}
                <span className="text-accent italic font-normal">Patients</span>{" "}
                Say
              </h2>
              <p
                className="text-sm font-bold tracking-[0.12em] uppercase"
                aria-label="Google Reviews"
              >
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#DB4437" }}>o</span>
                <span style={{ color: "#F4B400" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#0F9D58" }}>l</span>
                <span style={{ color: "#DB4437" }}>e</span>
                <span className="text-primary"> Reviews</span>
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-2 pb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="text-primary font-bold ml-2">
                5.0 Overall Rating
              </span>
            </div>
          </div>
        </div>

        {/* Infinite Marquee Wrapper */}
        <div className="relative flex overflow-x-hidden pb-12">
          <motion.div
            className="flex whitespace-normal gap-6 lg:gap-10 py-4 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 150,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="relative group bg-surface h-full rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-primary/5 hover:border-accent/20 transition-all duration-500 w-[320px] lg:w-[480px] shrink-0 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg -mt-12 lg:-mt-14 mb-6 group-hover:scale-110 transition-transform">
                    <Quote className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-dark font-medium leading-relaxed text-sm lg:text-base italic mb-6 line-clamp-6 opacity-90 group-hover:opacity-100 transition-opacity">
                    {testimonial.content}
                  </p>
                </div>

                <div className="pt-6 border-t border-primary/5 flex items-center space-x-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-inner">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-primary font-serif font-bold text-sm lg:text-base">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-muted">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Verified Patient
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Decorator */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent rounded-b-[2rem] lg:rounded-b-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </motion.div>

          {/* Mask for smooth fade-off */}
          <div className="absolute inset-y-0 left-0 w-24 lg:w-64 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 lg:w-64 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </section>

      {/* SERVICE AREA - Redesigned with Map Cards */}
      <section className="py-10 lg:py-16 bg-white relative overflow-hidden border-t border-primary/5">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg
            className="w-full h-full"
            patternUnits="userSpaceOnUse"
            width="60"
            height="60"
          >
            <path d="M0 0h60v60H0z" fill="none" />
            <path
              d="M30 0v60M0 30h60"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="1"
            />
            <circle
              cx="30"
              cy="30"
              r="3"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary">
              Areas <span className="text-accent italic font-normal">We</span>{" "}
              Cover
            </h2>
            <p className="text-dark/70 text-base lg:text-lg font-medium mt-4 max-w-2xl mx-auto">
              Looking for a physiotherapist near you? {BRAND_NAME} delivers
              expert rehabilitation across Miyapur and nearby areas, offering
              convenient, personalized treatment tailored to your recovery
              needs.
            </p>
          </motion.div>

          {/* Location Cards with Pulse Effect */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
            {[
              { name: "Madhapur", radius: "5 KM", highlight: true },
              { name: "KPHB", radius: "4 KM", highlight: false },
              { name: "Nanakramguda", radius: "2 KM", highlight: true },
              { name: "Lingampally", radius: "3 KM", highlight: false },
              { name: "Hydernagar", radius: "5 KM", highlight: true },
              { name: "Vivekananda Nagar", radius: "4 KM", highlight: false },
              { name: "Vasantha Nagar", radius: "3 KM", highlight: true },
              { name: "Bachupally", radius: "5 KM", highlight: false },
              { name: "Hafeezpet", radius: "4 KM", highlight: true },
              { name: "Pragathi Nagar", radius: "5 KM", highlight: false },
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`relative p-5 lg:p-6 rounded-2xl transition-all duration-310 group ${
                  area.highlight
                    ? "bg-accent text-white shadow-xl shadow-accent/20"
                    : "bg-surface text-primary hover:bg-primary/5 border border-primary/5"
                }`}
              >
                {area.highlight && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse border-2 border-white">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                )}
                <h3 className="text-base lg:text-lg font-serif font-bold mb-1">
                  {area.name}
                </h3>
                <p
                  className={`text-xs font-bold ${area.highlight ? "text-white/80" : "text-primary/60"}`}
                >
                  ~{area.radius} from center
                </p>
              </motion.div>
            ))}
          </div>

          {/* Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-primary/5"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <HomeIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary">
                  Home-Based Physiotherapy
                </h3>
                <p className="text-sm lg:text-base text-muted font-medium">
                  Professional treatment delivered in the comfort of your home.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3 py-2 px-4 bg-primary/5 rounded-full text-primary"></div>
              <a
                href={`tel:+91${CONTACT_PHONE_DISPLAY?.replace(/\s/g, "")}`}
                className="flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-5 h-5" />
                <span className="text-lg">{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRONG CTA (DON’T BE WEAK HERE) */}
      <section className="py-10 lg:py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 mask-editorial-1 -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 lg:space-y-10">
          <h2 className="text-3xl lg:text-7xl font-serif font-bold text-primary leading-tight">
            Start Your <br />
            <span className="text-accent italic font-normal">
              Recovery Today.
            </span>
          </h2>
          <p className="text-dark max-w-xl mx-auto font-medium text-base lg:text-lg opacity-90">
            Physiotherapy at home in Miyapur for back pain, stroke recovery, and
            post-surgery rehabilitation. Get expert care at your doorstep with
            fast response and personalized treatment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 pt-4">
            <a
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book an appointment now.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full rounded-full px-10 group border-none text-white hover:bg-accent/90 shadow-xl shadow-accent/20"
              >
                Book Your Appointment Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted mb-1">
                Speak to a Specialist
              </span>
              <a
                href={`tel:+91${CONTACT_PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-base lg:text-lg hover:text-accent transition-colors"
              >
                <PhoneCall className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
