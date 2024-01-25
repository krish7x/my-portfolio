import Header from "@/components/layouts/header";
import { DefaultLayout } from "@/components/layouts";
import { WorkCard } from "@/components/macros/work-card";
import { CardDivider, Heading } from "@/components/micros";
import { LOREM_50, WORK_EXPERIENCE } from "@/contants";

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
    </DefaultLayout>
  );
}
