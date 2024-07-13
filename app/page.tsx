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

export default function Home() {
  return (
    <>
      {/* hero section */}
      <h1 className="text-lg text-slate-800 dark:text-custom4 md:text-xl">
        Hi, I am Krishna Kumar 👋
      </h1>
      <h2 className="mt-2 text-medium leading-[calc(26px)] text-slate-600 dark:text-custom3">
        {LOREM_50}
      </h2>

      {/* body section */}
      <div className="mt-8 flex flex-col gap-12">
        {/* Work Experience */}
        <div className="flex flex-col gap-6">
          <Heading text="Work Experience 💼" />
          <div>
            {WORK_EXPERIENCE.map((val, inx, self) => (
              <div key={"work-experience-card-" + inx}>
                <WorkCard {...val} />
                {self.length > 1 && self.length - 1 !== inx && (
                  <WorkCardDivider />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education  */}
        <div className="relative flex flex-col gap-6">
          <Heading text="Education 🎓" />
          <div className="flex flex-col gap-12">
            <EducationCardDivider />
            {EDUCATION.map((val, inx) => (
              <div
                key={"work-experience-card-" + inx}
                className={`flex ${
                  inx % 2 !== 0 ? "justify-end" : "justify-normal"
                }`}
              >
                <EducationCard {...val} />
              </div>
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
