"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Overview", href: "overview" },
  { label: "Benefits", href: "benefits" },
  { label: "Committees", href: "committees" },
  { label: "Application Process", href: "application-process" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/BUCCLogo.png"
            alt="BUCC Logo"
            width={48}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Apply now button */}
        <button
          onClick={() => scrollTo("committees")}
          className="bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-xs px-3 h-8 flex items-center md:text-sm md:px-5 md:h-10"
        >
          Apply now
        </button>
      </div>
    </nav>
  );
}
