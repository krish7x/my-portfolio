import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Heading = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <h1 className="relative text-xl font-medium text-slate-800 underlined dark:text-custom4">
        {text}
      </h1>
    </motion.div>
  );
};

export const SubHeading = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <h1 className="text-medium font-medium text-slate-800 subunderlined dark:text-custom4">
        {text}
      </h1>
    </motion.div>
  );
};

export const WorkCardDivider = () => (
  <div className="ml-5 h-14 w-2 bg-blue-600 dark:bg-primary" />
);

export const EducationCardDivider = () => (
  <div className="absolute right-1/2 top-full h-12 w-2 bg-blue-600 dark:bg-primary" />
);

export const MotionDiv = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => (
  <motion.div
    initial={{
      opacity: 0,
      x: index % 2 !== 0 ? 50 : -50,
    }}
    className="relative"
    whileInView={{
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const Highlight = ({
  children,
  isHeading,
}: {
  children: ReactNode;
  isHeading: boolean;
}) => (
  <span
    className={`rounded-md bg-custom9 px-[calc(6px)] py-1 text-custom8 ${isHeading ? "text-lg font-bold" : "text-sm font-semibold"}`}
  >
    {children}
  </span>
);
