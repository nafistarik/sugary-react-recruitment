"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWrapperProps {
  children: ReactNode;
}

export default function FadeInWrapper({ children }: FadeInWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
