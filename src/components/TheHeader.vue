<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import TheLogo from './TheLogo.vue'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo />

    <div v-if="true" class="flex items-center gap-2">
      <p>Day Complete</p>
      <CheckCircleIcon class="h-9 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-2">
      <p>Progress: <span class="font-mono">20%</span></p>
      <div class="h-5 w-5 rounded-full bg-red-500"></div>
    </div>
  </header>
</template>
