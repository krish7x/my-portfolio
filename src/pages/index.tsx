import Header from "@/components/layouts/header";
import { DefaultLayout } from "@/components/layouts";
import { WorkCard } from "@/components/macros/work-card";
import { CardDivider, Heading } from "@/components/micros";
import { EDUCATION, LOREM_50, WORK_EXPERIENCE } from "@/contants";
import { EducationCard } from "@/components/macros/education-card";

export default function Home() {
  return (
    <DefaultLayout>
      {/* hero section */}
      <Header />
      <h1 className="text-slate-800 dark:text-neutral-100 text-lg md:text-xl">
        Hi, I am Krishna Kumar 👋
      </h1>
      <h2 className="leading-6 text-slate-800 dark:text-neutral-400 text-xs md:text-sm">
        {LOREM_50}
      </h2>

      {/* body section */}
      <div className="flex flex-col gap-12">
        {/* Work Experience */}
        <div className="flex flex-col gap-6">
          <Heading text="Work Experience 💼" />
          <div>
            {WORK_EXPERIENCE.map((val, inx, self) => (
              <div key={"work-experience-card-" + inx}>
                <WorkCard {...val} />
                {self.length > 1 && self.length - 1 !== inx && <CardDivider />}
              </div>
            ))}
          </div>
        </div>

        {/* Education  */}
        <div className="relative flex flex-col gap-6">
          <Heading text="Education 🎓" />
          <div className="absolute flex flex-1 w-2 h-5/6 left-1/2 top-14 bg-blue-600" />
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
      </div>
    </DefaultLayout>
  );
}
