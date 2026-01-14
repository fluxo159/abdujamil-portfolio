import { readdir, stat } from "fs/promises";
import path from "path";
import { ProgressList } from "@/components/ProgressList";

type ProgressFile = {
  name: string;
  href: string;
  sizeLabel: string;
  groupKey: string;
};

const formatSize = (bytes: number) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 102.4) / 10} KB`;
  }
  return `${Math.round(bytes / (1024 * 102.4)) / 10} MB`;
};

const getGroupKey = (baseName: string) => {
  const match = baseName.match(/^[A-Za-z]+(?:_[A-Za-z]+)?\d*/);
  if (!match) {
    return "Misc";
  }
  return match[0].replace(/\d+$/, "");
};

const toDisplayName = (fileName: string) => {
  const base = fileName.replace(/\.[^.]+$/, "");
  const withoutId = base.split(".ID_")[0];
  return withoutId.replace(/_/g, " ");
};

export default async function ProgressPage() {
  const baseDir = path.join(process.cwd(), "public", "progress");
  let files: ProgressFile[] = [];

  try {
    const entries = await readdir(baseDir, { withFileTypes: true });
    const fileEntries = entries.filter((entry) => entry.isFile());
    files = await Promise.all(
      fileEntries.map(async (entry) => {
        const fullPath = path.join(baseDir, entry.name);
        const fileStat = await stat(fullPath);
        const displayName = toDisplayName(entry.name);
        const groupKey = getGroupKey(displayName);
        return {
          name: displayName,
          href: `/progress/${entry.name}`,
          sizeLabel: formatSize(fileStat.size),
          groupKey,
        };
      })
    );
    files.sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    files = [];
  }

  const groupOrder = ["BSA", "QA", "UX_UI", "PjM", "CbS", "C", "Misc"];
  const grouped = files.reduce<Record<string, ProgressFile[]>>((acc, file) => {
    if (!acc[file.groupKey]) {
      acc[file.groupKey] = [];
    }
    acc[file.groupKey].push(file);
    return acc;
  }, {});

  const groups = groupOrder
    .filter((key) => grouped[key]?.length)
    .map((key) => ({
      key,
      files: grouped[key].sort((a, b) => a.name.localeCompare(b.name)),
    }));

  return <ProgressList groups={groups} />;
}
