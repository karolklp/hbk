import { User, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 left-4 z-10">
      <motion.div
        initial={false}
        animate={{
          width: isOpen ? 256 : 40,
          height: isOpen ? 180 : 40,
        }}
        style={{ pointerEvents: "all" }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/20 rounded-lg"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center text-white hover:text-white/80 cursor-pointer z-10"
        >
          <motion.div
            animate={{
              rotateY: isOpen ? 180 : 0,
              opacity: 1,
            }}
            transition={{ duration: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <User className="h-5 w-5" />}
          </motion.div>
        </button>

        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="pl-12 pr-4 py-3"
        >
          <div className="space-y-4">
            <div className="text-xl font-semibold text-white">
              Hanna Klepacka
            </div>
            <div className="space-y-2 text-white/80">
              <div>Copenhagen</div>
              <a
                href="mailto:contact@email.com"
                className="block hover:text-white transition-colors"
              >
                contact@email.com
              </a>
              <a
                href="tel:+4512345678"
                className="block hover:text-white transition-colors"
              >
                +45 12 34 56 78
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
