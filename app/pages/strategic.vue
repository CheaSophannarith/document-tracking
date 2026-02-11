<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Header -->
      <div class="mb-6">
        <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
          <Icon name="lucide:crown" class="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <span>Minister's Strategic Overview</span>
        </div>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">Strategic Dashboard</h1>
        <p class="text-slate-600 dark:text-slate-400">Ministry of Health - Kingdom of Cambodia</p>
      </div>

      <!-- National Health Priorities -->
      <div class="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 lg:p-8 text-white shadow-xl mb-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon name="lucide:flag" class="h-6 w-6 text-white" />
          </div>
          <h2 class="text-2xl font-bold">National Health Priorities 2026</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div class="text-3xl font-bold mb-1">1</div>
            <p class="text-sm">Universal Health Coverage Expansion</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div class="text-3xl font-bold mb-1">2</div>
            <p class="text-sm">Maternal & Child Health Programs</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div class="text-3xl font-bold mb-1">3</div>
            <p class="text-sm">Communicable Disease Control</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div class="text-3xl font-bold mb-1">4</div>
            <p class="text-sm">Healthcare Infrastructure Development</p>
          </div>
        </div>
      </div>

      <!-- Strategic Metrics -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Health System Performance -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Health System Performance</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-slate-600 dark:text-slate-400">Hospital Bed Occupancy</span>
                <span class="font-semibold text-slate-900 dark:text-white">82%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-emerald-500 h-2 rounded-full" style="width: 82%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-slate-600 dark:text-slate-400">Doctor-Patient Ratio</span>
                <span class="font-semibold text-slate-900 dark:text-white">85%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-slate-600 dark:text-slate-400">Emergency Response Time</span>
                <span class="font-semibold text-slate-900 dark:text-white">78%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-violet-500 h-2 rounded-full" style="width: 78%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-slate-600 dark:text-slate-400">Vaccination Coverage</span>
                <span class="font-semibold text-slate-900 dark:text-white">94%</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div class="bg-emerald-500 h-2 rounded-full" style="width: 94%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Budget Allocation -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Budget Allocation 2026</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div class="flex items-center gap-3">
                <Icon name="lucide:building-2" class="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span class="text-sm font-medium text-slate-900 dark:text-white">Hospital Services</span>
              </div>
              <span class="text-sm font-bold text-blue-600 dark:text-blue-400">$18M</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <div class="flex items-center gap-3">
                <Icon name="lucide:shield-plus" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span class="text-sm font-medium text-slate-900 dark:text-white">Preventive Medicine</span>
              </div>
              <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">$12M</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
              <div class="flex items-center gap-3">
                <Icon name="lucide:pill" class="h-5 w-5 text-violet-600 dark:text-violet-400" />
                <span class="text-sm font-medium text-slate-900 dark:text-white">Drugs & Food</span>
              </div>
              <span class="text-sm font-bold text-violet-600 dark:text-violet-400">$8M</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div class="flex items-center gap-3">
                <Icon name="lucide:activity" class="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <span class="text-sm font-medium text-slate-900 dark:text-white">Infrastructure</span>
              </div>
              <span class="text-sm font-bold text-orange-600 dark:text-orange-400">$7M</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Department Performance Overview -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Department Performance Summary</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <h4 class="font-semibold text-slate-900 dark:text-white text-sm mb-2">Hospital Services</h4>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">92%</span>
              <span class="text-xs text-slate-600 dark:text-slate-400">Performance</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400">8 Offices, 86 Staff</p>
          </div>

          <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <h4 class="font-semibold text-slate-900 dark:text-white text-sm mb-2">Preventive Medicine</h4>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">88%</span>
              <span class="text-xs text-slate-600 dark:text-slate-400">Performance</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400">6 Offices, 54 Staff</p>
          </div>

          <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <h4 class="font-semibold text-slate-900 dark:text-white text-sm mb-2">Drugs and Food</h4>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-2xl font-bold text-violet-600 dark:text-violet-400">90%</span>
              <span class="text-xs text-slate-600 dark:text-slate-400">Performance</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400">5 Offices, 42 Staff</p>
          </div>
        </div>
      </div>

      <!-- Recent Ministerial Actions -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Ministerial Actions</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3 p-3 border-l-4 border-emerald-500 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
            <Icon name="lucide:check-circle" class="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-900 dark:text-white">Approved National Vaccination Campaign 2026</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">2 days ago</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
            <Icon name="lucide:file-check" class="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-900 dark:text-white">Signed MOU with International Health Partners</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">1 week ago</p>
            </div>
          </div>

          <div class="flex items-start gap-3 p-3 border-l-4 border-violet-500 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
            <Icon name="lucide:award" class="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5" />
            <div class="flex-1">
              <p class="text-sm font-medium text-slate-900 dark:text-white">Launched Healthcare Excellence Initiative</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
// This page is only accessible to minister account
definePageMeta({
  middleware: (to, from) => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      if (user.accountType !== 'minister') {
        return navigateTo('/')
      }
    }
  }
})
</script>
