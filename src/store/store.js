import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    editTask(state, payload) {
      state.tasks[payload.index] = payload.editedTask
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  }
})
