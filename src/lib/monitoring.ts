import { supabase } from "@/integrations/supabase/client";

export const logError = async (error: unknown) => {
  console.error(error);
  try {
    await supabase.from("error_logs").insert({ message: String(error) });
  } catch (e) {
    console.error("Failed to store error log", e);
  }
};

export const logPerformance = async () => {
  const perf = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
  const metrics = {
    domContentLoaded: perf.domContentLoadedEventEnd - perf.startTime,
    loadEvent: perf.loadEventEnd - perf.startTime,
  };
  console.log("Performance metrics", metrics);
  try {
    await supabase.from("performance_logs").insert(metrics);
  } catch (e) {
    console.error("Failed to store performance log", e);
  }
};

export const initMonitoring = () => {
  window.addEventListener("error", (event) => logError(event.error));
  window.addEventListener("unhandledrejection", (event) => logError(event.reason));
  window.addEventListener("load", () => {
    void logPerformance();
  });
};
