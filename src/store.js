import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    pendingTodos: (state) => {
      return state.todos.filter((todo) => !todo.completed);
    },
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, { id, changes }) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = { ...state.todos[todoIndex], ...changes };
      }
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    updateTodo({ commit }, { id, changes }) {
      commit('updateTodo', { id, changes });
    },
    deleteTodo({ commit }, id) {
      commit('deleteTodo', id);
    },
    duplicateTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
  },
});
