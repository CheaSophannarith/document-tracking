<template>
  <NuxtLink
    :to="item.path"
    class="group relative flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
    :class="[
      isActive
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100',
    ]"
  >
    <!-- Active Indicator -->
    <div
      v-if="isActive"
      class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
    ></div>

    <Icon
      :name="item.icon"
      class="h-5 w-5 flex-shrink-0 transition-all duration-200"
      :class="[
        isActive ? 'text-white scale-110' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 group-hover:scale-110',
        collapsed ? '' : 'mr-3',
      ]"
    />

    <span v-if="!collapsed" class="flex-1 truncate">{{ item.name }}</span>

    <span
      v-if="item.badge && !collapsed"
      class="ml-auto inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold"
      :class="[
        isActive
          ? 'bg-white/20 text-white'
          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      ]"
    >
      {{ item.badge }}
    </span>

    <!-- Tooltip for collapsed state -->
    <div
      v-if="collapsed"
      class="absolute left-full ml-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50 shadow-xl"
    >
      {{ item.name }}
      <span v-if="item.badge" class="ml-2 px-1.5 py-0.5 bg-blue-500 rounded text-[10px]">{{ item.badge }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    name: string
    icon: string
    path: string
    badge?: string
  }
  collapsed: boolean
  isActive: boolean
}>()
</script>
