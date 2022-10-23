new Vue({
    el: "#app",
    data:{
        currentTask: "",
        tasks:[
            {
                text: "Estudar para prova de web",
                done: false
            }
        ]
    },
    methods:{
        addTask(){
            this.tasks.push({
                text: this.currentTask,
                done: false
            })
            this.currentTask = ""
        },
        toggleTask(task) {
            task.done = !task.done;
        },
        delTask(task){
            console.log(task)
            this.tasks.splice(task, 1)
        }
    }
})