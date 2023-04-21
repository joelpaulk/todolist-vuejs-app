import { shallowMount } from '@vue/test-utils';
import AboutApp from '@/components/AboutApp.vue';

describe('AboutApp.vue', () => {
  it('renders key features heading', () => {
    const heading = 'Key Features';
    const wrapper = shallowMount(AboutApp);
    expect(wrapper.text()).toContain(heading);
  });

  it('renders how to use heading', () => {
    const heading = 'How to Use';
    const wrapper = shallowMount(AboutApp);
    expect(wrapper.text()).toContain(heading);
  });

});
