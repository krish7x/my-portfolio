import { Chip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  skills,
  showFullDescription = false,
  onReadMore,
  onReadLess,
}: {
  src: StaticImageData;
  title: string;
  description: string;
  skills: string[];
  link: string;
  showFullDescription: boolean;
  onReadMore: () => void;
  onReadLess: () => void;
}) => {
  return (
    <div className="dark:lg:-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group/item flex w-full gap-6 rounded-xl bg-white py-4 transition dark:border-white/10 dark:bg-slate-900 max-sm:flex-col md:border md:p-6 md:light:shadow-xl lg:hover:border-blue-500 lg:hover:bg-custom7 lg:hover:drop-shadow-lg dark:lg:hover:border-primary dark:lg:hover:bg-gray-900">
      <Image
        width={112}
        height={64}
        alt="survey application"
        className="h-16 w-28 rounded-md border transition-all dark:border-white/10 max-sm:h-full max-sm:w-1/2 md:group-hover/item:scale-110"
        src={src}
        priority
      />

      <Link
        href={link}
        target="__blank"
      >
        <h2 className="relative text-[calc(15px)] font-medium text-cyan-950 dark:text-custom4 md:text-base">
          {title}
          <span className="absolute bottom-[calc(2px)] ml-1 inline-block">
            <HiOutlineExternalLink
              width={24}
              height={16}
              opacity={0.7}
              className="ml-[calc(2px)] inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-focus-visible/item:-translate-y-1 group-focus-visible/item:translate-x-1 motion-reduce:transition-none md:group-hover/item:-translate-y-1 md:group-hover/item:translate-x-1"
            />
          </span>
        </h2>

        {showFullDescription ? (
          <p className="mt-2 inline-block text-[calc(13px)] text-sm font-medium !leading-6 text-slate-600 dark:text-custom3">
            {description}
            {description.length > 160 ? (
              <span
                className="ml-2 cursor-pointer font-semibold text-cyan-950 dark:text-custom4"
                onClick={e => {
                  e.preventDefault();
                  onReadLess();
                }}
              >
                read less
              </span>
            ) : null}
          </p>
        ) : (
          <p className="mt-2 inline-block text-[calc(13px)] text-sm font-medium !leading-6 text-slate-600 dark:text-custom3">
            {description.slice(0, 160)}
            {description.length > 160 ? (
              <span
                className="ml-[calc(2px)] cursor-pointer font-semibold text-cyan-950 dark:text-custom4"
                onClick={e => {
                  e.preventDefault();
                  onReadMore();
                }}
              >
                ...read more
              </span>
            ) : null}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills?.map((val, inx) => (
            <div key={"project-" + title + "-skill-" + inx}>
              <Chip
                size="sm"
                classNames={{
                  base: "!px-2 !py-1 bg-custom7 py-4 px-2 dark:bg-teal-400/10 flex border dark:border-white/10 md:group-hover/item:bg-white md:dark:group-hover/item:bg-teal-400/10",
                  content:
                    "font-medium text-xs text-cyan-950 dark:text-teal-300",
                }}
              >
                {val}
              </Chip>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};
