import { flow, formData, html, querySelect, updateElement } from './std.mjs';

const [container] = querySelect('.container');

const signInForm = () => html('form', {
	onsubmit: evt => {
		evt.preventDefault();
		const values = formData(evt.target);
		console.log(values)
	}
}, [
	html('label', {}, [
		'Email',
		html('input', { name: 'email', required: true })
	]),
	html('label', {}, [
		'Password',
		html('input', { name: 'password', required: true })
	]),
	html('button', { type: 'submit', className: 'btn' }, 'Submit'),
]);

const noAccount = () => html('p', {}, [`Don't have an account?`, html('a', { href: '/signup.html' }, ' Sign up!')])

updateElement(container, [
	signInForm(),
])