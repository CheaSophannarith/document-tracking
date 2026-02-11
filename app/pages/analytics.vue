<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="mb-6 lg:mb-8">
        <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Reports & Analytics</h1>
        <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">Track ministry document metrics and insights</p>
      </div>

      <!-- Time Range Selector -->
      <div class="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6 overflow-x-auto pb-2">
        <Button variant="outline" size="sm" class="whitespace-nowrap">7 days</Button>
        <Button variant="outline" size="sm" class="whitespace-nowrap">30 days</Button>
        <Button variant="outline" size="sm" class="whitespace-nowrap hidden sm:inline-flex">3 months</Button>
        <Button size="sm" class="whitespace-nowrap">Custom</Button>
      </div>

      <!-- Main Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <StatsCard title="Total Documents" value="1,284" change="+12.5%" trend="up" icon="file-text" />
        <StatsCard title="Storage Used" value="156 GB" change="+8.2%" trend="up" icon="hard-drive" />
        <StatsCard title="Active Users" value="342" change="+15.3%" trend="up" icon="users" />
        <StatsCard title="Avg. Processing" value="2.4h" change="-12.1%" trend="down" icon="clock" />
      </div>

      <!-- Charts Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
        <!-- Document Status Chart -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-6">Document Status Distribution</h3>
              <div class="space-y-4">
                <div v-for="status in statusData" :key="status.label" class="space-y-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-slate-700 dark:text-slate-300">{{ status.label }}</span>
                    <span class="font-semibold text-slate-900 dark:text-white">{{ status.value }}</span>
                  </div>
                  <div class="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      class="h-full rounded-full transition-all duration-500"
                      :class="status.color"
                      :style="{ width: `${status.percentage}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

        <!-- Recent Activity -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6">
          <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6">Recent Activity</h3>
          <div class="space-y-3 lg:space-y-4">
                <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start space-x-3">
                  <div
                    class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    :class="activity.iconBg"
                  >
                    <Icon :name="`lucide:${activity.icon}`" class="h-5 w-5" :class="activity.iconColor" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-slate-900 dark:text-white">{{ activity.title }}</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">{{ activity.description }}</p>
                    <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">{{ activity.time }}</p>
                  </div>
                </div>
          </div>
        </div>
      </div>

      <!-- Category Analytics -->
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6">
        <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6">Documents by Department</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div v-for="category in categoryData" :key="category.name" class="text-center">
            <div
              class="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-2 lg:mb-3 rounded-xl lg:rounded-2xl flex items-center justify-center"
              :class="category.bg"
            >
              <Icon :name="`lucide:${category.icon}`" class="h-6 w-6 lg:h-8 lg:w-8" :class="category.color" />
            </div>
            <p class="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">{{ category.count }}</p>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ category.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const statusData = [
  { label: 'Approved', value: 892, percentage: 70, color: 'bg-emerald-500' },
  { label: 'Pending Review', value: 47, percentage: 15, color: 'bg-amber-500' },
  { label: 'In Review', value: 322, percentage: 25, color: 'bg-blue-500' },
  { label: 'Rejected', value: 23, percentage: 5, color: 'bg-red-500' },
]

const recentActivity = [
  {
    id: 1,
    icon: 'upload',
    iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'New document uploaded',
    description: 'Q4 Financial Report 2026.pdf by John Doe',
    time: '2 hours ago',
  },
  {
    id: 2,
    icon: 'check-circle',
    iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'Document approved',
    description: 'Employee Handbook 2026.pdf',
    time: '5 hours ago',
  },
  {
    id: 3,
    icon: 'user-plus',
    iconBg: 'bg-violet-500/10 dark:bg-violet-500/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    title: 'New user joined',
    description: 'Sarah Williams added to Marketing team',
    time: '1 day ago',
  },
]

const categoryData = [
  { name: 'Finance', count: 342, icon: 'wallet', bg: 'bg-blue-500/10 dark:bg-blue-500/20', color: 'text-blue-600 dark:text-blue-400' },
  { name: 'HR', count: 198, icon: 'users', bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', color: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'Marketing', count: 276, icon: 'megaphone', bg: 'bg-violet-500/10 dark:bg-violet-500/20', color: 'text-violet-600 dark:text-violet-400' },
  { name: 'Technical', count: 384, icon: 'code', bg: 'bg-orange-500/10 dark:bg-orange-500/20', color: 'text-orange-600 dark:text-orange-400' },
  { name: 'Legal', count: 84, icon: 'scale', bg: 'bg-red-500/10 dark:bg-red-500/20', color: 'text-red-600 dark:text-red-400' },
]
</script>
