<script>
export default {
  name: "TodoListComponent",
  props: {
    todoList: [],
  },
};
</script>

<template>
  <div class="todo-wrapper">
    <ol class="todo-list">
      <li class="todo" v-for="(todo, index) in todoList" :key="index">
        {{ todo }}
      </li>
    </ol>
  </div>
</template>
