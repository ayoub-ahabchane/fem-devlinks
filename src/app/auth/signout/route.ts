import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("boop!");
  if (session) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL("/", req.url), { status: 302 });
};
