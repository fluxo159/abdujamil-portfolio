"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileDown,
  Github,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Wrench,
  Globe,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { profile } from "@/data/profile";

export default function Home() {
  const { content, locale, setLocale } = useLanguage();
  const reduceMotion = useReducedMotion();

  const motionProps = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
          viewport: { once: true, margin: "-5%" },
        };

  return (
    <div className="min-h-screen bg-[#080809] text-white font-sans py-8 md:py-14 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-[960px] space-y-5">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 1: AVATAR CARD (LEFT) + BIO & INTERESTS (RIGHT)
        ════════════════════════════════════════════════════════════════ */}
        <motion.div className="flex flex-col sm:flex-row gap-5 items-stretch" {...motionProps(0)}>
          
          {/* Avatar Container - Fixed Dimensions & Perfect Centered Photo */}
          <div className="w-full sm:w-[250px] md:w-[270px] h-[270px] md:h-[280px] shrink-0 bg-[#eae6df] rounded-[28px] p-3 flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#dedad0] flex items-center justify-center relative">
              <img
                src={profile.avatar}
                alt={content.ui.avatarAlt}
                className="w-full h-full object-cover object-center contrast-105"
              />
            </div>
          </div>

          {/* Bio & Interests Column */}
          <div className="flex-1 min-w-0 flex flex-col gap-4 justify-between">
            {/* Bio Box */}
            <div className="bg-[#141416] border border-[#222226] rounded-[28px] p-6 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-semibold text-zinc-400">
                  {content.status}
                </span>
                
                {/* Language Switcher */}
                <div className="flex items-center gap-1 bg-[#1e1e22] border border-[#2b2b32] p-1 rounded-full shrink-0">
                  {profile.localeOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setLocale(opt.key)}
                      className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                        locale === opt.key
                          ? "bg-white text-black shadow"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans font-normal my-auto">
                {content.summary[0]}
              </p>

              <div className="mt-4 pt-3 border-t border-[#222226] flex items-center justify-between text-xs text-zinc-400">
                <span className="font-bold text-white text-sm">{profile.name}</span>
                <span className="text-xs text-zinc-400">{content.role.split("|")[0].trim()}</span>
              </div>
            </div>

            {/* Interests Box */}
            <div className="bg-[#141416] border border-[#222226] rounded-[22px] px-5 py-3.5 flex flex-wrap items-center gap-3.5">
              <span className="text-sm font-bold text-white tracking-wide shrink-0">
                Interests
              </span>
              <div className="h-5 w-[1px] bg-[#2a2a30] hidden sm:block" />
              <div className="flex flex-wrap gap-2 flex-1 items-center">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-2">
                  🎮 GameDev (Godot)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-2">
                  🎨 Pixel Art (Aseprite)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-2">
                  📊 BSA
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-2">
                  💻 Frontend
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: EXPERIENCE CARDS (2 EQUAL COLUMNS)
        ════════════════════════════════════════════════════════════════ */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" {...motionProps(0.06)}>
          {content.experience.slice(0, 2).map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="bg-[#141416] border border-[#222226] rounded-[28px] p-6 flex flex-col justify-between hover:border-[#33333a] transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                      {exp.company}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-400 mt-0.5">
                      {exp.title}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs font-semibold text-zinc-300 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="h-[1px] bg-[#222226] my-4" />

                <ul className="space-y-2 text-xs md:text-sm text-zinc-300 leading-relaxed">
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <span className="text-zinc-500 shrink-0 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: TECH STACK, TOOLS, LANGUAGES (LEFT) + EDUCATION (RIGHT)
        ════════════════════════════════════════════════════════════════ */}
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-5" {...motionProps(0.09)}>
          
          {/* Left Column (Stack, Tools, Languages Stacked) */}
          <div className="md:col-span-6 flex flex-col gap-4 justify-between">
            {/* Tech Stack */}
            <div className="bg-[#141416] border border-[#222226] rounded-[22px] p-4.5 flex items-center gap-4">
              <span className="text-xs md:text-sm font-bold text-white tracking-wide shrink-0 w-28 md:w-32 flex items-center gap-2">
                <Layers size={16} className="text-blue-400" />
                Tech Stack
              </span>
              <div className="h-5 w-[1px] bg-[#2a2a30] hidden sm:block" />
              <div className="flex flex-wrap gap-1.5 flex-1">
                {profile.stack.slice(0, 8).map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#141416] border border-[#222226] rounded-[22px] p-4.5 flex items-center gap-4">
              <span className="text-xs md:text-sm font-bold text-white tracking-wide shrink-0 w-28 md:w-32 flex items-center gap-2">
                <Wrench size={16} className="text-purple-400" />
                Tools
              </span>
              <div className="h-5 w-[1px] bg-[#2a2a30] hidden sm:block" />
              <div className="flex flex-wrap gap-1.5 flex-1">
                {content.tools.slice(0, 5).map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#141416] border border-[#222226] rounded-[22px] p-4.5 flex items-center gap-4">
              <span className="text-xs md:text-sm font-bold text-white tracking-wide shrink-0 w-28 md:w-32 flex items-center gap-2">
                <Globe size={16} className="text-emerald-400" />
                Languages
              </span>
              <div className="h-5 w-[1px] bg-[#2a2a30] hidden sm:block" />
              <div className="flex flex-wrap gap-2 flex-1">
                <span className="px-3 py-1 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-1.5">
                  🇺🇿 Uzbek
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-1.5">
                  🇷🇺 Russian
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-1.5">
                  🇰🇿 Kazakh
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs text-zinc-200 font-medium flex items-center gap-1.5">
                  🤟 CIS Sign
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Tall Education Box) */}
          <div className="md:col-span-6 bg-[#141416] border border-[#222226] rounded-[28px] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <GraduationCap size={18} className="text-blue-400" />
                <h3 className="text-xs md:text-sm font-bold text-white tracking-wide uppercase">
                  {content.ui.educationTitle}
                </h3>
              </div>

              <div className="space-y-4">
                {content.education.map((edu, idx) => (
                  <div key={edu.title} className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {edu.title}
                        </h4>
                        <p className="text-xs text-zinc-400">{edu.place}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-[#202024] border border-[#2e2e34] text-xs font-semibold text-zinc-300 shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    {edu.note && (
                      <p className="text-xs text-zinc-400 leading-relaxed pt-0.5">
                        {edu.note}
                      </p>
                    )}

                    {idx < content.education.length - 1 && (
                      <div className="h-[1px] bg-[#222226] mt-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: PORTFOLIO / PROJECTS BAR (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          id="projects"
          className="bg-[#141416] border border-[#222226] rounded-[22px] p-5 flex flex-wrap items-center gap-4"
          {...motionProps(0.12)}
        >
          <span className="text-xs md:text-sm font-bold text-white tracking-wide shrink-0 w-28 md:w-32 flex items-center gap-2">
            <Briefcase size={16} className="text-amber-400" />
            Portfolio
          </span>
          <div className="h-5 w-[1px] bg-[#2a2a30] hidden sm:block" />

          <div className="flex flex-wrap gap-2.5 flex-1 items-center">
            {content.projects.map((project) => (
              <a
                key={project.slug}
                href={project.links.bot || project.links.github || project.links.demo || "#"}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] hover:bg-[#2a2a30] hover:border-zinc-500 transition-all text-xs md:text-sm font-bold text-white flex items-center gap-2 cursor-pointer"
              >
                <span>{project.title}</span>
                <ExternalLink size={13} className="text-zinc-400" />
              </a>
            ))}

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] hover:bg-[#2a2a30] text-xs md:text-sm font-bold text-white flex items-center gap-2 cursor-pointer"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.links.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs md:text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer sm:ml-auto"
            >
              <FileDown size={14} />
              <span>CV</span>
            </a>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 5: DETAILS / CONTACT BAR (FULL WIDTH)
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          id="contact"
          className="bg-[#141416] border border-[#222226] rounded-[22px] p-5 flex flex-wrap items-center gap-4"
          {...motionProps(0.15)}
        >
          <span className="text-xs md:text-sm font-bold text-white tracking-wide shrink-0 w-28 md:w-32 flex items-center gap-2">
            <UserCheck size={16} className="text-emerald-400" />
            Details
          </span>
          <div className="h-5 w-[1px] bg-[#2a2a30] hidden sm:block" />

          <div className="flex flex-wrap gap-2.5 flex-1 items-center text-xs md:text-sm font-medium">
            <span className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] text-zinc-200">
              🎓 Student @ School 21 (BSA)
            </span>

            <a
              href={`mailto:${profile.links.email}`}
              className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] hover:bg-[#2a2a30] text-zinc-200 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <Mail size={13} className="text-zinc-400" />
              <span>{profile.links.email}</span>
            </a>

            <a
              href={`tel:${profile.links.phone.replace(/[^\d+]/g, "")}`}
              className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] hover:bg-[#2a2a30] text-zinc-200 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <Phone size={13} className="text-zinc-400" />
              <span>{profile.links.phone}</span>
            </a>

            <a
              href={profile.links.telegram}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] hover:bg-[#2a2a30] text-zinc-200 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare size={13} className="text-blue-400" />
              <span>Telegram (@Jamilf1)</span>
            </a>

            <span className="px-4 py-2 rounded-xl bg-[#202024] border border-[#2e2e34] text-zinc-200 flex items-center gap-2 sm:ml-auto">
              <MapPin size={13} className="text-emerald-400" />
              <span>Tashkent, Uzbekistan</span>
            </span>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="pt-3 pb-2 flex items-center justify-between text-zinc-500 text-xs font-medium">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Sleek Dark Bento Portfolio</span>
        </footer>

      </div>
    </div>
  );
}
