"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("boop!");
  if (session) {
    await supabase.auth.signOut();
  }

  redirect("/");
};
