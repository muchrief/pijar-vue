<script>
import InputGroupVue from "../components/InputGroup.vue";
import TodoListComponentVue from "../components/TodoListComponent.vue";

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
  },
  computed: {
    isEqualOrMoreThanFour() {
      return this.todoList.length >= 4;
    },
  },
  components: {
    TodoListComponentVue,
    InputGroupVue,
  },
};
</script>

<template>
  <div class="todo-wrapper">
    <todo-list-component-vue :todoList="todoList" />
    <input-group-vue
    :value="inputValue"
    @update:value="changeInputVal"
    @addTodo="addTodo"
    />
    <div class="great capitalize" v-if="isEqualOrMoreThanFour">
      <p>hebat!</p>
    </div>
  </div>
</template>
