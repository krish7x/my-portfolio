"use client";

import { Avatar, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

import { ROUTES } from "../../contants";
import { ModeToggle } from "../micros/mode-toggle";

export default function Header() {
  const [path, setPath] = useState("/");
  const [hideTabs, setHideTabs] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const pathArr = pathname.split("/");
    if (pathArr.length < 3) {
      setPath(pathname);
      setHideTabs(false);
    } else {
      setHideTabs(true);
    }
  }, [path, pathname, router]);

  return (
    <div className="h-50 flex w-full flex-col gap-12">
      <div className="flex justify-between align-middle">
        <div className="flex gap-2 align-middle">
          {pathname !== "/" && (
            <Avatar
              src="/krish.png"
              onClick={() => router.push("/")}
            />
          )}
          <ModeToggle />
        </div>
        {!hideTabs && (
          <div className="flex gap-2">
            <Tabs
              size="md"
              onSelectionChange={(id: Key) => {
                setPath(id as string);
                router.push(`${id}`);
              }}
              selectedKey={path}
            >
              {ROUTES.map(({ text, path }) => (
                <Tab
                  key={path}
                  title={text}
                />
              ))}
            </Tabs>
          </div>
        )}
      </div>
      <div className="h-full w-52 align-middle">
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
        ) : null}
      </div>
    </div>
  );
}
