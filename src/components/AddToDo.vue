<template>
    <div class="add-wrapper">
        <div class="add-title-wrapper">
            <h3 class="add-title">Enter todo's title and target below</h3>
        </div>
        <div class="add-todo-title-wrapper">
            <input type="text"
                    placeholder="Todo Title"
                    class="add-todo-input"
                    v-model="toDoTitle">
        </div>
        <div class="add-todo-target-wrapper">
            <input type="text"
                    placeholder="Todo Target"
                    class="add-todo-input"
                    v-model="toDoTarget">
        </div>
        <transition name="bounce">
            <div v-if="showErr"
                class="error-wrapper">
                <p class="error">Fill on all the fields</p>
            </div>
        </transition>
        <button @click="addToDo"
                class="add-button">Add ToDo</button>
    </div>
</template>

<script>
export default {
    name: 'AddToDo',
    data() {
        return {
            id: 0,
            toDoTitle: '',
            toDoTarget: '',
            date: '',
            showErr: false,
        }
    },
    methods: {
        addToDo() {
            
            // Current date

            let date = new Date();
            let year = date.getFullYear();
            let day = date.getDate().toString();
            let month = date.getMonth() + 1;
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

                if(seconds < 10) {
                    seconds = '0' + seconds;
                }
                if(minutes < 10) {
                    minutes = '0' + minutes;
                }
                if(month < 10) {
                    month = '0' + month;
                }
                if(date < 10) {
                    date = '0' + date;
                }
                if(hours < 10) {
                    hours = '0' + hours;
                }

                this.date = day + '/' + (month) + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds; 

            // ../Current date

            if(this.toDoTitle == '') {
                this.showErr = true;
            } else if(this.toDoTarget == '') {
                this.showErr = true;
            } else {
                this.id += 1;

                this.$store.dispatch('addToDo', {
                    id: this.id,
                    title: this.toDoTitle,
                    target: this.toDoTarget,
                    date: this.date,
                    done: false,
                });
 
                this.toDoTitle = '';
                this.toDoTarget = '';
                this.showErr = false;
            }

        },
    }
}
</script>

<style lang="scss">
    .add {

        &-wrapper {
            width: 300px;
            margin: 20px auto;
            padding: 20px 0; 
            border-top: 1px solid rgb(150, 15, 10);
            border-bottom: 1px solid rgb(150, 15, 10);
        }

        &-title {
            text-transform: uppercase;
        }

        &-button {
            margin: 20px 0;
            border: none;
            border-radius: 10px;
            background: rgb(150, 15, 10);
            color: #fff;
            padding: 15px 15px;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase; 
            width: 80%;
        }

        &-todo-input {
            text-transform: uppercase;
            text-align: center;
            border-radius: 10px;
            border: 1px solid rgb(150, 15, 10);
            margin: 10px 0;
            padding: 10px 0;
            width: 80%; 
            font-size: 16px;
        }
    }

    .error {
        color: rgb(150, 15, 10);
        font-size: 20px;
    }

    //  Animation
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    // ../Animation
</style>