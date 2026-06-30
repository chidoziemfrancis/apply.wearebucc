"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ApplicationIllustration from "./ApplicationIllustration";

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
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="pl-6"
    >
      <p className="text-xs text-gray-400 font-medium mb-2 tracking-widest">{step.step}</p>
      <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">{step.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{step.description}</p>
    </motion.div>
  );
}

export default function ApplicationProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 75%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="application-process" className="w-full bg-white px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-4xl font-bold text-black mb-14"
        >
          Application Process
        </motion.h2>

        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          {/* Steps with one continuous, scroll-driven timeline */}
          <div ref={timelineRef} className="relative flex flex-col gap-12">
            {/* Gray track */}
            <div className="absolute left-0 top-0 bottom-0 w-0.75 rounded-full bg-gray-200" />
            {/* Red progress fill — grows with scroll */}
            <motion.div
              style={{ scaleY: progress }}
              className="absolute left-0 top-0 bottom-0 w-0.75 origin-top rounded-full bg-[#A11312]"
            />

            {steps.map((step, i) => (
              <StepItem key={step.step} step={step} index={i} />
            ))}
          </div>

          {/* Illustration */}
          <div className="order-first md:order-last">
            <ApplicationIllustration />
          </div>
        </div>

      </div>
    </section>
  );
}
