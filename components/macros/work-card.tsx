import { LinkIcon } from "@nextui-org/react";
import Link from "next/link";

export const WorkCard = ({
  yrsOfExp,
  company,
  location,

  link,
  role,
}: {
  yrsOfExp: string;
  company: string;
  location: string;
  link: string;
  role: string;
}) => (
  <div className="relative flex w-full flex-col gap-2 rounded-xl border bg-white p-4 shadow-xl dark:border-white/10 dark:bg-gray-900 dark:shadow-2xl md:w-10/12 md:p-6">
    <div className="flex flex-col gap-1">
      <h2 className="text-xs font-medium text-slate-600 dark:text-custom3 md:text-sm">
        {yrsOfExp}
      </h2>
      <Link
        href={link}
        target="__blank"
        className="flex items-center gap-1"
      >
        <h2 className="flex items-center gap-1 text-lg font-semibold text-cyan-950 dark:text-custom4 md:text-lg">
          {company}
        </h2>
        <LinkIcon />
      </Link>
      <p className="font-semibold text-cyan-950 dark:text-custom5">{role}</p>
    </div>
    <p className="text-xs text-slate-600 dark:text-custom3 md:text-sm md:font-normal">
      📍{location}
    </p>
  </div>
);
