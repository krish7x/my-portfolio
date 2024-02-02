import Link from "next/link";

export const BlogCard = ({
  title,
  pubslishedData,
  readDuration,
  link = "/",
}: {
  title?: string;
  pubslishedData?: string;
  readDuration?: string;
  link?: string;
}) => (
  <Link href={link} className="relative mt-8">
    <div className="flex flex-col gap-2 w-full md:w-10/12 p-4 md:p-6 bg-blue-50 rounded-lg  hover:bg-blue-100 dark:bg-neutral-900  dark:hover:bg-neutral-800 cursor-pointer relative ring-1 ring-white/10 dark:shadow-[0_20px_207px_rgba(238,_130,_238,_0.2)]">
      <h2 className="text-cyan-950 dark:text-slate-100 text-sm md:text-lg font-semibold line-clamp-2">
        {title}
      </h2>
      <p className="leading-5 md:leading-6 text-slate-600 dark:text-green-50 text-xs md:text-sm">
        {pubslishedData?.split(" ")[0]} . {readDuration}
      </p>
    </div>
  </Link>
);
