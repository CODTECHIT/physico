import { Helmet } from 'react-helmet-async';

/**
 * Analytics Component
 * 
 * Replace placeholders with actual IDs before production.
 * This component should be included in App.tsx or Layout.tsx.
 */
const Analytics = () => {
  return (
    <Helmet>
      {/* WhatsApp Conversion Event Handler Placeholder */}
      <script>
        {`
          function trackWhatsAppClick() {
            if (typeof gtag === 'function') {
              gtag('event', 'whatsapp_click', {
                'event_category': 'conversion',
                'event_label': 'book_home_visit'
              });
            }
            if (typeof fbq === 'function') {
              fbq('track', 'Contact');
            }
          }

          function trackPhoneClick() {
            if (typeof gtag === 'function') {
              gtag('event', 'conversion', {
                'send_to': 'AW-17998716052/75PxCMK3t4QcEJS5uoZD'
              });
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default Analytics;
