"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    bg: "#F8DBFF",
    title: "Develop Leadership Skills",
    description: "Take on responsibilities, lead initiatives, and grow into a confident and effective student leader.",
    icon: "/icons/lucide_crown.png",
  },
  {
    bg: "#FFF4B7",
    title: "Build meaningful Friendships",
    description: "Connect with passionate students, work as a team, and create lifelong relationships within the BUCC community.",
    icon: "/icons/love.png",
  },
  {
    bg: "#C1D3FF",
    title: "Gain real world experience",
    description: "Learn practical skills in media, technology and more through hands on involvement.",
    icon: "/icons/lucide_briefcase.png",
  },
  {
    bg: "#FDD4BF",
    title: "Make a positive impact",
    description: "Help create memorable experiences, and strengthen the BUCC community on campus.",
    icon: "/icons/lucide_hand-heart.png",
  },
  {
    bg: "#FFFDF2",
    title: "Discover your skills and talent",
    description: "Explore your talents, and contribute in ways that align with your passion.",
    icon: "/icons/lucide_sparkle.png",
  },
  {
    bg: "#CCFFDE",
    title: "Grow spiritually and personally",
    description: "Serve with purpose and build character through collaboration and community.",
    icon: "/icons/uil_arrow-growth.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Benefits() {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-400 mb-2">Why join</p>
          <h2 className="text-[28px] md:text-5xl font-bold text-black">Benefits of Membership</h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              style={{ backgroundColor: b.bg }}
              className="rounded-2xl p-6 flex flex-col gap-4 border border-black"
            >
              <Image src={b.icon} alt={b.title} width={28} height={28} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
