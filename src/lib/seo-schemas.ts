import { BRAND_NAME, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from '../constants';

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.flexophysio.com/#organization",
  "name": BRAND_NAME,
  "url": "https://www.flexophysio.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.flexophysio.com/logo-square.png",
    "width": "512",
    "height": "512"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT_PHONE_DISPLAY,
    "email": CONTACT_EMAIL,
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Telugu", "Hindi"]
  },
  "sameAs": [
    "https://www.instagram.com/flexophysio/",
    "https://www.facebook.com/profile.php?id=61558257033162",
    "https://youtube.com/@flexophysio?si=MvZIOK9pu_WvVAIa",
    "https://www.linkedin.com/in/dr-bhanukumar-vemula-pt-6a250b242"
  ]
});


export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.flexophysio.com/#localbusiness",
  "name": `${BRAND_NAME} - Home Visit Physiotherapy`,
  "image": "https://www.flexophysio.com/hero-interaction.jpg",
  "url": "https://www.flexophysio.com/",
  "telephone": "+919502808581",
  "email": CONTACT_EMAIL,
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No: G-1, 1st Floor, Rangam Nilayam, Laxminagar, Miyapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500049",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4948,
    "longitude": 78.3996
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "07:00",
    "closes": "21:00"
  },
  "areaServed": [
    "Hyderabad",
    "Kukatpally",
    "Miyapur",
    "Kondapur",
    "Gachibowli",
    "Hitech City",
    "Madhapur",
    "KPHB",
    "Pragathi Nagar",
    "Nizampet",
    "Hafeezpet",
    "Nanakramguda",
    "Lingampally",
    "Hydernagar",
    "Bachupally",
    "Vivekananda Nagar",
    "Vasantha Nagar"
  ],
  "knowsAbout": [
    "Physiotherapy at home",
    "Stroke Rehabilitation",
    "Back Pain Treatment",
    "Post Surgery Rehab",
    "Neurological Physiotherapy",
    "Knee Pain Physiotherapy",
    "Orthopedic Rehabilitation",
    "Chiropractic Care",
    "Dry Needling",
    "Cupping Therapy"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "137",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.flexophysio.com/#website",
  "url": "https://www.flexophysio.com/",
  "name": BRAND_NAME,
  "publisher": { "@id": "https://www.flexophysio.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.flexophysio.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getFAQSchema = (faqs: { q: string, a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});

export const getMedicalConditionSchema = (name: string, description: string, specialty: string) => ({
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": name,
  "description": description,
  "relevantSpecialty": specialty
});

export const getPhysicianSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://www.flexophysio.com/#physician",
  "name": "Dr. BhanuKumar Vemula",
  "image": "https://www.flexophysio.com/founder.jpg",
  "medicalSpecialty": ["PhysicalTherapy", "OccupationalTherapy"],
  "telephone": "+919502808581",
  "email": CONTACT_EMAIL,
  "url": "https://www.flexophysio.com/dr-bhanukumar-vemula",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No: G-1, 1st Floor, Rangam Nilayam, Laxminagar, Miyapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500049",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4948,
    "longitude": 78.3996
  },
  "knowsAbout": [
    "Physiotherapy",
    "Chiropractic care",
    "Dry Needling",
    "Myofascial Cupping",
    "IASTM",
    "Kinesio Taping",
    "Stroke Rehabilitation",
    "Orthopedic Rehabilitation",
    "Geriatric Physiotherapy"
  ],
  "memberOf": {
    "@type": "MedicalOrganization",
    "name": "Telangana State Physiotherapy Board (TSPMB)"
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "TSPMB Registration Number",
    "value": "C-13470"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "137",
    "bestRating": "5",
    "worstRating": "1"
  }
});

