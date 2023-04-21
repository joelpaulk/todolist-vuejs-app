// TodoList test config
import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  it('renders the correct number of todo items', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false },
    ];

    const wrapper = shallowMount(TodoList, {
      mocks: {
        $store: {
          getters: {
            pendingTodos: todos,
            completedTodos: [],
          },
        },
      },
    });

    expect(wrapper.findAll('.todo-item').length).toBe(todos.length);
  });
});
