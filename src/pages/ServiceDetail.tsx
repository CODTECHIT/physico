import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Dumbbell, Brain, HeartPulse, Zap, Activity, Accessibility, Syringe, Bandage, Target } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { CONTACT_WHATSAPP_LINK, BRAND_NAME } from '../constants';

const servicesData: Record<string, any> = {
  'cardio': {
    title: 'Cardio-Respiratory Care',
    desc: 'Professional Cardio-Respiratory Physiotherapy at Home in Kukatpally & Miyapur. Our team brings specialized heart and lung rehabilitation to your doorstep across Hyderabad’s leading neighborhoods. Whether you\'re recovering from surgery or managing chronic conditions, our certified physiotherapists deliver personalized care for optimal recovery and comfort.',
    icon: <HeartPulse className="w-12 h-12" />,
    img: '/images/treatments/runners_knee_physio.png',
    conditions: [
      'Post-Surgery Cardiac Rehab',
      'Chronic Heart Support',
      'Heart Attack Recovery',
      'Breathing & Lung Health',
      'Hypertension Management',
      'Cardiovascular Fitness'
    ],
    features: [
      'Post-Surgery Cardiac Rehabilitation',
      'Chronic Heart Condition Support',
      'After-Heart Attack Rehabilitation',
      'Breathing & Cardiovascular Fitness'
    ],
    focus: 'Improve heart function & overall endurance'
  },
  'neurological': {
    title: 'Neuro Rehabilitation',
    desc: 'Stroke, paralysis, and neurological conditions require specialist hands-on care, not just exercises. Dr. Bhanu delivers evidence-based neuro rehab directly at your home in Kukatpally, Miyapur, Kondapur and nearby areas, helping patients regain movement, balance, and daily independence.',
    icon: <Brain className="w-12 h-12" />,
    img: '/images/treatments/neuro_rehab_new.jpg',
    conditions: [
      'Stroke Rehabilitation',
      "Parkinson's Disease Rehabilitation",
      'Cerebral Palsy Therapy',
      'Spinal Cord Injury Rehabilitation',
      "Facial Palsy (Bell's Palsy)",
      'Balance & Gait Improvement'
    ],
    features: [
      'Stroke Recovery & Rehab',
      "Parkinson's Support",
      'Pediatric Neuro Therapy',
      'Spinal Injury Rehabilitation'
    ],
    focus: 'Restore function & improve quality of life',
    outcome: 'Most patients show measurable improvement in mobility and daily function within 8–12 sessions.',
    idealFor: "Stroke survivors, paralysis patients, Parkinson's patients, children with neuro conditions."
  },
  'orthopedic': {
    title: 'Orthopedic Rehabilitation',
    desc: 'Whether it\'s joint pain, post-surgery stiffness, or a musculoskeletal injury, recovery should happen at your pace, in your own home. Our orthopedic physiotherapy combines manual therapy, targeted exercises, and advanced modalities to eliminate pain at the root cause, not just the symptoms.',
    icon: <Activity className="w-12 h-12" />,
    img: '/images/treatments/orthopedic_rehab_new.jpg',
    conditions: [
      'Back Pain Treatment',
      'Neck Pain Treatment',
      'Shoulder Pain Treatment',
      'Plantar Fasciitis Treatment',
      'Post-Surgery Joint Recovery',
      'Muscle & Joint Pain Relief'
    ],
    features: [
      'Post-Surgery Joint Recovery',
      'Muscle & Joint Pain Relief',
      'Improved Flexibility & Strength',
      'Customised Treatment Plans'
    ],
    focus: 'Reduce pain & restore movement',
    outcome: 'Patients with knee pain, frozen shoulder & post-surgical stiffness typically recover full function in 6–10 sessions.',
    idealFor: 'Post-surgery patients, knee & hip pain, office workers with chronic back or neck pain.'
  },
  'sports': {
    title: 'Sports Rehabilitation',
    desc: 'Sports injuries demand fast, precise recovery so you can return to peak performance without re-injury. From ligament tears to muscle strains, our sports physio program combines injury-specific treatment with functional training, designed around your sport and your body.',
    icon: <Dumbbell className="w-12 h-12" />,
    img: '/images/treatments/sports_rehab_new.jpg',
    conditions: [
      'Tennis Elbow Treatment',
      "Golfer's Elbow Treatment",
      'ACL Reconstruction Rehabilitation',
      'Rotator Cuff Injury Rehabilitation',
      'Patellofemoral Pain Syndrome',
      'Injury Recovery & Pain Relief'
    ],
    features: [
      'Injury Recovery & Pain Management',
      'Post-Surgical Sports Rehab',
      'Performance Enhancement',
      'Return-to-Sport Guidance'
    ],
    focus: 'Faster recovery & injury prevention',
    outcome: 'Athletes return to training significantly faster with structured home-based sports rehab compared to rest alone.',
    idealFor: 'Athletes, gym-goers, runners, cricket & football players, and anyone with a sports-related injury.'
  },
  'chiropractic': {
    title: 'Chiropractic Care',
    desc: 'Most pain originates from spinal misalignment and joint dysfunction, not just muscle tightness. Dr. Bhanu\'s chiropractic expertise, combined with physiotherapy, delivers precise spinal and joint corrections at your home for lasting relief without dependency on medication.',
    icon: <Accessibility className="w-12 h-12" />,
    img: '/images/treatments/chiropractic_adjustment-opt.webp',
    conditions: [
      'Spinal Joint Restrictions',
      'Spinal Misalignment',
      'Postural Dysfunction',
      'Back & Neck Stiffness',
      'Reduced Mobility',
      'Biomechanical Dysfunction'
    ],
    features: [
      'Spinal Adjustments & Mobilization',
      'Postural Correction',
      'Combined Rehabilitation Approach',
      'Long-Term Stability'
    ],
    focus: 'Restore joint mobility & optimise spinal function',
    outcome: 'Patients with chronic back and neck pain report significant relief after just 3–5 chiropractic sessions.',
    idealFor: 'Chronic back & neck pain, poor posture, desk workers, spinal stiffness patients.'
  },
  'geriatric': {
    title: 'Geriatric Physiotherapy',
    desc: 'Ageing should not mean losing independence. Our geriatric physiotherapy brings gentle, evidence-based care to elderly patients at home, improving balance, preventing falls, building strength, and supporting a healthy, active lifestyle in the comfort of familiar surroundings.',
    icon: <Accessibility className="w-12 h-12" />,
    img: '/images/treatments/geriatric_physiotherapy_home.png',
    conditions: [
      'Age-Related Strength Decline',
      'Balance & Fall Risk',
      'Joint Stiffness',
      'Reduced Mobility',
      'Walking Difficulties',
      'Arthritis & Joint Pain'
    ],
    features: [
      'Balance & Fall Prevention',
      'Strength Training',
      'Mobility & Gait Training',
      'Pain Management'
    ],
    focus: 'Stay active & independent',
    outcome: 'Regular geriatric physio significantly reduces fall risk and helps elderly patients maintain independence longer.',
    idealFor: 'Elderly adults (60+), post-fall recovery, age-related joint pain, mobility decline.'
  },
  'dry-needling': {
    title: 'Dry Needling Therapy',
    desc: 'Stubborn muscle pain that doesn\'t respond to massage or rest is often caused by myofascial trigger points. Dr. Bhanu\'s certified dry needling precisely targets these knots to deactivate them, restore normal muscle function, and provide fast, lasting relief, all at your home.',
    icon: <Syringe className="w-12 h-12" />,
    img: '/images/treatments/dry_needling_therapy.png',
    conditions: [
      'Myofascial Trigger Points',
      'Referred Pain Patterns',
      'Muscle Overuse & Strain',
      'Poor Posture & Imbalance',
      'Chronic Muscle Tension',
      'Movement Restriction'
    ],
    features: [
      'Myofascial Trigger Point Release',
      'Targeted Needle Insertion',
      'Combined With Corrective Exercises',
      'Root Cause Rehabilitation'
    ],
    focus: 'Release trigger points & restore muscle function',
    outcome: 'Patients with chronic muscle pain and tightness often experience significant relief within 2–4 sessions.',
    idealFor: 'Chronic muscle pain, neck & shoulder tightness, trigger points, headache from muscle tension.'
  },
  'cupping': {
    title: 'Cupping Therapy',
    desc: 'Cupping therapy uses controlled negative pressure to lift and release tight fascia, improve blood circulation, and accelerate tissue healing, an ancient technique now backed by modern clinical evidence. Ideal as a standalone treatment or combined with physiotherapy for faster recovery.',
    icon: <Bandage className="w-12 h-12" />,
    img: '/images/treatments/cupping_therapy_session.png',
    conditions: [
      'Poor Circulation & Tissue Congestion',
      'Fascial Tightness',
      'Persistent Muscle Stiffness',
      'Chronic Postural Strain',
      'Delayed Muscle Recovery',
      'Restricted Movement'
    ],
    features: [
      'Dynamic & Static Cupping',
      'Tissue Mobility Improvement',
      'Enhanced Blood Circulation',
      'Combined With Exercise Therapy'
    ],
    focus: 'Improve tissue mobility & muscle relaxation',
    outcome: 'Best results seen when combined with manual therapy  most patients report reduced stiffness and improved range of motion within 3–5 sessions.',
    idealFor: 'Muscle tightness, back stiffness, sports recovery, chronic pain with poor circulation.'
  },
  'iastm': {
    title: 'IASTM Therapy',
    desc: 'IASTM (Instrument Assisted Soft Tissue Mobilisation) uses specially designed tools to detect and break down scar tissue, adhesions, and fascial restrictions that limit movement and cause pain, restoring smooth, pain-free function in ways that hands alone cannot achieve.',
    icon: <Target className="w-12 h-12" />,
    img: '/images/treatments/iastm_therapy_tool.png',
    conditions: [
      'Post-Injury Scar Tissue',
      'Soft Tissue Adhesions',
      'Chronic Stiffness',
      'Movement Restrictions',
      'Reduced Flexibility',
      'Fascial Restrictions'
    ],
    features: [
      'Soft Tissue Adhesion Release',
      'Scar Tissue Management',
      'Improved Tissue Glide',
      'Combined With Active Rehabilitation'
    ],
    focus: 'Restore tissue health & movement quality',
    outcome: 'Particularly effective for post-surgical scar tissue and chronic tendon issues, results visible within 4–6 sessions.',
    idealFor: 'Post-surgery scar tissue, tendon pain, restricted movement, chronic soft tissue injuries.'
  },
  'kinesio-taping': {
    title: 'Kinesio Taping',
    desc: 'Kinesio taping provides continuous therapeutic support between sessions  reducing pain, stabilising joints, and enhancing circulation 24 hours a day without restricting natural movement. A powerful complement to physiotherapy that keeps your recovery progressing even when the therapist isn\'t there.',
    icon: <Zap className="w-12 h-12" />,
    img: '/images/treatments/Flexophysio New Website Images (3).jpg.jpeg',
    conditions: [
      'Sports Injuries',
      'Muscle Strain & Sprain',
      'Joint Pain & Instability',
      'Postural Support',
      'Swelling & Bruising',
      'Performance Enhancement'
    ],
    features: [
      'Pain Reduction & Management',
      'Muscle Support & Stabilization',
      'Improved Circulation & Healing',
      'Enhanced Performance & Recovery'
    ],
    focus: 'Support muscles & accelerate recovery',
    outcome: 'When combined with physiotherapy, Kinesio taping reduces recovery time and helps maintain treatment gains between sessions.',
    idealFor: 'Sports injuries, muscle strains, joint instability, swelling management, post-exercise recovery.'
  },
  'back-pain': {
    title: 'Back Pain Treatment',
    desc: `Back pain is one of the most common complaints today but not all back pain is serious, and most cases do not require surgery. While conditions like spondylitis or disc issues are often blamed, the reality is that many people experience back pain due to muscle weakness, poor posture, limited hip mobility, pelvic imbalance, or sedentary lifestyle habits. At ${BRAND_NAME}, we believe in identifying the true root cause of your pain rather than just treating symptoms. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive professional, one-on-one care tailored to your condition and lifestyle. Don't rush into medications or surgery. The right physiotherapy can make all the difference. Call now to book your home physiotherapy session.`,
    icon: <Activity className="w-12 h-12" />,
    img: '/images/treatments/back_pain_treatment.png',
    conditions: [
      'Muscle Weakness & Core Instability',
      'Poor Posture & Movement Patterns',
      'Limited Hip Mobility & Pelvic Imbalance',
      'Sedentary Lifestyle & Daily Habits',
      'Spondylitis & Disc Issues',
      'Sciatica & Nerve Pain'
    ],
    features: [
      'Detailed home assessment: Our expert physiotherapists perform a comprehensive evaluation during home visits, assessing core and back muscle strength, hip joint mobility and flexibility, pelvic alignment and SI joint stability, posture, movement patterns, and daily habits.',
      'Targeted strengthening exercises: Customized exercise programs designed to strengthen core muscles and support the spine.',
      'Stretching and mobility training: Focused stretching routines to improve flexibility and reduce stiffness.',
      'Postural correction techniques: Ergonomic advice and exercises to correct poor posture that contributes to back pain.',
      'Manual therapy and pain relief modalities: Hands-on techniques and therapeutic modalities for effective pain management.',
      'Functional training for daily activities: Training designed to help you move safely and efficiently in your everyday life.'
    ],
    focus: 'Reduce pain, restore movement, and prevent recurrence all from the comfort of your home'
  },
  'neck-pain': {
    title: 'Neck Pain Treatment',
    desc: `Neck pain often starts subtly stiffness while turning your head, discomfort after long phone use, or a dull ache by the end of the day. Over time, it can progress into persistent pain, headaches, or even radiating symptoms into the shoulders and arms. While many assume it's due to cervical spondylosis or disc issues, a large number of cases are actually linked to forward head posture, tight neck and shoulder muscles, weak deep cervical stabilizers, and reduced mobility in the upper spine. Daily habits like prolonged screen time and poor sleeping positions further aggravate the problem. At ${BRAND_NAME}, we take an evidence-based and individualized approach to neck pain management. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive focused, one-on-one care in the comfort of your home. Address the cause, not just the symptoms. Book your session today and restore comfortable, pain-free movement.`,
    icon: <Activity className="w-12 h-12" />,
    img: '/images/treatments/neck_pain_new.jpg',
    conditions: [
      'Forward head posture & tech neck',
      'Tight neck & shoulder muscles',
      'Weak deep cervical stabilizers',
      'Reduced thoracic mobility',
      'Cervical spondylosis & disc issues',
      'Radiating arm pain & headaches'
    ],
    features: [
      'Deep neck muscle strength and control: Assessment and training for deep cervical stabilizers to support the neck properly.',
      'Upper back (thoracic spine) mobility: Focused mobility work to improve thoracic extension and rotation.',
      'Postural alignment and screen habits: Ergonomic advice and corrections for daily screen use and sleeping positions.',
      'Muscle tightness and movement coordination: Release techniques and coordination training for tight neck and shoulder muscles.',
      'Deep cervical strengthening and stability training: Customized exercises to build lasting neck support.',
      'Targeted stretching for tight muscle groups: Specific stretches to relieve tension and improve flexibility.'
    ],
    focus: 'Relieve pain and correct underlying dysfunction to prevent future episodes'
  },
  'shoulder-pain': {
    title: 'Shoulder Pain Treatment',
    desc: `Shoulder pain can make even simple movements like reaching overhead, combing your hair, or lifting objects difficult and painful. It often develops gradually and, if ignored, can significantly restrict daily activities. Common shoulder conditions include adhesive capsulitis (frozen shoulder), rotator cuff injuries, tendonitis, and scapular instability. While these may sound serious, many cases are effectively managed with the right physiotherapy approach without the need for injections or surgery. In most individuals, shoulder pain is influenced by joint stiffness, muscle imbalance, poor scapular control, repetitive strain, or improper movement patterns. Addressing these factors early is key to preventing long-term restriction. At ${BRAND_NAME}, we follow a structured and evidence-based rehabilitation approach tailored to your specific condition. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive expert care at your convenience. Don't let shoulder pain limit your movement early physiotherapy makes recovery faster and easier. Call now to book your home physiotherapy session.`,
    icon: <Activity className="w-12 h-12" />,
    img: '/images/treatments/shoulder_pain_rehab.png',
    conditions: [
      'Frozen shoulder & adhesive capsulitis',
      'Rotator cuff injuries & tendonitis',
      'Scapular instability & control',
      'Joint stiffness & capsular tightness',
      'Muscle imbalance & weakness',
      'Functional limitations'
    ],
    features: [
      'Shoulder joint mobility and capsular tightness: Assessment and mobilization to restore proper joint movement.',
      'Rotator cuff strength and activation: Targeted exercises to strengthen and activate rotator cuff muscles.',
      'Scapular stability and movement control: Training for proper scapular movement and control.',
      'Functional limitations in daily activities: Assessment of how shoulder pain affects daily tasks.',
      'Progressive mobility and stretching exercises: Customized stretching to improve range of motion.',
      'Rotator cuff and scapular strengthening: Progressive strengthening for lasting shoulder support.'
    ],
    focus: 'Restore pain-free movement, improve strength, and regain full shoulder function'
  },
  'plantar-fasciitis': {
    title: 'Plantar Fasciitis Treatment',
    desc: `Sharp heel pain when you take your first steps in the morning? Discomfort after standing for long hours? These are classic signs of plantar fasciitis a condition caused by irritation of the thick band of tissue (plantar fascia) that supports your foot arch. Unlike general foot pain, plantar fasciitis is often linked to increased stress on the heel due to poor foot mechanics, tight calf muscles, prolonged standing, improper footwear, or sudden changes in activity levels. Ignoring these factors can lead to persistent pain with every step. At ${BRAND_NAME}, we approach plantar fasciitis with a targeted and progressive rehabilitation strategy focused on relieving stress from the plantar fascia. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you get expert care right at your home. Take the pressure off your heel the right treatment makes every step easier. Book your session today and get back to pain-free walking.`,
    icon: <Activity className="w-12 h-12" />,
    img: '/images/treatments/back_pain_treatment.png',
    conditions: [
      'Heel pain & morning stiffness',
      'Plantar fascia irritation',
      'Tight calf muscles & Achilles',
      'Poor foot mechanics',
      'Improper footwear',
      'Prolonged standing'
    ],
    features: [
      'Foot arch mechanics and weight distribution: Assessment of how your foot bears weight and arch support.',
      'Tightness in calf muscles and Achilles tendon: Evaluation of lower leg flexibility affecting the heel.',
      'Walking pattern and load through the heel: Analysis of gait and pressure points.',
      'Footwear habits and daily activity levels: Review of shoes and daily activities contributing to strain.',
      'Plantar fascia–specific stretching techniques: Targeted stretches to relieve fascia tension.',
      'Calf and Achilles flexibility exercises: Progressive stretching for lower leg flexibility.'
    ],
    focus: 'Reduce heel pain, improve foot support, and walk comfortably without recurring symptoms'
  }
};

const conditionSlugMap: Record<string, string> = {
  'Stroke recovery & rehab': 'stroke-rehabilitation',
  'Stroke Rehabilitation': 'stroke-rehabilitation',
  'Parkinson\'s disease care': 'parkinsons-disease',
  'Parkinson\'s Disease Rehabilitation': 'parkinsons-disease',
  'Cerebral palsy therapy': 'cerebral-palsy',
  'Cerebral Palsy Therapy': 'cerebral-palsy',
  'Post-spinal injury rehab': 'spinal-cord-injury',
  'Spinal Cord Injury Rehabilitation': 'spinal-cord-injury',
  'Facial Palsy (Bell\'s Palsy)': 'facial-palsy',
  'ACL & meniscus recovery': 'acl-rehabilitation',
  'Shoulder & ligament injuries': 'rotator-cuff-injury',
  'Back & neck pain relief': 'back-pain',
  'Spinal misalignment': 'chiropractic',
  'Spinal joint restrictions': 'chiropractic',
  'Spinal alignment and segmental mobility evaluation': 'chiropractic',
  'Postural dysfunction': 'chiropractic',
  'Biomechanical dysfunction': 'chiropractic',
  'Shoulder & joint stiffness': 'shoulder-pain',
  'Age-related strength decline': 'geriatric',
  'Balance & fall risk': 'geriatric',
  'Joint stiffness': 'geriatric',
  'Reduced mobility': 'geriatric',
  'Walking difficulties': 'geriatric',
  'Arthritis & joint pain': 'geriatric',
  'Back Pain Treatment': 'back-pain',
  'Neck Pain Treatment': 'neck-pain',
  'Shoulder Pain Treatment': 'shoulder-pain',
  'Plantar Fasciitis Treatment': 'plantar-fasciitis',
  'Post-surgery joint recovery': 'post-surgery-rehab',
  'Muscle & joint pain relief': 'orthopedic',
  'Muscle weakness & core instability': 'back-pain',
  'Poor posture & movement patterns': 'back-pain',
  'Limited hip mobility & pelvic imbalance': 'back-pain',
  'Sedentary lifestyle & daily habits': 'back-pain',
  'Spondylitis & disc issues': 'back-pain',
  'Sciatica & nerve pain': 'sciatica',
  'Forward head posture & tech neck': 'neck-pain',
  'Tight neck & shoulder muscles': 'neck-pain',
  'Weak deep cervical stabilizers': 'neck-pain',
  'Reduced thoracic mobility': 'neck-pain',
  'Cervical spondylosis & disc issues': 'neck-pain',
  'Radiating arm pain & headaches': 'neck-pain',
  'Frozen shoulder & adhesive capsulitis': 'shoulder-pain',
  'Rotator cuff injuries & tendonitis': 'rotator-cuff-injury',
  'Rotator Cuff Injury Rehabilitation': 'rotator-cuff-injury',
  'Scapular instability & control': 'shoulder-pain',
  'Joint stiffness & capsular tightness': 'shoulder-pain',
  'Muscle imbalance & weakness': 'shoulder-pain',
  'Functional limitations': 'shoulder-pain',
  'Heel pain & morning stiffness': 'plantar-fasciitis',
  'Plantar fascia irritation': 'plantar-fasciitis',
  'Tight calf muscles & Achilles': 'plantar-fasciitis',
  'Poor foot mechanics': 'plantar-fasciitis',
  'Improper footwear': 'plantar-fasciitis',
  'Prolonged standing': 'plantar-fasciitis',
  'Tennis Elbow Treatment': 'tennis-elbow',
  'Golfer\'s Elbow Treatment': 'golfers-elbow',
  'Lateral epicondylitis': 'tennis-elbow',
  'Forearm extensor strain': 'tennis-elbow',
  'Grip weakness & pain': 'tennis-elbow',
  'Repetitive strain injury': 'tennis-elbow',
  'Micro-tears in tendons': 'tennis-elbow',
  'Elbow discomfort': 'tennis-elbow',
  'ACL Reconstruction Rehabilitation': 'acl-rehabilitation',
  'Injury recovery & pain relief': 'sports',
  'Post-surgical sports rehab': 'sports',
  'Performance enhancement': 'sports',
  'Return-to-sport planning': 'sports',
  'Patellofemoral Pain Syndrome': 'runners-knee',
  'Runner\'s Knee': 'runners-knee',
  'Knee pain around kneecap': 'runners-knee',
  'Quadriceps weakness (VMO)': 'runners-knee',
  'Hip weakness & control': 'runners-knee',
  'Altered knee alignment': 'runners-knee',
  'Overuse from running': 'runners-knee',
  'Squatting & stair pain': 'runners-knee',
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData] || servicesData['orthopedic'];
  const { scrollY } = useScroll();

  // SEO Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.desc,
    "provider": {
      "@type": "MedicalBusiness",
      "name": BRAND_NAME,
      "url": "https://www.flexophysio.com/"
    },
    "areaServed": [
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Kukatpally" },
      { "@type": "AdministrativeArea", "name": "Miyapur" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.conditions.map((condition: string) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": condition
        }
      }))
    }
  };

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const watermarkY = useTransform(scrollY, [0, 2000], [0, 300]);

  return (
    <div className="bg-white">
      <SEO 
        title={`${service.title} at Home in Hyderabad`}
        description={service.desc.substring(0, 160)}
        schema={serviceSchema}
      />

      {/* 1. CLINICAL HEADER */}
      <section className="pt-24 pb-6 lg:pt-36 lg:pb-10 relative overflow-hidden min-h-[50vh] lg:min-h-[70vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src={service.img}
            alt={`${service.title} Home Visit Physiotherapy Hyderabad - ${BRAND_NAME}`}
            className="w-full h-full object-cover opacity-20 lg:opacity-30"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        {/* Large background text with Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-24 lg:top-32 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {service.title.split(' ')[0]}
        </motion.div>

        <div className="max-w-[1650px] mx-auto responsive-padding relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="flex items-center space-x-3">
              <span className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[9px] lg:text-[11px]">
                Specialized Clinical Service
              </span>
            </div>

            <h1 className="flex flex-col items-start gap-1 lg:gap-2">
              <span className="editorial-display text-primary block leading-[1]">
                {service.title.split(' ')[0]}
              </span>
              <span className="editorial-heading text-accent italic font-normal block leading-tight">
                {service.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-base lg:text-2xl text-dark font-medium leading-relaxed max-w-5xl opacity-90">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DETAILED CONTENT */}
      <section className="section-spacing overflow-hidden">
        <div className="max-w-[1650px] mx-auto responsive-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-12 lg:space-y-16">
              {/* Conditions Treated */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-3 lg:space-y-4">
                  <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[9px] lg:text-[10px] block">Scope of Care</span>
                  <h2 className="editorial-heading text-primary leading-tight">Treatments <span className="text-accent italic font-normal">Offered</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {service.conditions.map((item: string, i: number) => {
                    const slug = conditionSlugMap[item];
                    const content = (
                      <div className="flex items-center gap-3 lg:gap-4 group/item bg-white p-4 lg:p-5 rounded-2xl border border-primary/5 hover:border-accent/20 hover:shadow-lg transition-all duration-500">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                          <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4 text-accent group-hover/item:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-primary font-bold uppercase tracking-tight text-[10px] lg:text-[11px] group-hover/item:text-accent transition-colors">{item}</span>
                      </div>
                    );
                    return slug ? (
                      <Link key={i} to={`/treatment/${slug}`}>
                        {content}
                      </Link>
                    ) : (
                      <div key={i}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-8 pt-8 border-t border-primary/10">
                <div className="space-y-4">
                  <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[10px] block">Clinical Methodology</span>
                  <h2 className="editorial-heading text-primary leading-tight">Our <span className="text-accent italic font-normal">Approach</span></h2>
                </div>
                <div className="space-y-6">
                  {service.features.map((feat: string, i: number) => (
                    <div key={i} className="flex gap-6 group items-center">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                        0{i + 1}
                      </div>
                      <p className="text-lg text-dark font-medium leading-relaxed">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I would like to book a specialist for ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="rounded-none px-12 group bg-accent hover:bg-accent/90 border-none">
                    Book a Specialist <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-3xl lg:rounded-[3rem] overflow-hidden aspect-[3/2] shadow-xl border-4 border-white"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Floating Badge - Mobile Optimized */}
              <div className="relative mt-8 sm:absolute sm:-bottom-8 sm:-left-8 bg-primary text-white p-8 lg:p-10 shadow-2xl border-t-4 border-accent max-w-xs rounded-2xl sm:translate-y-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Clinical Assurance</span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-3 italic">Personalized Recovery</h4>
                <p className="text-sm font-medium leading-relaxed opacity-70">
                  Every clinical plan is built specifically for your body, goals, and home environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED SERVICES / CTA */}
      <section className="py-8 lg:py-10 bg-surface/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <h2 className="editorial-heading text-primary leading-tight">
            Not sure which <br className="hidden md:block" />
            <span className="text-accent italic font-normal">service you need?</span>
          </h2>
          <p className="text-dark text-xl font-medium leading-relaxed opacity-80">
            Contact our clinical coordinators for a free initial phone consultation. We'll help you find the right path to recovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
            <a
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(`Hi ${BRAND_NAME}, I am not sure which service I need for ${service.title}. I need a consultation.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full rounded-none px-12 group bg-accent border-none text-white hover:bg-accent/90">
                Speak to a Specialist <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/conditions" className="text-primary font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
