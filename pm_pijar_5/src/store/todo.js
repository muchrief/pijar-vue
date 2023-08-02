const todoStore = {
  state: {
    todoList: [],
  },
  mutations: {
    changeTodo: function(state, todoList){
        state.todoList = todoList
    }
  },
  actions: {
    updateTitleTodo: function({commit, state}, payload) {
        const newTodoList = state.todoList.map((v, i) => {
            if (i === payload.index) {
                return {
                    ...v,
                    title: payload.value,
                }
            }
            return v
        } )
        commit('changeTodo', newTodoList)
        return
    },
    updateDescTodo: function({commit, state}, payload) {
      const newTodoList = state.todoList.map((v) => {
        if (v.title === payload.title) {
          return payload
        }
        return v
      })
      commit('changeTodo', newTodoList)
    },
    addTodo: function({commit, state}, payload) {
        const newTodoList = [...state.todoList, {
            title: payload.value,
            description: "",
        }]
        commit('changeTodo', newTodoList)
    },
    removeTodo: function({commit, state}, payload) {
        const newTodoList = state.todoList.filter((_,i) => payload.index !== i)
        commit('changeTodo', newTodoList)
    }
  },
};

export default todoStore;
