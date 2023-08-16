<template>
  <body>
    <TheHeader />
    <main>
      <form>
        <input v-model="task" placeholder="Enter the task" />
        <button classname="text-green-500" @click="addTask(task)">ADD</button>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task }}
            <button @click="removeTask(index)">Delete</button>
            <button @click="startEditing(index)">Edit</button>
            <div v-show="editingTasks.includes(index)">
              <input placeholder="Enter the task" class="h-6 w-6" v-model="editedTasks[index]" />
              <button @click="confirmEdit(index)">Confirm</button>
            </div>
          </li>
        </ul>
      </form>
    </main>
    <TheFooter />
  </body>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      task: '',
      editingTasks: [],
      editedTasks: {}
    }
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapMutations(['addTask', 'removeTask', 'editTask']),
    startEditing(index) {
      this.editingTasks.push(index)
      this.editedTasks[index] = this.tasks[index]
    },
    confirmEdit(index) {
      this.editTask({ index, editedTask: this.editedTasks[index] })
      this.editingTasks.splice(this.editingTasks.indexOf(index), 1)
      delete this.editedTasks[index]
    }
  }
}
</script>
