<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    @click.self="closeModal"
  >
    <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
        <h2 class="text-xl font-bold text-slate-900 dark:text-white">បន្ថែមបុគ្គលិក / Add Staff</h2>
        <button
          @click="closeModal"
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Icon name="lucide:x" class="h-5 w-5 text-slate-600 dark:text-slate-400" />
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
        <!-- Personal Information -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            ព័ត៌មានផ្ទាល់ខ្លួន / Personal Information
          </h3>

          <!-- Name (English) -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              ឈ្មោះ (អង់គ្លេស) / Name (English) <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              required
              placeholder="e.g., Sok Siphana"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Name (Khmer) -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              ឈ្មោះ (ខ្មែរ) / Name (Khmer) <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.nameKh"
              type="text"
              required
              placeholder="e.g., សុខ សុីផាណា"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              អ៊ីមែល / Email <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              placeholder="e.g., sok.siphana@health.gov.kh"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Role & Department Information -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            តួនាទី និងនាយកដ្ឋាន / Role & Department
          </h3>

          <!-- Role -->
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              តួនាទី / Role <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.role"
              required
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">ជ្រើសរើសតួនាទី / Select Role</option>
              <optgroup label="ថ្នាក់ដឹកនាំ / Leadership">
                <option value="director">ប្រធាននាយកដ្ឋាន / Department Director</option>
                <option value="deputy_director">អនុប្រធាននាយកដ្ឋាន / Deputy Department Director</option>
                <option value="office_chief">ប្រធានការិយាល័យ / Office Chief</option>
                <option value="deputy_office_chief">អនុប្រធានការិយាល័យ / Deputy Office Chief</option>
              </optgroup>
              <optgroup label="បុគ្គលិក / Staff">
                <option value="senior_officer">មន្រ្តីជំនាញ / Senior Officer</option>
                <option value="officer">មន្រ្តី / Officer</option>
                <option value="coordinator">អ្នកសម្របសម្រួល / Coordinator</option>
                <option value="administrative">អ្នកគ្រប់គ្រង / Administrative Officer</option>
                <option value="technical_staff">បច្ចេកទេស / Technical Staff</option>
              </optgroup>
            </select>
          </div>

          <!-- Department (if ministry account) -->
          <div v-if="accountType === 'ministry'">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              នាយកដ្ឋាន / Department <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.departmentId"
              required
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">ជ្រើសរើសនាយកដ្ឋាន / Select Department</option>
              <option v-for="dept in departments" :key="dept.id" :value="dept.id">
                {{ dept.nameKh }} / {{ dept.name }}
              </option>
            </select>
          </div>

          <!-- Office (if department account) -->
          <div v-if="accountType === 'department' && offices.length > 0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              ការិយាល័យ / Office
            </label>
            <select
              v-model="formData.officeId"
              class="w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">ជ្រើសរើសការិយាល័យ / Select Office (Optional)</option>
              <option v-for="office in offices" :key="office.id" :value="office.id">
                {{ office.nameKh }} / {{ office.name }}
              </option>
            </select>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              បើមិនជ្រើសរើស បុគ្គលិកនេះនឹងស្ថិតនៅក្រោមនាយកដ្ឋានដោយផ្ទាល់
            </p>
          </div>
        </div>

        <!-- Permissions -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            សិទ្ធិប្រើប្រាស់ / Permissions
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <input
                v-model="formData.permissions"
                type="checkbox"
                value="upload"
                class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-900 dark:text-white">ផ្ទុកឯកសារ / Upload</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">អាចផ្ទុកឯកសារ</p>
              </div>
            </label>

            <label class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <input
                v-model="formData.permissions"
                type="checkbox"
                value="download"
                class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-900 dark:text-white">ទាញយក / Download</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">អាចទាញយកឯកសារ</p>
              </div>
            </label>

            <label class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <input
                v-model="formData.permissions"
                type="checkbox"
                value="approve"
                class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-900 dark:text-white">អនុម័ត / Approve</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">អាចអនុម័តឯកសារ</p>
              </div>
            </label>

            <label class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <input
                v-model="formData.permissions"
                type="checkbox"
                value="manage_users"
                class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div class="flex-1">
                <p class="text-sm font-medium text-slate-900 dark:text-white">គ្រប់គ្រងបុគ្គលិក / Manage Users</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">អាចគ្រប់គ្រងបុគ្គលិក</p>
              </div>
            </label>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <Button
            type="button"
            variant="outline"
            class="flex-1"
            @click="closeModal"
          >
            បោះបង់ / Cancel
          </Button>
          <Button
            type="submit"
            class="flex-1 gap-2"
          >
            <Icon name="lucide:user-plus" class="h-4 w-4" />
            បន្ថែមបុគ្គលិក / Add Staff
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Department {
  id: number
  name: string
  nameKh: string
}

interface Office {
  id: number
  name: string
  nameKh: string
}

const props = defineProps<{
  modelValue: boolean
  accountType?: 'ministry' | 'department' | 'office'
  departments?: Department[]
  offices?: Office[]
  currentDepartmentId?: number
  currentOfficeId?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'add-user': [user: any]
}>()

const formData = ref({
  name: '',
  nameKh: '',
  email: '',
  role: '',
  departmentId: props.currentDepartmentId || '',
  officeId: props.currentOfficeId || '',
  permissions: [] as string[],
})

const closeModal = () => {
  emit('update:modelValue', false)
  resetForm()
}

const resetForm = () => {
  formData.value = {
    name: '',
    nameKh: '',
    email: '',
    role: '',
    departmentId: props.currentDepartmentId || '',
    officeId: props.currentOfficeId || '',
    permissions: [],
  }
}

const handleSubmit = () => {
  // Get role display name
  const roleNames: Record<string, { en: string; kh: string }> = {
    director: { en: 'Department Director', kh: 'ប្រធាននាយកដ្ឋាន' },
    deputy_director: { en: 'Deputy Department Director', kh: 'អនុប្រធាននាយកដ្ឋាន' },
    office_chief: { en: 'Office Chief', kh: 'ប្រធានការិយាល័យ' },
    deputy_office_chief: { en: 'Deputy Office Chief', kh: 'អនុប្រធានការិយាល័យ' },
    senior_officer: { en: 'Senior Officer', kh: 'មន្រ្តីជំនាញ' },
    officer: { en: 'Officer', kh: 'មន្រ្តី' },
    coordinator: { en: 'Coordinator', kh: 'អ្នកសម្របសម្រួល' },
    administrative: { en: 'Administrative Officer', kh: 'អ្នកគ្រប់គ្រង' },
    technical_staff: { en: 'Technical Staff', kh: 'បច្ចេកទេស' },
  }

  const userData = {
    ...formData.value,
    roleDisplay: roleNames[formData.value.role] || { en: formData.value.role, kh: formData.value.role },
    status: 'active',
    avatar: formData.value.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
    lastActive: new Date().toISOString(),
  }

  emit('add-user', userData)
  closeModal()
}

// Watch for prop changes to update default values
watch(() => props.currentDepartmentId, (newVal) => {
  if (newVal) formData.value.departmentId = newVal
})

watch(() => props.currentOfficeId, (newVal) => {
  if (newVal) formData.value.officeId = newVal
})
</script>
