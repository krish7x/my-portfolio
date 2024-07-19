import survey from "@/public/survey.png";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";

export const ProjectCard = () => (
  <div className="dark:lg:-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group/item flex w-full cursor-pointer gap-6 rounded-xl bg-white py-4 transition dark:border-white/10 dark:bg-slate-900 max-sm:flex-col md:border md:p-6 md:light:shadow-xl lg:hover:border-blue-500 lg:hover:bg-custom7 lg:hover:drop-shadow-lg dark:lg:hover:border-primary dark:lg:hover:bg-gray-900">
    <Image
      alt="survey application"
      className="h-16 w-28 rounded-md border transition-all group-hover/item:scale-110 group-hover/item:border-blue-300 dark:group-hover/item:border-inherit max-sm:h-full max-sm:w-1/2"
      src={survey}
    />

    <div>
      <h2 className="relative text-[calc(15px)] font-medium leading-6 text-cyan-950 dark:text-custom4 md:text-base">
        Survey Application
        <span className="absolute bottom-[calc(2px)] ml-1 inline-block">
          <HiOutlineExternalLink
            width={24}
            height={16}
            opacity={0.7}
            className="ml-[calc(2px)] inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-focus-visible/item:-translate-y-1 group-focus-visible/item:translate-x-1 motion-reduce:transition-none"
          />
        </span>
      </h2>
      <p className="mt-2 text-[calc(13px)] font-medium leading-normal text-slate-600 dark:text-custom3 md:text-sm">
        Video course that teaches how to build a web app with the Spotify Web
        API. Topics covered include the principles of REST APIs, user auth
        flows, Node, Express, React, Styled Components, and more.
      </p>
    </div>
  </div>
);
