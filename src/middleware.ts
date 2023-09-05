import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const profilePathNameSchema = z.string().refine((pathname) => {
    const regex = /^\/profile\/\w+/;
    return regex.test(pathname);
  });

  const isPublicProfileLik = (pathname: string) => {
    const result = profilePathNameSchema.safeParse(pathname);
    return result.success;
  };

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isPublicProfileLik(pathname)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (user && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
};

export const config = {
  matcher: ["/", "/profile", "/dashboard"],
};
