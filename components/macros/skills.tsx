import { SKILLS } from "@/contants";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

import { SubHeading } from "../micros";

export default function Skills() {
  return (
    <div className="mt-6 flex flex-col gap-8">
      {SKILLS.map(({ heading, skills }, inx) => (
        <div
          key={"skill-" + inx}
          className="flex w-full flex-col gap-4"
        >
          <SubHeading text={heading} />
          <div className="flex flex-wrap gap-x-4 gap-y-5">
            {skills.map(val => (
              <Chip
                size="lg"
                key={val.name}
                color="secondary"
                variant="shadow"
                classNames={{
                  base: "h-10 bg-white dark:bg-neutral-900 py-4 px-2 flex",
                  content:
                    "font-semibold text-xs text-cyan-950 dark:text-slate-100",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  {val?.icon ? (
                    <val.icon
                      size={20}
                      //className="fill-secondary dark:fill-custom2 dark:hover:fill-white"
                    />
                  ) : (
                    <Image
                      src={val.src}
                      height={20}
                      width={20}
                      alt={val.name}
                    />
                  )}
                  <span className="dark:text-custom4 text-xs">{val.name}</span>
                </div>
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
