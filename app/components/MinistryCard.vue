<template>
  <div
    @click="$emit('view', ministry.id)"
    class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    :class="[
      ministry.color === 'blue' && 'hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10',
      ministry.color === 'emerald' && 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10',
      ministry.color === 'violet' && 'hover:shadow-violet-500/20 dark:hover:shadow-violet-500/10',
      ministry.color === 'orange' && 'hover:shadow-orange-500/20 dark:hover:shadow-orange-500/10',
    ]"
  >
    <!-- Header -->
    <div class="flex items-start gap-4 mb-6">
      <div
        class="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        :class="[
          ministry.color === 'blue' && 'bg-gradient-to-br from-blue-500 to-blue-600',
          ministry.color === 'emerald' && 'bg-gradient-to-br from-emerald-500 to-emerald-600',
          ministry.color === 'violet' && 'bg-gradient-to-br from-violet-500 to-violet-600',
          ministry.color === 'orange' && 'bg-gradient-to-br from-orange-500 to-orange-600',
        ]"
      >
        <Icon :name="`lucide:${ministry.icon}`" class="h-7 w-7 text-white" />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2 mb-1">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">
            {{ ministry.name }}
          </h3>
          <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono rounded">
            {{ ministry.code }}
          </span>
        </div>
        <p class="text-sm text-blue-600 dark:text-blue-400 font-khmer mb-2">
          {{ ministry.nameKh }}
        </p>
        <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <Icon name="lucide:user-circle" class="h-4 w-4" />
          <span>{{ ministry.minister }}</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
          {{ ministry.ministerKh }}
        </p>
      </div>
    </div>

    <!-- Statistics Grid -->
    <div class="grid grid-cols-4 gap-3 mb-4">
      <div class="text-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <Icon name="lucide:building-2" class="h-5 w-5 mx-auto mb-1 text-slate-400" />
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ ministry.departments }}</p>
        <p class="text-[10px] text-slate-600 dark:text-slate-400">Departments</p>
      </div>
      <div class="text-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <Icon name="lucide:briefcase" class="h-5 w-5 mx-auto mb-1 text-slate-400" />
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ ministry.offices }}</p>
        <p class="text-[10px] text-slate-600 dark:text-slate-400">Offices</p>
      </div>
      <div class="text-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <Icon name="lucide:users" class="h-5 w-5 mx-auto mb-1 text-slate-400" />
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ ministry.staff }}</p>
        <p class="text-[10px] text-slate-600 dark:text-slate-400">Staff</p>
      </div>
      <div class="text-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <Icon name="lucide:file-text" class="h-5 w-5 mx-auto mb-1 text-slate-400" />
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ ministry.documents }}</p>
        <p class="text-[10px] text-slate-600 dark:text-slate-400">Documents</p>
      </div>
    </div>

    <!-- Action -->
    <div class="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
      <span class="text-sm text-slate-600 dark:text-slate-400">View Structure</span>
      <Icon name="lucide:arrow-right" class="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ministry: {
    id: number
    name: string
    nameKh: string
    code: string
    minister: string
    ministerKh: string
    departments: number
    offices: number
    staff: number
    documents: number
    icon: string
    color: string
  }
}>()

defineEmits<{
  view: [id: number]
}>()
</script>
