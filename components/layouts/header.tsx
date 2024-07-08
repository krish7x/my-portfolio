"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "../../contants";
import { ModeToggle } from "../micros/mode-toggle";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between w-full h-50 align-middle">
      <ModeToggle />
      <div className="w-52 h-full align-middle">
        {pathname === "/" ? (
          <Image
            src="/krish.png"
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={200}
            height={200}
          />
        ) : (
          <Image
            src="/krish.png"
            alt="avatar"
            width={30}
            height={30}
            objectFit="contain"
            className="w-12 h-12 rounded-full"
          />
        )}
      </div>
      <div className="flex gap-2 h-8">
        {ROUTES.map(({ text, path }, inx, self) => (
          <div className="flex gap-2" key={"nav-link-" + inx}>
            <Link
              className={` hover:text-stone-600 dark:hover:text-neutral-300 text-sm ${
                path === pathname
                  ? "text-slate-900 font-semibold dark:text-neutral-100 cursor-not-allowed"
                  : "text-slate-800 dark:text-neutral-400"
              }`}
              href={path}
            >
              {text}
            </Link>
            <span className="text-slate-800 dark:text-neutral-100 text-sm">
              {inx < self.length - 1 ? "/" : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
