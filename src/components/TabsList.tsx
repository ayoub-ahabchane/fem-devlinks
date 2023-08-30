"use client";
import { LinkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import * as Tabs from "@radix-ui/react-tabs";

const TabsList = () => {
  return (
    <Tabs.List>
      <div className="flex items-center gap-4 md:gap-0">
        <Tabs.Trigger className="tabBtn" value="links">
          <LinkIcon className="w-5 h-5" />
          <span className="hidden md:inline-block">Links</span>
        </Tabs.Trigger>
        <Tabs.Trigger className="tabBtn" value="profile">
          <UserCircleIcon className="w-5 h-5" />
          <span className="hidden md:inline-block">Profile Details</span>
        </Tabs.Trigger>
      </div>
    </Tabs.List>
  );
};

export default TabsList;
