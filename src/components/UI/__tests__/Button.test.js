import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Button from '@/components/UI/ButtonItem.vue';

describe('Button component', () => {
	test('renders with correct name', () => {
		const wrapper = mount(Button, {
			props: {
				name: 'Test Button'
			}
		});

		expect(wrapper.text()).toContain('Test Button');
	});

	test('applies correct theme class', () => {
		const wrapper = mount(Button, {
			props: {
				name: 'Test',
				theme: 'primary'
			}
		});

		expect(wrapper.classes()).toContain('button__theme-primary');
	});

	test('disables button when disabled prop is true', () => {
		const wrapper = mount(Button, {
			props: {
				name: 'Test',
				disabled: true
			}
		});

		expect(wrapper.attributes('disabled')).toBeDefined();
		expect(wrapper.classes()).toContain('button_disabled');
	});

	test('shows loader when loading', () => {
		const wrapper = mount(Button, {
			props: {
				name: 'Test',
				loading: true
			}
		});

		expect(wrapper.find('.button__loader').exists()).toBe(true);
		expect(wrapper.classes()).toContain('button_loading');
	});
});
