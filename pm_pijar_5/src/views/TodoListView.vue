<script>
import InputGroupComponentVue from "../components/InputGroupComponent.vue";
import TodoComponentVue from "../components/TodoComponent.vue";
import store from "../store/index";

export default {
  name: "TodoListView",
  data: function () {
    return {
      store: store,
      todoStore: store.state.todoStore,
      inputValue: "",
    };
  },
  methods: {
    addTodo: function () {
      const value = this.inputValue.trim();
      if (!value) {
        return;
      }
      this.store.dispatch("todoStore/addTodo", {
        value,
      });
      this.inputValue = "";
    },
    changeInputVal: function (value) {
      this.inputValue = value;
    },
    deleteTodo: function (index) {
        this.store.dispatch("todoStore/removeTodo", {
        index,
      });
    },
    updateTitleTodo: function (index, value) {
      this.store.dispatch("todoStore/updateTitleTodo", {
        index,
        value,
      });
    },
    save: function () {},
  },
  computed: {
    isEqualOrMoreThanFour() {
      return this.todoStore.todoList.length >= 4;
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
        <li
          class="todo"
          v-for="(todo, index) in todoStore.todoList"
          :key="index"
        >
          <todo-component-vue
            :todo="todo.title"
            :index="index"
            @update:todo="(v) => updateTitleTodo(index, v)"
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
