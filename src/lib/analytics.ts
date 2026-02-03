export const pageview = (url: string) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore
    window.gtag("config", "G-KBZBY2LHRF", {
      page_path: url,
    });
  }
};
