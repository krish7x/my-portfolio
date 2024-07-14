export const EducationCard = ({
  yrsOfStudies,
  designation,
  institueName,
}: {
  yrsOfStudies: string;
  designation: string;
  institueName: string;
}) => (
  <div className="relative z-20 flex w-full flex-col gap-3 rounded-xl border bg-white p-4 shadow-xl dark:border-white/10 dark:bg-gray-900 dark:shadow-2xl md:w-7/12 md:p-6">
    <div className="flex flex-col gap-1">
      <h2 className="text-xs font-semibold text-blue-800 dark:text-blue-500 md:text-sm">
        {yrsOfStudies}
      </h2>
      <h2 className="text-medium font-semibold text-cyan-950 dark:text-custom4 md:text-lg">
        {designation}
      </h2>
    </div>
    <p className="text-sm font-medium leading-5 text-slate-600 dark:text-custom3 md:leading-6">
      {institueName}, Chennai, Tamil Nadu
    </p>
  </div>
);
