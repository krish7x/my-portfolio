export const EducationCard = ({
  yrsOfStudies,
  designation,
  institueName,
  location,
}: {
  yrsOfStudies: string;
  designation: string;
  institueName: string;
  location: string;
}) => (
  <div className="relative flex w-full cursor-pointer flex-col gap-2 rounded-lg bg-blue-50 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ring-1 ring-white/10 hover:bg-blue-100 dark:bg-neutral-900 dark:shadow-[0_20px_207px_rgba(238,_130,_238,_0.2)] dark:hover:bg-neutral-800 md:w-7/12 md:p-6">
    <h2 className="text-xs text-blue-800 dark:text-blue-500">{yrsOfStudies}</h2>
    <h2 className="text-xs font-semibold text-cyan-950 dark:text-slate-100 md:text-sm">
      {designation}
    </h2>
    <p className="text-xs leading-5 text-slate-600 dark:text-green-50 md:leading-5">
      🏫 {institueName}
    </p>
    <p className="text-xs text-slate-800 dark:text-green-300">📍{location}</p>
  </div>
);
