import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

function getLocaleFromRequest(request: NextRequest) {
  const country = request.headers.get("x-country-code");
  return country;
}

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    const locale = getLocaleFromRequest(request);

    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();

    const redirectUrl = new URL(
      `/${locale}${queryString ? `?${queryString}` : ""}`,
      request.url
    );
    return NextResponse.redirect(redirectUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(uk|ru)/:path*"],
};
