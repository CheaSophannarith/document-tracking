<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Ministries Structure
          </h1>
          <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">
            រាជរដ្ឋាភិបាលកម្ពុជា - Royal Government of Cambodia
          </p>
        </div>
        <Button class="gap-2 w-full sm:w-auto" @click="showAddMinistry = true">
          <Icon name="lucide:plus" class="h-4 w-4" />
          Add Ministry
        </Button>
      </div>

      <!-- Ministry Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <MinistryCard
          v-for="ministry in ministries"
          :key="ministry.id"
          :ministry="ministry"
          @view="viewMinistry"
        />
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const showAddMinistry = ref(false)

const ministries = ref([
  {
    id: 1,
    name: 'Ministry of Health',
    nameKh: 'ក្រសួងសុខាភិបាល',
    code: 'MOH',
    minister: 'H.E. Mam Bunheng',
    ministerKh: 'ឯកឧត្តម ម៉ម ប៊ុនហេង',
    departments: 12,
    offices: 48,
    staff: 342,
    documents: 1284,
    icon: 'heart-pulse',
    color: 'emerald',
  },
  {
    id: 2,
    name: 'Ministry of Economy and Finance',
    nameKh: 'ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ',
    code: 'MEF',
    minister: 'H.E. Aun Pornmoniroth',
    ministerKh: 'ឯកឧត្តម អូន ព័រម៉ុនីរ័ត្ន',
    departments: 15,
    offices: 67,
    staff: 456,
    documents: 2156,
    icon: 'wallet',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Ministry of Education, Youth and Sport',
    nameKh: 'ក្រសួងអប់រំ យុវជន និងកីឡា',
    code: 'MOEYS',
    minister: 'H.E. Hang Chuon Naron',
    ministerKh: 'ឯកឧត្តម ហង្ស ជួន ណារ៉ុន',
    departments: 18,
    offices: 89,
    staff: 623,
    documents: 3421,
    icon: 'graduation-cap',
    color: 'violet',
  },
  {
    id: 4,
    name: 'Ministry of Interior',
    nameKh: 'ក្រសួងមហាផ្ទៃ',
    code: 'MOI',
    minister: 'H.E. Sar Kheng',
    ministerKh: 'ឯកឧត្តម ស ខេង',
    departments: 14,
    offices: 72,
    staff: 512,
    documents: 1876,
    icon: 'shield',
    color: 'orange',
  },
])

const viewMinistry = (ministryId: number) => {
  navigateTo(`/ministries/${ministryId}`)
}
</script>
