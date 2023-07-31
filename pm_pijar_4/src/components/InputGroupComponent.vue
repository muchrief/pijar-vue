<script>
export default {
  name: "InputGroup",
  props: ["value"],
  emits: ["input", "update:value", "addTodo"],
  methods: {
    addTodo: function () {
      this.$emit("addTodo");
    },
  },
};
</script>

<template>
  <div class="input-wrapper w-full">
    <input
      class="input-todo"
      type="text"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @keyup.enter="addTodo"
    />
    <button type="button" @click="addTodo" class="capitalize pd-x-2 pd-y-1">tambahkan</button>
  </div>
</template>

<style>
.input-wrapper {
  width: 100%;
  display: flex;
  column-gap: 8px;
}

.input-todo {
  width: 100%;
}

</style>
