"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-white px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto border-t border-[#E7E7E7] pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto flex flex-col items-center text-center"
      >
        <h2 className="text-[26px]  md:text-5xl font-bold text-black">
          Applications are now open
        </h2>
        <p className="mt-4 text-sm md:text-lg text-gray-500 max-w-md leading-relaxed">
          Join a community of students dedicated to service, leadership,
          creativity, and growth.
        </p>
        <button
          onClick={() => document.getElementById("committees")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 inline-flex items-center justify-center bg-[#ECCA0A] text-black font-semibold rounded-full shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)] hover:brightness-95 transition-all text-xs px-5 py-2.5 md:text-sm md:px-8 md:py-4"
        >
          Open roles
        </button>
      </motion.div>
      </div>
    </section>
  );
}
