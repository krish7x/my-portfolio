import { Divider } from "@nextui-org/react";

export const Heading = ({ text }: { text: string }) => {
  const dividerWidth =
    text.length > 0 && text.length < 10
      ? "w-10"
      : text.length > 10 && text.length < 15
        ? "w-16"
        : text.length > 15 && text.length < 25
          ? "w-20"
          : "";
  return (
    <div>
      <h1 className="dark:text-custom4 text-2xl font-semibold text-slate-800">
        {text}
      </h1>
      <Divider className={`my-4 h-[calc(2px)] bg-custom2 ${dividerWidth}`} />
    </div>
  );
};

export const SubHeading = ({ text }: { text: string }) => {
  const dividerWidth =
    text.length > 0 && text.length < 8
      ? "w-10"
      : text.length > 5 && text.length < 10
        ? "w-12"
        : text.length > 10 && text.length < 15
          ? "w-20"
          : "";
  return (
    <div>
      <h1 className="dark:text-custom4 text-medium font-semibold text-slate-800">
        {text}
      </h1>
      <Divider className={`my-2 bg-custom2 ${dividerWidth}`} />
    </div>
  );
};

export const WorkCardDivider = () => (
  <div className="ml-4 h-12 w-2 bg-primary md:ml-5" />
);

export const EducationCardDivider = () => (
  <div className="absolute left-1/2 top-36 flex h-[calc(60%)] w-2 flex-1 bg-primary" />
);
