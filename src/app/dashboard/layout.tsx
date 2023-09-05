import ContextWrapper from "@/components/ContextWrapper";
import DevlinksLogo from "@/components/DevlinksLogo";
import Header from "@/components/Header";
import TabsList from "@/components/TabsList";
import Link from "next/link";
import React from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextWrapper>
      <div className="flex flex-col flex-1 md:p-4 md:gap-4 items-stretch bg-dl-neutral-200">
        <Header />

        {children}
      </div>
    </ContextWrapper>
  );
}
