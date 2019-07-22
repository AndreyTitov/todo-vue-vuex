<template>
  <div id="app">
    <Header></Header>
    <AddToDo></AddToDo>
    <ToDo></ToDo>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import AddToDo from './components/AddToDo.vue';
import ToDo from './components/ToDo.vue';

export default {
  name: 'app',
  components: {
    Header,
    AddToDo,
    ToDo,
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
