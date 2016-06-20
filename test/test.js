import test from 'ava';
import h, {html} from '../src';

test('class', t => {
	const str = html(h('div.container', ['Hello world!']));
	t.is(str, '<div class="container">\n\tHello world!\n</div>');
});

test('multiple classes', t => {
	const str = html(h('div.container.big', ['Hello world!']));
	t.is(str, '<div class="container big">\n\tHello world!\n</div>');
});

test('no tagname', t => {
	const str = html(h('.container.big', ['Hello world!']));
	t.is(str, '<div class="container big">\n\tHello world!\n</div>');
});

test('id', t => {
	const str = html(h('div#container', ['Hello world!']));
	t.is(str, '<div id="container">\n\tHello world!\n</div>');
});

test('class and id', t => {
	const str = html(h('div.container#main', ['Hello world!']));
	t.is(str, '<div id="main" class="container">\n\tHello world!\n</div>');
});

test('attributes', t => {
	const str = html(h('div.container', {style: 'text-align: center'}, ['Hello world!']));
	t.is(str, '<div style="text-align: center" class="container">\n\tHello world!\n</div>');
});

test('no children', t => {
	const str = html(h('div.container'));
	t.is(str, '<div class="container"></div>');
});

test('multiple children', t => {
	const str = html(h('div', ['Hello world!', 'And hi there, universe!']));
	t.is(str, `
<div>
	Hello world!
	And hi there, universe!
</div>
`.trim());
});

test('nesting', t => {
	const str = html(h('div', [
		h('div', 'Hello world!'),
		h('div', 'And hi there, universe!')
	]));
	t.is(str, `
<div>
	<div>
		Hello world!
	</div>
	<div>
		And hi there, universe!
	</div>
</div>
`.trim());
});

test('self closing tags', t => {
	const str = html(h('div', [
		h('link', {rel: 'stylesheet', href: 'style.css'}),
		h('hr'),
		h('br')
	]));
	t.is(str, `
<div>
	<link rel="stylesheet" href="style.css">
	<hr>
	<br>
</div>
`.trim());
});

test('boolean properties', t => {
	const str = html(h('div', [
		h('input', {type: 'checkbox', checked: true}),
		h('input', {type: 'checkbox', checked: false}),
		h('input', {type: 'checkbox', checked: ''})
	]));
	t.is(str, `
<div>
	<input type="checkbox" checked>
	<input type="checkbox">
	<input type="checkbox" checked="">
</div>
`.trim());
});

test('doctype', t => {
	const str = html(h('!doctype', {html: true}));
	t.is(str, '<!doctype html>');
});
