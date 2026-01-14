"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";
import { profile } from "@/data/profile";

type ProjectDetailsProps = {
  slug: string;
};

export function ProjectDetails({ slug }: ProjectDetailsProps) {
  const { content } = useLanguage();
  const fallback = profile.locales[profile.defaultLocale];
  const project =
    content.projects.find((item) => item.slug === slug) ||
    fallback.projects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-10 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {content.ui.backLabel}
          </Link>
          <div className="flex flex-wrap gap-3">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-sm text-white/70 hover:text-white"
              >
                <ExternalLink size={16} aria-hidden="true" />
                {content.ui.demoLabel}
              </a>
            ) : null}
            {project.links.bot ? (
              <a
                href={project.links.bot}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/90 shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:bg-white/[0.12] hover:text-white"
              >
                <ExternalLink size={16} aria-hidden="true" />
                {content.ui.botLabel}
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white/90 shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:bg-white/[0.14] hover:text-white"
              >
                <Github size={16} aria-hidden="true" />
                {content.ui.githubLabel}
              </a>
            ) : null}
          </div>
        </div>

        <Card className="mt-6 p-6 md:p-8">
          <SectionTitle>{content.ui.projectLabel}</SectionTitle>
          <h1 className="mt-4 text-2xl font-semibold text-white/90">
            {project.title}
          </h1>
          <p className="mt-3 text-base text-white/65">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </Card>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <SectionTitle>{content.ui.highlightsLabel}</SectionTitle>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <SectionTitle>{content.ui.stackLabel}</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
