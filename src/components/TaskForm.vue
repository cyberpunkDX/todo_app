<template>

    <form @submit.prevent="handleSubmit" class="w-100">
        <div class="d-flex">
            <input type="text" class="bg-dark w-100" placeholder="I want to..." name="task" v-model="newTask">
            <button type="submit" class="btn btn-outline-light">Add</button>
        </div>
        
    </form>
  
</template>

<script>
import { UseTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

export default {
    setup(){

        const taskStore = UseTaskStore()
        const newTask = ref('')
        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask(
                    {
                        title: newTask.value,
                        isFav: false,
                        id: Math.floor(Math.random() * 10000)
                    }
                )
            }

            newTask.value = ""
        }

        return {newTask, handleSubmit}
    }
}
</script>
