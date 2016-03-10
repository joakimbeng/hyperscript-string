import test from 'ava';
import h from '../src';

test('no tag, class or id', t => {
	t.throws(() => h('', ['Hello world!']));
});

test('class', t => {
	const html = h('div.container', ['Hello world!']);
	t.is(html, '<div class="container">Hello world!</div>');
});

test('multiple classes', t => {
	const html = h('div.container.big', ['Hello world!']);
	t.is(html, '<div class="container big">Hello world!</div>');
});

test('no tagname', t => {
	const html = h('.container.big', ['Hello world!']);
	t.is(html, '<div class="container big">Hello world!</div>');
});

test('id', t => {
	const html = h('div#container', ['Hello world!']);
	t.is(html, '<div id="container">Hello world!</div>');
});

test('class and id', t => {
	const html = h('div.container#main', ['Hello world!']);
	t.is(html, '<div id="main" class="container">Hello world!</div>');
});

test('attributes', t => {
	const html = h('div.container', {style: 'text-align: center'}, ['Hello world!']);
	t.is(html, '<div style="text-align: center" class="container">Hello world!</div>');
});

test('no children', t => {
	const html = h('div.container');
	t.is(html, '<div class="container"></div>');
});

test('multiple children', t => {
	const html = h('div', ['Hello world!', 'And hi there, universe!']);
	t.is(html, `
<div>
	Hello world!
	And hi there, universe!
</div>
`.trim());
});

test('nesting', t => {
	const html = h('div', [
		h('div', 'Hello world!'),
		h('div', 'And hi there, universe!')
	]);
	t.is(html, `
<div>
	<div>Hello world!</div>
	<div>And hi there, universe!</div>
</div>
`.trim());
});

test('self closing tags', t => {
	const html = h('div', [
		h('link', {rel: 'stylesheet', href: 'style.css'}),
		h('hr'),
		h('br')
	]);
	t.is(html, `
<div>
	<link rel="stylesheet" href="style.css">
	<hr>
	<br>
</div>
`.trim());
});

test('boolean properties', t => {
	const html = h('div', [
		h('input', {type: 'checkbox', checked: true}),
		h('input', {type: 'checkbox', checked: false}),
		h('input', {type: 'checkbox', checked: ''})
	]);
	t.is(html, `
<div>
	<input type="checkbox" checked>
	<input type="checkbox">
	<input type="checkbox" checked="">
</div>
`.trim());
});

test('doctype', t => {
	const html = h('!doctype', {html: true});
	t.is(html, '<!doctype html>');
});
