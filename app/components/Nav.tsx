"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight hover:text-emerald-400 transition-colors"
        >
          toby.st-john
        </Link>
        <ul className="flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-white/70 hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
