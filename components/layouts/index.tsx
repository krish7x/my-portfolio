"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";
import { MouseEvent } from "react";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      className="group dark:relative dark:md:py-4"
    >
      <motion.div
        className="dark:pointer-events-none dark:absolute dark:-inset-px dark:rounded-xl dark:opacity-0 dark:transition dark:duration-300 dark:group-hover:opacity-100"
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
