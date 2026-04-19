"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
  </svg>
);

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:tstjohn2@icloud.com",
    handle: "tstjohn2@icloud.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/toby-st-john-034270274/",
    handle: "/in/toby-st-john",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/tobystjohn",
    handle: "@tobystjohn",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-emerald-400 mb-3"
        >
          // get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Let&apos;s build something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg mb-16 max-w-xl mx-auto"
        >
          Open to collaborations, research projects, and interesting engineering
          problems — especially at the hardware/software boundary.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-start text-left rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-emerald-400/50 transition-colors"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <Icon width={22} height={22} className="text-emerald-400" />
                  <ArrowUpRight
                    size={18}
                    className="text-white/30 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-white/50 mb-1">
                  {l.label}
                </div>
                <div className="text-white/80">{l.handle}</div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 text-center font-mono text-xs text-white/40">
          © {new Date().getFullYear()} Toby St. John — Built with Next.js + Framer Motion
        </div>
      </div>
    </section>
  );
}
