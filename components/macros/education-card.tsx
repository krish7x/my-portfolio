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
  <div className="relative flex w-full flex-col gap-2 rounded-xl border border-white/10 bg-blue-50 p-4 shadow-2xl dark:bg-gray-900 md:w-7/12 md:p-6">
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
