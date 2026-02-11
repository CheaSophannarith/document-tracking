<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <!-- Header -->
      <div class="mb-6 lg:mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 font-khmer">
            ឯកសារ / Documents
          </h1>
          <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">
            គ្រប់គ្រង និងតាមដានឯកសាររបស់ក្រសួង
          </p>
        </div>
        <Button @click="showReceiveDocModal = true" class="gap-2">
          <Icon name="lucide:file-plus" class="h-4 w-4" />
          <span class="hidden sm:inline font-khmer">បន្ថែមឯកសារ</span>
          <span class="sm:hidden">+</span>
        </Button>
      </div>

      <!-- View Toggle -->
      <div class="mb-4">
        <div class="inline-flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
          <button @click="viewMode = 'status'"
            class="px-4 py-2 text-sm font-medium rounded-md transition-all font-khmer"
            :class="viewMode === 'status' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'">
            ឯកសាររបស់ខ្ញុំ </button>
          <button @click="viewMode = 'source'"
            class="px-4 py-2 text-sm font-medium rounded-md transition-all font-khmer"
            :class="viewMode === 'source' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400'">
            ឯកសារដែលបញ្ជូនមកពីផ្នែកផ្សេងៗ
          </button>
        </div>
      </div>

      <!-- Status Tabs -->
      <div v-if="viewMode === 'status'" class="mb-6">
        <div class="border-b border-slate-200 dark:border-slate-800">
          <nav class="flex gap-2 overflow-x-auto scrollbar-thin pb-px" aria-label="Tabs">
            <button @click="activeStatus = 'all'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeStatus === 'all'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:folder" class="h-4 w-4" />
              <span class="font-khmer">ទាំងអស់</span>
              <span
                class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 text-xs rounded-full font-bold">
                {{ allDocuments.length }}
              </span>
            </button>

            <button @click="activeStatus = 'approved'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeStatus === 'approved'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:check-circle" class="h-4 w-4" />
              <span class="font-khmer">អនុម័ត</span>
              <span
                class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs rounded-full font-bold">
                {{ approvedCount }}
              </span>
            </button>

            <button @click="activeStatus = 'pending'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeStatus === 'pending'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:clock" class="h-4 w-4" />
              <span class="font-khmer">រងចាំ</span>
              <span
                class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs rounded-full font-bold">
                {{ pendingCount }}
              </span>
            </button>

            <button @click="activeStatus = 'review'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeStatus === 'review'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:eye" class="h-4 w-4" />
              <span class="font-khmer">ពិនិត្យ</span>
              <span
                class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-xs rounded-full font-bold">
                {{ reviewCount }}
              </span>
            </button>
          </nav>
        </div>
      </div>

      <!-- Source Tabs -->
      <div v-if="viewMode === 'source'" class="mb-6">
        <div class="border-b border-slate-200 dark:border-slate-800">
          <nav class="flex gap-2 overflow-x-auto scrollbar-thin pb-px" aria-label="Tabs">
            <button @click="activeSource = 'all'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeSource === 'all'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:folder" class="h-4 w-4" />
              <span class="font-khmer">ទាំងអស់</span>
              <span
                class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 text-xs rounded-full font-bold">
                {{ allDocuments.length }}
              </span>
            </button>

            <button @click="activeSource = 'self'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeSource === 'self'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:user" class="h-4 w-4" />
              <span class="font-khmer">ឯកសាររបស់ខ្ញុំ</span>
              <span
                class="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-xs rounded-full font-bold">
                {{ sourceCount('self') }}
              </span>
            </button>

            <button @click="activeSource = 'department'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeSource === 'department'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:building-2" class="h-4 w-4" />
              <span class="font-khmer">នាយកដ្ឋាន</span>
              <span
                class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs rounded-full font-bold">
                {{ sourceCount('department') }}
              </span>
            </button>

            <button @click="activeSource = 'office'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeSource === 'office'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:briefcase" class="h-4 w-4" />
              <span class="font-khmer">ការិយាល័យ</span>
              <span
                class="px-2 py-0.5 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400 text-xs rounded-full font-bold">
                {{ sourceCount('office') }}
              </span>
            </button>

            <button @click="activeSource = 'ministry'"
              class="flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
              :class="activeSource === 'ministry'
                ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                ">
              <Icon name="lucide:landmark" class="h-4 w-4" />
              <span class="font-khmer">ក្រសួង</span>
              <span
                class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs rounded-full font-bold">
                {{ sourceCount('ministry') }}
              </span>
            </button>
          </nav>
        </div>
      </div>

      <!-- Filters -->
      <div
        class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-6 mb-4 lg:mb-6">
        <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 lg:gap-4">
          <!-- Search -->
          <div class="flex-1 min-w-[200px]">
            <div class="relative">
              <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input v-model="searchQuery" type="text" placeholder="ស្វែងរកឯកសារ / Search documents..."
                class="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
            </div>
          </div>

          <!-- Filters -->
          <div class="grid grid-cols-2 sm:flex gap-3">
            <!-- Source Filter (only in status view) -->
            <select v-if="viewMode === 'status'" v-model="selectedSource"
              class="px-3 lg:px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-khmer">
              <option value="">ប្រភពទាំងអស់</option>
              <option value="self">ខ្ញុំ</option>
              <option value="department">នាយកដ្ឋាន</option>
              <option value="office">ការិយាល័យ</option>
              <option value="ministry">ក្រសួង</option>
            </select>

            <!-- Status Filter (only in source view) -->
            <select v-if="viewMode === 'source'" v-model="selectedStatus"
              class="px-3 lg:px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-khmer">
              <option value="">ស្ថានភាពទាំងអស់</option>
              <option value="approved">អនុម័ត</option>
              <option value="pending">រងចាំ</option>
              <option value="review">ពិនិត្យ</option>
            </select>

            <!-- Type Filter -->
            <select v-model="selectedType"
              class="px-3 lg:px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all">
              <option value="">All Types</option>
              <option value="PDF">PDF</option>
              <option value="DOCX">DOCX</option>
              <option value="PPTX">PPTX</option>
              <option value="XLSX">XLSX</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Documents Grid -->
      <div v-if="filteredDocuments.length > 0" class="grid grid-cols-1 gap-3 lg:gap-4">
        <DocumentCard v-for="doc in filteredDocuments" :key="doc.id" :document="doc" />
      </div>

      <!-- Empty State -->
      <div v-else
        class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-12 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <Icon name="lucide:inbox" class="h-8 w-8 text-slate-400" />
        </div>
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2 font-khmer">
          គ្មានឯកសារ
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {{ getEmptyStateMessage() }}
        </p>
        <Button @click="showReceiveDocModal = true" class="gap-2">
          <Icon name="lucide:plus" class="h-4 w-4" />
          <span class="font-khmer">បន្ថែមឯកសារថ្មី</span>
        </Button>
      </div>
    </div>

    <!-- Receive Document Modal -->
    <div v-if="showReceiveDocModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      @click.self="showReceiveDocModal = false">
      <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div
          class="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white font-khmer">
            បន្ថែមឯកសារ / Add Document
          </h2>
          <button @click="showReceiveDocModal = false"
            class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Icon name="lucide:x" class="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleAddDocument" class="p-6 space-y-6">
          <!-- Document Source -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              ប្រភពឯកសារ / Document Source <span class="text-red-500">*</span>
            </label>
            <select v-model="formData.source" required
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-khmer">
              <option value="">ជ្រើសរើសប្រភព / Select Source</option>
              <option value="self">ខ្ញុំ / My Upload</option>
              <option value="department">នាយកដ្ឋាន / Department</option>
              <option value="office">ការិយាល័យ / Office</option>
              <option value="ministry">ក្រសួង / Ministry</option>
            </select>
          </div>

          <!-- Department/Office Selection -->
          <div v-if="formData.source === 'department'">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              នាយកដ្ឋាន / Department <span class="text-red-500">*</span>
            </label>
            <select v-model="formData.departmentId" required
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">ជ្រើសរើសនាយកដ្ឋាន</option>
              <option value="1">Department of Hospital Services - នាយកដ្ឋានសេវាមន្ទីរពេទ្យ</option>
              <option value="2">Department of Preventive Medicine - នាយកដ្ឋានវេជ្ជសាស្រ្តបង្ការ</option>
              <option value="3">Department of Drugs and Food - នាយកដ្ឋានឱសថ និងអាហារ</option>
            </select>
          </div>

          <div v-if="formData.source === 'office'">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              ការិយាល័យ / Office <span class="text-red-500">*</span>
            </label>
            <select v-model="formData.officeId" required
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">ជ្រើសរើសការិយាល័យ</option>
              <option value="1">Emergency Services Office - ការិយាល័យសេវាកម្មបន្ទាន់</option>
              <option value="2">Surgical Services Office - ការិយាល័យសេវាវះកាត់</option>
              <option value="3">Pediatric Office - ការិយាល័យកុមារ</option>
            </select>
          </div>

          <!-- Document Details -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              ឈ្មោះឯកសារ (អង់គ្លេស) / Document Name (English) <span class="text-red-500">*</span>
            </label>
            <input v-model="formData.name" type="text" required placeholder="e.g., Annual Report 2026.pdf"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              ឈ្មោះឯកសារ (ខ្មែរ) / Document Name (Khmer)
            </label>
            <input v-model="formData.nameKh" type="text" placeholder="e.g., របាយការណ៍ប្រចាំឆ្នាំ ២០២៦"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-khmer" />
          </div>

          <!-- Uploaded By -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              អ្នកផ្ទុក / Uploaded By <span class="text-red-500">*</span>
            </label>
            <input v-model="formData.uploadedBy" type="text" required placeholder="e.g., Dr. Sok Siphana"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Document Type & Size -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Type <span class="text-red-500">*</span>
              </label>
              <select v-model="formData.type" required
                class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="PDF">PDF</option>
                <option value="DOCX">DOCX</option>
                <option value="XLSX">XLSX</option>
                <option value="PPTX">PPTX</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Size
              </label>
              <input v-model="formData.size" type="text" placeholder="e.g., 2.4 MB"
                class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-khmer">
              ស្ថានភាព / Status <span class="text-red-500">*</span>
            </label>
            <select v-model="formData.status" required
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-khmer">
              <option value="pending">រងចាំ / Pending</option>
              <option value="review">ពិនិត្យ / Review</option>
              <option value="approved">អនុម័ត / Approved</option>
            </select>
          </div>

          <!-- Tags -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Tags
            </label>
            <input v-model="formData.tags" type="text" placeholder="Separate by commas: Health, Report, Annual"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Actions -->
          <div class="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button type="button" variant="outline" class="flex-1" @click="showReceiveDocModal = false">
              បោះបង់ / Cancel
            </Button>
            <Button type="submit" class="flex-1 gap-2">
              <Icon name="lucide:check" class="h-4 w-4" />
              បន្ថែម / Add Document
            </Button>
          </div>
        </form>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
  const viewMode = ref<'status' | 'source'>('source')
  const activeStatus = ref<'all' | 'approved' | 'pending' | 'review'>('all')
  const activeSource = ref<'all' | 'self' | 'department' | 'office' | 'ministry'>('all')
  const searchQuery = ref('')
  const selectedSource = ref('')
  const selectedType = ref('')
  const showReceiveDocModal = ref(false)

  const formData = ref({
    source: '',
    departmentId: '',
    officeId: '',
    name: '',
    nameKh: '',
    uploadedBy: '',
    type: 'PDF',
    size: '',
    status: 'pending',
    tags: '',
  })

  // All documents
  const allDocuments = ref([
    {
      id: 1,
      name: 'Annual Health Report 2026.pdf',
      nameKh: 'របាយការណ៍សុខភាពប្រចាំឆ្នាំ ២០២៦',
      type: 'PDF',
      size: '2.4 MB',
      status: 'approved',
      uploadedBy: 'John Doe',
      uploadedByKh: 'ចន ដូ',
      uploadedAt: '2026-02-10T14:30:00',
      department: 'Ministry of Health',
      departmentKh: 'ក្រសួងសុខាភិបាល',
      office: null,
      tags: ['Health', 'Report', 'Annual'],
      source: 'self',
    },
    {
      id: 2,
      name: 'Budget Proposal Q1 2026.xlsx',
      nameKh: 'សំណើថវិកា ត្រីមាសទី១ ២០២៦',
      type: 'XLSX',
      size: '1.2 MB',
      status: 'pending',
      uploadedBy: 'John Doe',
      uploadedByKh: 'ចន ដូ',
      uploadedAt: '2026-02-09T11:20:00',
      department: 'Ministry of Health',
      departmentKh: 'ក្រសួងសុខាភិបាល',
      office: null,
      tags: ['Budget', 'Finance', 'Q1'],
      source: 'self',
    },
    {
      id: 3,
      name: 'Hospital Services Guidelines.pdf',
      nameKh: 'គោលការណ៍ណែនាំសេវាមន្ទីរពេទ្យ',
      type: 'PDF',
      size: '3.8 MB',
      status: 'approved',
      uploadedBy: 'Dr. Sok Siphana',
      uploadedByKh: 'វេជ្ជបណ្ឌិត សុខ សុីផាណា',
      uploadedAt: '2026-02-08T15:45:00',
      department: 'Department of Hospital Services',
      departmentKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
      office: null,
      tags: ['Hospital', 'Guidelines', 'Services'],
      source: 'department',
    },
    {
      id: 4,
      name: 'Preventive Medicine Report.pdf',
      nameKh: 'របាយការណ៍វេជ្ជសាស្រ្តបង្ការ',
      type: 'PDF',
      size: '2.1 MB',
      status: 'review',
      uploadedBy: 'Dr. Chea Vibol',
      uploadedByKh: 'វេជ្ជបណ្ឌិត ជា វិបុល',
      uploadedAt: '2026-02-07T09:30:00',
      department: 'Department of Preventive Medicine',
      departmentKh: 'នាយកដ្ឋានវេជ្ជសាស្រ្តបង្ការ',
      office: null,
      tags: ['Prevention', 'Medicine', 'Report'],
      source: 'department',
    },
    {
      id: 5,
      name: 'Emergency Protocol 2026.pdf',
      nameKh: 'ពិធីការបន្ទាន់ ២០២៦',
      type: 'PDF',
      size: '1.9 MB',
      status: 'approved',
      uploadedBy: 'Dr. Rath Dara',
      uploadedByKh: 'វេជ្ជបណ្ឌិត រ័ត្ន ដារា',
      uploadedAt: '2026-02-06T16:20:00',
      department: 'Department of Hospital Services',
      departmentKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
      office: 'Emergency Services Office',
      officeKh: 'ការិយាល័យសេវាកម្មបន្ទាន់',
      tags: ['Emergency', 'Protocol', 'Safety'],
      source: 'office',
    },
    {
      id: 6,
      name: 'Surgical Equipment Inventory.xlsx',
      nameKh: 'បញ្ជីឧបករណ៍វះកាត់',
      type: 'XLSX',
      size: '892 KB',
      status: 'pending',
      uploadedBy: 'Dr. Mey Sophal',
      uploadedByKh: 'វេជ្ជបណ្ឌិត ម៉ី សុផល',
      uploadedAt: '2026-02-05T14:10:00',
      department: 'Department of Hospital Services',
      departmentKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
      office: 'Surgical Services Office',
      officeKh: 'ការិយាល័យសេវាវះកាត់',
      tags: ['Surgical', 'Equipment', 'Inventory'],
      source: 'office',
    },
  ])

  // Status counts
  const approvedCount = computed(() => allDocuments.value.filter(d => d.status === 'approved').length)
  const pendingCount = computed(() => allDocuments.value.filter(d => d.status === 'pending').length)
  const reviewCount = computed(() => allDocuments.value.filter(d => d.status === 'review').length)

  // Source counts
  const sourceCount = (source: string) => {
    return allDocuments.value.filter(d => d.source === source).length
  }

  // Filter by view mode
  const viewFilteredDocuments = computed(() => {
    if (viewMode.value === 'status') {
      // Filter by status
      if (activeStatus.value === 'all') return allDocuments.value
      return allDocuments.value.filter(doc => doc.status === activeStatus.value)
    } else {
      // Filter by source
      if (activeSource.value === 'all') return allDocuments.value
      return allDocuments.value.filter(doc => doc.source === activeSource.value)
    }
  })

  // Apply all filters
  const filteredDocuments = computed(() => {
    let docs = viewFilteredDocuments.value

    // Search filter
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      docs = docs.filter(
        doc =>
          doc.name.toLowerCase().includes(query) ||
          doc.nameKh?.toLowerCase().includes(query) ||
          doc.uploadedBy.toLowerCase().includes(query) ||
          doc.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Source filter
    if (selectedSource.value) {
      docs = docs.filter(doc => doc.source === selectedSource.value)
    }

    // Type filter
    if (selectedType.value) {
      docs = docs.filter(doc => doc.type === selectedType.value)
    }

    return docs
  })

  const getEmptyStateMessage = () => {
    if (viewMode.value === 'status') {
      if (activeStatus.value === 'approved') {
        return 'គ្មានឯកសារដែលបានអនុម័តទេ។'
      } else if (activeStatus.value === 'pending') {
        return 'គ្មានឯកសារកំពុងរងចាំទេ។'
      } else if (activeStatus.value === 'review') {
        return 'គ្មានឯកសារកំពុងពិនិត្យទេ។'
      }
    } else {
      if (activeSource.value === 'self') {
        return 'អ្នកមិនទាន់បានផ្ទុកឯកសារណាមួយទេ។'
      } else if (activeSource.value === 'department') {
        return 'គ្មានឯកសារពីនាយកដ្ឋានទេ។'
      } else if (activeSource.value === 'office') {
        return 'គ្មានឯកសារពីការិយាល័យទេ។'
      } else if (activeSource.value === 'ministry') {
        return 'គ្មានឯកសារពីក្រសួងទេ។'
      }
    }
    return 'គ្មានឯកសារត្រូវបានរកឃើញ។ សាកល្បងផ្លាស់ប្តូរតម្រងរបស់អ្នក។'
  }

  const handleAddDocument = () => {
    const newDoc = {
      id: allDocuments.value.length + 1,
      name: formData.value.name,
      nameKh: formData.value.nameKh || formData.value.name,
      type: formData.value.type,
      size: formData.value.size || '0 KB',
      status: formData.value.status,
      uploadedBy: formData.value.uploadedBy,
      uploadedByKh: formData.value.uploadedBy,
      uploadedAt: new Date().toISOString(),
      department: formData.value.source === 'department' ? 'Department Name' : 'Ministry of Health',
      departmentKh: formData.value.source === 'department' ? 'ឈ្មោះនាយកដ្ឋាន' : 'ក្រសួងសុខាភិបាល',
      office: formData.value.source === 'office' ? 'Office Name' : null,
      officeKh: formData.value.source === 'office' ? 'ឈ្មោះការិយាល័យ' : null,
      tags: formData.value.tags.split(',').map(t => t.trim()).filter(t => t),
      source: formData.value.source,
    }

    allDocuments.value.unshift(newDoc)
    showReceiveDocModal.value = false

    // Reset form
    formData.value = {
      source: '',
      departmentId: '',
      officeId: '',
      name: '',
      nameKh: '',
      uploadedBy: '',
      type: 'PDF',
      size: '',
      status: 'pending',
      tags: '',
    }
  }
</script>
