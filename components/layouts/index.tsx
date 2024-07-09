import { ReactNode } from "react";

export const DefaultLayout = ({ children }: { children: ReactNode }) => (
  <div className="opacity-98 m-0 bg-white/30 dark:bg-slate-950">
    <div className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-5 px-4 text-sm text-neutral-400 max-sm:pb-8 md:gap-8">
      {children}
    </div>
  </div>
);
