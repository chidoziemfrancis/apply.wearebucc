"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "STEP 01",
    title: "Application Open",
    description:
      "Students are encouraged to review all available committees to identify the one that best matches their skills and interests.",
  },
  {
    step: "STEP 02",
    title: "Submission",
    description:
      "After exploring all committees, students can apply for a particular role via the google form.",
  },
  {
    step: "STEP 03",
    title: "Feedback and Interviews",
    description:
      "If selected for the role, a feedback will be sent to the qualified candidates on next steps.",
  },
];

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="flex gap-6"
    >
      {/* Animated left border */}
      <div className="relative w-[3px] shrink-0 bg-gray-200 rounded-full">
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full bg-[#A11312]"
          animate={{ height: isInView ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Content */}
      <div className="pb-14">
        <p className="text-xs text-gray-400 font-medium mb-2 tracking-widest">{step.step}</p>
        <h3 className="text-xl md:text-2xl font-bold text-black mb-3">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function ApplicationProcess() {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-4xl font-bold text-black mb-14"
        >
          Application Process
        </motion.h2>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <StepItem key={step.step} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
