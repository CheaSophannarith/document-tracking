<template>
  <div
    @click="$emit('view', department.id)"
    class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
  >
    <div class="flex items-start justify-between mb-4">
      <div class="flex-1">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">
          {{ department.name }}
        </h3>
        <p class="text-sm text-blue-600 dark:text-blue-400 mb-3">
          {{ department.nameKh }}
        </p>
        <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
          <Icon name="lucide:user-circle" class="h-4 w-4" />
          <span>{{ department.director }}</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-500 ml-6">
          {{ department.directorKh }}
        </p>
      </div>
      <Icon name="lucide:chevron-right" class="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div class="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ department.offices }}</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">Offices</p>
      </div>
      <div class="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ department.staff }}</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">Staff</p>
      </div>
      <div class="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <p class="text-lg font-bold text-slate-900 dark:text-white">{{ department.documents }}</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">Docs</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  department: {
    id: number
    name: string
    nameKh: string
    director: string
    directorKh: string
    offices: number
    staff: number
    documents: number
  }
}>()

defineEmits<{
  view: [id: number]
}>()
</script>
