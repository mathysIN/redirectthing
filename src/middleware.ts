import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { redirectData } from "~/redirect-data";

export default async function middleware(request: NextRequest) {
  return NextResponse.redirect(redirectData.link);
}

export const config = {
  matcher: [
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
