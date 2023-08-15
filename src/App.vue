<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheActivities from './components/TheActivities.vue'

const activities = ref(['Coding', 'Reading', 'Training'])

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>

<template>
  <body>
    <TheHeader />

    <main class="flex flex-col flex-grow">
      <TheActivities
        :activities="activities"
        @create-activity="createActivity"
        @delete-activity="deleteActivity"
      />
    </main>

    <TheFooter />
  </body>
</template>
