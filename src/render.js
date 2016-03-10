'use strict';
const voidElements = require('void-elements');
const arrify = require('arrify');

module.exports = exports = function render(name, attrs, children) {
	if (name === '!doctype' || voidElements[name]) {
		return `<${name}${renderAttributes(attrs)}>`;
	}
	return `<${name}${renderAttributes(attrs)}>${renderChildren(children)}</${name}>`;
};

function renderAttributes(attrs) {
	attrs = Object.keys(attrs)
		.filter(name =>
			attrs[name] !== undefined &&
			attrs[name] !== null &&
			attrs[name] !== false
		)
		.map(name =>
			attrs[name] === true ?
			name :
			`${name}="${attrs[name]}"`
		)
		.join(' ');
	if (attrs) {
		return ` ${attrs}`;
	}
	return '';
}

function renderChildren(children) {
	children = arrify(children);
	if (children.length === 0) {
		return '';
	} else if (children.length === 1) {
		return children[0];
	}
	return `\n\t${children.join('\n\t')}\n`;
}
