<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />

  <main class="flex flex-col flex-grow">
    <h1 class="text-5xl font-[900] underline uppercase">Hello world!</h1>
    <h1 className="text-3xl font-bold underline uppercase">Hello world!</h1>
  </main>

  <TheFooter />
</template>

<style scoped></style>
