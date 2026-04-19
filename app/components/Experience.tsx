"use client";

import { motion } from "framer-motion";

type Role = {
  title: string;
  company: string;
  type?: string;
  dates: string;
  duration: string;
  location?: string;
  bullets: string[];
  skills?: string[];
};

const roles: Role[] = [
  {
    title: "Chief Technical Officer",
    company: "Project Umbrella",
    dates: "Nov 2025 — Present",
    duration: "6 mos",
    bullets: [
      "Co-founded and lead Project Umbrella, a UNSW engineering society enabling students to design and prototype real-world technical projects.",
      "Instrumental in development of the ADA²M project — an autonomous drone for agricultural and atmospheric monitoring — integrating mechanical, electrical, and software systems.",
      "Developing leadership, systems integration, and technical communication skills while fostering hands-on engineering across a multidisciplinary team.",
    ],
  },
  {
    title: "Aerospace / Mechanical Intern",
    company: "AquaForce Australia",
    type: "Internship",
    dates: "Nov 2025 — Present",
    duration: "6 mos",
    location: "Hobart, Tasmania, Australia",
    bullets: [
      "Engineered motor-driven actuation systems for automated sail and flap positioning, integrating a clutch mechanism to manage dynamic loads and improve system resilience.",
      "Developed embedded firmware to coordinate actuation across distributed microcontroller nodes, incorporating real-time feedback from inertial measurement and wind sensing inputs.",
      "Designed and deployed an onboard sensor array across the wing sail capturing aerodynamic and structural telemetry, streamed via the vessel's long-range comms link for remote monitoring.",
      "Telemetry pipeline fed directly into reinforcement learning exploration for autonomous wind-driven navigation strategies.",
    ],
    skills: ["SOLIDWORKS", "Rapid Prototyping", "Embedded Firmware", "Sensor Integration", "RL Data Pipelines"],
  },
  {
    title: "Vineyard Hand",
    company: "Waggie Tail Vineyard",
    type: "Full-time",
    dates: "Jan 2020 — Present",
    duration: "6 yrs 4 mos",
    bullets: [
      "Day-to-day management and maintenance of farm operations, including operating agricultural machinery for mulching, ground preparation, mechanical weeding, and spraying.",
      "Managed key vineyard operations including disease monitoring and control, weed management, trellis installation, fencing, and irrigation system maintenance.",
    ],
  },
  {
    title: "Harvest Assistant",
    company: "Botanical Resources Australia Pty Ltd",
    type: "Full-time",
    dates: "Oct 2024 — Feb 2025",
    duration: "5 mos",
    bullets: [
      "Conducted sampling and testing on Pyrethrum crops, producing accurate results to support a successful and efficient harvest.",
      "Coordinated harvest operations — organising truck drivers, weighbridge staff, and on-site personnel to ensure smooth and timely workflow.",
    ],
  },
  {
    title: "Ramp Agent",
    company: "Aus Flight Handling",
    type: "Full-time, on-site",
    dates: "Oct 2023 — Feb 2024",
    duration: "5 mos",
    bullets: [
      "Performed ground operations at Wynyard Airport — aircraft marshalling and dispatch, cargo loading/unloading, and maintaining flight and operational records.",
      "Worked effectively in a high-pressure environment, communicating clearly with ground crew and pilots to support safe operations and quick aircraft turnaround.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-mono text-sm text-emerald-400 mb-3">// experience</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Where I&apos;ve worked.
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/toby-st-john-034270274/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-white/60 hover:text-emerald-400 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Full profile on LinkedIn
          </a>
        </motion.div>

        <ol className="relative border-l border-white/10 ml-2 space-y-12">
          {roles.map((r, i) => (
            <motion.li
              key={`${r.company}-${r.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="pl-8 relative"
            >
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-black" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="text-white/70">
                    {r.company}
                    {r.type && <span className="text-white/40"> · {r.type}</span>}
                  </p>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-white/50 whitespace-nowrap">
                  {r.dates} · {r.duration}
                  {r.location && (
                    <span className="block text-white/40 normal-case tracking-normal mt-1">
                      {r.location}
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-2 text-white/70 leading-relaxed">
                {r.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-emerald-400/60 font-mono mt-1">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {r.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {r.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs text-white/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
