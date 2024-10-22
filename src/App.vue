<template>

  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-lg-8 mb-2">
        <TaskForm />
      </div>
      <div class="col-lg-4 col-sm-12">
        <div class="d-flex justify-content-end mb-4">
          <button @click="filter = 'all'" class="btn btn-outline-light mx-4">
            All tasks
          </button>
          <button @click="filter = 'favorites'" class="btn btn-outline-light">
            Favorite tasks
          </button>
        </div>
      </div>

    </div>

    <div v-if="filter == 'all'">
      <div class="mx-auto">
        <p class="text-secondary fw-bold">All tasks ({{ taskStore.totalTaskCount }})</p>
      </div>
      <div class="row">
        <div class="mx-auto col-lg-6 col-xl-6 col-sm-12" v-for="task in taskStore.tasks" v-bind:key="task">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>

    <div v-if="filter == 'favorites'">
      <div class="mx-auto w-50">
        <p class="text-secondary fw-bold">Favorite tasks ({{ taskStore.favoriteTaskCount }})</p>
      </div>
      <div class="row">
        <div class="mx-auto col-lg-6 col-xl-6 col-sm-12" v-for="task in taskStore.favorites" v-bind:key="task">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { UseTaskStore } from './stores/TaskStore';
import TaskForm from './components/TaskForm.vue';
export default {
  components: {
    TaskDetails, TaskForm
  },
  setup() {
    const taskStore = UseTaskStore()
    const filter = ref('all')
    return { taskStore, filter }
  }
}
</script>

<style></style>