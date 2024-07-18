"use client";

import { pacifico } from "@/app/fonts";
import { SOCIAL } from "@/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <div className="mr-8 flex flex-col items-center justify-center gap-4 px-4 py-4 md:py-6">
      <div className="flex gap-7 md:hidden">
        {SOCIAL.map(({ Icon, link }, index) => (
          <Link
            key={"social-links-" + index}
            href={link}
            target="__blank"
            aria-label={"social-links-" + index}
          >
            <Icon
              size={24}
              className="fill-blue-600 dark:fill-custom2"
            />
          </Link>
        ))}
      </div>

      <p className="text-sm text-slate-600 dark:text-custom3 md:text-base">
        Made with ❤️ by{" "}
        <span
          className={`font-pacifico dark:text-custom4> font-semibold text-custom1 dark:text-custom4 ${pacifico.className}`}
        >
          Krish
        </span>
      </p>
    </div>
  );
}
