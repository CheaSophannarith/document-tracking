<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Ministry/Department Header -->
      <div
        v-if="user?.accountType === 'ministry' || !user"
        class="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 mb-6 text-white shadow-xl"
      >
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon name="lucide:heart-pulse" class="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 class="text-xl font-bold">Ministry of Health</h2>
            <p class="text-sm text-white/90">ក្រសួងសុខាភិបាល</p>
          </div>
        </div>
      </div>

      <!-- Department Account Header -->
      <div
        v-else-if="user?.accountType === 'department'"
        class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 mb-6 text-white shadow-xl"
      >
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon name="lucide:building-2" class="h-7 w-7 text-white" />
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 bg-white/20 rounded text-xs font-mono">DEPT</span>
            </div>
            <h2 class="text-xl lg:text-2xl font-bold">{{ user.department }}</h2>
            <p class="text-sm text-white/90 mb-2">{{ user.departmentKh }}</p>
            <div class="flex items-center gap-2 text-sm">
              <Icon name="lucide:user-circle" class="h-4 w-4" />
              <span>Director: {{ user.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Office Account Header -->
      <div
        v-else-if="user?.accountType === 'office'"
        class="bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl p-6 mb-6 text-white shadow-xl"
      >
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon name="lucide:briefcase" class="h-7 w-7 text-white" />
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 bg-white/20 rounded text-xs font-mono">OFFICE</span>
            </div>
            <h2 class="text-xl lg:text-2xl font-bold">{{ user.office }}</h2>
            <p class="text-sm text-white/90 mb-1">{{ user.officeKh }}</p>
            <p class="text-xs text-white/80 mb-2">{{ user.department }}</p>
            <div class="flex items-center gap-2 text-sm">
              <Icon name="lucide:user-circle" class="h-4 w-4" />
              <span>Chief: {{ user.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <StatsCard
          title="Total Documents"
          value="1,284"
          change="+12.5%"
          trend="up"
          icon="file-text"
        />
        <StatsCard
          title="Pending Review"
          value="47"
          change="+5.2%"
          trend="up"
          icon="clock"
        />
        <StatsCard
          title="Approved"
          value="892"
          change="+8.1%"
          trend="up"
          icon="check-circle"
        />
        <StatsCard
          title="Rejected"
          value="23"
          change="-3.4%"
          trend="down"
          icon="x-circle"
        />
      </div>

      <!-- Quick Actions - Ministry Account -->
      <div v-if="user?.accountType === 'ministry' || !user" class="mb-6 lg:mb-8">
        <h2 class="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <ActionCard
            title="View Departments"
            description="Browse all departments"
            icon="building-2"
            color="emerald"
            @click="navigateTo('/departments')"
          />
          <ActionCard
            title="Upload Document"
            description="Add new documents"
            icon="upload"
            color="blue"
            @click="navigateTo('/upload')"
          />
          <ActionCard
            title="Manage Staff"
            description="View and manage staff"
            icon="users"
            color="violet"
            @click="navigateTo('/users')"
          />
        </div>
      </div>

      <!-- Quick Actions - Department Account -->
      <div v-else-if="user?.accountType === 'department'" class="mb-6 lg:mb-8">
        <h2 class="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <ActionCard
            title="Department Offices"
            description="View all offices in department"
            icon="briefcase"
            color="blue"
            @click="navigateTo('/departments/1')"
          />
          <ActionCard
            title="Upload Document"
            description="Add department documents"
            icon="upload"
            color="emerald"
            @click="navigateTo('/upload')"
          />
          <ActionCard
            title="Department Staff"
            description="Manage department staff"
            icon="users"
            color="violet"
            @click="navigateTo('/users')"
          />
        </div>
      </div>

      <!-- Quick Actions - Office Account -->
      <div v-else-if="user?.accountType === 'office'" class="mb-6 lg:mb-8">
        <h2 class="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <ActionCard
            title="Office Documents"
            description="View office documents"
            icon="file-text"
            color="blue"
            @click="navigateTo('/documents')"
          />
          <ActionCard
            title="Upload Document"
            description="Add office documents"
            icon="upload"
            color="violet"
            @click="navigateTo('/upload')"
          />
          <ActionCard
            title="Office Details"
            description="View office information"
            icon="briefcase"
            color="emerald"
            @click="navigateTo('/offices/1')"
          />
        </div>
      </div>

      <!-- Recent Documents -->
      <div>
        <div class="flex items-center justify-between mb-4 lg:mb-6">
          <h2 class="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">Recent Documents</h2>
          <Button variant="ghost" class="text-sm" @click="navigateTo('/documents')">
            <span class="hidden sm:inline">View All</span>
            <span class="sm:hidden">All</span>
            <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div class="grid grid-cols-1 gap-3 lg:gap-4">
          <DocumentCard
            v-for="doc in recentDocuments"
            :key="doc.id"
            :document="doc"
          />
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const user = ref(null)

onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    user.value = JSON.parse(userData)
  }
})

const allDocuments = ref([
  // Department of Hospital Services
  {
    id: 1,
    name: 'Emergency Protocol Guidelines 2026.pdf',
    type: 'PDF',
    size: '3.2 MB',
    status: 'approved',
    uploadedBy: 'Dr. Rath Dara',
    uploadedAt: '2026-02-10T14:30:00',
    department: 'Department of Hospital Services',
    departmentId: '1',
    office: 'Emergency Services Office',
    tags: ['Protocol', 'Emergency', 'Guidelines'],
  },
  {
    id: 2,
    name: 'Surgical Equipment Inventory.xlsx',
    type: 'XLSX',
    size: '892 KB',
    status: 'pending',
    uploadedBy: 'Dr. Mey Sophal',
    uploadedAt: '2026-02-10T09:15:00',
    department: 'Department of Hospital Services',
    departmentId: '1',
    office: 'Surgical Services Office',
    tags: ['Inventory', 'Equipment'],
  },
  {
    id: 3,
    name: 'Pediatric Care Standards.pdf',
    type: 'PDF',
    size: '2.1 MB',
    status: 'approved',
    uploadedBy: 'Dr. Chan Sreypov',
    uploadedAt: '2026-02-09T16:45:00',
    department: 'Department of Hospital Services',
    departmentId: '1',
    office: 'Pediatric Office',
    tags: ['Standards', 'Pediatric'],
  },
  // Department of Preventive Medicine
  {
    id: 4,
    name: 'Vaccination Campaign Report.pdf',
    type: 'PDF',
    size: '4.5 MB',
    status: 'approved',
    uploadedBy: 'Dr. Chea Vibol',
    uploadedAt: '2026-02-09T11:20:00',
    department: 'Department of Preventive Medicine',
    departmentId: '2',
    office: 'Immunization Office',
    tags: ['Vaccination', 'Campaign', 'Report'],
  },
  {
    id: 5,
    name: 'Disease Surveillance Data Q1.xlsx',
    type: 'XLSX',
    size: '1.3 MB',
    status: 'pending',
    uploadedBy: 'Mr. Vanna Rithy',
    uploadedAt: '2026-02-08T15:00:00',
    department: 'Department of Preventive Medicine',
    departmentId: '2',
    office: 'Disease Control Office',
    tags: ['Surveillance', 'Data', 'Q1'],
  },
  // Department of Drugs and Food
  {
    id: 6,
    name: 'Drug Quality Control Report.pdf',
    type: 'PDF',
    size: '2.8 MB',
    status: 'approved',
    uploadedBy: 'Dr. Pich Boravy',
    uploadedAt: '2026-02-08T09:30:00',
    department: 'Department of Drugs and Food',
    departmentId: '3',
    office: 'Pharmaceutical Quality Office',
    tags: ['Quality Control', 'Drugs'],
  },
])

// Filter documents based on user account type
const recentDocuments = computed(() => {
  if (!user.value) return allDocuments.value

  if (user.value.accountType === 'department') {
    // Department account sees only their department documents
    return allDocuments.value.filter(doc => doc.departmentId === user.value.departmentId)
  } else if (user.value.accountType === 'office') {
    // Office account sees only their office documents
    return allDocuments.value.filter(doc =>
      doc.departmentId === user.value.departmentId &&
      doc.office === user.value.office
    )
  }

  // Ministry account sees all documents
  return allDocuments.value
})
</script>
