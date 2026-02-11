<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="mb-6 lg:mb-8">
        <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Documents</h1>
        <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">Manage and track all ministry documents</p>
      </div>

      <!-- Filters and Actions -->
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 mb-4 lg:mb-6">
        <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 lg:gap-4">
          <div class="flex-1 min-w-[200px]">
            <div class="relative">
              <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documents..."
                class="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 sm:flex gap-3">
            <select class="px-3 lg:px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all">
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Review</option>
            </select>
            <select class="px-3 lg:px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all">
              <option>All Types</option>
              <option>PDF</option>
              <option>DOCX</option>
              <option>PPTX</option>
            </select>
          </div>
          <Button class="gap-2 sm:ml-auto" size="default">
            <Icon name="lucide:filter" class="h-4 w-4" />
            <span class="hidden sm:inline">More Filters</span>
            <span class="sm:hidden">Filters</span>
          </Button>
        </div>
      </div>

      <!-- Documents Grid -->
      <div class="grid grid-cols-1 gap-3 lg:gap-4">
        <DocumentCard
          v-for="doc in documents"
          :key="doc.id"
          :document="doc"
        />
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const documents = ref([
  {
    id: 1,
    name: 'Q4 Financial Report 2026.pdf',
    type: 'PDF',
    size: '2.4 MB',
    status: 'approved',
    uploadedBy: 'John Doe',
    uploadedAt: '2026-02-10T14:30:00',
    tags: ['Finance', 'Report', 'Q4'],
  },
  {
    id: 2,
    name: 'Project Proposal - AI Integration.docx',
    type: 'DOCX',
    size: '1.8 MB',
    status: 'pending',
    uploadedBy: 'Jane Smith',
    uploadedAt: '2026-02-10T09:15:00',
    tags: ['Proposal', 'AI', 'Technology'],
  },
  {
    id: 3,
    name: 'Employee Handbook 2026.pdf',
    type: 'PDF',
    size: '5.2 MB',
    status: 'approved',
    uploadedBy: 'Mike Johnson',
    uploadedAt: '2026-02-09T16:45:00',
    tags: ['HR', 'Policy', 'Handbook'],
  },
  {
    id: 4,
    name: 'Marketing Strategy Q1-2026.pptx',
    type: 'PPTX',
    size: '3.7 MB',
    status: 'review',
    uploadedBy: 'Sarah Williams',
    uploadedAt: '2026-02-09T11:20:00',
    tags: ['Marketing', 'Strategy', 'Q1'],
  },
  {
    id: 5,
    name: 'Technical Architecture Document.pdf',
    type: 'PDF',
    size: '4.1 MB',
    status: 'approved',
    uploadedBy: 'David Brown',
    uploadedAt: '2026-02-08T15:00:00',
    tags: ['Technical', 'Architecture', 'Documentation'],
  },
])
</script>
