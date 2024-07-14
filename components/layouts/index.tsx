"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { MouseEvent } from "react";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const isPostPage = useMemo(() => {
    const arr = path.split("/").filter(val => val);
    return arr.length === 2 && arr[0] === "posts";
  }, [path]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group py-2 dark:relative"
    >
      {isPostPage && (
        <motion.div
          className="fixed left-0 right-0 top-0 z-20 h-2 origin-[0%] bg-custom1 dark:bg-primary"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      <motion.div
        className="dark:-inset-px dark:rounded-xl dark:opacity-0 dark:transition dark:duration-300 dark:group-hover:opacity-100 md:dark:pointer-events-none md:dark:absolute"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="opacity-98 m-0 bg-white/30 dark:bg-slate-900">
        <div className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-5 px-4 text-sm text-neutral-400 max-sm:pb-8 md:gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};
