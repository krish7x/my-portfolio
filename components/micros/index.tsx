export const Heading = ({ text }: { text: string }) => (
  <h1 className="text-slate-800 dark:text-neutral-100 text-xl">{text}</h1>
);
export const WorkCardDivider = () => (
  <div className="ml-4 md:ml-5 w-2 h-12 bg-blue-600" />
);

export const EducationCardDivider = () => (
  <div className="absolute flex flex-1 w-2 h-5/6 left-1/2 top-14 bg-blue-600" />
);
