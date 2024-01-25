
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "@/components/macros/card";
import { CardDivider, Heading } from "@/components/micros";
import { LOREM_50, ROUTES, WORK_EXPERIENCE } from "@/contants";

export default function Home() {
  const { pathname } = useRouter()
  return (
    <div className="m-0 bg-white/30 dark:bg-neutral-950 opacity-98">
      <div
        className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-5 md:gap-9 px-10 py-8 text-sm text-neutral-400  md:py-16"
      >
        {/* hero section */}
        <div className="flex justify-between w-full h-50 align-middle">
          <div className="w-52 h-full">
            <Image
              src="/krish.png"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={200}
              height={200}
            />
          </div>
          <div className="flex gap-2 h-8">
            {ROUTES.map(({ text, path }, inx, self) => (
              <div className="flex gap-2" key={"nav-link-" + inx}>
                <Link className={` hover:text-stone-600 dark:hover:text-neutral-300 text-sm ${path === pathname ? "text-slate-900 font-semibold dark:text-neutral-100 cursor-not-allowed" : "text-slate-800 dark:text-neutral-400"}`} href={path}>
                  {text}
                </Link>
                <span className="text-slate-800 dark:text-neutral-100 text-sm">{inx < self.length - 1 ? '/' : ''}</span>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-slate-800 dark:text-neutral-100 text-lg md:text-xl">Hi, I am Krishna Kumar 👋</h1>
        <h2 className="leading-6 text-slate-800 dark:text-neutral-400 text-xs md:text-sm">{LOREM_50}</h2>

        {/* Work Experience */}
        <div className="flex flex-col gap-6">
          <Heading text="Work Experience 💼" />
          <div>
            {WORK_EXPERIENCE.map((val, inx, self) => (
              <div key={"work-experience-card-" + inx}>
                <Card {...val} />
                {self.length - 1 !== inx ? <CardDivider /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


