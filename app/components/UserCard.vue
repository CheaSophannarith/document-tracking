<template>
  <div class="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-5 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300">
    <div class="flex items-start space-x-4">
      <!-- Avatar -->
      <div class="flex-shrink-0">
        <div
          class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-semibold text-lg"
        >
          {{ user.avatar }}
        </div>
        <div
          class="w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 -mt-2 ml-auto"
          :class="user.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'"
        ></div>
      </div>

      <!-- User Info -->
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between mb-2">
          <div class="flex-1 min-w-0">
            <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white truncate">
              {{ user.name }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 truncate">
              {{ user.nameKh }}
            </p>
          </div>
          <span
            class="flex-shrink-0 ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
            :class="getRoleBadgeClass(user.role)"
          >
            {{ user.roleKh || user.role }}
          </span>
        </div>

        <div class="space-y-1.5 mb-3">
          <div class="flex items-center text-xs text-slate-600 dark:text-slate-400">
            <Icon name="lucide:mail" class="h-3.5 w-3.5 mr-1.5" />
            <span class="truncate">{{ user.email }}</span>
          </div>
          <div class="flex items-center text-xs text-slate-600 dark:text-slate-400">
            <Icon name="lucide:building" class="h-3.5 w-3.5 mr-1.5" />
            <span class="truncate">{{ user.department }}</span>
          </div>
          <div class="flex items-center text-xs text-slate-600 dark:text-slate-400">
            <Icon name="lucide:clock" class="h-3.5 w-3.5 mr-1.5" />
            <span>Active {{ formatTime(user.lastActive) }}</span>
          </div>
        </div>

        <!-- Permissions -->
        <div class="mb-3">
          <p class="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Permissions:</p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="permission in user.permissions"
              :key="permission"
              class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              <Icon :name="getPermissionIcon(permission)" class="h-3 w-3 mr-1" />
              {{ formatPermission(permission) }}
            </span>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <Button variant="outline" size="sm" class="flex-1 gap-1.5" @click="$emit('edit', user)">
            <Icon name="lucide:edit" class="h-3.5 w-3.5" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            class="flex-1 gap-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
            @click="$emit('delete', user.id)"
          >
            <Icon name="lucide:trash-2" class="h-3.5 w-3.5" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    id: number
    name: string
    nameKh: string
    email: string
    role: string
    roleKh?: string
    department: string
    permissions: string[]
    status: string
    avatar: string
    lastActive: string
  }
}>()

defineEmits<{
  edit: [user: any]
  delete: [id: number]
}>()

const getRoleBadgeClass = (role: string) => {
  const classes: Record<string, string> = {
    'Administrator': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'Department Head': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Department Director': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    'Deputy Department Director': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    'Office Chief': 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    'Deputy Office Chief': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
    'Senior Officer': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Officer': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    'Coordinator': 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
    'Administrative Officer': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
    'Technical Staff': 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300',
    'Viewer': 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
  }
  return classes[role] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
}

const getPermissionIcon = (permission: string) => {
  const icons: Record<string, string> = {
    upload: 'lucide:upload',
    download: 'lucide:download',
    approve: 'lucide:check-circle',
    delete: 'lucide:trash-2',
    manage_users: 'lucide:users',
    manage_departments: 'lucide:building',
  }
  return icons[permission] || 'lucide:shield'
}

const formatPermission = (permission: string) => {
  return permission.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

const formatTime = (date: string) => {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))

  if (hours < 1) return 'just now'
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days === 1) return 'yesterday'
  return `${days}d ago`
}
</script>
