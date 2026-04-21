export {};

declare global {
  interface Window {
    trackPhoneClick?: () => void;
    trackWhatsAppClick?: () => void;
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}
