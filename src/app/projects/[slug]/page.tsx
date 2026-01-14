import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/ProjectDetails";
import { profile } from "@/data/profile";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return profile.locales[profile.defaultLocale].projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = profile.locales[profile.defaultLocale].projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    return {
      title: profile.locales[profile.defaultLocale].ui.projectLabel,
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = profile.locales[profile.defaultLocale].projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetails slug={params.slug} />;
}
