export const pageview = (url: string) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore
    window.gtag("config", "G-KBZBY2LHRF", {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore
    window.gtag("event", action, params);
  }
};
