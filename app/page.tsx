"use client";

import { EducationCard } from "@/components/macros/education-card";
import Skills from "@/components/macros/skills";
import Social from "@/components/macros/social";
import { WorkCard } from "@/components/macros/work-card";
import {
  EducationCardDivider,
  Heading,
  WorkCardDivider,
} from "@/components/micros";
import { EDUCATION, LOREM_50, WORK_EXPERIENCE } from "@/contants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <h1 className="dark:text-custom4 text-lg text-slate-800 md:text-xl">
        Hi, I am Krishna Kumar 👋
      </h1>
      <h2 className="dark:text-custom3 mt-2 text-medium leading-[calc(26px)] text-slate-600">
        {LOREM_50}
      </h2>

      {/* body section */}
      <div className="mt-8 flex max-w-full flex-col gap-12 overflow-x-hidden">
        {/* Work Experience */}
        <div className="flex flex-col gap-6">
          <Heading text="Work Experience 💼" />

          <div>
            {WORK_EXPERIENCE.map((val, inx, self) => (
              <div key={"work-experience-card-" + inx}>
                <motion.div
                  className="card"
                  initial={{
                    opacity: 0,
                    x: inx % 2 !== 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <WorkCard {...val} />
                  {self.length > 1 && self.length - 1 !== inx && (
                    <WorkCardDivider />
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Education  */}
        <div className="relative flex flex-col gap-6">
          <Heading text="Education 🎓" />
          <div className="flex flex-col gap-12">
            {EDUCATION.map((val, inx, self) => (
              <motion.div
                key={"work-experience-card-" + inx}
                initial={{
                  opacity: 0,
                  x: inx % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`flex ${
                    inx % 2 !== 0 ? "justify-end" : "justify-normal"
                  }`}
                >
                  <EducationCard {...val} />
                  {self.length > 1 && self.length - 1 !== inx && (
                    <EducationCardDivider />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="relative flex flex-col">
          <Heading text="Skills 🚀" />
          <Skills />
        </div>

        {/* Desktop social */}
        <Social />
      </div>
    </>
  );
}
