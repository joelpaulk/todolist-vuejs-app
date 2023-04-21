<template>
    <div class="main-outer-container">
      <div class="user-name-container">
          <label for="user-name-input"><i title="Spock sends his greetings!" class="fa fa-hand-spock-o" aria-hidden="true"  id="joels-easter-egg"></i> Hey there, </label>
          <input
          id="user-name-input"
          type="text"
          v-model="userName"
          @blur="saveUserName"
          placeholder="Your name"
          class="user-name-input border border-gray-300 p-1 rounded"
        >
      </div>
      <h2 class="todo-list-header text-xl font-bold">Create a task</h2>
      <form @submit.prevent="addNewTodo" id="form-create-todo">
        <icon-selector
        :icons="['laptop', 'trash-alt', 'book', 'map', 'heart', 'shopping-cart', 'bell']"
        @selected="selectedIcon = $event"
        ></icon-selector>
        <input
          type="text"
          v-model="newTodo"
          placeholder="What needs to be done?"
          required
          class="todo-task-field border border-gray-300 p-2 rounded w-full"
        >
        <input
          type="date"
          v-model="newTodoDueDate"
          class="todo-datepicker border border-gray-300 p-2 rounded w-full"
        >
        <button
          type="submit"
          class="todo-add-task font-bold py-2 px-4 rounded mt-4"
        >
        <!-- <i :class="['fas', `fa-${selectedIcon}`]" v-if="selectedIcon"></i> -->
          Add Task
        </button>
      </form>
      <ul id="task-created">
        <li
          v-for="todo in pendingTodos"
          :key="todo.id"
          class="todo-item border-b border-gray-300 p-2"
        >
        <span class="task-icon">
            <i :class="['fas', `fa-${todo.icon}`]" v-if="todo.icon"></i>
        </span>
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="updateTodo(todo)"
            class="task-checkbox"
          >
          <input
            type="text"
            v-model="todo.text"
            @change="updateTodo(todo)"
            class="task-textbox border border-gray-300 p-1 rounded"
            :class="{ 'text-red-500': isOverdue(todo.dueDate) && !todo.completed }"
          >
          <span class="task-duedate text-gray-500" v-if="todo.dueDate">
            Due: {{ todo.dueDate }}
          </span>
          <button
            @click="openDeleteModal(todo.id)"
            class="task-delete text-white font-bold py-1 px-2 rounded"
          >
          <i class="fas fa-trash-alt"></i>
          </button>
          <button
            @click="duplicateTodo(todo.id)"
            class="task-clone text-white font-bold py-1 px-2 rounded"
          >
          <i class="fas fa-clone"></i>
          </button>
        </li>
      </ul>
      <h2 class="completed-list-header text-xl font-bold mt-8">Completed Tasks</h2>
      <ul class="list-disc ml-8" id="tasks-completed">
        <li v-for="todo in completedTodos" :key="todo.id" class="my-2">
            <span class="task-icon-completed ml-2">
                <i :class="['fas', `fa-${todo.icon}`]" v-if="todo.icon"></i>
            </span>
            <del>{{ todo.text }}</del>
            <span class="ml-4 text-gray-500" v-if="todo.dueDate">
                |   Due: {{ todo.dueDate }}
            </span>
        </li>
      </ul>
      <div v-if="showDeleteModal" class="delete-modal-outer fixed z-10 inset-0 overflow-y-auto">
        <!-- Modal content -->
        <div class="delete-modal-inner fixed inset-0 bg-gray-500 bg-opacity-75">
          <div class="bg-white rounded-lg mx-auto mt-20 p-10 max-w-md">
            <h2 class="text-xl font-bold mb-4"><i class="fa fa-skull"></i> Delete Task</h2>
            <p>Are you sure you want to delete this task?</p>
            <div class="flex justify-center mt-4">
              <button
                @click="showDeleteModal = false"
                class="cancel bg-white-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                @click="deleteSelectedTodo"
                class="delete bg-white-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="created-by text-center mt-16">
      <p>Built by Joel</p>
    </div>
  </div>
</template>

  

<script>
import { mapActions, mapGetters } from 'vuex';
import IconSelector from '@/components/IconSelector.vue';

export default {
  components: {
    IconSelector,
  },  
  data() {
    return {
      newTodo: '',
      newTodoDueDate: '',
      showDeleteModal: false,
      todoToDelete: null,
      userName: ""
    //   dueDateFocused: false,
    //   selectedIcon: ''
    };
  },
  computed: {
    ...mapGetters(['pendingTodos', 'completedTodos']),
    isOverdue() {
      return (dueDate) => {
        if (!dueDate) {
          return false;
        }
        const today = new Date().toISOString().slice(0, 10);
        return dueDate < today;
      };
    },
  },
  methods: {
  ...mapActions(['addTodo', 'updateTodo', 'deleteTodo', "duplicateTodo"]),
  addNewTodo() {
    if (this.newTodo.trim() === "") {
      return;
    }
    const todo = {
      id: Date.now(),
      text: this.newTodo,
      completed: false,
      dueDate: this.newTodoDueDate || null,
      icon: this.selectedIcon || "",
    };
    this.addTodo(todo);
    this.newTodo = "";
    this.newTodoDueDate = null;
    this.selectedIcon = "";
  },
  openDeleteModal(id) {
    this.todoToDelete = id;
    this.showDeleteModal = true;
  },
  deleteSelectedTodo() {
    this.deleteTodo(this.todoToDelete);
    this.showDeleteModal = false;
  },
//   toggleComplete(id) {
//     this.updateTodo({
//         id,
//         changes: { completed: !this.pendingTodos.find(todo => todo.id === id).completed },
//     });
//   },
  duplicateTodo(id) {
    const originalTodo = this.pendingTodos.find(todo => todo.id === id);
    this.addTodo({
        id: Date.now(),
        text: originalTodo.text,
        completed: originalTodo.completed,
        dueDate: originalTodo.dueDate,
        icon: originalTodo.icon,
    });
  },
  saveUserName() {
    localStorage.setItem("userName", this.userName);
  },
  loadUserName() {
    this.userName = localStorage.getItem("userName") || "";
  }
},

mounted() {
    this.loadUserName();
}
};
</script>

<style scoped>
/* Add any CSS styles for the component here */

/* @import "~@fortawesome/fontawesome-svg-core/styles.css"; */

</style>
  