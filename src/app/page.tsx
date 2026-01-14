"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { BentoGrid } from "@/components/BentoGrid";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { profile } from "@/data/profile";

export default function Home() {
  const { content, locale, setLocale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const motionProps = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay },
          viewport: { once: true, margin: "-10%" },
        };

  return (
    <div className="min-h-screen">
      <main className="relative">
        <div className="mx-auto flex w-full max-w-[1120px] justify-end px-4 pt-6 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            {profile.localeOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setLocale(option.key)}
                aria-pressed={locale === option.key}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  locale === option.key
                    ? "bg-white/12 text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <BentoGrid>
          <motion.div
            className="col-span-12 md:col-span-5 lg:col-span-4"
            {...motionProps(0)}
          >
            <Card className="flex h-full flex-col justify-between gap-6 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                  <img
                    src={profile.avatar}
                    alt={content.ui.avatarAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-[rgba(255,255,255,0.62)]">
                    {content.role}
                  </p>
                  <h1 className="text-xl font-semibold text-[rgba(255,255,255,0.9)]">
                    {profile.name}
                  </h1>
                </div>
              </div>
              <Chip className="w-fit">
                <Sparkles size={14} aria-hidden="true" />
                {content.status}
              </Chip>
            </Card>
          </motion.div>

          <motion.section
            id="about"
            className="col-span-12 md:col-span-7 lg:col-span-8"
            {...motionProps(0.05)}
          >
            <Card className="flex h-full flex-col justify-between gap-6 p-6 md:p-8">
              <div className="space-y-4">
                <SectionTitle>{content.ui.introTitle}</SectionTitle>
                <div className="space-y-3 text-lg leading-relaxed text-[rgba(255,255,255,0.88)]">
                  <p>{content.summary[0]}</p>
                  <p className="text-[rgba(255,255,255,0.62)]">
                    {content.summary[1]}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.links.cvUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.14]"
                >
                  <FileDown size={16} aria-hidden="true" />
                  {content.ui.cvLabel}
                </a>
                <a
                  href={profile.links.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <MessageSquare size={16} aria-hidden="true" />
                  {content.ui.telegramLabel}
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Github size={16} aria-hidden="true" />
                  {content.ui.githubLabel}
                </a>
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="col-span-12 md:col-span-6 lg:col-span-4"
            {...motionProps(0.1)}
          >
            <Card className="h-full p-6">
              <SectionTitle>{content.ui.stackTitle}</SectionTitle>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Card>
          </motion.section>

          {content.experience.slice(0, 2).map((item, index) => (
            <motion.section
              key={item.company}
              className="col-span-12 md:col-span-6 lg:col-span-4"
              {...motionProps(0.12 + index * 0.05)}
            >
              <Card className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionTitle>{content.ui.experienceTitle}</SectionTitle>
                    <h4 className="mt-3 text-lg font-semibold text-white/90">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/60">{item.company}</p>
                  </div>
                  <span className="text-xs text-white/50">{item.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.section>
          ))}

          <motion.section
            id="projects"
            className="col-span-12"
            {...motionProps(0.2)}
          >
            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <SectionTitle>{content.ui.projectsTitle}</SectionTitle>
                <span className="text-xs text-white/50">
                  {content.ui.projectCountLabel.replace(
                    "{count}",
                    String(content.projects.length)
                  )}
                </span>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {content.projects.map((project) => (
                  <article
                    key={project.slug}
                    className="group rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-4 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-semibold text-white/90">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-sm text-white/60">
                          {project.description}
                        </p>
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 transition group-hover:text-white"
                      >
                        {content.ui.caseLabel}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase size={14} aria-hidden="true" />
                        {project.stack.join(" / ")}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          {content.ui.demoLabel}
                        </a>
                      ) : null}
                      {project.links.progress ? (
                        <a
                          href={project.links.progress}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/[0.12] hover:text-white"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          {content.ui.progressLabel}
                        </a>
                      ) : null}
                      {project.links.bot ? (
                        <a
                          href={project.links.bot}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                        >
                          <MessageSquare size={14} aria-hidden="true" />
                          {content.ui.botLabel}
                        </a>
                      ) : null}
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/[0.12] hover:text-white"
                        >
                          <Github size={14} aria-hidden="true" />
                          {content.ui.githubLabel}
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="col-span-12 md:col-span-6 lg:col-span-4"
            {...motionProps(0.25)}
          >
            <Card className="h-full p-6">
              <SectionTitle>{content.ui.educationTitle}</SectionTitle>
              <div className="mt-4 space-y-4">
                {content.education.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <GraduationCap size={14} aria-hidden="true" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <p className="text-xs text-white/55">{item.place}</p>
                    <p className="text-xs text-white/45">{item.period}</p>
                    {item.note ? (
                      <p className="text-xs text-white/55">{item.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="col-span-12 md:col-span-6 lg:col-span-4"
            {...motionProps(0.3)}
          >
            <Card className="h-full p-6">
              <SectionTitle>{content.ui.toolsTitle}</SectionTitle>
              <div className="mt-4 space-y-3">
                {content.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-sm text-white/70"
                  >
                    <span>{tool}</span>
                    <Wrench size={14} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="col-span-12 md:col-span-6 lg:col-span-4"
            {...motionProps(0.32)}
          >
            <Card className="h-full p-6">
              <SectionTitle>{content.ui.languagesTitle}</SectionTitle>
              <div className="mt-4 space-y-3">
                {content.languages.map((language) => (
                  <div
                    key={language}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-sm text-white/70"
                  >
                    <span>{language}</span>
                    <Languages size={14} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section
            id="contact"
            className="col-span-12"
            {...motionProps(0.35)}
          >
            <Card className="p-6 md:p-8">
              <SectionTitle>{content.ui.detailsTitle}</SectionTitle>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {content.ui.emailLabel}
                  </p>
                  <a
                    href={`mailto:${profile.links.email}`}
                    className="mt-3 flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Mail size={14} aria-hidden="true" />
                    {profile.links.email}
                  </a>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {content.ui.phoneLabel}
                  </p>
                  <a
                    href={`tel:${profile.links.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-3 flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Phone size={14} aria-hidden="true" />
                    {profile.links.phone}
                  </a>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {content.ui.telegramLabel}
                  </p>
                  <a
                    href={profile.links.telegram}
                    target="_blank"
                    rel="noreferrer"
                  className="mt-3 flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <MessageSquare size={14} aria-hidden="true" />
                    {content.ui.contactCta}
                  </a>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {content.ui.locationLabel}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                    <MapPin size={14} aria-hidden="true" />
                    {content.location}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {content.ui.availabilityLabel}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                    <Briefcase size={14} aria-hidden="true" />
                    {content.availability}
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>
        </BentoGrid>
      </main>
    </div>
  );
}
