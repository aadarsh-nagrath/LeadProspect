import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname === '/';
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard') || 
                      request.nextUrl.pathname.startsWith('/clients') ||
                      request.nextUrl.pathname.startsWith('/projects') ||
                      request.nextUrl.pathname.startsWith('/tasks') ||
                      request.nextUrl.pathname.startsWith('/inbox') ||
                      request.nextUrl.pathname.startsWith('/performance');

  // Allow auth API routes
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // If trying to access dashboard without token, redirect to home
  if (isDashboard && !token) {
    return NextResponse.redirect(new URL('/?auth=sign-in', request.url));
  }

  // If has token and trying to access login/home, redirect to dashboard
  if (token && isAuthPage) {
    try {
      jwt.verify(token, process.env.JWT_SECRET || 'leadprospect-super-secret-jwt-key-2026');
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } catch {
      // Invalid token, allow access to auth pages
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
