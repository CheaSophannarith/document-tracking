<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Departments</h1>
          <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">Organize documents by department</p>
        </div>
        <Button class="gap-2 w-full sm:w-auto">
          <Icon name="lucide:plus" class="h-4 w-4" />
          <span class="sm:hidden">New</span>
          <span class="hidden sm:inline">New Department</span>
        </Button>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div
          v-for="category in categories"
          :key="category.id"
          class="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden active:scale-[0.98]"
              :class="[
                category.color === 'blue' && 'hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10',
                category.color === 'emerald' && 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10',
                category.color === 'violet' && 'hover:shadow-violet-500/20 dark:hover:shadow-violet-500/10',
                category.color === 'orange' && 'hover:shadow-orange-500/20 dark:hover:shadow-orange-500/10',
                category.color === 'red' && 'hover:shadow-red-500/20 dark:hover:shadow-red-500/10',
              ]"
            >
              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :class="[
                  category.color === 'blue' && 'bg-gradient-to-br from-blue-500/5 to-blue-600/5',
                  category.color === 'emerald' && 'bg-gradient-to-br from-emerald-500/5 to-emerald-600/5',
                  category.color === 'violet' && 'bg-gradient-to-br from-violet-500/5 to-violet-600/5',
                  category.color === 'orange' && 'bg-gradient-to-br from-orange-500/5 to-orange-600/5',
                  category.color === 'red' && 'bg-gradient-to-br from-red-500/5 to-red-600/5',
                ]"
              ></div>

              <div class="relative">
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    :class="[
                      category.color === 'blue' && 'bg-gradient-to-br from-blue-500 to-blue-600',
                      category.color === 'emerald' && 'bg-gradient-to-br from-emerald-500 to-emerald-600',
                      category.color === 'violet' && 'bg-gradient-to-br from-violet-500 to-violet-600',
                      category.color === 'orange' && 'bg-gradient-to-br from-orange-500 to-orange-600',
                      category.color === 'red' && 'bg-gradient-to-br from-red-500 to-red-600',
                    ]"
              >
                <Icon :name="`lucide:${category.icon}`" class="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <button class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <Icon name="lucide:more-vertical" class="h-5 w-5 text-slate-500 dark:text-slate-400" />
              </button>
            </div>

            <h3 class="text-base lg:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ category.name }}</h3>
            <p class="text-xs lg:text-sm text-blue-600 dark:text-blue-400 mb-2 font-khmer">{{ category.nameKh }}</p>
            <p class="text-xs lg:text-sm text-slate-600 dark:text-slate-400 mb-4">{{ category.description }}</p>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3 lg:space-x-4 text-sm text-slate-600 dark:text-slate-400">
                <div class="flex items-center space-x-1">
                  <Icon name="lucide:file-text" class="h-4 w-4" />
                  <span>{{ category.documents }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Icon name="lucide:hard-drive" class="h-4 w-4" />
                  <span>{{ category.size }}</span>
                </div>
              </div>
              <Icon name="lucide:arrow-right" class="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Ministry of Economy and Finance',
    nameKh: 'ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ',
    description: 'Budget, financial reports, economic policies',
    icon: 'wallet',
    color: 'blue',
    documents: 342,
    size: '45 GB',
  },
  {
    id: 2,
    name: 'Ministry of Health',
    nameKh: 'ក្រសួងសុខាភិបាល',
    description: 'Healthcare policies, medical reports, public health',
    icon: 'heart-pulse',
    color: 'emerald',
    documents: 298,
    size: '38 GB',
  },
  {
    id: 3,
    name: 'Ministry of Education, Youth and Sport',
    nameKh: 'ក្រសួងអប់រំ យុវជន និងកីឡា',
    description: 'Education policies, curriculum, sports programs',
    icon: 'graduation-cap',
    color: 'violet',
    documents: 456,
    size: '52 GB',
  },
  {
    id: 4,
    name: 'Ministry of Interior',
    nameKh: 'ក្រសួងមហាផ្ទៃ',
    description: 'Internal affairs, local administration, security',
    icon: 'shield',
    color: 'orange',
    documents: 384,
    size: '41 GB',
  },
  {
    id: 5,
    name: 'Ministry of Foreign Affairs',
    nameKh: 'ក្រសួងការបរទេស',
    description: 'International relations, diplomatic affairs',
    icon: 'globe',
    color: 'blue',
    documents: 234,
    size: '28 GB',
  },
  {
    id: 6,
    name: 'Ministry of Agriculture',
    nameKh: 'ក្រសួងកសិកម្ម',
    description: 'Agriculture, forestry, fisheries development',
    icon: 'leaf',
    color: 'emerald',
    documents: 312,
    size: '35 GB',
  },
  {
    id: 7,
    name: 'Ministry of Labour',
    nameKh: 'ក្រសួងការងារ',
    description: 'Employment, vocational training, labor rights',
    icon: 'briefcase',
    color: 'indigo',
    documents: 198,
    size: '22 GB',
  },
  {
    id: 8,
    name: 'Ministry of Commerce',
    nameKh: 'ក្រសួងពាណិជ្ជកម្ម',
    description: 'Trade policies, business regulations, commerce',
    icon: 'shopping-bag',
    color: 'purple',
    documents: 267,
    size: '31 GB',
  },
  {
    id: 9,
    name: 'Ministry of Justice',
    nameKh: 'ក្រសួងយុត្តិធម៌',
    description: 'Legal affairs, judicial system, law enforcement',
    icon: 'scale',
    color: 'red',
    documents: 189,
    size: '26 GB',
  },
  {
    id: 10,
    name: 'Ministry of Information',
    nameKh: 'ក្រសួងព័ត៌មាន',
    description: 'Media, communications, public information',
    icon: 'radio',
    color: 'cyan',
    documents: 156,
    size: '19 GB',
  },
  {
    id: 11,
    name: 'Ministry of Planning',
    nameKh: 'ក្រសួងផែនការ',
    description: 'National planning, development strategies',
    icon: 'map',
    color: 'teal',
    documents: 223,
    size: '27 GB',
  },
  {
    id: 12,
    name: 'Ministry of Public Works',
    nameKh: 'ក្រសួងសាធារណការ',
    description: 'Infrastructure, transport, construction',
    icon: 'hard-hat',
    color: 'amber',
    documents: 301,
    size: '44 GB',
  },
]
</script>
