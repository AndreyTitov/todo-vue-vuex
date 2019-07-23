<template>
    <div class="todo-wrapper">    
    <transition-group name="list">
        <div :key="todo.id"
            v-for="todo in getToDo"
            class="todo">
            <p class="date">Added: {{todo.date}}</p>
            <h3 class="todo-title"
                :class="{ done : todo.done }">{{todo.title}} #{{todo.id}}</h3>
            <p class="todo-target"
                :class="{ done : todo.done }">{{todo.target}}</p>
            <div class="todo-button-wrapper">
                <button class="todo-button-done"
                        :class="{ disableButton : todo.done}"
                        @click="doneToDo(todo)">Done</button>
                <button class="todo-button-delete"
                        @click="deleteToDo(todo)">Delete</button>
            </div>
        </div>
    </transition-group>
    </div>
</template>

<script>
import { Transform } from 'stream';
export default {
    name: 'ToDo',
    data() {
        return {

        }
    },
    computed: {
        getToDo() {
            return this.$store.getters.getTodo
        },
    },
    methods: {
        doneToDo(todo) {
            todo.done = !todo.done;
        },
        deleteToDo(todo) {
            this.$store.dispatch('deleteToDo', {
                id: todo.id,
            });
        },
    },
}
</script>

<style lang="scss">
    .date {
        text-align: left;
        font-size: 14px;
        color: #b2b2b2;
    }

    .todo {
        text-align: left;
        margin: 40px 0;

        &-wrapper {
            width: 300px;
            margin: 20px auto;
            padding: 20px 5px;
        }

        &-title {
            font-size: 30px;
            margin: 10px 0;
        }

        &-target {
            font-size: 18px;
            margin: 10px 0;
        }

        &-button {
            &-wrapper {
                margin: 20px 0;
                position: relative;
            }

            &-done {
                background: green;
                color: #fff;
                font-size: 16px;
                font-weight: 600;
                padding: 10px 30px;
                border-radius: 15px;
                border: none;
                cursor: pointer;
            }

            &-delete {
                margin-left: 10px;
                background: rgb(150, 15, 10);
                color: #fff;
                font-size: 16px;
                font-weight: 600;
                padding: 10px 30px;
                border-radius: 15px;
                border: none;
                cursor: pointer;
                z-index: 2;
            }
        }
    }

    .done {
        text-decoration: line-through;
        color: grey;
    }

    .disableButton {
        position: absolute;
        left: -100%;
        animation: dissapear .5s ease;
        z-index: 1;
    }

    // Animation
    .list-item {
      display: inline-block;
      margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
      transition: all 1s;
    }

    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
    // ../Animation

    @keyframes dissapear {
        0% {
            left: 0;
        }
        100% {
            left: -100%;
        }
    }
</style>
