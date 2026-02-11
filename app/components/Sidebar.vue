<template>
  <!-- Mobile Overlay -->
  <div
    v-if="mobileOpen"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
    @click="mobileOpen = false"
  ></div>

  <aside
    class="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 shadow-lg lg:shadow-none"
    :class="{
      'w-20': collapsed && !mobileOpen,
      '-translate-x-full lg:translate-x-0': !mobileOpen,
      'translate-x-0': mobileOpen
    }"
  >
    <!-- Logo - Ministry Account -->
    <div v-if="accountType === 'ministry' || !accountType" class="h-16 flex items-center px-4 lg:px-5 border-b border-slate-200 dark:border-slate-800">
      <div class="flex items-center space-x-3" v-if="!collapsed || mobileOpen">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <Icon name="lucide:heart-pulse" class="h-5 w-5 text-white" />
        </div>
        <div class="flex-1 min-w-0">
          <span class="block text-sm font-bold text-slate-900 dark:text-white leading-tight">
            Ministry of Health
          </span>
          <span class="block text-[10px] text-slate-500 dark:text-slate-400">
            ក្រសួងសុខាភិបាល
          </span>
        </div>
      </div>
      <button
        @click="toggleSidebar"
        class="ml-auto p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Icon :name="collapsed && !mobileOpen ? 'lucide:chevron-right' : 'lucide:chevron-left'" class="h-5 w-5 text-slate-600 dark:text-slate-400" />
      </button>
    </div>

    <!-- Logo - Department Account -->
    <div v-else-if="accountType === 'department'" class="h-auto min-h-16 flex items-center px-4 lg:px-5 border-b border-slate-200 dark:border-slate-800 py-3">
      <div class="flex items-center space-x-3" v-if="!collapsed || mobileOpen">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Icon name="lucide:building-2" class="h-5 w-5 text-white" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1 mb-0.5">
            <span class="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-[9px] font-mono text-blue-700 dark:text-blue-300">DEPT</span>
          </div>
          <span class="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
            {{ departmentName }}
          </span>
          <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">
            {{ departmentNameKh }}
          </span>
        </div>
      </div>
      <button
        @click="toggleSidebar"
        class="ml-auto p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Icon :name="collapsed && !mobileOpen ? 'lucide:chevron-right' : 'lucide:chevron-left'" class="h-5 w-5 text-slate-600 dark:text-slate-400" />
      </button>
    </div>

    <!-- Logo - Office Account -->
    <div v-else-if="accountType === 'office'" class="h-auto min-h-16 flex items-center px-4 lg:px-5 border-b border-slate-200 dark:border-slate-800 py-3">
      <div class="flex items-center space-x-3" v-if="!collapsed || mobileOpen">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <Icon name="lucide:briefcase" class="h-5 w-5 text-white" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1 mb-0.5">
            <span class="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-900/30 rounded text-[9px] font-mono text-violet-700 dark:text-violet-300">OFFICE</span>
          </div>
          <span class="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
            {{ officeName }}
          </span>
          <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">
            {{ officeNameKh }}
          </span>
        </div>
      </div>
      <button
        @click="toggleSidebar"
        class="ml-auto p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Icon :name="collapsed && !mobileOpen ? 'lucide:chevron-right' : 'lucide:chevron-left'" class="h-5 w-5 text-slate-600 dark:text-slate-400" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
      <SidebarItem
        v-for="item in navItems"
        :key="item.name"
        :item="item"
        :collapsed="collapsed || !mobileOpen && false"
        :is-active="isActiveRoute(item.path)"
        @click="closeMobileSidebar"
      />
    </nav>

    <!-- User Profile -->
    <div class="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div class="flex items-center space-x-3" v-if="!collapsed || mobileOpen">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
          {{ userInitials }}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-slate-900 dark:text-white truncate">{{ userName }}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ userRole }}</p>
        </div>
      </div>
      <div v-else class="flex justify-center">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
          {{ userInitials }}
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const collapsed = ref(false)
const mobileOpen = ref(false)

// Emit event to parent when sidebar state changes
const emit = defineEmits<{
  toggleMobile: [value: boolean]
}>()

const toggleSidebar = () => {
  if (window.innerWidth < 1024) {
    // Mobile: toggle open/close
    mobileOpen.value = !mobileOpen.value
    emit('toggleMobile', mobileOpen.value)
  } else {
    // Desktop: toggle collapsed
    collapsed.value = !collapsed.value
  }
}

// Close mobile sidebar when clicking a link
const closeMobileSidebar = () => {
  if (window.innerWidth < 1024) {
    mobileOpen.value = false
    emit('toggleMobile', false)
  }
}

// Expose method for parent to open mobile sidebar
defineExpose({
  openMobile: () => {
    mobileOpen.value = true
    emit('toggleMobile', true)
  }
})

const route = useRoute()

// Navigation items based on account type
const navItems = computed(() => {
  const type = accountType.value

  // Ministry Account - Full Access
  if (type === 'ministry') {
    return [
      {
        name: 'Dashboard',
        icon: 'lucide:layout-dashboard',
        path: '/',
      },
      {
        name: 'Departments',
        icon: 'lucide:building-2',
        path: '/departments',
      },
      {
        name: 'Documents',
        icon: 'lucide:file-text',
        path: '/documents',
        badge: '47',
      },
      {
        name: 'Upload',
        icon: 'lucide:upload',
        path: '/upload',
      },
      {
        name: 'Staff',
        icon: 'lucide:users',
        path: '/users',
      },
      {
        name: 'Reports',
        icon: 'lucide:bar-chart-3',
        path: '/analytics',
      },
      {
        name: 'Settings',
        icon: 'lucide:settings',
        path: '/settings',
      },
    ]
  }

  // Department Account - Department Level
  if (type === 'department') {
    return [
      {
        name: 'Dashboard',
        icon: 'lucide:layout-dashboard',
        path: '/',
      },
      {
        name: 'Offices',
        icon: 'lucide:briefcase',
        path: '/departments/1', // Navigate to their department
      },
      {
        name: 'Documents',
        icon: 'lucide:file-text',
        path: '/documents',
        badge: '23',
      },
      {
        name: 'Upload',
        icon: 'lucide:upload',
        path: '/upload',
      },
      {
        name: 'Staff',
        icon: 'lucide:users',
        path: '/users',
      },
      {
        name: 'Reports',
        icon: 'lucide:bar-chart-3',
        path: '/analytics',
      },
      {
        name: 'Settings',
        icon: 'lucide:settings',
        path: '/settings',
      },
    ]
  }

  // Office Account - Office Level Only
  if (type === 'office') {
    return [
      {
        name: 'Dashboard',
        icon: 'lucide:layout-dashboard',
        path: '/',
      },
      {
        name: 'Documents',
        icon: 'lucide:file-text',
        path: '/documents',
        badge: '8',
      },
      {
        name: 'Upload',
        icon: 'lucide:upload',
        path: '/upload',
      },
      {
        name: 'Staff',
        icon: 'lucide:users',
        path: '/users',
      },
      {
        name: 'My Office',
        icon: 'lucide:briefcase',
        path: '/offices/1',
      },
      {
        name: 'Settings',
        icon: 'lucide:settings',
        path: '/settings',
      },
    ]
  }

  // Default fallback
  return [
    {
      name: 'Dashboard',
      icon: 'lucide:layout-dashboard',
      path: '/',
    },
  ]
})

// Check if route is active
const isActiveRoute = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// Get user info from localStorage
const userName = computed(() => {
  if (typeof window === 'undefined') return 'Ministry Officer'
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.name || 'Ministry Officer'
})

const userRole = computed(() => {
  if (typeof window === 'undefined') return 'Administrator'
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.role || 'Administrator'
})

const userInitials = computed(() => {
  if (typeof window === 'undefined') return 'MO'
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (user.name) {
    return user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
  }
  return 'MO'
})

// Get account type
const accountType = computed(() => {
  if (typeof window === 'undefined') return 'ministry'
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.accountType || 'ministry'
})

// Get department info for department accounts
const departmentName = computed(() => {
  if (typeof window === 'undefined') return ''
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.department || ''
})

const departmentNameKh = computed(() => {
  if (typeof window === 'undefined') return ''
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.departmentKh || ''
})

// Get office info for office accounts
const officeName = computed(() => {
  if (typeof window === 'undefined') return ''
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.office || ''
})

const officeNameKh = computed(() => {
  if (typeof window === 'undefined') return ''
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.officeKh || ''
})
</script>
