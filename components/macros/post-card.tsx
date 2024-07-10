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
    <div className="relative flex w-full flex-col gap-2 rounded-xl border border-white/10 bg-blue-50 p-4 shadow-2xl dark:bg-gray-900 md:w-10/12 md:p-6">
      <h2 className="line-clamp-2 text-sm font-semibold text-cyan-950 dark:text-slate-100 md:text-lg">
        {title}
      </h2>
      <p className="text-xs leading-5 text-slate-600 dark:text-green-50 md:text-sm md:leading-6">
        {pubslishedData?.split(" ")[0]} . {readDuration}
      </p>
    </div>
  </Link>
);
