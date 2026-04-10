import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const treatments = ["Orthopedic", "Neuro", "Sports", "Cardio"];

const TreatmentTicker = memo(function TreatmentTicker() {
  const [treatmentIndex, setTreatmentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTreatmentIndex((prev) => (prev + 1) % treatments.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-block min-w-[120px] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={treatments[treatmentIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-[#237227] italic font-normal"
        >
          {treatments[treatmentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

export default TreatmentTicker;
