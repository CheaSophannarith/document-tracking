export const usePermissions = () => {
  const getUser = () => {
    if (typeof window === 'undefined') return null
    const userData = localStorage.getItem('user')
    return userData ? JSON.parse(userData) : null
  }

  const isMinistry = () => {
    const user = getUser()
    return user?.accountType === 'ministry'
  }

  const isDepartment = () => {
    const user = getUser()
    return user?.accountType === 'department'
  }

  const isOffice = () => {
    const user = getUser()
    return user?.accountType === 'office'
  }

  const canViewAllDepartments = () => {
    return isMinistry()
  }

  const canViewDepartment = (departmentId: string) => {
    const user = getUser()
    if (isMinistry()) return true
    if (isDepartment()) return user?.departmentId === departmentId
    if (isOffice()) return user?.departmentId === departmentId
    return false
  }

  const canViewOffice = (officeId: string) => {
    const user = getUser()
    if (isMinistry()) return true
    if (isDepartment()) return true // Can view all offices in their department
    if (isOffice()) return user?.officeId === officeId
    return false
  }

  const canManageUsers = () => {
    const user = getUser()
    return user?.permissions?.includes('manage_users') || false
  }

  const canUploadDocuments = () => {
    const user = getUser()
    return user?.permissions?.includes('upload') || false
  }

  const canDownloadDocuments = () => {
    const user = getUser()
    return user?.permissions?.includes('download') || false
  }

  const canApproveDocuments = () => {
    const user = getUser()
    return user?.permissions?.includes('approve') || false
  }

  const canDeleteDocuments = () => {
    const user = getUser()
    return user?.permissions?.includes('delete') || false
  }

  const canManageDepartments = () => {
    const user = getUser()
    return user?.permissions?.includes('manage_departments') || false
  }

  const getAccountType = () => {
    const user = getUser()
    return user?.accountType || 'ministry'
  }

  const getDepartmentId = () => {
    const user = getUser()
    return user?.departmentId || null
  }

  const getOfficeId = () => {
    const user = getUser()
    return user?.officeId || null
  }

  const getUserRole = () => {
    const user = getUser()
    return user?.role || 'Guest'
  }

  const getUserName = () => {
    const user = getUser()
    return user?.name || 'Guest User'
  }

  // Filter documents based on user permissions
  const filterDocuments = (documents: any[]) => {
    const user = getUser()
    if (!user) return documents

    if (isMinistry()) {
      return documents
    }

    if (isDepartment()) {
      return documents.filter(doc => doc.departmentId === user.departmentId)
    }

    if (isOffice()) {
      return documents.filter(
        doc => doc.departmentId === user.departmentId && doc.office === user.office
      )
    }

    return documents
  }

  return {
    // User type checks
    isMinistry,
    isDepartment,
    isOffice,

    // Permission checks
    canViewAllDepartments,
    canViewDepartment,
    canViewOffice,
    canManageUsers,
    canUploadDocuments,
    canDownloadDocuments,
    canApproveDocuments,
    canDeleteDocuments,
    canManageDepartments,

    // User info
    getAccountType,
    getDepartmentId,
    getOfficeId,
    getUserRole,
    getUserName,

    // Data filtering
    filterDocuments,
  }
}
