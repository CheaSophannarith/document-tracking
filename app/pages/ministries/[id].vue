<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Back Button & Header -->
      <div class="mb-6">
        <Button variant="ghost" size="sm" class="gap-2 mb-4" @click="navigateTo('/ministries')">
          <Icon name="lucide:arrow-left" class="h-4 w-4" />
          Back to Ministries
        </Button>

        <!-- Ministry Header -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 lg:p-8 text-white shadow-xl mb-6">
          <div class="flex items-start gap-4">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon name="lucide:heart-pulse" class="h-8 w-8 text-white" />
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h1 class="text-2xl lg:text-3xl font-bold">Ministry of Health</h1>
                <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-mono">MOH</span>
              </div>
              <p class="text-lg mb-3 text-white/90">ក្រសួងសុខាភិបាល</p>
              <div class="flex flex-wrap items-center gap-4 text-sm">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:user-circle" class="h-4 w-4" />
                  <span>Minister: H.E. Mam Bunheng</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:building-2" class="h-4 w-4" />
                  <span>12 Departments</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:users" class="h-4 w-4" />
                  <span>342 Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-1 mb-6 inline-flex gap-1">
        <button
          @click="activeTab = 'departments'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          :class="activeTab === 'departments' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
        >
          <Icon name="lucide:building-2" class="h-4 w-4 inline mr-2" />
          Departments
        </button>
        <button
          @click="activeTab = 'staff'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          :class="activeTab === 'staff' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
        >
          <Icon name="lucide:users" class="h-4 w-4 inline mr-2" />
          Staff
        </button>
        <button
          @click="activeTab = 'documents'"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          :class="activeTab === 'documents' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
        >
          <Icon name="lucide:file-text" class="h-4 w-4 inline mr-2" />
          Documents
        </button>
      </div>

      <!-- Departments Tab -->
      <div v-if="activeTab === 'departments'" class="space-y-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Departments</h2>
          <Button class="gap-2" @click="showAddDepartment = true">
            <Icon name="lucide:plus" class="h-4 w-4" />
            Add Department
          </Button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DepartmentCard
            v-for="dept in departments"
            :key="dept.id"
            :department="dept"
            @view="viewDepartment"
          />
        </div>
      </div>

      <!-- Staff Tab -->
      <div v-if="activeTab === 'staff'">
        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Ministry Staff</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <UserCard
            v-for="staff in ministryStaff"
            :key="staff.id"
            :user="staff"
          />
        </div>
      </div>

      <!-- Documents Tab -->
      <div v-if="activeTab === 'documents'">
        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Ministry Documents</h2>
        <div class="grid grid-cols-1 gap-4">
          <DocumentCard
            v-for="doc in ministryDocuments"
            :key="doc.id"
            :document="doc"
          />
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const activeTab = ref('departments')
const showAddDepartment = ref(false)

const departments = ref([
  {
    id: 1,
    name: 'Department of Hospital Services',
    nameKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
    director: 'Dr. Sok Siphana',
    directorKh: 'វេជ្ជបណ្ឌិត សុខ សុីផាណា',
    offices: 8,
    staff: 86,
    documents: 342,
  },
  {
    id: 2,
    name: 'Department of Preventive Medicine',
    nameKh: 'នាយកដ្ឋានវេជ្ជសាស្រ្តបង្ការ',
    director: 'Dr. Chea Vibol',
    directorKh: 'វេជ្ជបណ្ឌិត ជា វិបុល',
    offices: 6,
    staff: 54,
    documents: 267,
  },
  {
    id: 3,
    name: 'Department of Drugs and Food',
    nameKh: 'នាយកដ្ឋានឱសថ និងអាហារ',
    director: 'Dr. Pich Boravy',
    directorKh: 'វេជ្ជបណ្ឌិត ពេជ្រ បុរាវី',
    offices: 5,
    staff: 42,
    documents: 198,
  },
  {
    id: 4,
    name: 'Department of Planning and Health Information',
    nameKh: 'នាយកដ្ឋានផែនការ និងព័ត៌មានសុខាភិបាល',
    director: 'Mr. Vanna Rithy',
    directorKh: 'លោក វណ្ណា រិទ្ធី',
    offices: 7,
    staff: 63,
    documents: 421,
  },
])

const ministryStaff = ref([
  {
    id: 1,
    name: 'Dr. Sok Siphana',
    nameKh: 'វេជ្ជបណ្ឌិត សុខ សុីផាណា',
    email: 'sok.siphana@health.gov.kh',
    role: 'Director',
    department: 'Department of Hospital Services',
    departmentKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
    permissions: ['upload', 'download', 'approve', 'manage_users'],
    status: 'active',
    avatar: 'SS',
    lastActive: '2026-02-11T10:30:00',
  },
])

const ministryDocuments = ref([
  {
    id: 1,
    name: 'National Health Strategic Plan 2026-2030',
    type: 'PDF',
    size: '3.2 MB',
    status: 'approved',
    uploadedBy: 'Dr. Sok Siphana',
    uploadedAt: '2026-02-10T14:30:00',
    tags: ['Strategic Plan', 'Health Policy'],
    department: 'Department of Planning',
    office: 'Planning Office',
  },
])

const viewDepartment = (deptId: number) => {
  navigateTo(`/departments/${deptId}`)
}
</script>
