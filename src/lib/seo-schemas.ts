import { BRAND_NAME, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from '../constants';

export const getOrganizationSchema = () => ({
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
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "AdministrativeArea", "name": "Kukatpally" },
    { "@type": "AdministrativeArea", "name": "Miyapur" },
    { "@type": "AdministrativeArea", "name": "Kondapur" },
    { "@type": "AdministrativeArea", "name": "Gachibowli" },
    { "@type": "AdministrativeArea", "name": "Hitech City" },
    { "@type": "AdministrativeArea", "name": "Madhapur" },
    { "@type": "AdministrativeArea", "name": "KPHB" },
    { "@type": "AdministrativeArea", "name": "Pragathi Nagar" },
    { "@type": "AdministrativeArea", "name": "Nizampet" },
    { "@type": "AdministrativeArea", "name": "Hafeezpet" },
    { "@type": "AdministrativeArea", "name": "Nanakramguda" },
    { "@type": "AdministrativeArea", "name": "Lingampally" },
    { "@type": "AdministrativeArea", "name": "Hydernagar" },
    { "@type": "AdministrativeArea", "name": "Bachupally" },
    { "@type": "AdministrativeArea", "name": "Vivekananda Nagar" },
    { "@type": "AdministrativeArea", "name": "Vasantha Nagar" }
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
  ]
});

export const getWebsiteSchema = () => ({
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
  "@type": "MedicalCondition",
  "name": name,
  "description": description,
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": specialty
  }
});

