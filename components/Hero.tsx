"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const images = [
  { src: "/sport.jpg", alt: "BUCC sports event", aspect: "aspect-3/4" },
  { src: "/btw.png", alt: "BUCC group photo", aspect: "aspect-4/3" },
  { src: "/tradition.png", alt: "BUCC cultural event", aspect: "aspect-3/4" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center text-center px-6 py-24 md:py-36">

      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-8 shadow-sm"
      >
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#A11312] shrink-0" />
        <span className="text-xs md:text-sm text-gray-700 font-medium">2026 Applications are now open</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.15}
        className="text-4xl md:text-7xl font-bold text-black leading-tight tracking-tight max-w-3xl"
      >
        Shape the future of BUCC together.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.3}
        className="mt-6 text-base md:text-lg text-gray-500 max-w-md leading-relaxed"
      >
        Connect with like minded students, learn new skills, and become part of
        the teams shaping community life at BUCC.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.45}
        className="mt-10"
      >
        <Link
          href="#roles"
          className="inline-flex items-center justify-center bg-[#ECCA0A] text-black font-semibold rounded-full shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)] hover:brightness-95 transition-all text-xs px-5 py-2.5 md:text-sm md:px-8 md:py-4"
        >
          View open roles
        </Link>
      </motion.div>

      {/* Images grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.6}
        className="mt-16 w-full max-w-5xl grid grid-cols-[1fr_1.5fr_1fr] gap-4 items-center"
      >
        {images.map((img) => (
          <div key={img.src} className={`relative w-full ${img.aspect} rounded-2xl overflow-hidden`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

    </section>
  );
}
