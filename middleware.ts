import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



const isProtectedRoute = createRouteMatcher([
  '/select-org',
  '/organization(.*)'
]);

export default clerkMiddleware((auth, req) => {
    const { userId } = auth();
    if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/select-org', req.url)); 
  }
  if (!auth().userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};