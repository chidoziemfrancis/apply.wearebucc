"use client";

import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "bucc__official",
    href: "https://x.com/bucc__official",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
      </svg>
    ),
  },
  {
    label: "bucc__official",
    href: "https://instagram.com/bucc__official",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "bucc_.official",
    href: "https://tiktok.com/@bucc_.official",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F6F6] px-6 py-14 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <Image src="/BUCCLogo.png" alt="BUCC Logo" width={48} height={48} />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Gain new skills, and help shape community life at BUCC.
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-4">Follow us</p>
            <ul className="space-y-3">
              {socials.map((s, i) => (
                <li key={i}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    <span className="text-gray-700">{s.icon}</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <p className="mt-12 text-center text-sm text-gray-500">
          © 2026 BUCC · Babcock University
        </p>
      </div>
    </footer>
  );
}
