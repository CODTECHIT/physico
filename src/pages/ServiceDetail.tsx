import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Dumbbell, Bone, Brain, Heart, Target, Zap, Users } from 'lucide-react';
import Button from '../components/Button';
import { CONTACT_WHATSAPP_LINK, BRAND_NAME } from '../constants';

const servicesData = {
  'cardio': {
    title: 'Cardio-Respiratory Care',
    desc: 'Professional Cardio-Respiratory Physiotherapy at Home in Kukatpally & Miyapur. Our team brings specialized heart and lung rehabilitation to your doorstep across Hyderabad’s leading neighborhoods. Whether you\'re recovering from surgery or managing chronic conditions, our certified physiotherapists deliver personalized care for optimal recovery and comfort.',
    icon: <Heart className="w-12 h-12" />,
    img: '/Cardio-Respiratory Care.avif',
    conditions: [
      'Post-surgery cardiac rehab',
      'Chronic heart support',
      'Heart attack recovery',
      'Breathing & lung health',
      'Hypertension management',
      'Cardiovascular fitness'
    ],
    features: [
      'Post-surgery cardiac rehabilitation: Recover safely at home after bypass surgery or valve replacement with structured, gentle exercises.',
      'Chronic heart condition support: Specialized care for heart failure, hypertension, and high cholesterol to improve daily comfort.',
      'After-heart attack rehabilitation: Build strength and endurance through customized, safe progression and heart-healthy habits.',
      'Breathing & cardiovascular fitness: Improve lung function and heart health through guided breathing and light cardio training.'
    ],
    focus: 'Improve heart function & overall endurance'
  },
'neurological': {
    title: 'Neuro Rehabilitation',
    desc: `Specialized Neuro-Rehabilitation at Home in Kukatpally & Miyapur. Our expert neuro physiotherapy brings advanced care directly to your doorstep in Hyderabad. We work with patients affected by stroke, Parkinson's, and cerebral palsy, offering tailored home-based therapy that improves balance, strength, and motor control. At ${BRAND_NAME}, we follow research-backed rehabilitation protocols designed to improve movement efficiency and functional independence. Move better, live better, begin your rehab journey now.`,
    icon: <Brain className="w-12 h-12" />,
    img: '/Neuro-Rehabilitation.avif',
    conditions: [
      'Stroke Rehabilitation',
      'Parkinson\'s Disease Rehabilitation',
      'Cerebral Palsy Therapy',
      'Spinal Cord Injury Rehabilitation',
      'Facial Palsy (Bell\'s Palsy)',
      'Balance & gait improvement'
    ],
    features: [
      'Stroke Rehabilitation: Comprehensive stroke recovery with mobility, coordination, and independence through targeted strength and gait training.',
      'Parkinson\'s Disease Rehabilitation: Research-backed protocols for movement efficiency including amplitude-based training, cueing techniques, and postural correction.',
      'Cerebral Palsy Therapy: Gentle, child-friendly rehabilitation focusing on motor skills, flexibility, and daily function at home.',
      'Spinal Cord Injury Rehabilitation: Comprehensive SCI rehab including bed mobility, transfer training, trunk stability, and wheelchair mobility for maximum independence.',
      'Facial Palsy (Bell\'s Palsy): Evidence-based facial rehabilitation with muscle re-education, mirror therapy, and techniques to restore natural facial expressions.',
      'Balance and fall-prevention training: Comprehensive balance training to reduce fall risks and improve stability.'
    ],
    focus: 'Restore function & improve quality of life'
  },
  'orthopedic': {
    title: 'Orthopedic Rehabilitation',
    desc: `Expert Orthopedic Physiotherapy at Home in Kukatpally & Miyapur. At ${BRAND_NAME}, we specialize in delivering professional orthopedic care directly to your doorstep in Hyderabad. Whether you're recovering from surgery, easing chronic musculoskeletal pain, or regaining mobility after an injury, our certified physiotherapists craft personalized plans to help you heal comfortably at home.`,
    icon: <Bone className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
    conditions: [
      'Back Pain Treatment',
      'Neck Pain Treatment',
      'Shoulder Pain Treatment',
      'Plantar Fasciitis Treatment',
      'Post-surgery joint recovery',
      'Muscle & joint pain relief'
    ],
    features: [
      'Back Pain Treatment: Comprehensive evaluation and personalized rehab for back pain including core strengthening, posture correction, and manual therapy.',
      'Neck Pain Treatment: Targeted approach for neck pain focusing on deep cervical strength, thoracic mobility, and ergonomic corrections.',
      'Shoulder Pain Treatment: Evidence-based rehabilitation for frozen shoulder, rotator cuff injuries, and scapular stability.',
      'Plantar Fasciitis Treatment: Specialized care for heel pain with fascia stretching, calf flexibility, and foot mechanics correction.',
      'Post-surgery joint recovery: Safe and effective healing at home following knee, hip, or shoulder surgery with tailored exercises and mobility techniques.',
      'Muscle & joint pain relief: Targeted relief from pain, stiffness, and inflammation through soft tissue therapy and joint mobilization.'
    ],
    focus: 'Reduce pain & restore movement'
  },
'sports': {
    title: 'Sports Rehabilitation',
    desc: `Specialized Sports Rehabilitation at Home in Kukatpally & Miyapur. At ${BRAND_NAME}, we bring expert sports physiotherapy and injury recovery right to your doorstep in Hyderabad. Whether you're recovering from an injury, managing joint pain, or aiming to get back to peak performance, our expert physiotherapists design customized rehab programs to help you heal safely and quickly.`,
    icon: <Dumbbell className="w-12 h-12" />,
    img: '/Sports Rehabilitation.avif',
    conditions: [
      'Tennis Elbow Treatment',
      'Golfer\'s Elbow Treatment',
      'ACL Reconstruction Rehabilitation',
      'Rotator Cuff Injury Rehabilitation',
      'Patellofemoral Pain Syndrome',
      'Injury recovery & pain relief'
    ],
    features: [
      'Tennis Elbow Treatment: Focused rehabilitation for lateral epicondylitis including controlled loading exercises, eccentric strengthening, and grip training.',
      'Golfer\'s Elbow Treatment: Medial epicondylitis care with forearm muscle strengthening and activity modification.',
      'ACL Reconstruction Rehabilitation: Post-surgical rehabilitation for ACL injuries with progressive strengthening and return-to-sport planning.',
      'Rotator Cuff Injury Rehabilitation: Comprehensive care for rotator cuff, shoulder impingement, and ligament injuries.',
      'Patellofemoral Pain Syndrome: Biomechanical correction for runner\'s knee with quadriceps and hip strengthening.',
      'Injury recovery & pain management: Expert care for sports injuries like sprains, strains, ligament tears, and joint pain.'
    ],
    focus: 'Faster recovery & injury prevention'
  },
  'tennis-elbow': {
    title: 'Tennis Elbow Treatment',
    desc: `Pain on the outer side of your elbow while lifting objects, gripping, or even shaking hands? This is commonly known as Tennis Elbow (Lateral Epicondylitis) and it's not limited to athletes. It frequently affects people involved in repetitive arm activities like typing, lifting, or using tools. Tennis elbow occurs due to overuse and strain of the forearm extensor muscles, leading to small micro-tears near the elbow. Continuing the same activities without proper treatment can worsen the condition and reduce grip strength over time. At ${BRAND_NAME}, we focus on load management and tendon healing, rather than just temporary pain relief. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive focused, one-on-one care. Treat the cause of strain—don't let elbow pain limit your strength. Book your session today for effective, home-based recovery.`,
    icon: <Dumbbell className="w-12 h-12" />,
    img: '/Sports Rehabilitation.avif',
    conditions: [
      'Lateral epicondylitis',
      'Forearm extensor strain',
      'Grip weakness & pain',
      'Repetitive strain injury',
      'Micro-tears in tendons',
      'Elbow discomfort'
    ],
    features: [
      'Pain location and severity during gripping activities: Detailed assessment of pain patterns and functional limitations.',
      'Forearm muscle strength and endurance: Evaluation of forearm extensor muscles health.',
      'Repetitive movement patterns contributing to strain: Analysis of work and daily activities causing overuse.',
      'Wrist and elbow mechanics during functional tasks: Assessment of movement patterns affecting the elbow.',
      'Controlled loading exercises for tendon recovery: Gradual tendon loading to promote healing.',
      'Eccentric strengthening of forearm muscles: Progressive eccentric exercises for tendon strength.'
],
    focus: 'Reduce pain, restore strength, and return to daily activities without discomfort'
  },
  'patellofemoral-pain': {
    title: 'Patellofemoral Pain Syndrome (Runner\'s Knee)',
    desc: `Patellofemoral pain syndrome is a load-related knee condition, often experienced as pain around or behind the kneecap during activities like climbing stairs, squatting, or prolonged sitting. It is rarely due to a single structure—instead, it reflects improper force distribution across the knee joint. Contributing factors commonly include weak quadriceps (especially VMO), poor hip strength and control, altered knee alignment during movement, and overuse from running or repetitive loading. At ${BRAND_NAME}, we take a biomechanical correction approach, focusing on how the entire lower limb functions together. Serving Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, we help you move pain-free with better control and efficiency. Fix the movement, fix the pain.`,
    icon: <Dumbbell className="w-12 h-12" />,
    img: '/Sports Rehabilitation.avif',
    conditions: [
      'Knee pain around kneecap',
      'Quadriceps weakness (VMO)',
      'Hip weakness & control',
      'Altered knee alignment',
      'Overuse from running',
      'Squatting & stair pain'
    ],
    features: [
      'Knee tracking and movement analysis: Assessment of how the kneecap tracks during movement.',
      'Quadriceps and hip muscle strength: Evaluation of VMO and hip muscle function.',
      'Functional activities like squatting and stair climbing: Analysis of pain-provoking activities.',
      'Load tolerance and activity patterns: Assessment of activity-related stress on the knee.',
      'Targeted strengthening of quadriceps and hip muscles: Exercises to improve lower limb strength.',
      'Movement retraining to improve knee alignment: Correction of movement patterns for proper force distribution.'
    ],
    focus: 'Correct the root cause for sustainable, pain-free movement'
  },
  'chiropactic': {
    title: 'Chiropractic Care',
    desc: `Pain and stiffness in the spine are often not just due to muscle strain—they can be linked to joint restrictions, spinal misalignment, and altered biomechanics. These issues may develop from prolonged sitting, poor posture, repetitive stress, or previous injuries, leading to reduced mobility and persistent discomfort. At ${BRAND_NAME}, chiropractic care focuses on restoring joint mobility and optimizing spinal function through precise, controlled techniques. We emphasize a combined approach, where chiropractic techniques are supported with physiotherapy-based rehabilitation to ensure lasting results—not just temporary relief. Home-based sessions offer added comfort and safety. Serving Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas, we provide personalized, evidence-informed chiropractic care. Realign, restore, and move better—start your recovery today.`,
    icon: <Target className="w-12 h-12" />,
    img: '/Chiropractic.avif',
    conditions: [
      'Spinal joint restrictions',
      'Spinal misalignment',
      'Postural dysfunction',
      'Back & neck stiffness',
      'Reduced mobility',
      'Biomechanical dysfunction'
    ],
    features: [
      'Spinal alignment and segmental mobility evaluation: Detailed assessment of joint restrictions.',
      'Postural analysis and movement patterns: Evaluation of biomechanical issues.',
      'Targeted spinal adjustments to improve joint mobility: Precise techniques for spinal function.',
      'Soft tissue releases to reduce surrounding muscle tension: Comprehensive treatment approach.',
      'Postural correction strategies: Long-term stability through combined approach.',
      'Integration with corrective exercises for long-term stability: Ensuring lasting results, not temporary relief.'
    ],
    focus: 'Restore joint mobility & optimize spinal function for lasting results'
  },
  'geriatric': {
    title: 'Geriatric Physiotherapy',
    desc: `With advancing age, the body naturally undergoes changes such as reduced muscle strength, joint stiffness, balance decline, and slower mobility. These changes can increase the risk of falls, limit independence, and affect overall quality of life. However, aging does not have to mean loss of function—targeted physiotherapy can significantly improve mobility and confidence. At ${BRAND_NAME}, we provide evidence-based geriatric rehabilitation designed specifically for the needs of older adults. Home physiotherapy is especially beneficial for elderly patients, as it eliminates the need for travel, reduces fall risk, and allows therapy to be integrated directly into their daily environment. Serving Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas, we deliver compassionate, one-on-one care. Stay active, stay independent—age with strength and confidence.`,
    icon: <Users className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
    conditions: [
      'Age-related strength decline',
      'Balance & fall risk',
      'Joint stiffness',
      'Reduced mobility',
      'Walking difficulties',
      'Arthritis & joint pain'
    ],
    features: [
      'Strength, joint mobility, and flexibility assessment: Comprehensive evaluation of physical capacity.',
      'Balance and fall risk evaluation: Identifying and addressing fall risks.',
      'Walking pattern and functional mobility assessment: Evaluating gait and daily activities.',
      'Strength training to improve joint support and stability: Building physical capacity.',
      'Balance and coordination exercises to reduce fall risk: Preventing falls.',
      'Mobility training for walking, transfers, and daily tasks: Maintaining independence.'
    ],
    focus: 'Maintain independence & enhance quality of life in older adults'
  },
  'dry-needling': {
    title: 'Dry Needling Therapy',
    desc: `Muscle pain is often not just "tightness"—it is frequently driven by myofascial trigger points, which are hyper-irritable spots within muscles that cause localized pain, referred pain, and movement restriction. These trigger points develop due to overuse, poor posture, muscle imbalance, or prolonged static positions. At ${BRAND_NAME}, dry needling is used as a precise, evidence-based intervention to deactivate these trigger points and restore normal muscle function. This is not a standalone quick fix—we integrate it within a comprehensive rehabilitation plan that addresses the root cause of dysfunction. Home-based sessions ensure patients remain relaxed and comfortable, enhancing treatment effectiveness and avoiding unnecessary travel post-procedure. Serving Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas, we deliver safe, skilled dry needling as part of a complete recovery strategy. Release the source of pain, not just the symptoms.`,
    icon: <Zap className="w-12 h-12" />,
    img: '/Cupping & Dry Needling.avif',
    conditions: [
      'Myofascial trigger points',
      'Referred pain patterns',
      'Muscle overuse & strain',
      'Poor posture & imbalance',
      'Chronic muscle tension',
      'Movement restriction'
    ],
    features: [
      'Identifying trigger points through detailed palpation and movement assessment: Precise location of hyper-irritable spots causing pain.',
      'Targeted needle insertion to release muscle tension and improve blood flow: Dry needling to deactivate trigger points effectively.',
      'Combining dry needling with corrective exercises for lasting results: Integrated approach for sustained recovery.',
      'Comprehensive rehabilitation plan addressing root cause: Not a standalone fix, but part of complete recovery.',
      'Relaxed home environment for enhanced treatment effectiveness: Comfortable sessions without post-treatment travel discomfort.',
      'Safe, skilled application as part of complete recovery strategy: Evidence-based and precise technique.'
    ],
    focus: 'Deactivate trigger points and restore normal muscle function'
  },
  'cupping': {
    title: 'Cupping Therapy',
    desc: `Persistent muscle stiffness and restricted movement are often linked to poor circulation, fascial tightness, and tissue congestion. Cupping therapy works by creating controlled negative pressure to improve blood flow, tissue mobility, and muscle relaxation. At ${BRAND_NAME}, cupping is applied with clinical precision, not as a standalone alternative therapy but as a supportive tool within structured rehabilitation. This is particularly beneficial for patients with chronic tightness, postural strain, and delayed recovery from muscle fatigue. By offering this therapy at home, we ensure a more relaxed environment, allowing better tissue response and eliminating the discomfort of traveling immediately after treatment. Across Hyderabad, Kukatpally, Miyapur, Kondapur & surrounding areas, we use cupping as part of a holistic, evidence-informed treatment plan. Enhance recovery by improving tissue mobility.`,
    icon: <Zap className="w-12 h-12" />,
    img: '/Cupping & Dry Needling.avif',
    conditions: [
      'Poor circulation & tissue congestion',
      'Fascial tightness',
      'Persistent muscle stiffness',
      'Chronic postural strain',
      'Delayed muscle recovery',
      'Restricted movement'
    ],
    features: [
      'Assessing tissue restriction and movement limitations: Detailed evaluation before treatment.',
      'Applying dynamic or static cupping to targeted areas: Clinical precision for optimal results.',
      'Integrating movement-based techniques during cupping when required: Active rehabilitation combined with therapy.',
      'Combining with exercise therapy for sustained improvement: Holistic approach for lasting recovery.',
      'Relaxed home environment for better tissue response: Comfortable setting without post-treatment travel discomfort.',
      'Evidence-informed treatment plan: Cupping as supportive tool within structured rehabilitation.'
    ],
    focus: 'Improve blood flow, tissue mobility, and muscle relaxation'
  },
  'iastm': {
    title: 'IASTM (Instrument Assisted Soft Tissue Mobilization)',
    desc: `Soft tissue restrictions often develop following injury, repetitive strain, or prolonged inactivity, leading to adhesions within muscles and fascia. These adhesions can limit movement, reduce flexibility, and contribute to persistent pain. At ${BRAND_NAME}, we use IASTM as a targeted technique to detect and treat these restrictions with precision. We ensure that this technique is applied progressively and combined with active rehabilitation to achieve long-term outcomes. Home physiotherapy allows controlled application and immediate integration with corrective exercises, improving effectiveness. Serving Hyderabad, Miyapur, Kukatpally, Kondapur & nearby areas, we provide advanced soft tissue care. Restore tissue health, restore movement.`,
    icon: <Zap className="w-12 h-12" />,
    img: '/Cupping & Dry Needling.avif',
    conditions: [
      'Post-injury scar tissue',
      'Soft tissue adhesions',
      'Chronic stiffness',
      'Movement restrictions',
      'Reduced flexibility',
      'Fascial restrictions'
    ],
    features: [
      'Areas of tissue stiffness and fibrosis: Detailed assessment identifying problem areas.',
      'Movement limitations linked to soft tissue restriction: Evaluation of functional deficits.',
      'Using specialized instruments to mobilize affected tissues: Precision technique to detect and treat restrictions.',
      'Breaking down adhesions and improving tissue glide: Effective mobilization of soft tissues.',
      'Stimulating local circulation to promote healing: Enhanced blood flow for recovery.',
      'Integrating mobility and strengthening exercises post-treatment: Active rehabilitation for long-term outcomes.'
    ],
    focus: 'Detect and treat soft tissue restrictions to restore movement quality'
  },
  'back-pain': {
    title: 'Back Pain Treatment',
    desc: `Back pain is one of the most common complaints today—but not all back pain is serious, and most cases do not require surgery. While conditions like spondylitis or disc issues are often blamed, the reality is that many people experience back pain due to muscle weakness, poor posture, limited hip mobility, pelvic imbalance, or sedentary lifestyle habits. At ${BRAND_NAME}, we believe in identifying the true root cause of your pain rather than just treating symptoms. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive professional, one-on-one care tailored to your condition and lifestyle. Don't rush into medications or surgery. The right physiotherapy can make all the difference. Call now to book your home physiotherapy session.`,
    icon: <Bone className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
    conditions: [
      'Muscle weakness & core instability',
      'Poor posture & movement patterns',
      'Limited hip mobility & pelvic imbalance',
      'Sedentary lifestyle & daily habits',
      'Spondylitis & disc issues',
      'Sciatica & nerve pain'
    ],
    features: [
      'Detailed home assessment: Our expert physiotherapists perform a comprehensive evaluation during home visits, assessing core and back muscle strength, hip joint mobility and flexibility, pelvic alignment and SI joint stability, posture, movement patterns, and daily habits.',
      'Targeted strengthening exercises: Customized exercise programs designed to strengthen core muscles and support the spine.',
      'Stretching and mobility training: Focused stretching routines to improve flexibility and reduce stiffness.',
      'Postural correction techniques: Ergonomic advice and exercises to correct poor posture that contributes to back pain.',
      'Manual therapy and pain relief modalities: Hands-on techniques and therapeutic modalities for effective pain management.',
      'Functional training for daily activities: Training designed to help you move safely and efficiently in your everyday life.'
    ],
    focus: 'Reduce pain, restore movement, and prevent recurrence—all from the comfort of your home'
  },
  'neck-pain': {
    title: 'Neck Pain Treatment',
    desc: `Neck pain often starts subtly—stiffness while turning your head, discomfort after long phone use, or a dull ache by the end of the day. Over time, it can progress into persistent pain, headaches, or even radiating symptoms into the shoulders and arms. While many assume it's due to cervical spondylosis or disc issues, a large number of cases are actually linked to forward head posture, tight neck and shoulder muscles, weak deep cervical stabilizers, and reduced mobility in the upper spine. Daily habits like prolonged screen time and poor sleeping positions further aggravate the problem. At ${BRAND_NAME}, we take an evidence-based and individualized approach to neck pain management. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive focused, one-on-one care in the comfort of your home. Address the cause, not just the symptoms. Book your session today and restore comfortable, pain-free movement.`,
    icon: <Bone className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
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
    desc: `Shoulder pain can make even simple movements like reaching overhead, combing your hair, or lifting objects difficult and painful. It often develops gradually and, if ignored, can significantly restrict daily activities. Common shoulder conditions include adhesive capsulitis (frozen shoulder), rotator cuff injuries, tendonitis, and scapular instability. While these may sound serious, many cases are effectively managed with the right physiotherapy approach—without the need for injections or surgery. In most individuals, shoulder pain is influenced by joint stiffness, muscle imbalance, poor scapular control, repetitive strain, or improper movement patterns. Addressing these factors early is key to preventing long-term restriction. At ${BRAND_NAME}, we follow a structured and evidence-based rehabilitation approach tailored to your specific condition. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you receive expert care at your convenience. Don't let shoulder pain limit your movement—early physiotherapy makes recovery faster and easier. Call now to book your home physiotherapy session.`,
    icon: <Bone className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
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
    desc: `Sharp heel pain when you take your first steps in the morning? Discomfort after standing for long hours? These are classic signs of plantar fasciitis—a condition caused by irritation of the thick band of tissue (plantar fascia) that supports your foot arch. Unlike general foot pain, plantar fasciitis is often linked to increased stress on the heel due to poor foot mechanics, tight calf muscles, prolonged standing, improper footwear, or sudden changes in activity levels. Ignoring these factors can lead to persistent pain with every step. At ${BRAND_NAME}, we approach plantar fasciitis with a targeted and progressive rehabilitation strategy focused on relieving stress from the plantar fascia. With ${BRAND_NAME} Home Visit Service in Hyderabad, Kukatpally, Miyapur, Kondapur & nearby areas, you get expert care right at your home. Take the pressure off your heel—the right treatment makes every step easier. Book your session today and get back to pain-free walking.`,
    icon: <Bone className="w-12 h-12" />,
    img: '/Orthopedic Rehab.avif',
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
  'Spinal misalignment': 'chiropactic-care',
  'Spinal joint restrictions': 'chiropactic-care',
  'Spinal alignment and segmental mobility evaluation': 'chiropactic-care',
  'Postural dysfunction': 'chiropactic-care',
  'Biomechanical dysfunction': 'chiropactic-care',
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

  // Parallax transforms
  const heroBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const watermarkY = useTransform(scrollY, [0, 2000], [0, 300]);

  return (
    <div className="bg-white">

      {/* 1. CLINICAL HEADER */}
      <section className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative overflow-hidden min-h-[45vh] lg:h-[60vh] flex items-center">
        {/* Background Image with Parallax Overlay */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10 h-[120%]"
        >
          <img
            src={service.img}
            alt={`${BRAND_NAME} Service Detail Background`}
            className="w-full h-full object-cover opacity-20 lg:opacity-30"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-white/85" />
        </motion.div>

        {/* Large background text with Parallax */}
        <motion.div
          style={{ y: watermarkY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-primary/5 select-none pointer-events-none whitespace-nowrap uppercase"
        >
          {service.title.split(' ')[0]}
        </motion.div>

        <div className="max-w-[1650px] mx-auto px-6 lg:px-12 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-sans font-bold uppercase tracking-[0.2em] text-[9px] lg:text-[10px]">
                Specialized Clinical Service
              </span>
            </div>
            <h1 className="text-4xl lg:text-8xl font-serif font-bold text-primary leading-tight">
              {service.title.split(' ')[0]} <br className="hidden lg:block" /> <span className="text-accent italic font-normal">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-sm lg:text-2xl text-dark font-medium leading-relaxed max-w-5xl opacity-90">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DETAILED CONTENT */}
      <section className="py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="space-y-12 lg:space-y-16">
              {/* Conditions Treated */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-3 lg:space-y-4">
                  <span className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-[9px] lg:text-[10px] block">Scope of Care</span>
                  <h2 className="text-2xl lg:text-4xl font-serif font-bold text-primary">Treatments <span className="text-accent italic font-normal">Offered</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {service.conditions.map((item, i) => {
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
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary">Our <span className="text-accent italic font-normal">Approach</span></h2>
                </div>
                <div className="space-y-6">
                  {service.features.map((feat, i) => (
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
                />
              </motion.div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-10 shadow-2xl border-t-4 border-accent max-w-xs rounded-2xl">
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
      <section className="py-12 lg:py-16 bg-surface/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">
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
