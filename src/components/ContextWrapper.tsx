"use client";
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Tabs.Root defaultValue="links" className="flex-1 flex flex-col">
        {children}
      </Tabs.Root>
    </>
  );
};

export default ContextWrapper;
