<template>
  <!-- Mobile Overlay -->
  <div
    v-if="mobileOpen"
    class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
    @click="mobileOpen = false"
  ></div>

  <aside
    class="fixed lg:static inset-y-0 left-0 z-50 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800/80 flex flex-col transition-all duration-300 ease-in-out"
    :class="{
      'w-64': !collapsed || mobileOpen,
      'w-20': collapsed && !mobileOpen,
      '-translate-x-full lg:translate-x-0': !mobileOpen,
      'translate-x-0 shadow-2xl lg:shadow-none': mobileOpen
    }"
  >
    <!-- Header Section -->
    <div class="h-16 flex items-center border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-r from-slate-50/50 to-white dark:from-slate-900 dark:to-slate-900/50 px-4">
      <!-- Expanded View -->
      <div v-if="!collapsed || mobileOpen" class="flex items-center gap-3 flex-1 min-w-0">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
          :class="getHeaderIconClass()"
        >
          <Icon :name="getHeaderIcon()" class="h-5 w-5 text-white" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <span
              class="px-2 py-0.5 rounded text-[9px] font-semibold tracking-wide uppercase"
              :class="getHeaderBadgeClass()"
            >
              {{ getAccountBadge() }}
            </span>
          </div>
          <h1 class="text-sm font-bold text-slate-900 dark:text-white leading-tight truncate">
            {{ getOrganizationName() }}
          </h1>
          <p class="text-[10px] text-slate-600 dark:text-slate-400 truncate font-khmer">
            {{ getOrganizationNameKh() }}
          </p>
        </div>
      </div>

      <!-- Collapsed View -->
      <div v-else class="flex items-center justify-center w-full">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
          :class="getHeaderIconClass()"
        >
          <Icon :name="getHeaderIcon()" class="h-5 w-5 text-white" />
        </div>
      </div>

      <!-- Toggle Button -->
      <button
        v-if="!mobileOpen"
        @click="toggleSidebar"
        class="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
        :class="{ 'ml-auto': !collapsed }"
      >
        <Icon
          :name="collapsed ? 'lucide:chevron-right' : 'lucide:chevron-left'"
          class="h-4 w-4 text-slate-600 dark:text-slate-400"
        />
      </button>
    </div>

    <!-- Navigation -->
    <nav
      class="flex-1 py-6 overflow-y-auto overflow-x-hidden"
      :class="collapsed && !mobileOpen ? 'px-2' : 'px-3'"
    >
      <div class="space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="closeMobileSidebar"
          class="group relative flex items-center rounded-lg transition-all duration-200"
          :class="[
            collapsed && !mobileOpen ? 'justify-center h-11 px-0' : 'h-11 px-3',
            isActiveRoute(item.path)
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-white/10'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
          ]"
        >
          <!-- Icon -->
          <div
            class="flex items-center justify-center flex-shrink-0"
            :class="collapsed && !mobileOpen ? 'w-full' : 'w-9'"
          >
            <Icon
              :name="item.icon"
              class="h-5 w-5 transition-transform duration-200"
              :class="[
                isActiveRoute(item.path)
                  ? 'text-white dark:text-slate-900'
                  : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100',
                !collapsed || mobileOpen ? 'group-hover:scale-110' : ''
              ]"
            />
          </div>

          <!-- Label -->
          <span
            v-if="!collapsed || mobileOpen"
            class="flex-1 text-sm font-medium truncate font-khmer ml-3"
          >
            {{ item.name }}
          </span>

          <!-- Badge -->
          <span
            v-if="item.badge && (!collapsed || mobileOpen)"
            class="ml-2 inline-flex items-center justify-center px-2 h-5 rounded-full text-[10px] font-bold"
            :class="
              isActiveRoute(item.path)
                ? 'bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900'
                : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400'
            "
          >
            {{ item.badge }}
          </span>

          <!-- Tooltip for collapsed state -->
          <Transition
            enter-active-class="transition-opacity duration-150"
            leave-active-class="transition-opacity duration-100"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
          >
            <div
              v-if="collapsed && !mobileOpen"
              class="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50 shadow-xl font-khmer"
            >
              <div class="flex items-center gap-2">
                {{ item.name }}
                <span
                  v-if="item.badge"
                  class="px-1.5 py-0.5 bg-blue-500 rounded text-[10px] font-bold"
                >
                  {{ item.badge }}
                </span>
              </div>
              <!-- Tooltip Arrow -->
              <div class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-slate-700"></div>
            </div>
          </Transition>
        </NuxtLink>
      </div>
    </nav>

    <!-- User Profile -->
    <div
      class="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50"
      :class="collapsed && !mobileOpen ? 'p-3' : 'p-4'"
    >
      <div v-if="!collapsed || mobileOpen" class="flex items-center gap-3">
        <div class="relative">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
            {{ userInitials }}
          </div>
          <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-slate-900 dark:text-white truncate font-khmer">
            {{ userName }}
          </p>
          <p class="text-xs text-slate-600 dark:text-slate-400 truncate">
            {{ userRole }}
          </p>
        </div>
      </div>
      <div v-else class="flex justify-center">
        <div class="relative">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
            {{ userInitials }}
          </div>
          <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const collapsed = ref(false)
const mobileOpen = ref(false)

const emit = defineEmits<{
  toggleMobile: [value: boolean]
}>()

// Load collapsed state from localStorage on mount
onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem('sidebarCollapsed')
    if (savedState !== null) {
      collapsed.value = savedState === 'true'
    }
  }
})

const toggleSidebar = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    mobileOpen.value = !mobileOpen.value
    emit('toggleMobile', mobileOpen.value)
  } else {
    collapsed.value = !collapsed.value
    // Save collapsed state to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebarCollapsed', collapsed.value.toString())
    }
  }
}

const closeMobileSidebar = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    mobileOpen.value = false
    emit('toggleMobile', false)
  }
}

defineExpose({
  openMobile: () => {
    mobileOpen.value = true
    emit('toggleMobile', true)
  }
})

const route = useRoute()

// Account type
const accountType = computed(() => {
  if (typeof window === 'undefined') return 'ministry'
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.accountType || 'ministry'
})

// Header configuration
const getHeaderIcon = () => {
  const icons: Record<string, string> = {
    minister: 'lucide:crown',
    ministry: 'lucide:heart-pulse',
    department: 'lucide:building-2',
    office: 'lucide:briefcase'
  }
  return icons[accountType.value] || 'lucide:heart-pulse'
}

const getHeaderIconClass = () => {
  const classes: Record<string, string> = {
    minister: 'bg-gradient-to-br from-amber-500 to-orange-600',
    ministry: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    department: 'bg-gradient-to-br from-blue-500 to-blue-600',
    office: 'bg-gradient-to-br from-violet-500 to-violet-600'
  }
  return classes[accountType.value] || classes.ministry
}

const getHeaderBadgeClass = () => {
  const classes: Record<string, string> = {
    minister: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    ministry: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
    department: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    office: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300'
  }
  return classes[accountType.value] || classes.ministry
}

const getAccountBadge = () => {
  const badges: Record<string, string> = {
    minister: 'Minister',
    ministry: 'Ministry',
    department: 'Department',
    office: 'Office'
  }
  return badges[accountType.value] || 'Ministry'
}

const getOrganizationName = () => {
  if (typeof window === 'undefined') return 'Ministry of Health'
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  if (accountType.value === 'department') {
    return user.department || 'Department'
  } else if (accountType.value === 'office') {
    return user.office || 'Office'
  }
  return 'Ministry of Health'
}

const getOrganizationNameKh = () => {
  if (typeof window === 'undefined') return 'ក្រសួងសុខាភិបាល'
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  if (accountType.value === 'department') {
    return user.departmentKh || ''
  } else if (accountType.value === 'office') {
    return user.officeKh || ''
  }
  return 'ក្រសួងសុខាភិបាល'
}

// Navigation items
const navItems = computed(() => {
  const type = accountType.value

  if (type === 'minister') {
    return [
      { name: 'ផ្ទាំងគ្រប់គ្រង', icon: 'lucide:layout-dashboard', path: '/' },
      { name: 'ទិដ្ឋភាពយុទ្ធសាស្ត្រ', icon: 'lucide:target', path: '/strategic' },
      { name: 'នាយកដ្ឋាន', icon: 'lucide:building-2', path: '/departments' },
      { name: 'របាយការណ៍សំខាន់', icon: 'lucide:file-bar-chart', path: '/analytics' },
      { name: 'ការអនុម័ត', icon: 'lucide:check-circle', path: '/approvals' },
      { name: 'ការកំណត់', icon: 'lucide:settings', path: '/settings' }
    ]
  }

  if (type === 'ministry') {
    return [
      { name: 'ផ្ទាំងគ្រប់គ្រង', icon: 'lucide:layout-dashboard', path: '/' },
      { name: 'នាយកដ្ឋាន', icon: 'lucide:building-2', path: '/departments' },
      { name: 'ឯកសារ', icon: 'lucide:file-text', path: '/documents', badge: '47' },
      { name: 'បុគ្គលិក', icon: 'lucide:users', path: '/users' },
      { name: 'របាយការណ៍', icon: 'lucide:bar-chart-3', path: '/analytics' },
      { name: 'ការកំណត់', icon: 'lucide:settings', path: '/settings' }
    ]
  }

  if (type === 'department') {
    return [
      { name: 'ផ្ទាំងគ្រប់គ្រង', icon: 'lucide:layout-dashboard', path: '/' },
      { name: 'ការិយាល័យ', icon: 'lucide:briefcase', path: '/departments/1' },
      { name: 'ឯកសារ', icon: 'lucide:file-text', path: '/documents', badge: '23' },
      { name: 'បុគ្គលិក', icon: 'lucide:users', path: '/users' },
      { name: 'របាយការណ៍', icon: 'lucide:bar-chart-3', path: '/analytics' },
      { name: 'ការកំណត់', icon: 'lucide:settings', path: '/settings' }
    ]
  }

  if (type === 'office') {
    return [
      { name: 'ផ្ទាំងគ្រប់គ្រង', icon: 'lucide:layout-dashboard', path: '/' },
      { name: 'ឯកសារ', icon: 'lucide:file-text', path: '/documents', badge: '8' },
      { name: 'បុគ្គលិក', icon: 'lucide:users', path: '/users' },
      { name: 'ការិយាល័យរបស់ខ្ញុំ', icon: 'lucide:briefcase', path: '/offices/1' },
      { name: 'ការកំណត់', icon: 'lucide:settings', path: '/settings' }
    ]
  }

  return [
    { name: 'ផ្ទាំងគ្រប់គ្រង', icon: 'lucide:layout-dashboard', path: '/' }
  ]
})

const isActiveRoute = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// User info
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
</script>
