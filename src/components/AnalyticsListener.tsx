import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "../lib/analytics";

export default function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}
