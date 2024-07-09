import { ReactNode } from "react";

export const DefaultLayout = ({ children }: { children: ReactNode }) => (
  <div className="m-0 bg-white/30 dark:bg-slate-950 opacity-98">
    <div className="mx-auto  min-h-screen flex max-w-[872px] flex-col gap-5 md:gap-8 px-4 max-sm:pb-8  text-sm text-neutral-400">
      {children}
    </div>
  </div>
);
