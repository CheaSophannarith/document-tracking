<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="max-w-4xl mx-auto">
        <div class="mb-6 lg:mb-8">
          <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h1>
          <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">Manage your account and application preferences</p>
        </div>

        <!-- Profile Settings -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 mb-4 lg:mb-6">
          <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6">Profile Settings</h3>

          <div class="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold mx-auto sm:mx-0">
              MO
            </div>
            <div class="flex-1 text-center sm:text-left">
              <Button variant="outline" size="sm" class="gap-2 w-full sm:w-auto">
                <Icon name="lucide:upload" class="h-4 w-4" />
                Change Avatar
              </Button>
            </div>
          </div>

          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">First Name</label>
                <input
                  type="text"
                  value="Ministry"
                  class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Last Name</label>
                <input
                  type="text"
                  value="Officer"
                  class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Email</label>
              <input
                type="email"
                value="officer@ministry.gov"
                class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Role</label>
              <select class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all">
                <option>Administrator (អភិបាល)</option>
                <option>Ministry Secretary (លេខាធិការក្រសួង)</option>
                <option>Officer (មន្ត្រី)</option>
                <option>Viewer (អ្នកមើល)</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Ministry</label>
              <select class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all">
                <option>Ministry of Economy and Finance</option>
                <option>Ministry of Health</option>
                <option>Ministry of Education</option>
                <option>Ministry of Interior</option>
                <option>Ministry of Foreign Affairs</option>
                <option>Ministry of Agriculture</option>
                <option>Ministry of Labour</option>
                <option>Ministry of Commerce</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Appearance -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 mb-4 lg:mb-6">
          <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6">Appearance</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between py-2">
              <div class="flex-1 min-w-0 pr-4">
                <p class="text-sm font-medium text-slate-900 dark:text-white">Dark Mode</p>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Switch between light and dark themes</p>
              </div>
              <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors flex-shrink-0">
                <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 mb-4 lg:mb-6">
          <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6">Notifications</h3>
          <div class="space-y-1">
            <div class="flex items-center justify-between py-3">
              <div class="flex-1 min-w-0 pr-4">
                <p class="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</p>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Receive email updates for new documents</p>
              </div>
              <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors flex-shrink-0">
                <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
              </button>
            </div>
            <div class="flex items-center justify-between py-3 border-t border-slate-200 dark:border-slate-700">
              <div class="flex-1 min-w-0 pr-4">
                <p class="text-sm font-medium text-slate-900 dark:text-white">Document Approvals</p>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Get notified when documents need approval</p>
              </div>
              <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors flex-shrink-0">
                <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
              </button>
            </div>
            <div class="flex items-center justify-between py-3 border-t border-slate-200 dark:border-slate-700">
              <div class="flex-1 min-w-0 pr-4">
                <p class="text-sm font-medium text-slate-900 dark:text-white">Weekly Reports</p>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Receive weekly activity summaries</p>
              </div>
              <button class="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 dark:bg-slate-700 transition-colors flex-shrink-0">
                <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex items-center justify-end">
          <Button class="gap-2 w-full sm:w-auto">
            <Icon name="lucide:check" class="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  </MobileLayout>
</template>
