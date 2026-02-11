<template>
  <div
    class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-pointer"
    @click="navigateTo(`/offices/${office.id}`)"
  >
    <div class="flex items-start gap-3 mb-3">
      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
        <Icon name="lucide:briefcase" class="h-5 w-5 text-blue-600 dark:text-blue-400" />
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="font-semibold text-slate-900 dark:text-white text-sm mb-0.5">
          {{ office.name }}
        </h3>
        <p class="text-xs text-blue-600 dark:text-blue-400">
          {{ office.nameKh }}
        </p>
      </div>
      <Icon name="lucide:chevron-right" class="h-4 w-4 text-slate-400" />
    </div>

    <div class="space-y-1.5 mb-3">
      <div class="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
        <Icon name="lucide:user" class="h-3.5 w-3.5" />
        <span>{{ office.chief }}</span>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-500 ml-5">
        {{ office.chiefKh }}
      </p>
    </div>

    <div class="flex items-center gap-3 text-xs">
      <div class="flex items-center gap-1 text-slate-600 dark:text-slate-400">
        <Icon name="lucide:users" class="h-3.5 w-3.5" />
        <span>{{ office.staff }} staff</span>
      </div>
      <div class="flex items-center gap-1 text-slate-600 dark:text-slate-400">
        <Icon name="lucide:file-text" class="h-3.5 w-3.5" />
        <span>{{ office.documents }} docs</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  office: {
    id: number
    name: string
    nameKh: string
    chief: string
    chiefKh: string
    staff: number
    documents: number
  }
}>()
</script>
