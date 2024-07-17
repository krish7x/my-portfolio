import { motion } from "framer-motion";

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
      <h1 className="relative text-2xl font-semibold text-slate-800 underlined dark:text-custom4">
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
      <h1 className="text-medium font-semibold text-slate-800 subunderlined dark:text-custom4">
        {text}
      </h1>
    </motion.div>
  );
};

export const WorkCardDivider = () => (
  <div className="ml-5 h-16 w-2 bg-blue-600 dark:bg-primary" />
);

export const EducationCardDivider = () => (
  <div className="absolute right-1/2 top-full h-12 w-2 bg-blue-600 dark:bg-primary" />
);
