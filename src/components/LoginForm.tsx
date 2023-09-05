"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BiLogoGoogle } from "react-icons/bi";
import DevlinksLogo from "./DevlinksLogo";
const LoginForm = () => {
  const supabase = createClientComponentClient();
  return (
    <section className="p-8">
      <p className="flex items-center gap-2 mb-16">
        <DevlinksLogo className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
        <span className="font-bold text-3xl  minline-block">devlinks</span>
      </p>
      <div className="bg-dl-neutral-100 rounded-lg md:p-10 flex flex-col gap-8 p-8 shadow-md">
        <div>
          <h1 className="text-2xl font-bold leading-9 mb-2">Hello!</h1>
          <p className="text-body-m text-dl-neutral-300">
            Sign in to devlinks using your Google account.
          </p>
        </div>
        <div>
          <button
            onClick={async () => {
              supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                  queryParams: {
                    access_type: "offline",
                    prompt: "consent",
                  },
                  redirectTo: "http://localhost:3000/auth/callback",
                },
              });
            }}
            className="px-[1.69em] py-[0.69em] flex items-center gap-2 rounded-lg bg-dl-accent-400 text-dl-neutral-100 font-semibold w-full justify-center"
          >
            <BiLogoGoogle className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
