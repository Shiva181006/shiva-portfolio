import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center font-mono select-none"
        >
          <div className="space-y-4 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-primary font-bold uppercase tracking-widest"
            >
              Loading Portfolio...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
