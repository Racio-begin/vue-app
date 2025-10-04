import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Input from '@/components/UI/InputItem.vue';

describe('Input component', () => {
	test('renders input with correct attributes', () => {
		const wrapper = mount(Input, {
			props: {
				name: 'test-input',
				inputType: 'text',
				inputPlaceholder: 'Enter text',
				modelValue: ''
			}
		});

		const input = wrapper.find('input');
		expect(input.attributes('type')).toBe('text');
		expect(input.attributes('placeholder')).toBe('Enter text');
		expect(input.attributes('name')).toBe('test-input');
	});

	test('emits update event on input', async () => {
		const wrapper = mount(Input, {
			props: {
				name: 'test',
				inputType: 'text',
				inputPlaceholder: 'Test',
				modelValue: ''
			}
		});

		const input = wrapper.find('input');
		await input.setValue('new value');

		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')[0]).toEqual(['new value']);
	});

	test('shows error message when error prop is set', () => {
		const errorText = 'This field is required';
		const wrapper = mount(Input, {
			props: {
				name: 'test',
				inputType: 'text',
				inputPlaceholder: 'Test',
				modelValue: '',
				error: errorText
			}
		});

		expect(wrapper.find('.input__error').exists()).toBe(true);
		expect(wrapper.find('.input__error').text()).toBe(errorText);
	});
});
