import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/' || path.startsWith('/auth')
  const isPrivatePath = path === '/dashboard' || path.startsWith('/dashboard/') || path.startsWith('/profile')
  const token = request.cookies.get('token')?.value || ''

  // Redirect to dashboard if logged in and trying to access public paths
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  // Redirect to auth if not logged in and trying to access protected paths
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL('/auth', request.nextUrl))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}