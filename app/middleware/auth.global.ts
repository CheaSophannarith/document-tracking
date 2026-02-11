export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware on server
  if (process.server) return

  // Public routes that don't require authentication
  const publicRoutes = ['/login']

  // Check if route is public
  if (publicRoutes.includes(to.path)) {
    return
  }

  // Check if user is authenticated
  const user = localStorage.getItem('user')

  if (!user) {
    return navigateTo('/login')
  }
})
