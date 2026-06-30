"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { committees } from "@/lib/committees";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

export default function Committees() {
  return (
    <section id="committees" className="w-full bg-[#FFFDF2] px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">

        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="md:w-64 shrink-0"
        >
          <h2 className="text-[28px]  md:text-4xl font-bold text-black mb-4">Open Committees</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Explore all available committees to identify the one that best aligns with your skills and interests.
          </p>
        </motion.div>

        {/* Right — committee list */}
        <div className="flex-1 flex flex-col gap-3">
          {committees.map((c, i) => (
            <motion.div
              key={c.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <Link
                href={`/committees/${c.slug}`}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-black transition-colors group"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{c.name}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{c.description}</p>
                </div>
                <span className="ml-4 shrink-0 text-gray-400 group-hover:text-black transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
