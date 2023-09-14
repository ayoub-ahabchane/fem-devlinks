import ContextWrapper from "@/components/ContextWrapper";
import Navbar from "@/components/Header";
import React from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextWrapper>
      <div className="flex flex-col flex-1 md:p-4 md:gap-4 items-stretch bg-dl-neutral-200 overflow-auto">
        <Navbar />
        {children}
      </div>
    </ContextWrapper>
  );
}
