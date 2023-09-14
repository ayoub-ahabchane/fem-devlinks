"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserButton = ({ user }: { user: User }) => {
  const supabase = createClientComponentClient();
  const avatar = user?.user_metadata.avatar_url;
  const router = useRouter();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          title={"Account actions"}
          className="w-[2.75rem] h-[2.75rem] rounded-lg bg-dl-accent-200 rleative overflow-hidden"
        >
          <Image
            src={avatar}
            width={44}
            height={44}
            className="object-cover overflow-hidden"
            alt={user?.user_metadata.name}
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-dl-neutral-100 border rounded-lg shadow-lg shadow-dl-accent-200"
          align="end"
          sideOffset={16}
        >
          <DropdownMenu.Item
            className="px-[1.69em] py-[0.69em]  font-semibold rounded-lg hover:outline-none focus-within:text-dl-accent-400 transition cursor-pointer"
            onClick={(e) => {
              e.preventDefault();

              supabase.auth.signOut();
              router.push("/");
              router.refresh();
            }}
          >
            {/* <form action={"/auth/signout"} method="POST"> */}
            Sign out
            {/* </form> */}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserButton;
