import { EducationCard } from "@/components/macros/education-card";
import { WorkCard } from "@/components/macros/work-card";
import {
  EducationCardDivider,
  Heading,
  SubHeading,
  WorkCardDivider,
} from "@/components/micros";
import { EDUCATION, LOREM_50, SKILLS, WORK_EXPERIENCE } from "@/contants";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <h1 className="text-lg text-slate-800 dark:text-neutral-100 md:text-xl">
        Hi, I am Krishna Kumar 👋
      </h1>
      <h2 className="mt-2 text-xs leading-6 text-slate-800 dark:text-neutral-400 md:text-sm">
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
          <EducationCardDivider />
          <div className="flex flex-col gap-12">
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

        <div className="relative flex flex-col">
          <Heading text="Skills 🚀" />
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
                      key={val.name}
                      color="secondary"
                      variant="shadow"
                      classNames={{
                        base: "bg-blue-50 dark:bg-neutral-900 py-4 px-2 flex",
                        content:
                          "font-semibold text-xs text-cyan-950 dark:text-slate-100",
                      }}
                      // avatar={
                      //   val.icon ? (
                      //     <Avatar
                      //       name="JW"
                      //       classNames={{
                      //         base: "bg-transparent",
                      //       }}

                      //     >
                      //       {val.icon}
                      //     </Avatar>
                      //   ) : null
                      // }
                    >
                      <div className="flex items-center justify-center gap-2">
                        {/* <svg
                          height="20"
                          viewBox="0 0 32 32"
                          width="20"
                        >
                          <path
                            className="dark:fill-white"
                            d="m18.734 3.667 6.578 3.802c1.089-1.146 2.901-1.193 4.047-.104.193.188.365.401.5.635.786 1.37.313 3.12-1.063 3.906-.229.13-.479.234-.745.297v7.599c1.531.365 2.474 1.896 2.109 3.427-.063.271-.172.531-.307.771-.792 1.365-2.536 1.833-3.906 1.042-.26-.146-.5-.344-.698-.568l-6.542 3.776c.495 1.495-.318 3.109-1.813 3.604-.292.099-.594.146-.896.146-1.573 0-2.854-1.271-2.854-2.849 0-.271.042-.547.12-.813l-6.583-3.797c-1.089 1.141-2.896 1.188-4.036.094-1.135-1.089-1.177-2.891-.094-4.031.38-.396.865-.677 1.396-.807v-7.599c-1.531-.365-2.479-1.906-2.109-3.443.063-.266.167-.521.302-.755.786-1.365 2.536-1.833 3.901-1.042.234.135.453.302.641.5l6.583-3.797c-.448-1.51.417-3.099 1.922-3.542.26-.083.536-.12.813-.12 1.573 0 2.854 1.271 2.854 2.844 0 .281-.042.557-.12.823zm-.687 1.172c-.026.026-.047.052-.078.078l8.615 14.917c.036-.01.078-.021.109-.031v-7.609c-1.526-.375-2.453-1.922-2.073-3.448.005-.031.016-.068.021-.099zm-4.021.078-.078-.078-6.594 3.802c.438 1.51-.438 3.089-1.948 3.526-.036.01-.068.016-.104.026v7.609l.115.031 8.615-14.917zm2.771.677c-.521.146-1.073.146-1.589 0l-8.615 14.917c.391.375.667.859.802 1.391h17.214c.13-.531.406-1.016.802-1.396zm1.312 21.635 6.552-3.786c-.021-.063-.036-.125-.052-.188h-17.219l-.031.109 6.589 3.802c.516-.536 1.245-.87 2.052-.87.839 0 1.589.359 2.109.932z"
                          />
                        </svg> */}
                        <Image
                          src={val.icon}
                          height={20}
                          width={20}
                          alt={val.name}
                        />
                        <span>{val.name}</span>
                      </div>
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
