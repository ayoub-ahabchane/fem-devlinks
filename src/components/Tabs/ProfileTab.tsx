"use client";
import * as Tabs from "@radix-ui/react-tabs";

const ProfileTab = () => {
  return (
    <Tabs.Content value="profile" className="tabWrapper">
      <h1>Profile Details</h1>
    </Tabs.Content>
  );
};

export default ProfileTab;
