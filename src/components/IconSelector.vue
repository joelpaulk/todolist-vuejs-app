<!-- src/components/IconSelector.vue -->
<template>
    <div class="icon-selector relative" @click.stop="toggleDropdown">
      <button
        class="icon-button p-2 rounded-full hover:bg-gray-200"
      >
        <i :class="['fas', `fa-${selectedIcon || 'caret-down'}`]"></i>
      </button>
      <div
        class="icon-selector-container absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        v-show="isOpen"
      >
        <div class="py-1" role="menu" aria-orientation="vertical">
          <button
            v-for="(icon, index) in icons"
            :key="index"
            @click.stop="selectIcon(icon)"
            class="todo-task-icon block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <i :class="['fas', `fa-${icon}`]"></i>
            <!-- {{ icon }} -->
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "IconSelector",
    props: {
      icons: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        isOpen: false,
        selectedIcon: "",
      };
    },
    mounted() {
      document.addEventListener("click", this.closeDropdown);
    },
    beforeDestroy() {
      document.removeEventListener("click", this.closeDropdown);
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      closeDropdown() {
        this.isOpen = false;
      },
      selectIcon(icon) {
        this.selectedIcon = icon;
        this.$emit("selected", icon);
        this.isOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .icon-selector {
    position: relative;
  }
  
  .icon-button {
    cursor: pointer;
  }
  .icon-selector .icon-button {
    height: 42px;
    width: 524px;
    border-radius: 10px;
    border: 1px solid #202020;
    border-bottom-width: 4px;
    margin-bottom: 8px;
  }

  .icon-selector-container {
    max-width: 525px;
    width: auto;
    position: relative;
    margin: 0 auto;
  }

  .icon-selector .icon-button:hover, .icon-selector .icon-button:active {
    background-color: #ffd43b;
  }
  
  .todo-task-icon {
    width: 70px;
    height: 40px;
    border: none;
    margin-bottom: 5px !important;
    margin-top: 5px !important;
    border-radius: 10px;
    color: #cdcdcd;
    display: inline;
    text-align: center;
  }

  .todo-task-icon:hover, .todo-task-icon:active {
    color: #4a4a4a;
  }


  </style>
  