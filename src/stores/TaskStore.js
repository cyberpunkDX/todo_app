import { defineStore } from "pinia";

export const UseTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Learn more about stores in Vue.js", description: "Some description", isFav: false},
            {id: 2, title: "Study similarity and differences between React & Vue", description: "Some other description", isFav: true}
        ],
    }), 

    getters: {
        favorites() {
            return this.tasks.filter(t => t.isFav)
        },

        favoriteTaskCount(){
            return this.tasks.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous
            }, 0)
        },

        totalTaskCount: (state) => {
            return state.tasks.length
        }
    },

    actions: {
        addTask(task){
            this.tasks.push(task)
        },
        removeTask(id){
           this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFavorite(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})