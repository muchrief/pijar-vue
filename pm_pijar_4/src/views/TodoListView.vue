<script>
import InputGroupComponentVue from "../components/InputGroupComponent.vue";
import TodoComponentVue from "../components/TodoComponent.vue";

export default {
  name: "TodoListView",
  data: function () {
    return {
      todoList: [],
      inputValue: "",
    };
  },
  methods: {
    addTodo: function () {
      const value = this.inputValue.trim();
      if (!value) {
        return;
      }
      this.todoList.push(value);
      this.inputValue = "";
    },
    changeInputVal: function (value) {
      this.inputValue = value;
    },
    deleteTodo: function (index) {
      this.todoList = this.todoList.filter((_, i) => i != index);
    },
    updateTodo: function (index, value) {
      console.log(value);
      this.todoList = this.todoList.map((v, i) => {
        if (i == index) {
          return value;
        }
        return v;
      });
    },
    save: function () {},
  },
  computed: {
    isEqualOrMoreThanFour() {
      return this.todoList.length >= 4;
    },
  },
  components: {
    TodoComponentVue,
    InputGroupComponentVue,
  },
};
</script>

<template>
  <div class="todo-wrapper w-full">
    <div class="header">
      <span><h1>Todo List</h1></span>
    </div>
    <div class="todos">
      <ol class="todo-list">
        <li class="todo" v-for="(todo, index) in todoList" :key="index">
          <todo-component-vue
            :todo="todo"
            @update:todo="(v) => updateTodo(index, v)"
            @delete="deleteTodo(index)"
          />
        </li>
      </ol>
    </div>
    <input-group-component-vue
      :value="inputValue"
      @update:value="changeInputVal"
      @addTodo="addTodo"
    />
    <div class="great capitalize text-start" v-if="isEqualOrMoreThanFour">
      <p>hebat!</p>
    </div>
  </div>
</template>

<style>
.todo-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 16px;
}

.todo-wrapper .header {
  text-align: start;
}
</style>
