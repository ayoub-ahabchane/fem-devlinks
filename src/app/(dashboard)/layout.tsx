import ContextWrapper from "@/components/ContextWrapper";
import DevlinksLogo from "@/components/DevlinksLogo";
import TabsList from "@/components/TabsList";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextWrapper>
      <div className="flex flex-col flex-1 md:p-4 md:gap-4 items-stretch">
        <header className="md:rounded-lg flex items-center justify-between p-4  border-dl-accent-400 bg-dl-neutral-100">
          <div className="flex items-center gap-2">
            <DevlinksLogo className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
            <span className="font-bold text-2xl hidden md:inline-block">
              devlinks
            </span>
          </div>
          <TabsList />
          <div className="flex items-center gap-4">
            <Link
              className="md:px-[1.69em] px-[0.69em] py-[0.69em] rounded-lg font-semibold border border-dl-accent-400 text-heading-s text-dl-accent-400 transition flex items-center gap-2 hover:bg-dl-accent-200 focus-within:bg-dl-accent-200"
              href={"/"}
            >
              <EyeIcon className="w-5 h-5 md:hidden" />
              <span className="hidden md:inline-block">Preview</span>
            </Link>
            <span className="w-[2.75rem] h-[2.75rem] rounded-lg bg-dl-accent-200 border border-dl-accent-200"></span>
          </div>
        </header>

        {children}
      </div>
    </ContextWrapper>
  );
}
