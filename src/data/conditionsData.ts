import { 
  Bone, 
  Brain, 
  Dumbbell, 
  Zap, 
  Target,
  Users,
} from 'lucide-react';
import React from 'react';

export interface Condition {
  id: string;
  slug: string;
  category: string;
  title: string;
  fullTitle: string;
  description: string;
  assessmentPoints: string[];
  rehabProgram: string[];
  goal: string;
  serviceArea: string;
  icon: React.ReactNode;
  img: string;
}

const ORTHOPEDIC_IMAGE = '/Orthopedic Rehab.avif';
const SPORTS_IMAGE = '/Sports Rehabilitation.avif';
const NEURO_IMAGE = '/Neuro-Rehabilitation.avif';
const CUPPING_IMAGE = '/Cupping & Dry Needling.avif';
const CHIROPRACTIC_IMAGE = '/Chiropractic.avif';
const GERIATRIC_IMAGE = '/hero-interaction.webp';

export const conditionsData: Record<string, Condition> = {
  'back-pain': {
    id: 'back-pain',
    slug: 'back-pain',
    category: 'Orthopedic',
    title: 'Back Pain',
    fullTitle: 'Back Pain Treatment at Flexo Physiotherapy',
    description: 'Back pain is one of the most common complaints today—but not all back pain is serious, and most cases do not require surgery. While conditions like spondylitis or disc issues are often blamed, the reality is that many people experience back pain due to muscle weakness, poor posture, limited hip mobility, pelvic imbalance, or sedentary lifestyle habits.',
    assessmentPoints: [
      'Core and back muscle strength',
      'Hip joint mobility and flexibility',
      'Pelvic alignment and SI joint stability',
      'Posture, movement patterns, and daily habits'
    ],
    rehabProgram: [
      'Targeted strengthening exercises',
      'Stretching and mobility training',
      'Postural correction techniques',
      'Manual therapy and pain relief modalities',
      'Functional training for daily activities'
    ],
    goal: 'Our goal is simple: reduce pain, restore movement, and prevent recurrence—all from the comfort of your home.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Bone, { className: "w-8 h-8" }),
    img: ORTHOPEDIC_IMAGE
  },
  'neck-pain': {
    id: 'neck-pain',
    slug: 'neck-pain',
    category: 'Orthopedic',
    title: 'Neck Pain',
    fullTitle: 'Neck Pain Treatment at Flexo Physiotherapy',
    description: 'Neck pain often starts subtly—stiffness while turning your head, discomfort after long phone use, or a dull ache by the end of the day. Over time, it can progress into persistent pain, headaches, or even radiating symptoms into the shoulders and arms.',
    assessmentPoints: [
      'Deep neck muscle strength and control',
      'Upper back (thoracic spine) mobility',
      'Postural alignment and screen habits',
      'Muscle tightness and movement coordination'
    ],
    rehabProgram: [
      'Deep cervical strengthening and stability training',
      'Targeted stretching for tight muscle groups',
      'Postural correction and ergonomic modifications',
      'Manual therapy for pain relief and muscle relaxation',
      'Functional retraining for daily activities'
    ],
    goal: 'Our goal is to not only relieve pain but also correct the underlying dysfunction to prevent future episodes.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Bone, { className: "w-8 h-8" }),
    img: ORTHOPEDIC_IMAGE
  },
  'shoulder-pain': {
    id: 'shoulder-pain',
    slug: 'shoulder-pain',
    category: 'Orthopedic',
    title: 'Shoulder Pain',
    fullTitle: 'Shoulder Pain Treatment at Flexo Physiotherapy',
    description: 'Shoulder pain can make even simple movements like reaching overhead, combing your hair, or lifting objects difficult and painful. It often develops gradually and, if ignored, can significantly restrict daily activities.',
    assessmentPoints: [
      'Shoulder joint mobility and capsular tightness',
      'Rotator cuff strength and activation',
      'Scapular stability and movement control',
      'Functional limitations in daily activities'
    ],
    rehabProgram: [
      'Progressive mobility and stretching exercises',
      'Rotator cuff and scapular strengthening',
      'Pain-relieving manual therapy techniques',
      'Movement correction and functional retraining',
      'Guidance to safely return to daily activities'
    ],
    goal: 'Our aim is to restore pain-free movement, improve strength, and regain full shoulder function without unnecessary interventions.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Bone, { className: "w-8 h-8" }),
    img: ORTHOPEDIC_IMAGE
  },
  'hip-knee-arthritis': {
    id: 'hip-knee-arthritis',
    slug: 'hip-knee-arthritis',
    category: 'Orthopedic',
    title: 'Hip & Knee Arthritis',
    fullTitle: 'Hip & Knee Arthritis Treatment at Flexo Physiotherapy',
    description: 'Conditions like osteoarthritis of the knee or hip develop over time due to joint wear and tear, reduced cartilage health, muscle weakness, stiffness, and altered movement patterns.',
    assessmentPoints: [
      'Joint mobility and stiffness',
      'Muscle strength around the hip and knee',
      'Walking pattern (gait) and weight-bearing mechanics',
      'Functional limitations in daily activities'
    ],
    rehabProgram: [
      'Strengthening exercises for joint support',
      'Mobility and flexibility training to reduce stiffness',
      'Pain-relief techniques and manual therapy',
      'Gait training and balance improvement',
      'Lifestyle and activity modification guidance'
    ],
    goal: 'Our goal is to reduce pain, improve joint function, and delay or even avoid surgical intervention whenever possible.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Bone, { className: "w-8 h-8" }),
    img: ORTHOPEDIC_IMAGE
  },
  'plantar-fasciitis': {
    id: 'plantar-fasciitis',
    slug: 'plantar-fasciitis',
    category: 'Orthopedic',
    title: 'Plantar Fasciitis',
    fullTitle: 'Plantar Fasciitis Treatment at Flexo Physiotherapy',
    description: 'Sharp heel pain when you take your first steps in the morning? Discomfort after standing for long hours? These are classic signs of plantar fasciitis—a condition caused by irritation of the thick band of tissue (plantar fascia) that supports your foot arch.',
    assessmentPoints: [
      'Foot arch mechanics and weight distribution',
      'Tightness in calf muscles and Achilles tendon',
      'Walking pattern and load through the heel',
      'Footwear habits and daily activity levels'
    ],
    rehabProgram: [
      'Plantar fascia–specific stretching techniques',
      'Calf and Achilles flexibility exercises',
      'Foot intrinsic muscle strengthening',
      'Taping techniques to support the arch',
      'Manual therapy for pain relief and tissue recovery',
      'Guidance on proper footwear and activity modification'
    ],
    goal: 'Our goal is to reduce heel pain, improve foot support, and help you walk comfortably without recurring symptoms.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Bone, { className: "w-8 h-8" }),
    img: ORTHOPEDIC_IMAGE
  },
  'tennis-elbow': {
    id: 'tennis-elbow',
    slug: 'tennis-elbow',
    category: 'Sports',
    title: 'Tennis Elbow',
    fullTitle: 'Tennis Elbow Treatment at Flexo Physiotherapy',
    description: 'Tennis elbow (Lateral Epicondylitis) occurs due to overuse and strain of the forearm extensor muscles, leading to small micro-tears near the elbow. It affects both athletes and those involved in repetitive arm activities.',
    assessmentPoints: [
      'Pain severity during gripping activities',
      'Forearm muscle strength and endurance',
      'Repetitive movement patterns contributing to strain',
      'Wrist and elbow mechanics during functional tasks'
    ],
    rehabProgram: [
      'Controlled loading exercises for tendon recovery',
      'Eccentric strengthening of forearm muscles',
      'Grip strength training and functional retraining',
      'Manual therapy to reduce muscle tension',
      'Activity modification to prevent further strain'
    ],
    goal: 'Our goal is to reduce pain, restore strength, and help you return to daily activities without discomfort.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Dumbbell, { className: "w-8 h-8" }),
    img: SPORTS_IMAGE
  },
  'acl-rehabilitation': {
    id: 'acl-rehabilitation',
    slug: 'acl-rehabilitation',
    category: 'Sports',
    title: 'ACL Rehabilitation',
    fullTitle: 'ACL Reconstruction Rehabilitation at Flexo Physiotherapy',
    description: 'Recovering from an ACL reconstruction is about restoring confidence, stability, and controlled movement in your knee through goal-oriented and progressive phases.',
    assessmentPoints: [
      'Knee range of motion safety',
      'Quadriceps and hamstrings activation',
      'Balance, coordination, and joint control',
      'Walking patterns and functional movements'
    ],
    rehabProgram: [
      'Early-stage mobility and swelling management',
      'Progressive strength training for knee support',
      'Neuromuscular and proprioceptive training',
      'Functional exercises tailored to daily activities',
      'Gradual return-to-activity guidance'
    ],
    goal: 'Optimal recovery of knee stability and return to normal activity levels.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Dumbbell, { className: "w-8 h-8" }),
    img: SPORTS_IMAGE
  },
  'ankle-sprain': {
    id: 'ankle-sprain',
    slug: 'ankle-sprain',
    category: 'Sports',
    title: 'Ankle Sprain',
    fullTitle: 'Ankle Sprain / Ligament Injury Rehabilitation',
    description: 'Ankle sprains require focused restoration of ligament healing, neuromuscular control, and joint stability to prevent chronic instability.',
    assessmentPoints: [
      'Ligament integrity and swelling status',
      'Range of motion and joint stiffness',
      'Balance deficits and proprioceptive control',
      'Gait pattern and load tolerance'
    ],
    rehabProgram: [
      'Early-stage swelling control and protected mobility',
      'Progressive loading to restore ligament strength',
      'Advanced balance and proprioception training',
      'Dynamic stability drills to prevent re-injury',
      'Sport or activity-specific retraining'
    ],
    goal: 'Don’t just heal, rebuild stability and confidence in movement.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Dumbbell, { className: "w-8 h-8" }),
    img: SPORTS_IMAGE
  },
  'rotator-cuff-injury': {
    id: 'rotator-cuff-injury',
    slug: 'rotator-cuff-injury',
    category: 'Sports',
    title: 'Rotator Cuff Injury',
    fullTitle: 'Rotator Cuff Injury Rehabilitation at Flexo Physiotherapy',
    description: 'Rotator cuff rehabilitation focuses on the entire shoulder complex, including scapular control and movement coordination, using a progressive loading strategy.',
    assessmentPoints: [
      'Rotator cuff strength and activation patterns',
      'Scapular positioning and control',
      'Painful movement arcs and functional limitations',
      'Shoulder biomechanics during daily tasks'
    ],
    rehabProgram: [
      'Isolated rotator cuff activation and strengthening',
      'Scapular stabilization and coordination training',
      'Controlled loading of the tendon to promote healing',
      'Movement correction to avoid impingement',
      'Gradual return to overhead and functional activities'
    ],
    goal: 'Restore control, not just movement, for a fully functional shoulder.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & surrounding areas',
    icon: React.createElement(Dumbbell, { className: "w-8 h-8" }),
    img: SPORTS_IMAGE
  },
  'runners-knee': {
    id: 'runners-knee',
    slug: 'runners-knee',
    category: 'Sports',
    title: "Runner's Knee",
    fullTitle: "Runner's Knee (Patellofemoral Pain Syndrome) Rehab",
    description: "Patellofemoral pain syndrome is a load-related knee condition that reflects improper force distribution across the knee joint, often requiring biomechanical correction.",
    assessmentPoints: [
      'Knee tracking and movement analysis',
      'Quadriceps and hip muscle strength',
      'Functional activities like squatting and stair climbing',
      'Load tolerance and activity patterns'
    ],
    rehabProgram: [
      'Targeted strengthening of quadriceps and hip muscles',
      'Movement retraining to improve knee alignment',
      'Gradual load progression to build tolerance',
      'Stretching of tight muscle groups',
      'Activity modification without complete rest'
    ],
    goal: 'Fix the movement, fix the pain for long-term sustainable recovery.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Dumbbell, { className: "w-8 h-8" }),
    img: SPORTS_IMAGE
  },
  'stroke-rehabilitation': {
    id: 'stroke-rehabilitation',
    slug: 'stroke-rehabilitation',
    category: 'Neuro',
    title: 'Stroke Rehabilitation',
    fullTitle: 'Stroke Rehabilitation (Hemiplegia) at Flexo Physiotherapy',
    description: 'Recovery from a stroke is a gradual process focused on neuroplasticity, retraining the brain and body to work together again through evidence-based protocols.',
    assessmentPoints: [
      'Muscle tone and voluntary control',
      'Postural alignment and balance',
      'Gait pattern and walking efficiency',
      'Functional independence in daily activities'
    ],
    rehabProgram: [
      'Task-specific training (sitting, standing, walking)',
      'Gait training with assisted techniques',
      'Balance and coordination exercises',
      'Spasticity management strategies',
      'Functional retraining for transitions and self-care'
    ],
    goal: 'Restore independence and confidence through neuroplasticity-driven recovery.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    img: NEURO_IMAGE
  },
  'parkinsons-disease': {
    id: 'parkinsons-disease',
    slug: 'parkinsons-disease',
    category: 'Neuro',
    title: "Parkinson's Disease",
    fullTitle: "Parkinson's Disease Rehabilitation at Flexo Physiotherapy",
    description: 'Consistent physiotherapy improves movement efficiency and functional independence for patients with Parkinson’s through research-backed protocols.',
    assessmentPoints: [
      'Gait analysis and step length',
      'Posture and balance control',
      'Flexibility and movement initiation',
      'Bradykinesia and rigidity levels'
    ],
    rehabProgram: [
      'Amplitude-based training (BIG movements)',
      'Cueing techniques (visual and auditory)',
      'Postural correction and flexibility exercises',
      'Balance and fall-prevention training',
      'Functional mobility drills for daily tasks'
    ],
    goal: 'Support long-term mobility, confidence, and quality of life within the daily environment.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & surrounding areas',
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    img: NEURO_IMAGE
  },
  'spinal-cord-injury': {
    id: 'spinal-cord-injury',
    slug: 'spinal-cord-injury',
    category: 'Neuro',
    title: 'Spinal Cord Injury',
    fullTitle: 'Spinal Cord Injury (SCI) Rehabilitation',
    description: 'Maximizing independence and preventing secondary complications through highly individualized and goal-oriented neurorehabilitation.',
    assessmentPoints: [
      'Muscle strength grading and sensory evaluation',
      'Trunk control and postural stability',
      'Functional abilities (transfers, mobility)',
      'Wheelchair mobility assessment'
    ],
    rehabProgram: [
      'Bed mobility and transfer training',
      'Strengthening of preserved muscle groups',
      'Trunk stability and postural control',
      'Wheelchair mobility and independence training',
      'Education for complication prevention'
    ],
    goal: 'Maximize independence and functional capacity for a better quality of life.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    img: NEURO_IMAGE
  },
  'cerebral-palsy': {
    id: 'cerebral-palsy',
    slug: 'cerebral-palsy',
    category: 'Neuro',
    title: 'Cerebral Palsy',
    fullTitle: 'Cerebral Palsy Rehabilitation (Pediatric Neuro)',
    description: 'Evidence-based, child-centered neurodevelopmental therapy to support motor development and enhance independence in children.',
    assessmentPoints: [
      'Motor milestones and posture',
      'Muscle tone and balance',
      'Coordination and functional skills',
      'Play-based mobility assessment'
    ],
    rehabProgram: [
      'Facilitation of normal movement patterns',
      'Postural control and balance training',
      'Stretching for muscle tightness management',
      'Play-based functional training',
      'Parent education and home-exercise integration'
    ],
    goal: 'Enhance each child’s independence, motor skills, and overall development.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas',
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    img: NEURO_IMAGE
  },
  'facial-palsy': {
    id: 'facial-palsy',
    slug: 'facial-palsy',
    category: 'Neuro',
    title: 'Facial Palsy',
    fullTitle: 'Facial Palsy (Bell’s Palsy) Treatment',
    description: 'Timely physiotherapy intervention restores natural facial expressions and symmetry while preventing long-term complications.',
    assessmentPoints: [
      'Muscle activation and symmetry',
      'Voluntary control and movement speed',
      'Presence of abnormal movement patterns',
      'Circulation and tissue stiffness'
    ],
    rehabProgram: [
      'Facial muscle re-education and activation',
      'Neuromuscular facilitation techniques',
      'Mirror therapy for visual feedback',
      'Soft tissue techniques for stiffness',
      'Guidance to prevent synkinesis'
    ],
    goal: 'Restore natural facial expressions, symmetry, and patient confidence.',
    serviceArea: 'Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas',
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    img: NEURO_IMAGE
  },
  'dry-needling': {
    id: 'dry-needling',
    slug: 'dry-needling',
    category: 'Specialized',
    title: 'Dry Needling',
    fullTitle: 'Dry Needling Therapy at Flexo Physiotherapy',
    description: 'Precise intervention to deactivate myofascial trigger points, release deep muscle tension, and restore normal muscle function.',
    assessmentPoints: [
      'Palpation for hyper-irritable spots',
      'Movement restriction assessment',
      'Pain referral pattern analysis',
      'Muscle imbalance evaluation'
    ],
    rehabProgram: [
      'Targeted needle insertion for trigger point release',
      'Corrective exercises for lasting results',
      'Post-procedure mobility integration',
      'Load management strategies'
    ],
    goal: 'Release the source of pain and restore normal muscle tissue health.',
    serviceArea: 'Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas',
    icon: React.createElement(Zap, { className: "w-8 h-8" }),
    img: CUPPING_IMAGE
  },
  'cupping-therapy': {
    id: 'cupping-therapy',
    slug: 'cupping-therapy',
    category: 'Specialized',
    title: 'Cupping Therapy',
    fullTitle: 'Cupping Therapy at Flexo Physiotherapy',
    description: 'Clinical application of negative pressure to improve blood flow, tissue mobility, and muscle relaxation for chronic tightness.',
    assessmentPoints: [
      'Tissue restriction and congestion',
      'Movement limitations and stiffness',
      'Fascial tightness and muscle tension',
      'Recovery speed from muscle fatigue'
    ],
    rehabProgram: [
      'Dynamic or static cupping application',
      'Movement-based techniques during cupping',
      'Exercise therapy integration',
      'Soft tissue mobilization post-cupping'
    ],
    goal: 'Enhance recovery by improving tissue mobility and local circulation.',
    serviceArea: 'Hyderabad, Kukatpally, Miyapur, Kondapur & surrounding areas',
    icon: React.createElement(Zap, { className: "w-8 h-8" }),
    img: CUPPING_IMAGE
  },
  'iastm': {
    id: 'iastm',
    slug: 'iastm',
    category: 'Specialized',
    title: 'IASTM',
    fullTitle: 'Instrument Assisted Soft Tissue Mobilization',
    description: 'Breaking down adhesions and scar tissue within muscles and fascia using specialized tools to restore movement quality.',
    assessmentPoints: [
      'Detection of tissue stiffness and fibrosis',
      'Movement limitations via tissue restriction',
      'Functional deficits from reduced mobility',
      'Chronic stiffness and scar tissue levels'
    ],
    rehabProgram: [
      'Specialized instrument mobilization',
      'Improving tissue glide and circulation',
      'Corrective strengthening post-treatment',
      'Range-of-motion integration'
    ],
    goal: 'Restore tissue health and quality of movement through precision mobilization.',
    serviceArea: 'Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas',
    icon: React.createElement(Target, { className: "w-8 h-8" }),
    img: CHIROPRACTIC_IMAGE
  },
  'chiropractic-care': {
    id: 'chiropractic-care',
    slug: 'chiropractic-care',
    category: 'Specialized',
    title: 'Chiropractic Care',
    fullTitle: 'Chiropractic Care at Flexo Physiotherapy',
    description: 'Precise spinal adjustments to improve joint mobility, correct misalignment, and optimize spinal function.',
    assessmentPoints: [
      'Spinal alignment and segmental mobility',
      'Postural analysis and biomechanics',
      'Joint restrictions contributing to discomfort',
      'Functional limitations in daily activities'
    ],
    rehabProgram: [
      'Targeted spinal adjustments and mobility',
      'Manual mobilization for restricted segments',
      'Soft tissue release for muscle tension',
      'Postural correction and stability exercises',
      'Integration with clinical strength protocols'
    ],
    goal: 'Realign, restore, and move better through a combined clinical approach.',
    serviceArea: 'Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas',
    icon: React.createElement(Target, { className: "w-8 h-8" }),
    img: CHIROPRACTIC_IMAGE
  },
  'geriatric-physiotherapy': {
    id: 'geriatric-physiotherapy',
    slug: 'geriatric-physiotherapy',
    category: 'Specialized',
    title: 'Geriatric Physiotherapy',
    fullTitle: 'Geriatric Physiotherapy at Flexo Physiotherapy',
    description: 'Patient-centered programs specifically for older adults to improve strength, balance, and independence at home.',
    assessmentPoints: [
      'Muscle strength and joint flexibility',
      'Balance and fall risk evaluation',
      'Walking pattern and functional mobility',
      'Safe performance of daily activities'
    ],
    rehabProgram: [
      'Strength training for stability and support',
      'Balance and coordination exercises',
      'Mobility training for daily transfers',
      'Pain management for chronic conditions',
      'Breathing and endurance exercises'
    ],
    goal: 'Stay active and independent, aging with strength and confidence.',
    serviceArea: 'Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas',
    icon: React.createElement(Users, { className: "w-8 h-8" }),
    img: GERIATRIC_IMAGE
  }
};
