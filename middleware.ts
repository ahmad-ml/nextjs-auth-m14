import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { base_uri } from "./app/api/routes";

export default function middlweware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/blog")) {
    const requestHeaders = new Headers(request.headers);
    const cookieHeaderValue = requestHeaders.get("cookie");

    const sessionTokenRegex = /next-auth.session-token=([^;]+)/;
    const match = sessionTokenRegex.exec(cookieHeaderValue || "");

    if (match && match[1]) {
      const sessionToken = match[1];
      const authorizationHeaderValue = `Bearer ${sessionToken}`;
      requestHeaders.set("authorization", authorizationHeaderValue);

      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
      return response;
    } else {
      return NextResponse.redirect(`${base_uri}/api/auth/signin`);
    }
  }
}
