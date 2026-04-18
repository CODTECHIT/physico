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
            // Track in GA4
            if (typeof gtag === 'function') {
              gtag('event', 'whatsapp_click', {
                'event_category': 'conversion',
                'event_label': 'book_home_visit'
              });
            }
            // Track in Meta Pixel
            if (typeof fbq === 'function') {
              fbq('track', 'Contact');
            }
            console.log('WhatsApp Click Tracked');
          }
        `}
      </script>
    </Helmet>
  );
};

export default Analytics;
