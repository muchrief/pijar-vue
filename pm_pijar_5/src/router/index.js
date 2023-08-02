import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const APP_NAME = "Todo List"

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Home",
    },
    redirect: "/todos",
    // component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    meta: {
      title: "Todos",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TodoListView.vue')
  }, 
  {
    path: "/todos/:id",
    name: "todo-detail",
    meta: {
      title: "Todo Detail",
    },
    component: () => import('../views/TodoDetailView.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title ? to.meta.title + " - " + APP_NAME : APP_NAME
})


export default router
