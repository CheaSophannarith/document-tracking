export const useAuth = () => {
  const user = ref<any>(null)

  const loadUser = () => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user')
      if (userData) {
        user.value = JSON.parse(userData)
      }
    }
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
      user.value = null
      navigateTo('/login')
    }
  }

  const hasPermission = (permission: string) => {
    return user.value?.permissions?.includes(permission) || false
  }

  const isAdmin = () => {
    return user.value?.role === 'admin'
  }

  const isDepartmentHead = () => {
    return user.value?.role === 'department_head' || user.value?.role === 'admin'
  }

  onMounted(() => {
    loadUser()
  })

  return {
    user,
    loadUser,
    logout,
    hasPermission,
    isAdmin,
    isDepartmentHead,
  }
}
