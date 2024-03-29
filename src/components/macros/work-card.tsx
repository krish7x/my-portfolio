export const WorkCard = ({
  yrsOfExp,
  company,
  location,
  description,
}: {
  yrsOfExp: string;
  company: string;
  location: string;
  description: string;
}) => (
  <div className="flex flex-col gap-2 w-full md:w-10/12 p-4 md:p-6 rounded-lg cursor-pointer relative ring-1 ring-white/10 bg-blue-50 dark:bg-neutral-900  hover:bg-blue-100 dark:hover:bg-neutral-800 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-[0_20px_207px_rgba(238,_130,_238,_0.2)]">
    <h2 className="text-blue-800 dark:text-blue-500 text-xs md:text-sm">
      {yrsOfExp}
    </h2>
    <h2 className="text-cyan-950 dark:text-slate-100 text-sm md:text-lg font-semibold">
      {company}
    </h2>
    <p className="text-slate-800 dark:text-green-300 text-xs">📍{location}</p>
    <p className="leading-5 md:leading-6 text-slate-600 dark:text-green-50 text-xs md:text-sm">
      {description}
    </p>
  </div>
);
