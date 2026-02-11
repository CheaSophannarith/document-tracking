<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
        <NuxtLink to="/" class="hover:text-emerald-600">Dashboard</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4" />
        <NuxtLink to="/departments" class="hover:text-emerald-600">Departments</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4" />
        <span class="text-slate-900 dark:text-white font-medium">Department of Hospital Services</span>
      </nav>

      <!-- Department Header -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-lg">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Icon name="lucide:building-2" class="h-7 w-7 text-white" />
          </div>
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Department of Hospital Services
            </h1>
            <p class="text-base text-blue-600 dark:text-blue-400 mb-3">
              នាយកដ្ឋានសេវាមន្ទីរពេទ្យ
            </p>
            <div class="flex flex-wrap gap-4 text-sm">
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:user-circle" class="h-4 w-4" />
                <span>Director: Dr. Sok Siphana</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:briefcase" class="h-4 w-4" />
                <span>8 Offices</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:users" class="h-4 w-4" />
                <span>86 Staff Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Offices Section -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Offices</h2>
          <Button class="gap-2" @click="showAddOffice = true">
            <Icon name="lucide:plus" class="h-4 w-4" />
            Add Office
          </Button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <OfficeCard
            v-for="office in offices"
            :key="office.id"
            :office="office"
          />
        </div>
      </div>

      <!-- Department Staff (Direct) -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">
            បុគ្គលិកនាយកដ្ឋាន / Department Staff
          </h2>
          <Button variant="outline" size="sm" class="gap-2" @click="showAddStaffModal = true">
            <Icon name="lucide:user-plus" class="h-4 w-4" />
            បន្ថែមបុគ្គលិក / Add Staff
          </Button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <UserCard
            v-for="staff in departmentStaff"
            :key="staff.id"
            :user="staff"
          />
        </div>
      </div>

      <!-- Add Staff Modal -->
      <AddUserModal
        v-model="showAddStaffModal"
        account-type="department"
        :current-department-id="1"
        :offices="offices"
        @add-user="handleAddStaff"
      />

      <!-- Documents Section -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Department Documents</h2>
          <div class="flex gap-2">
            <Button variant="outline" size="sm" @click="showAllDepartments = !showAllDepartments">
              <Icon :name="showAllDepartments ? 'lucide:building-2' : 'lucide:buildings'" class="h-4 w-4 mr-2" />
              {{ showAllDepartments ? 'All Departments' : 'This Department' }}
            </Button>
            <Button size="sm" class="gap-2" @click="navigateTo('/upload')">
              <Icon name="lucide:upload" class="h-4 w-4" />
              Upload Document
            </Button>
          </div>
        </div>

        <!-- Department Filter (when showing all) -->
        <div v-if="showAllDepartments" class="mb-4">
          <select
            v-model="selectedDepartmentFilter"
            class="w-full md:w-64 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm"
          >
            <option value="">All Departments</option>
            <option value="1">Department of Hospital Services</option>
            <option value="2">Department of Preventive Medicine</option>
            <option value="3">Department of Drugs and Food</option>
            <option value="4">Department of Planning</option>
            <option value="5">Department of Personnel</option>
            <option value="6">Department of Finance</option>
          </select>
        </div>

        <div class="grid grid-cols-1 gap-3">
          <DocumentCard
            v-for="doc in filteredDocuments"
            :key="doc.id"
            :document="doc"
          />
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const showAddOffice = ref(false)
const showAddStaffModal = ref(false)
const showAllDepartments = ref(false)
const selectedDepartmentFilter = ref('')

const offices = ref([
  {
    id: 1,
    name: 'Emergency Services Office',
    nameKh: 'ការិយាល័យសេវាកម្មបន្ទាន់',
    chief: 'Dr. Rath Dara',
    chiefKh: 'វេជ្ជបណ្ឌិត រ័ត្ន ដារា',
    staff: 24,
    documents: 89,
  },
  {
    id: 2,
    name: 'Surgical Services Office',
    nameKh: 'ការិយាល័យសេវាវះកាត់',
    chief: 'Dr. Mey Sophal',
    chiefKh: 'វេជ្ជបណ្ឌិត ម៉ី សុផល',
    staff: 18,
    documents: 67,
  },
  {
    id: 3,
    name: 'Pediatric Office',
    nameKh: 'ការិយាល័យកុមារ',
    chief: 'Dr. Chan Sreypov',
    chiefKh: 'វេជ្ជបណ្ឌិត ច័ន្ទ ស្រីពៅ',
    staff: 15,
    documents: 54,
  },
  {
    id: 4,
    name: 'Maternity Office',
    nameKh: 'ការិយាល័យសម្ភព',
    chief: 'Dr. Lim Bopha',
    chiefKh: 'វេជ្ជបណ្ឌិត លឹម បុប្ផា',
    staff: 12,
    documents: 42,
  },
])

// Department-level staff (direct to department, not office)
const departmentStaff = ref([
  {
    id: 1,
    name: 'Dr. Sok Siphana',
    nameKh: 'វេជ្ជបណ្ឌិត សុខ សុីផាណា',
    email: 'sok.siphana@health.gov.kh',
    role: 'Department Director',
    department: 'Department of Hospital Services',
    office: null, // Direct to department
    permissions: ['upload', 'download', 'approve', 'manage_users'],
    status: 'active',
    avatar: 'SS',
    lastActive: '2026-02-11T10:30:00',
  },
  {
    id: 3,
    name: 'Mr. Kimheng Ratanak',
    nameKh: 'លោក គឹមហេង រតនៈ',
    email: 'kimheng.ratanak@health.gov.kh',
    role: 'Department Coordinator',
    department: 'Department of Hospital Services',
    office: null, // Direct to department
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'KR',
    lastActive: '2026-02-11T08:15:00',
  },
  {
    id: 4,
    name: 'Mrs. Chea Mony',
    nameKh: 'លោកស្រី ជា ម៉ូនី',
    email: 'chea.mony@health.gov.kh',
    role: 'Administrative Officer',
    department: 'Department of Hospital Services',
    office: null, // Direct to department
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'CM',
    lastActive: '2026-02-10T16:30:00',
  },
])

// All documents from all departments
const allDocuments = ref([
  // Department of Hospital Services (ID: 1)
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
    uploadedAt: '2026-02-10T11:20:00',
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
  // Department of Preventive Medicine (ID: 2)
  {
    id: 4,
    name: 'Vaccination Campaign Report.pdf',
    type: 'PDF',
    size: '4.5 MB',
    status: 'approved',
    uploadedBy: 'Dr. Chea Vibol',
    uploadedAt: '2026-02-09T10:00:00',
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
    uploadedAt: '2026-02-08T14:15:00',
    department: 'Department of Preventive Medicine',
    departmentId: '2',
    office: 'Disease Control Office',
    tags: ['Surveillance', 'Data', 'Q1'],
  },
  // Department of Drugs and Food (ID: 3)
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

// Filtered documents based on department selection
const filteredDocuments = computed(() => {
  if (!showAllDepartments.value) {
    // Show only current department documents
    return allDocuments.value.filter(doc => doc.departmentId === '1')
  } else {
    // Show all or filtered by selected department
    if (selectedDepartmentFilter.value) {
      return allDocuments.value.filter(doc => doc.departmentId === selectedDepartmentFilter.value)
    }
    return allDocuments.value
  }
})

// Handle adding new staff
const handleAddStaff = (userData: any) => {
  const newStaff = {
    id: departmentStaff.value.length + 100,
    name: userData.name,
    nameKh: userData.nameKh,
    email: userData.email,
    role: userData.roleDisplay.en,
    roleKh: userData.roleDisplay.kh,
    department: 'Department of Hospital Services',
    office: userData.officeId ? offices.value.find(o => o.id === userData.officeId)?.name : null,
    permissions: userData.permissions,
    status: userData.status,
    avatar: userData.avatar,
    lastActive: userData.lastActive,
  }

  departmentStaff.value.push(newStaff)
  console.log('New staff added:', newStaff)
}
</script>
