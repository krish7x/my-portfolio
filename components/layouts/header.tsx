"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "../../contants";
import { ModeToggle } from "../micros/mode-toggle";
import { Avatar, Tab, Tabs } from "@nextui-org/react";
import { Key, useEffect, useState } from "react";

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
    <div className="flex flex-col w-full h-50 gap-12">
      <div className="flex justify-between align-middle">
        <div className="flex align-middle gap-2">
          {pathname !== "/" && (
            <Avatar src="/krish.png" onClick={() => router.push("/")} />
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
                <Tab key={path} title={text} />
              ))}
            </Tabs>
          </div>
        )}
      </div>
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
        ) : null}
      </div>
    </div>
  );
}
