<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
        <NuxtLink to="/" class="hover:text-emerald-600">Dashboard</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4" />
        <NuxtLink to="/departments" class="hover:text-emerald-600">Departments</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4" />
        <NuxtLink to="/departments/1" class="hover:text-emerald-600">Department of Hospital Services</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4" />
        <span class="text-slate-900 dark:text-white font-medium">Emergency Services Office</span>
      </nav>

      <!-- Office Header -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-lg">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Icon name="lucide:briefcase" class="h-7 w-7 text-white" />
          </div>
          <div class="flex-1">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Emergency Services Office
            </h1>
            <p class="text-base text-blue-600 dark:text-blue-400 mb-3">
              ការិយាល័យសេវាកម្មបន្ទាន់
            </p>
            <div class="flex flex-wrap gap-4 text-sm">
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:user-circle" class="h-4 w-4" />
                <span>Chief: Dr. Rath Dara (វេជ្ជបណ្ឌិត រ័ត្ន ដារា)</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:users" class="h-4 w-4" />
                <span>{{ officeStaff.length }} Staff Members</span>
              </div>
              <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Icon name="lucide:file-text" class="h-4 w-4" />
                <span>{{ officeDocuments.length }} Documents</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Office Staff -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Office Staff</h2>
          <Button variant="outline" size="sm" class="gap-2">
            <Icon name="lucide:user-plus" class="h-4 w-4" />
            Add Staff
          </Button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <UserCard
            v-for="staff in officeStaff"
            :key="staff.id"
            :user="staff"
          />
        </div>
      </div>

      <!-- Office Documents -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Office Documents</h2>
          <Button size="sm" class="gap-2" @click="navigateTo('/upload')">
            <Icon name="lucide:upload" class="h-4 w-4" />
            Upload Document
          </Button>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <DocumentCard
            v-for="doc in officeDocuments"
            :key="doc.id"
            :document="doc"
          />
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
// Office-level staff (assigned to this specific office)
const officeStaff = ref([
  {
    id: 2,
    name: 'Dr. Rath Dara',
    nameKh: 'វេជ្ជបណ្ឌិត រ័ត្ន ដារា',
    email: 'rath.dara@health.gov.kh',
    role: 'Office Chief',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    permissions: ['upload', 'download', 'approve'],
    status: 'active',
    avatar: 'RD',
    lastActive: '2026-02-11T09:45:00',
  },
  {
    id: 5,
    name: 'Dr. Lim Sophea',
    nameKh: 'វេជ្ជបណ្ឌិត លឹម សុភា',
    email: 'lim.sophea@health.gov.kh',
    role: 'Emergency Specialist',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'LS',
    lastActive: '2026-02-11T11:20:00',
  },
  {
    id: 6,
    name: 'Mrs. Chantha Bopha',
    nameKh: 'លោកស្រី ច័ន្ទា បុប្ផា',
    email: 'chantha.bopha@health.gov.kh',
    role: 'Nurse Coordinator',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    permissions: ['upload', 'download'],
    status: 'active',
    avatar: 'CB',
    lastActive: '2026-02-10T15:30:00',
  },
  {
    id: 7,
    name: 'Mr. Sok Vichet',
    nameKh: 'លោក សុខ វិចិត្រ',
    email: 'sok.vichet@health.gov.kh',
    role: 'Administrative Assistant',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    permissions: ['download'],
    status: 'active',
    avatar: 'SV',
    lastActive: '2026-02-11T08:00:00',
  },
])

const officeDocuments = ref([
  {
    id: 1,
    name: 'Emergency Protocol Guidelines 2026.pdf',
    type: 'PDF',
    size: '3.2 MB',
    status: 'approved',
    uploadedBy: 'Dr. Rath Dara',
    uploadedAt: '2026-02-10T14:30:00',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    tags: ['Protocol', 'Emergency', 'Guidelines'],
  },
  {
    id: 8,
    name: 'Monthly Emergency Cases Report.xlsx',
    type: 'XLSX',
    size: '1.5 MB',
    status: 'approved',
    uploadedBy: 'Dr. Lim Sophea',
    uploadedAt: '2026-02-09T13:15:00',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    tags: ['Report', 'Cases', 'Monthly'],
  },
  {
    id: 9,
    name: 'Emergency Equipment Checklist.pdf',
    type: 'PDF',
    size: '892 KB',
    status: 'pending',
    uploadedBy: 'Mrs. Chantha Bopha',
    uploadedAt: '2026-02-08T10:45:00',
    department: 'Department of Hospital Services',
    office: 'Emergency Services Office',
    tags: ['Equipment', 'Checklist'],
  },
])
</script>
