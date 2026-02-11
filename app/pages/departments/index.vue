<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Ministry Header -->
      <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 lg:p-8 text-white shadow-xl mb-6">
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
                <span>{{ departments.length }} Departments</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="lucide:users" class="h-4 w-4" />
                <span>{{ totalStaff }} Staff</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <Icon name="lucide:building-2" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ departments.length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">Departments</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
              <Icon name="lucide:briefcase" class="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ totalOffices }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">Offices</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center">
              <Icon name="lucide:users" class="h-6 w-6 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ totalStaff }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">Staff</p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
              <Icon name="lucide:file-text" class="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ totalDocuments }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">Documents</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Departments Section -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">Departments</h2>
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
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
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
  {
    id: 5,
    name: 'Department of Personnel',
    nameKh: 'នាយកដ្ឋានបុគ្គលិក',
    director: 'Mrs. Sreypov Dara',
    directorKh: 'លោកស្រី ស្រីពៅ ដារា',
    offices: 4,
    staff: 38,
    documents: 156,
  },
  {
    id: 6,
    name: 'Department of Finance',
    nameKh: 'នាយកដ្ឋានហិរញ្ញវត្ថុ',
    director: 'Mr. Kimheng Ratanak',
    directorKh: 'លោក គឹមហេង រតនៈ',
    offices: 5,
    staff: 45,
    documents: 234,
  },
])

const totalOffices = computed(() => departments.value.reduce((sum, dept) => sum + dept.offices, 0))
const totalStaff = computed(() => departments.value.reduce((sum, dept) => sum + dept.staff, 0))
const totalDocuments = computed(() => departments.value.reduce((sum, dept) => sum + dept.documents, 0))

const viewDepartment = (deptId: number) => {
  navigateTo(`/departments/${deptId}`)
}
</script>
