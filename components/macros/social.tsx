import { SOCIAL } from "@/contants";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Social() {
  return (
    <>
      {/* left */}
      <div className="fixed bottom-0 left-16 right-auto max-sm:hidden">
        <Divider
          orientation="vertical"
          className="absolute bottom-0 left-3 h-24 bg-blue-600 dark:bg-custom2"
        />
        <div className="mb-28 flex flex-col gap-5">
          {SOCIAL.map(({ Icon, link }, index) => (
            <Link
              key={"social-links-" + index}
              href={link}
              target="__blank"
              className="transform transition-all duration-0.25s ease-custom-cubic hover:-translate-y-2 hover:delay-100"
              aria-label={"social-links-" + index}
            >
              <Icon
                size={24}
                className="fill-blue-600 dark:fill-custom2 dark:hover:fill-white"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* right */}
      <div className="fixed bottom-0 left-auto right-16 max-sm:hidden">
        <Divider
          orientation="vertical"
          className="absolute bottom-0 left-[calc(6px)] h-24 bg-blue-600 dark:bg-custom2"
        />
        <div className="mb-28 flex translate-y-1 flex-col gap-5">
          <Link
            href={"mailto:krishnakumar99g@gmail.com"}
            target="__blank"
            className="inline-block text-sm font-medium leading-4 text-blue-600 no-underline transition-all duration-0.25s ease-custom-cubic vertical-rl hover:-translate-y-2 dark:text-custom2 dark:hover:text-custom4"
          >
            krishnakumar99g@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
