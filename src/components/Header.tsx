import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import DevlinksLogo from "./DevlinksLogo";
import TabsList from "./TabsList";
import UserButton from "./UserButton";

const Header = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="md:rounded-lg flex items-center justify-between p-4  border-dl-accent-400 bg-dl-neutral-100">
      <div className="flex items-center gap-2">
        <DevlinksLogo className="w-11 h-11 md:w-10 md:h-10 shrink-0" />
        <span className="font-bold text-3xl hidden md:inline-block">
          devlinks
        </span>
      </div>
      <TabsList />
      <div className="flex items-center gap-4">
        <Link
          className="md:px-[1.69em] px-[0.69em] py-[0.69em] rounded-lg font-semibold border border-dl-accent-400 text-heading-s text-dl-accent-400 transition flex items-center gap-2 hover:bg-dl-accent-200 focus-within:bg-dl-accent-200"
          href={"/"}
          title="Profile preview"
        >
          <AiOutlineEye className="w-5 h-5 md:hidden" />
          <span className="hidden md:inline-block">Preview</span>
        </Link>
        <UserButton user={user!} />
      </div>
    </header>
  );
};

export default Header;
