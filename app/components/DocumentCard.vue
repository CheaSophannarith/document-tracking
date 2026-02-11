<template>
  <div class="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-5 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300 active:scale-[0.98]">
    <div class="flex items-start space-x-3 lg:space-x-4">
      <!-- Document Icon -->
      <div class="flex-shrink-0">
        <div
          class="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          :class="[
            document.type === 'PDF' && 'bg-red-500/10 dark:bg-red-500/20',
            document.type === 'DOCX' && 'bg-blue-500/10 dark:bg-blue-500/20',
            document.type === 'PPTX' && 'bg-orange-500/10 dark:bg-orange-500/20',
          ]"
        >
          <Icon
            :name="`lucide:${getFileIcon(document.type)}`"
            class="h-6 w-6"
            :class="[
              document.type === 'PDF' && 'text-red-600 dark:text-red-400',
              document.type === 'DOCX' && 'text-blue-600 dark:text-blue-400',
              document.type === 'PPTX' && 'text-orange-600 dark:text-orange-400',
            ]"
          />
        </div>
      </div>

      <!-- Document Info -->
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-sm lg:text-base font-semibold text-slate-900 dark:text-white truncate pr-2">
            {{ document.name }}
          </h3>
          <span
            class="flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
            :class="getStatusClass(document.status)"
          >
            {{ document.status }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span class="flex items-center">
            <Icon name="lucide:hard-drive" class="h-3.5 w-3.5 mr-1" />
            <span class="hidden sm:inline">{{ document.size }}</span>
            <span class="sm:hidden">{{ document.size }}</span>
          </span>
          <span class="flex items-center max-w-[120px] lg:max-w-none">
            <Icon name="lucide:user" class="h-3.5 w-3.5 mr-1 flex-shrink-0" />
            <span class="truncate">{{ document.uploadedBy }}</span>
          </span>
          <span class="flex items-center">
            <Icon name="lucide:clock" class="h-3.5 w-3.5 mr-1" />
            {{ formatDate(document.uploadedAt) }}
          </span>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in document.tags"
            :key="tag"
            class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex-shrink-0 flex items-center gap-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
        <!-- Download Button -->
        <button
          v-if="hasDownloadPermission"
          @click.stop="downloadDocument"
          class="p-2 lg:p-1.5 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 transition-colors active:scale-95"
          title="Download"
        >
          <Icon name="lucide:download" class="h-5 w-5" />
        </button>

        <!-- More Actions -->
        <button
          @click.stop="showMoreActions"
          class="p-2 lg:p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95"
        >
          <Icon name="lucide:more-vertical" class="h-5 w-5 text-slate-500 dark:text-slate-400" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  document: {
    id: number
    name: string
    type: string
    size: string
    status: string
    uploadedBy: string
    uploadedAt: string
    tags: string[]
  }
}>()

const document = props.document

const getFileIcon = (type: string) => {
  const icons: Record<string, string> = {
    PDF: 'file-text',
    DOCX: 'file-text',
    PPTX: 'presentation',
    XLSX: 'table',
  }
  return icons[type] || 'file'
}

const getStatusClass = (status: string) => {
  const classes: Record<string, string> = {
    approved: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    pending: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    review: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    rejected: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  }
  return classes[status] || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
}

const formatDate = (date: string) => {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))

  if (hours < 1) return 'Just now'
  if (hours < 24) return `${hours}h ago`
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// Permission check
const hasDownloadPermission = computed(() => {
  if (typeof window === 'undefined') return false
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user.permissions?.includes('download') || false
})

// Download document
const downloadDocument = () => {
  // Simulate download
  console.log('Downloading:', document.name)
  // In real app, this would trigger actual file download
  alert(`Download started: ${document.name}`)
}

// Show more actions
const showMoreActions = () => {
  console.log('More actions for:', document.name)
}
</script>
