<script>
export default {
  name: "TodoComponent",
  props: {
    todo: String,
  },
  data: () => ({
    isEdited: false,
  }),
  methods: {
    handleEdit: function () {
      this.isEdited = !this.isEdited;
    },
    onInput: function (v) {
      this.$emit("update:todo", v.target.value);
    },
  },
  emits: ["delete", "update:todo"],
};
</script>

<template>
  <div class="todo-content">
    <p class="w-full text-start" v-if="!isEdited">
      {{ todo }}
    </p>
    <input class="w-full" type="text" :value="todo" @input="onInput" v-else />
    <div class="todo-modify">
      <button 
      type="button" 
      class="capitalize pd-x-2 pd-y-1"
      @click="handleEdit"
      >edit</button>
      <button
        type="button"
        class="capitalize pd-x-2 pd-y-1"
        @click="$emit('delete')"
      >
        hapus
      </button>
    </div>
  </div>
</template>

<style>
.todos {
  padding: 0 16px;
}

.todo-list {
  display: flex;
  row-gap: 8px;
  flex-direction: column;
}

.todo-content {
  display: flex;
  column-gap: 8px;
}

.todo-modify {
  display: flex;
  column-gap: 8px;
}
</style>
