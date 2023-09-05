"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { BiLink, BiUserCircle } from "react-icons/bi";
const TabsList = () => {
  return (
    <Tabs.List>
      <div className="flex items-center gap-4 md:gap-0">
        <Tabs.Trigger className="tabBtn" value="links">
          <BiLink className="w-5 h-5" />
          <span className="hidden md:inline-block">Links</span>
        </Tabs.Trigger>
        <Tabs.Trigger className="tabBtn" value="profile">
          <BiUserCircle className="w-5 h-5" />
          <span className="hidden md:inline-block">Profile Details</span>
        </Tabs.Trigger>
      </div>
    </Tabs.List>
  );
};

export default TabsList;
