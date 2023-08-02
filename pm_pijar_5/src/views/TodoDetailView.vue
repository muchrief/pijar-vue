<script>
import store from "../store/index";

export default {
  name: "TodoDetailView",
  data: () => ({
    store: store,
    todoStore: store.state.todoStore,
    isEdited: false,
  }),
  methods: {
    handleEditDesc: function (e) {
      const value = e.target.value;
      const id = this.$route.params.id;
      const todo = this.todoStore.todoList[id];

      const payload = {
        ...todo,
        description: value,
      }
      this.store.dispatch("todoStore/updateDescTodo", payload);
    },
    changeDesc: function () {
      this.isEdited = !this.isEdited;
    },
  },
  computed: {
    todo() {
      const id = this.$route.params.id;
      const todo = this.todoStore.todoList[id];
      return todo;
    },
  },
};
</script>

<template>
  <div class="todo-detail-wrapper">
    <div class="header text-start">
      <div class="back">
        <router-link to="/todos">
          <h2>Kembali</h2>
        </router-link>
      </div>
    </div>
    <div class="todo-detail text-start">
      <div class="title">
        <h4>
          {{ todo.title }}
        </h4>
      </div>
      <div class="todo-desc" v-if="!isEdited">
        <p v-if="todo.description">{{ todo.description }}</p>
        <p class="capitalize" v-else>belum ada deskripsi</p>
      </div>
      <div class="edit-desc" v-else>
        <input
          type="text"
          :value="todo.description"
          placeholder="ubah deskripsi"
          @input="handleEditDesc"
        />
        <button
          type="button"
          class="capitalize pd-x-2 pd-y-1"
          @click="changeDesc"
        >
          simpan
        </button>
      </div>
    </div>
    <div class="modify-todo" v-if="!isEdited">
      <button
        type="button"
        class="capitalize pd-x-2 pd-y-1"
        @click="changeDesc"
      >
        ubah desckripsi
      </button>
    </div>
  </div>
</template>

<style>
.todo-detail-wrapper {
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 16px;
  row-gap: 12px;
}

.todo-detail {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.modify-todo {
  display: flex;
  justify-content: start;
}

.edit-desc {
  display: flex;
  column-gap: 8px;
}

.edit-desc input {
    flex: 1 1 0;
}
</style>
