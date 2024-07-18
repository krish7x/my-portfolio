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
      <p className="text-[calc(13px)] font-medium text-custom6 md:text-sm">
        {yrsOfExp}
      </p>
      <Link
        href={link}
        target="__blank"
      >
        <h2 className="text-[calc(15px)] font-medium leading-6 text-cyan-950 dark:text-custom4 md:text-base">
          {role}
          {"  "}·{"  "}
          {company}
          <span className="ml-[calc(2px)] inline-block">
            <LinkIcon />
          </span>
        </h2>
      </Link>
    </div>
    <p className="text-[calc(13px)] font-medium text-slate-600 dark:text-custom3 md:text-sm">
      📍{location}
    </p>
  </div>
);
