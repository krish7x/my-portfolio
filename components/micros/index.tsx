export const Heading = ({ text }: { text: string }) => (
  <h1 className="text-xl text-slate-800 dark:text-neutral-100">{text}</h1>
);
export const WorkCardDivider = () => (
  <div className="ml-4 h-12 w-2 bg-blue-600 md:ml-5" />
);

export const EducationCardDivider = () => (
  <div className="absolute left-1/2 top-14 flex h-5/6 w-2 flex-1 bg-blue-600" />
);
