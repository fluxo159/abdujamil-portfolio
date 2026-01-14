"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";

type ProgressListProps = {
  groups: { key: string; files: { name: string; href: string; sizeLabel: string }[] }[];
};

export function ProgressList({ groups }: ProgressListProps) {
  const { content } = useLanguage();
  const hasFiles = groups.some((group) => group.files.length > 0);

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-10 md:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {content.ui.backLabel}
        </Link>
        <Card className="mt-6 p-6 md:p-8">
          <SectionTitle>{content.ui.progressTitle}</SectionTitle>
          <div className="mt-6 space-y-3">
            {!hasFiles ? (
              <p className="text-sm text-white/60">{content.ui.progressEmpty}</p>
            ) : (
              groups.map((group) => (
                <div key={group.key} className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                    {content.ui.progressGroups[group.key] ?? group.key}
                  </h3>
                  <div className="space-y-3">
                    {group.files.map((file) => (
                      <div
                        key={file.href}
                        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <FileText
                            size={18}
                            className="text-white/50"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="text-sm text-white/85">{file.name}</p>
                            <p className="text-xs text-white/45">
                              {file.sizeLabel}
                            </p>
                          </div>
                        </div>
                        <a
                          href={file.href}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-xs font-semibold text-white/70 hover:text-white"
                        >
                          <Download size={14} aria-hidden="true" />
                          {content.ui.progressDownloadLabel}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
