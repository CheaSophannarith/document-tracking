<template>
  <div class="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <NuxtRouteAnnouncer />

    <!-- Test Container -->
    <div class="container mx-auto px-4 py-16">
      <!-- Header with Tailwind Typography -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Document Tracking System
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300">
          Testing Tailwind CSS and shadcn Button components
        </p>
      </div>

      <!-- Card with Tailwind Classes -->
      <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
          Tailwind CSS Test
        </h2>
        <p class="text-slate-600 dark:text-slate-300 mb-6">
          This card demonstrates Tailwind's utility classes for spacing, colors, shadows, and responsive design.
        </p>

        <!-- Button Tests -->
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
              Button Variants:
            </h3>
            <div class="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
              Button Sizes:
            </h3>
            <div class="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid Test -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Grid Item 1</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">Responsive grid with Tailwind</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="font-semibold text-green-900 dark:text-green-100 mb-2">Grid Item 2</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Utility-first CSS framework</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">Grid Item 3</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Dark mode support included</p>
        </div>
      </div>
    </div>
  </div>
</template>
