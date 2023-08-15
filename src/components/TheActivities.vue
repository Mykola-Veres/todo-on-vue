<script setup>
import { validateActivities, isActivityValid } from '../validators'
import ActivityItem from '../components/ActivityItem.vue'
import TheToDoForm from '../components/TheToDoForm.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheToDoForm @submit="emit('createActivity', $event)" />
  </div>
</template>
