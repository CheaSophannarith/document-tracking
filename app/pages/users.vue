<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">User Management</h1>
          <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">Manage users and permissions</p>
        </div>
        <Button class="gap-2 w-full sm:w-auto" @click="showAddUserModal = true">
          <Icon name="lucide:user-plus" class="h-4 w-4" />
          Add User
        </Button>
      </div>

      <!-- Filters -->
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 mb-4 lg:mb-6">
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              class="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
          <select class="px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
            <option>All Ministries</option>
            <option>Ministry of Economy and Finance</option>
            <option>Ministry of Health</option>
            <option>Ministry of Education</option>
            <option>Ministry of Interior</option>
            <option>Ministry of Foreign Affairs</option>
            <option>Ministry of Agriculture</option>
            <option>Ministry of Labour</option>
            <option>Ministry of Commerce</option>
            <option>Ministry of Justice</option>
            <option>Ministry of Information</option>
          </select>
          <select class="px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
            <option>All Roles</option>
            <option>Administrator</option>
            <option>Department Head</option>
            <option>Officer</option>
            <option>Viewer</option>
          </select>
        </div>
      </div>

      <!-- Users List -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :user="user"
          @edit="editUser"
          @delete="deleteUser"
        />
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const showAddUserModal = ref(false)

const users = ref([
  {
    id: 1,
    name: 'Sok Chanthy',
    nameKh: 'សុខ ចន្ធី',
    email: 'sok.chanthy@economy.gov.kh',
    role: 'Administrator',
    department: 'Ministry of Economy and Finance',
    departmentKh: 'ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ',
    permissions: ['upload', 'download', 'approve', 'delete', 'manage_users'],
    status: 'active',
    avatar: 'SC',
    lastActive: '2026-02-11T10:30:00',
  },
  {
    id: 2,
    name: 'Pich Sophea',
    nameKh: 'ពេជ្រ សុភា',
    email: 'pich.sophea@health.gov.kh',
    role: 'Ministry Secretary',
    department: 'Ministry of Health',
    departmentKh: 'ក្រសួងសុខាភិបាល',
    permissions: ['upload', 'download', 'approve', 'manage_users'],
    status: 'active',
    avatar: 'PS',
    lastActive: '2026-02-11T09:15:00',
  },
  {
    id: 3,
    name: 'Vanna Kosal',
    nameKh: 'វណ្ណា គោសល',
    email: 'vanna.kosal@education.gov.kh',
    role: 'Officer',
    department: 'Ministry of Education',
    departmentKh: 'ក្រសួងអប់រំ',
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'VK',
    lastActive: '2026-02-10T16:45:00',
  },
  {
    id: 4,
    name: 'Dara Rithy',
    nameKh: 'ដារា រិទ្ធី',
    email: 'dara.rithy@interior.gov.kh',
    role: 'Officer',
    department: 'Ministry of Interior',
    departmentKh: 'ក្រសួងមហាផ្ទៃ',
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'DR',
    lastActive: '2026-02-11T08:20:00',
  },
  {
    id: 5,
    name: 'Sopheak Ratanak',
    nameKh: 'សុភាព រតនៈ',
    email: 'sopheak.ratanak@justice.gov.kh',
    role: 'Viewer',
    department: 'Ministry of Justice',
    departmentKh: 'ក្រសួងយុត្តិធម៌',
    permissions: ['download'],
    status: 'inactive',
    avatar: 'SR',
    lastActive: '2026-02-08T14:00:00',
  },
  {
    id: 6,
    name: 'Chea Sovannak',
    nameKh: 'ជា សុវណ្ណៈ',
    email: 'chea.sovannak@agriculture.gov.kh',
    role: 'Officer',
    department: 'Ministry of Agriculture',
    departmentKh: 'ក្រសួងកសិកម្ម',
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'CS',
    lastActive: '2026-02-11T11:00:00',
  },
  {
    id: 7,
    name: 'Sreypov Bopha',
    nameKh: 'ស្រីពៅ បុប្ផា',
    email: 'sreypov.bopha@commerce.gov.kh',
    role: 'Officer',
    department: 'Ministry of Commerce',
    departmentKh: 'ក្រសួងពាណិជ្ជកម្ម',
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'SB',
    lastActive: '2026-02-11T09:30:00',
  },
  {
    id: 8,
    name: 'Kimheng Raksmey',
    nameKh: 'គឹមហេង រ័ក្សស្មី',
    email: 'kimheng.raksmey@labour.gov.kh',
    role: 'Ministry Secretary',
    department: 'Ministry of Labour',
    departmentKh: 'ក្រសួងការងារ',
    permissions: ['upload', 'download', 'approve'],
    status: 'active',
    avatar: 'KR',
    lastActive: '2026-02-11T08:45:00',
  },
])

const editUser = (user: any) => {
  console.log('Edit user:', user)
}

const deleteUser = (userId: number) => {
  console.log('Delete user:', userId)
}
</script>
