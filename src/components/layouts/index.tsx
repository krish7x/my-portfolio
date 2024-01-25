import { ReactNode } from "react";

export const DefaultLayout = ({ children }: { children: ReactNode }) => (
  <div className="m-0 bg-white/30 dark:bg-neutral-950 opacity-98">
    <div className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-5 md:gap-8 px-10 py-8 text-sm text-neutral-400  md:py-16">
      {children}
    </div>
  </div>
);
