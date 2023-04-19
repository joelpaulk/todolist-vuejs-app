import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoList from '../components/TodoList.vue';
import AboutApp from '../components/AboutApp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: "/about",
    name: "AboutApp",
    component: AboutApp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
