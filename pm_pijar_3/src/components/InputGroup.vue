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
  <div class="input-wrapper">
    <input
      type="text"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @keyup.enter="addTodo"
    />
    <button type="button" @click="addTodo" class="capitalize">tambahkan</button>
  </div>
</template>

<style></style>
