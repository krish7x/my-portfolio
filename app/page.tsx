"use client";

import WavyText from "@/components/animations/wavy-text";
import { EducationCard } from "@/components/macros/education-card";
import { ProjectCard } from "@/components/macros/project-card";
import Skills from "@/components/macros/skills";
import Social from "@/components/macros/social";
import { WorkCard } from "@/components/macros/work-card";
import {
  EducationCardDivider,
  Heading,
  WorkCardDivider,
} from "@/components/micros";
import { EDUCATION, PROJECTS, WORK_EXPERIENCE } from "@/contants";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [readMore, setReadMore] = useState<number[]>([]);
  return (
    <>
      {/* hero section */}
      <WavyText
        text="Hi, I am Krishna Kumar"
        replay={true}
        className="text-lg font-medium text-custom1 dark:text-custom4 md:text-xl"
        waveAnimation
      />

      <h2 className="mt-4 text-medium leading-[calc(26px)] text-slate-600 dark:text-custom3">
        A caffeine-powered{" "}
        <span className="font-medium text-custom1 dark:text-custom4">
          software engineer
        </span>{" "}
        with{" "}
        <span className="font-medium text-custom1 dark:text-custom4">
          3.5 years
        </span>{" "}
        of experience working in product companies across{" "}
        <span className="font-medium text-custom1 dark:text-custom4">
          banking, travel, and e-commerce
        </span>{" "}
        domains. I love solving real-world problems with clean, simple and
        optimized solution. When I'm not coding, you’ll catch me sipping coffee,
        binge-watching{" "}
        <span className="font-medium italic">
          "Mr. Robot or Silicon Valley"
        </span>
        , and dreaming up the next big thing.
      </h2>

      {/* body section */}
      <div className="mt-8 flex max-w-full flex-col gap-12 overflow-hidden scrollbar-hide">
        {/* Work Experience */}
        <div className="flex flex-col gap-8">
          <Heading text="Work Experience 💼" />

          <div>
            {WORK_EXPERIENCE.map((val, inx, self) => (
              <div
                className="relative"
                key={"work-experience-card-" + inx}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: inx % 2 !== 0 ? 50 : -50,
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
                  <WorkCard {...val} />
                  {self.length > 1 && self.length - 1 !== inx && (
                    <WorkCardDivider />
                  )}
                  {inx !== 0 && (
                    <p className="absolute -top-11 text-[calc(13px)] text-custom6 vertical-lr dark:font-medium">
                      {val.peroid}
                    </p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Education  */}
        <div className="flex flex-col gap-8">
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
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative flex ${
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

        {/* Projects */}
        <div className="flex flex-col gap-6">
          <Heading text="Projects 📋" />
          {PROJECTS.map((val, inx) => (
            <ProjectCard
              {...val}
              key={"project-" + inx}
              onReadMore={() => setReadMore([...readMore, inx])}
              onReadLess={() =>
                setReadMore(readMore.filter(val => val !== inx))
              }
              showFullDescription={readMore.includes(inx)}
            />
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-6">
          <Heading text="Skills 🚀" />
          <Skills />
        </div>

        {/* Desktop social */}
        <Social />
      </div>
    </>
  );
}
