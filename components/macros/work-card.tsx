import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

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
  <div className="flex w-full flex-col gap-2 rounded-xl border bg-white p-4 shadow-xl dark:border-white/10 dark:bg-gray-900 dark:shadow-2xl md:w-10/12 md:p-6">
    <div className="flex flex-col gap-1">
      <p className="text-[calc(13px)] font-medium text-custom6 md:text-sm">
        {yrsOfExp}
      </p>
      <Link
        href={link}
        target="__blank"
      >
        <h2 className="group/link relative text-[calc(15px)] font-medium leading-6 text-cyan-950 dark:text-custom4 md:text-base">
          {role}
          {"  "}·{"  "}
          {company}
          <span className="absolute bottom-[calc(2px)] ml-[calc(2px)] inline-block">
            <HiOutlineExternalLink
              width={24}
              height={16}
              opacity={0.7}
              className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none md:group-hover/link:-translate-y-1 md:group-hover/link:translate-x-1"
            />
          </span>
        </h2>
      </Link>
    </div>
    <p className="text-[calc(13px)] font-medium text-slate-600 dark:text-custom3 md:text-sm">
      📍{location}
    </p>
  </div>
);
