<template>
  <button
    @click="$emit('click')"
    class="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    :class="[
      color === 'blue' && 'hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10',
      color === 'violet' && 'hover:shadow-violet-500/20 dark:hover:shadow-violet-500/10',
      color === 'emerald' && 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10',
    ]"
  >
    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      :class="[
        color === 'blue' && 'bg-gradient-to-br from-blue-500/5 to-blue-600/5',
        color === 'violet' && 'bg-gradient-to-br from-violet-500/5 to-violet-600/5',
        color === 'emerald' && 'bg-gradient-to-br from-emerald-500/5 to-emerald-600/5',
      ]"
    ></div>

    <div class="relative">
      <div
        class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        :class="[
          color === 'blue' && 'bg-gradient-to-br from-blue-500 to-blue-600',
          color === 'violet' && 'bg-gradient-to-br from-violet-500 to-violet-600',
          color === 'emerald' && 'bg-gradient-to-br from-emerald-500 to-emerald-600',
        ]"
      >
        <Icon :name="`lucide:${icon}`" class="h-6 w-6 text-white" />
      </div>
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400">{{ description }}</p>
      <Icon name="lucide:arrow-right" class="h-5 w-5 text-slate-400 mt-4 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  color: 'blue' | 'violet' | 'emerald'
}>()

defineEmits<{
  click: []
}>()
</script>
