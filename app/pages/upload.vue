<template>
  <MobileLayout>
    <div class="px-4 py-6 lg:px-8 lg:py-8">
      <div class="max-w-4xl mx-auto">
        <div class="mb-6 lg:mb-8">
          <h1 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Upload Document</h1>
          <p class="text-sm lg:text-base text-slate-600 dark:text-slate-400">Add new ministry documents to the system</p>
        </div>

        <!-- Upload Area -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-8 mb-4 lg:mb-6">
          <div
            class="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl lg:rounded-2xl p-8 lg:p-12 text-center transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 cursor-pointer group active:scale-[0.99]"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="handleDrop"
                :class="{ 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10': isDragging }"
              >
                <input
                  type="file"
                  multiple
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  @change="handleFileSelect"
                />

            <div class="pointer-events-none">
              <div class="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon name="lucide:upload-cloud" class="h-7 w-7 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                <span class="hidden sm:inline">Drop files here or click to browse</span>
                <span class="sm:hidden">Tap to upload files</span>
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Support for PDF, DOCX, PPTX, XLSX and more
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-500">
                Maximum file size: 50MB
              </p>
            </div>
              </div>

          <!-- Selected Files -->
          <div v-if="selectedFiles.length > 0" class="mt-4 lg:mt-6 space-y-2 lg:space-y-3">
            <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Selected Files ({{ selectedFiles.length }})</h4>
            <div
              v-for="(file, index) in selectedFiles"
              :key="index"
              class="flex items-center justify-between p-3 lg:p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg lg:rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <div class="flex items-center space-x-3 flex-1 min-w-0">
                <div class="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="lucide:file-text" class="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-slate-900 dark:text-white truncate">{{ file.name }}</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">{{ formatFileSize(file.size) }}</p>
                </div>
              </div>
              <button
                @click="removeFile(index)"
                class="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors active:scale-95 flex-shrink-0"
              >
                <Icon name="lucide:x" class="h-5 w-5 text-red-600 dark:text-red-400" />
              </button>
            </div>
          </div>
        </div>

        <!-- Document Details Form -->
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 lg:p-8">
          <h3 class="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-4 lg:mb-6">Document Details</h3>

          <div class="space-y-4 lg:space-y-6">
            <div>
              <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Ministry / Department</label>
              <select class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all">
                <option>Ministry of Economy and Finance (ក្រសួងសេដ្ឋកិច្ច)</option>
                <option>Ministry of Health (ក្រសួងសុខាភិបាល)</option>
                <option>Ministry of Education (ក្រសួងអប់រំ)</option>
                <option>Ministry of Interior (ក្រសួងមហាផ្ទៃ)</option>
                <option>Ministry of Foreign Affairs (ក្រសួងការបរទេស)</option>
                <option>Ministry of Agriculture (ក្រសួងកសិកម្ម)</option>
                <option>Ministry of Labour (ក្រសួងការងារ)</option>
                <option>Ministry of Commerce (ក្រសួងពាណិជ្ជកម្ម)</option>
                <option>Ministry of Justice (ក្រសួងយុត្តិធម៌)</option>
                <option>Ministry of Information (ក្រសួងព័ត៌មាន)</option>
                <option>Ministry of Planning (ក្រសួងផែនការ)</option>
                <option>Ministry of Public Works (ក្រសួងសាធារណការ)</option>
              </select>
            </div>

                <div>
                  <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Tags</label>
                  <input
                    type="text"
                    placeholder="Add tags separated by commas"
                    class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-900 dark:text-white mb-2">Description</label>
                  <textarea
                    rows="4"
                    placeholder="Add a description for this document"
                    class="w-full px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-end space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
              <Button variant="outline" class="w-full sm:w-auto">Cancel</Button>
              <Button class="gap-2 w-full sm:w-auto">
                <Icon name="lucide:upload" class="h-4 w-4" />
                Upload Documents
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
const isDragging = ref(false)
const selectedFiles = ref<File[]>([])

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    selectedFiles.value = [...selectedFiles.value, ...Array.from(target.files)]
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  if (event.dataTransfer?.files) {
    selectedFiles.value = [...selectedFiles.value, ...Array.from(event.dataTransfer.files)]
  }
}

const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1)
}

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
</script>
