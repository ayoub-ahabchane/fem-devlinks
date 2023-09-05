import LinksTab from "@/components/Tabs/LinksTab";
import PreviewTab from "@/components/Tabs/PreviewTab";
import ProfileTab from "@/components/Tabs/ProfileTab";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <main className="p-4 md:p-0 flex-1 flex flex-col">
      <div className=" lg:grid lg:grid-cols-[3fr_4fr] lg:gap-x-4 flex-1 h-full">
        <PreviewTab />
        <div className="bg-dl-neutral-100 rounded-lg h-full">
          <LinksTab />
          <ProfileTab />
        </div>
      </div>
    </main>
  );
}
