<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>

<template>
  <footer class="sticky bottom-0 z-20 flex items-center justify-between border-t bg-white p-3">
    <a href="#"><img src="../assets/logo.svg" class="h-9" /></a>

    <div v-if="true" class="flex items-center gap-2">
      <p>Day Complete</p>
      <CheckCircleIcon class="h-9 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-2">
      <p>Progress: <span class="font-mono">20%</span></p>
      <div class="h-5 w-5 rounded-full bg-red-500"></div>
    </div>

    <nav>
      <ul class="flex items-center justify-around">
        <li v-for="(icon, page) in navItems" :key="page" class="flex-1">
          <a class="flex flex-col items-center p-2 text-xs capitalize" :href="`#${page}`">
            <component :is="icon" class="h-9 w-9" /> {{ page }}
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
