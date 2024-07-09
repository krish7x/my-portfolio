import Link from "next/link";

export const PostCard = ({
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
  <Link
    href={link}
    className="relative"
  >
    <div className="relative flex w-full cursor-pointer flex-col gap-2 rounded-lg bg-blue-50 p-4 ring-1 ring-white/10 hover:bg-blue-100 dark:bg-neutral-900 dark:shadow-[0_20px_207px_rgba(238,_130,_238,_0.2)] dark:hover:bg-neutral-800 md:w-10/12 md:p-6">
      <h2 className="line-clamp-2 text-sm font-semibold text-cyan-950 dark:text-slate-100 md:text-lg">
        {title}
      </h2>
      <p className="text-xs leading-5 text-slate-600 dark:text-green-50 md:text-sm md:leading-6">
        {pubslishedData?.split(" ")[0]} . {readDuration}
      </p>
    </div>
  </Link>
);
