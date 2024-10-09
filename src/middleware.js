import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// eslint-disable-next-line consistent-return
export function middleware(request) {
  const token = cookies().get('token');
  const isPublicRoute = request.nextUrl.pathname.startsWith('/auth');
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL('/portal', request.url));
  }
}

// See "Matching Paths"
export const config = {
  matcher: ['/portal/:path*', '/auth/:path*'],
};
