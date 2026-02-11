<template>
  <div class="min-h-screen">
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar with mobile support -->
      <Sidebar ref="sidebarRef" @toggle-mobile="handleMobileToggle" />

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        <!-- Header -->
        <Header @toggle-mobile-sidebar="openMobileSidebar" />

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarRef = ref(null)

const openMobileSidebar = () => {
  if (sidebarRef.value) {
    sidebarRef.value.openMobile()
  }
}

const handleMobileToggle = (isOpen: boolean) => {
  // Handle mobile sidebar state if needed
  if (isOpen && typeof window !== 'undefined') {
    // Prevent body scroll when sidebar is open on mobile
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>
