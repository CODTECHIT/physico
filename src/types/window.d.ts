export {};

declare global {
  interface Window {
    trackPhoneClick?: () => void;
    trackWhatsAppClick?: () => void;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}
