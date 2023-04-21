// IconSelector test config
import { shallowMount } from '@vue/test-utils';
import IconSelector from '@/components/IconSelector.vue';

describe('IconSelector.vue', () => {
  it('renders the correct number of icons', () => {
    const icons = ['laptop', 'trash-alt', 'book', 'map', 'heart', 'shopping-cart', 'bell'];
    
    const wrapper = shallowMount(IconSelector, {
      propsData: {
        icons,
      },
    });

    expect(wrapper.findAll('.todo-task-icon').length).toBe(icons.length);
  });

});