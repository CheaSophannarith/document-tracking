<template>
  <div class="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
    <!-- Gradient Overlay on Hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div class="relative">
      <div class="flex items-start justify-between mb-4">
        <div class="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20">
          <Icon :name="`lucide:${icon}`" class="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div class="flex items-center space-x-1 text-sm font-medium" :class="[
          trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
        ]">
          <Icon :name="trend === 'up' ? 'lucide:trending-up' : 'lucide:trending-down'" class="h-4 w-4" />
          <span>{{ change }}</span>
        </div>
      </div>

      <h3 class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{{ title }}</h3>
      <p class="text-3xl font-bold text-slate-900 dark:text-white">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: string
}>()
</script>
