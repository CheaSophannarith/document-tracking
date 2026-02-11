<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-8">
    <div class="w-full max-w-md">
      <!-- Logo and Header -->
      <div class="text-center mb-8">
        <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-xl">
          <Icon name="lucide:heart-pulse" class="h-10 w-10 text-white" />
        </div>
        <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Ministry of Health
        </h1>
        <p class="text-base text-emerald-600 dark:text-emerald-400 mb-1">
          ក្រសួងសុខាភិបាល
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Document Tracking System
        </p>
        <p class="text-xs text-slate-500 dark:text-slate-500 mt-1">
          Kingdom of Cambodia | ព្រះរាជាណាចក្រកម្ពុជា
        </p>
      </div>

      <!-- Login Card -->
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 lg:p-8 shadow-xl">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white mb-6">Sign In</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Email/Username -->
          <div>
            <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">
              Email or Username
            </label>
            <div class="relative">
              <Icon name="lucide:user" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                v-model="credentials.email"
                type="text"
                required
                placeholder="Enter your email or username"
                class="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">
              Password
            </label>
            <div class="relative">
              <Icon name="lucide:lock" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                v-model="credentials.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="Enter your password"
                class="w-full pl-10 pr-12 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <Icon :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'" class="h-5 w-5" />
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center cursor-pointer">
              <input
                v-model="credentials.remember"
                type="checkbox"
                class="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500/50"
              />
              <span class="ml-2 text-slate-700 dark:text-slate-300">Remember me</span>
            </label>
            <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <!-- Login Button -->
          <Button type="submit" class="w-full gap-2" size="lg">
            <Icon name="lucide:log-in" class="h-5 w-5" />
            Sign In
          </Button>
        </form>

        <!-- Demo Accounts -->
        <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">Ministry Accounts:</p>
          <div class="space-y-2 mb-3">
            <button
              @click="loginAsDemo('minister')"
              class="w-full text-left px-3 py-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/30 dark:hover:to-orange-900/30 transition-colors border border-amber-200 dark:border-amber-800"
            >
              <span class="font-semibold">Minister (Boss):</span> minister@health.gov.kh / minister123
            </button>
            <button
              @click="loginAsDemo('admin')"
              class="w-full text-left px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span class="font-semibold">Administrator:</span> admin@health.gov.kh / admin123
            </button>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 mt-4">Department Accounts:</p>
          <div class="space-y-2">
            <button
              @click="loginAsDemo('dept-hospital')"
              class="w-full text-left px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors border border-emerald-200 dark:border-emerald-800"
            >
              <span class="font-semibold">Hospital Services:</span> hospital@health.gov.kh / dept123
            </button>
            <button
              @click="loginAsDemo('dept-preventive')"
              class="w-full text-left px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors border border-emerald-200 dark:border-emerald-800"
            >
              <span class="font-semibold">Preventive Medicine:</span> preventive@health.gov.kh / dept123
            </button>
            <button
              @click="loginAsDemo('dept-drugs')"
              class="w-full text-left px-3 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors border border-emerald-200 dark:border-emerald-800"
            >
              <span class="font-semibold">Drugs and Food:</span> drugs@health.gov.kh / dept123
            </button>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3 mt-4">Office Accounts:</p>
          <div class="space-y-2">
            <button
              @click="loginAsDemo('office-emergency')"
              class="w-full text-left px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-800"
            >
              <span class="font-semibold">Emergency Office:</span> emergency@health.gov.kh / office123
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-6 text-sm text-slate-600 dark:text-slate-400">
        <p>© 2026 Royal Government of Cambodia</p>
        <p class="text-xs mt-1">រាជរដ្ឋាភិបាលកម្ពុជា</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

const credentials = ref({
  email: '',
  password: '',
  remember: false,
})

const showPassword = ref(false)

const handleLogin = () => {
  // Simulate login
  localStorage.setItem('user', JSON.stringify({
    email: credentials.value.email,
    role: 'admin',
    department: 'Administration',
    permissions: ['upload', 'download', 'approve', 'delete', 'manage_users']
  }))
  navigateTo('/')
}

const loginAsDemo = (role: string) => {
  const demoUsers = {
    // Minister - Executive View
    minister: {
      email: 'minister@health.gov.kh',
      name: 'H.E. Mam Bunheng',
      nameKh: 'ឯកឧត្តម ម៉ម ប៊ុនហេង',
      title: 'Minister of Health',
      titleKh: 'រដ្ឋមន្ត្រីក្រសួងសុខាភិបាល',
      role: 'Minister',
      accountType: 'minister',
      department: null,
      departmentId: null,
      office: null,
      officeId: null,
      permissions: ['view_strategic', 'view_reports', 'approve_high_level']
    },

    // Administrator - Full Access
    admin: {
      email: 'admin@health.gov.kh',
      name: 'Dr. Sok Kimheng',
      nameKh: 'វេជ្ជបណ្ឌិត សុខ គឹមហេង',
      role: 'Administrator',
      accountType: 'ministry',
      department: null,
      departmentId: null,
      office: null,
      officeId: null,
      permissions: ['upload', 'download', 'approve', 'delete', 'manage_users', 'manage_departments']
    },

    // Department Accounts
    'dept-hospital': {
      email: 'hospital@health.gov.kh',
      name: 'Dr. Sok Siphana',
      nameKh: 'វេជ្ជបណ្ឌិត សុខ សុីផាណា',
      role: 'Department Director',
      accountType: 'department',
      department: 'Department of Hospital Services',
      departmentId: '1',
      departmentKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
      office: null,
      officeId: null,
      permissions: ['upload', 'download', 'approve', 'manage_users', 'view_department']
    },
    'dept-preventive': {
      email: 'preventive@health.gov.kh',
      name: 'Dr. Chea Vibol',
      nameKh: 'វេជ្ជបណ្ឌិត ជា វិបុល',
      role: 'Department Director',
      accountType: 'department',
      department: 'Department of Preventive Medicine',
      departmentId: '2',
      departmentKh: 'នាយកដ្ឋានវេជ្ជសាស្រ្តបង្ការ',
      office: null,
      officeId: null,
      permissions: ['upload', 'download', 'approve', 'manage_users', 'view_department']
    },
    'dept-drugs': {
      email: 'drugs@health.gov.kh',
      name: 'Dr. Pich Boravy',
      nameKh: 'វេជ្ជបណ្ឌិត ពេជ្រ បុរាវី',
      role: 'Department Director',
      accountType: 'department',
      department: 'Department of Drugs and Food',
      departmentId: '3',
      departmentKh: 'នាយកដ្ឋានឱសថ និងអាហារ',
      office: null,
      officeId: null,
      permissions: ['upload', 'download', 'approve', 'manage_users', 'view_department']
    },

    // Office Accounts
    'office-emergency': {
      email: 'emergency@health.gov.kh',
      name: 'Dr. Rath Dara',
      nameKh: 'វេជ្ជបណ្ឌិត រ័ត្ន ដារា',
      role: 'Office Chief',
      accountType: 'office',
      department: 'Department of Hospital Services',
      departmentId: '1',
      office: 'Emergency Services Office',
      officeId: '1',
      officeKh: 'ការិយាល័យសេវាកម្មបន្ទាន់',
      permissions: ['upload', 'download', 'approve', 'view_office']
    }
  }

  localStorage.setItem('user', JSON.stringify(demoUsers[role]))
  navigateTo('/')
}
</script>
