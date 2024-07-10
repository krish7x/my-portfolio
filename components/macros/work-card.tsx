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
  <div className="relative flex w-full flex-col gap-2 rounded-xl border bg-white p-4 shadow-xl dark:border-white/10 dark:bg-gray-900 dark:shadow-2xl md:w-10/12 md:p-6">
    <h2 className="text-xs text-blue-800 dark:text-blue-500 md:text-sm">
      {yrsOfExp}
    </h2>
    <h2 className="text-sm font-semibold text-cyan-950 dark:text-slate-100 md:text-lg">
      {company}
    </h2>
    <p className="text-xs text-slate-800 dark:text-green-300">📍{location}</p>
    <p className="text-xs leading-5 text-slate-600 dark:text-green-50 md:text-sm md:leading-6">
      {description}
    </p>
  </div>
);
