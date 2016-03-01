# hyperscript-string

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> Create HTML strings with JavaScript

Goes hand in hand with [`hyperscript-helpers`](https://www.npmjs.com/package/hyperscript-helpers).

## Installation

Install `hyperscript-string` using [npm](https://www.npmjs.com/):

```bash
npm install --save hyperscript-string
```

## Usage

### Module usage

```javascript
const h = require('hyperscript-string');

const html = h('ul.list', [
	h('li.item', 'Lorem ipsum'),
	h('li.item', {title: 'Second item'}, 'Dolor sit'),
	h('li.item', 'Amet')
]);
/*
<ul class="list">
	<li class="item">Lorem ipsum</li>
	<li title="Second item" class="item">Dolor sit</li>
	<li class="item">Amet</li>
</ul>
*/
```

Attributes that are `null`, `undefined` or `false` are excluded in the generated HTML.  
Empty strings are left as is, e.g. `h('a', {href: ''}) => '<a href=""></a>'`, and `true` are generated without value, e.g. `h('button', {disabled: true}, 'Click me') => '<button disabled>Click me</button>'`.  
[Void elements'](https://www.w3.org/TR/html5/syntax.html#void-elements) children are excluded in the generated HTML as well.

## Related packages

* [`hyperscript-helpers`](https://www.npmjs.com/package/hyperscript-helpers) - Terse syntax for hyperscript
* [`hyperscript`](https://www.npmjs.com/package/hyperscript) - Create HyperText with JavaScript, on client or server.

## API

### `h(selector[, attrs, children])`

| Name | Type | Description |
|------|------|-------------|
| selector | `String` | Contains at least the HTML tag name |
| attrs | `Object` | Attributes for the HTML tag |
| children | `String` or `Array` | The children for the HTML tag |

Returns: `String`, the generated HTML.

### `ha(selector[, attrs, children])`

*A promisified version of the `h` function*

| Name | Type | Description |
|------|------|-------------|
| selector | `String` or `Promise<String>` | Contains at least the HTML tag name |
| attrs | `Object` or `Promise<Object>` or `Object<Promise>` | Attributes for the HTML tag |
| children | `String` or `Array` or `Promise<String>` or `Promise<Array>` or `Array<Promise>` | The children for the HTML tag |

Returns: `Promise<String>`, the generated HTML.

## License

MIT © [Joakim Carlstein](http://joakim.beng.se)

[npm-url]: https://npmjs.org/package/hyperscript-string
[npm-image]: https://badge.fury.io/js/hyperscript-string.svg
[travis-url]: https://travis-ci.org/joakimbeng/hyperscript-string
[travis-image]: https://travis-ci.org/joakimbeng/hyperscript-string.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-XO-5ed9c7.svg?style=flat
