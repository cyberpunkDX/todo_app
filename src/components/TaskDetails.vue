<template>
  <div class="d-flex mx-auto justify-content-between mb-4 shadow rounded p-4 bg-dark">
    <div class="w-75">
      <h5 class="text-light">{{ task.title }}</h5>
      <small class="text-secondary">{{ task.description }}</small>
    </div>
    <div class="my-auto task-details">
      <i @click="taskStore.removeTask(task.id)" class="material-icons text-secondary cursor-pointer">delete</i>
      <i @click="taskStore.toggleFavorite(task.id)" class="material-icons cursor-pointer" :class="{active: task.isFav, grey: !task.isFav}" >favorite</i>
    </div>
  </div>
</template>

<script>
import { UseTaskStore } from '@/stores/TaskStore';

export default {
  props: ['task'],
  setup(){
    const taskStore = UseTaskStore()
    return {taskStore}
  }
}                                                                                                                                                                                                                                              
</script>
