<template>
  <header class="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 flex items-center px-4 lg:px-8">
    <!-- Mobile Menu Button -->
    <button
      @click="emit('toggleMobileSidebar')"
      class="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-3"
      aria-label="Toggle menu"
    >
      <Icon name="lucide:menu" class="h-6 w-6 text-slate-600 dark:text-slate-400" />
    </button>

    <div class="flex-1 flex items-center space-x-2 lg:space-x-4">
      <!-- Search Bar -->
      <div class="relative flex-1 max-w-md">
        <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search documents..."
          class="w-full pl-9 lg:pl-10 pr-4 py-2 lg:py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
        />
      </div>
    </div>

    <!-- Header Actions -->
    <div class="flex items-center space-x-1 lg:space-x-3">
      <!-- Theme Toggle -->
      <button
        @click="toggleTheme"
        class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Toggle theme"
      >
        <Icon name="lucide:sun" class="h-5 w-5 text-slate-600 dark:text-slate-400 dark:hidden" />
        <Icon name="lucide:moon" class="h-5 w-5 text-slate-400 hidden dark:block" />
      </button>

      <!-- Notifications -->
      <button
        class="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Notifications"
      >
        <Icon name="lucide:bell" class="h-5 w-5 text-slate-600 dark:text-slate-400" />
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <!-- User Menu -->
      <div class="relative">
        <button
          @click="showUserMenu = !showUserMenu"
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-semibold text-sm">
            {{ getUserInitials() }}
          </div>
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="showUserMenu"
          class="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-50"
        >
          <button
            @click="navigateTo('/settings')"
            class="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-2"
          >
            <Icon name="lucide:settings" class="h-4 w-4" />
            Settings
          </button>
          <button
            @click="handleLogout"
            class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
          >
            <Icon name="lucide:log-out" class="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  toggleMobileSidebar: []
}>()

const showUserMenu = ref(false)

const toggleTheme = () => {
  const html = document.documentElement
  const isDark = html.classList.contains('dark')

  if (isDark) {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

const getUserInitials = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (user.name) {
    return user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
  }
  return 'MO'
}

const handleLogout = () => {
  localStorage.removeItem('user')
  navigateTo('/login')
}

// Close menu when clicking outside
onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      showUserMenu.value = false
    }
  })
})
</script>
