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
      {/* Google Search Console Verification */}
      {/* <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_ID" /> */}

      {/* Google Analytics 4 (GA4) */}
      {/* 
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>
      */}

      {/* Meta Pixel (Facebook Pixel) */}
      {/* 
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </script>
      */}

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
