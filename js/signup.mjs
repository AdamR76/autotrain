import { flow, formData, html, querySelect, updateElement } from './std.mjs';

import ajax from './ajax.mjs';

const [container] = querySelect('.container'),
	[error] = querySelect('.error');

const signUp = () => html('form', {
	onsubmit: evt => {
		evt.preventDefault();
		const values = formData(evt.target);
		console.log(values)
		flow(
			ajax({ path: 'user/signup', data: values }),
			([user]) => {
				if (user) return localStorage.login = JSON.stringify(user)
				return updateElement(error, 'Something went wrong. Please try again later.')
			}
		).catch(console.error)
	}
}, [
	html('label', {}, [
		'Email',
		html('input', { name: 'email', required: true, type: 'text' })
	]),
	html('label', {}, [
		'Password',
		html('input', { name: 'password', required: true, type: 'password' })
	]),
	html('label', {}, [
		'Birthday',
		html('input', { type: 'date', required: true, name: 'birthday' })
	]),
	html('button', { type: 'submit', className: 'btn' }, 'Submit'),
]);

updateElement(container, signUp())