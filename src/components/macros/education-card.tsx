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
  <div className="flex flex-col gap-2 w-full  md:w-7/12 p-4 md:p-6 rounded-lg cursor-pointer relative bg-blue-50 dark:bg-neutral-900  hover:bg-blue-100 dark:hover:bg-neutral-800 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ring-1 ring-white/10 dark:shadow-[0_20px_207px_rgba(238,_130,_238,_0.2)]">
    <h2 className="text-blue-800 dark:text-blue-500 text-xs">{yrsOfStudies}</h2>
    <h2 className="text-cyan-950 dark:text-slate-100 text-xs md:text-sm font-semibold">
      {designation}
    </h2>
    <p className="leading-5 md:leading-5 text-slate-600 dark:text-green-50 text-xs">
      🏫 {institueName}
    </p>
    <p className="text-slate-800 dark:text-green-300 text-xs">📍{location}</p>
  </div>
);
