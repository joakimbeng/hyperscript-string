'use strict';
const H = require('haitch').H;
const voidElements = require('void-elements');

module.exports = exports = render;

function render(tag, level) {
	if (typeof tag === 'string') {
		return tag;
	}
	if (!(tag instanceof H)) {
		throw new TypeError(`Expected string or Haitch tag but was: ${typeof tag}`);
	}
	if (tag.tagName === '!doctype' || voidElements[tag.tagName]) {
		return `<${tag.tagName}${renderAttributes(tag.attributes)}>`;
	}
	return `<${tag.tagName}${renderAttributes(tag.attributes)}>${renderChildren(tag.children, level)}</${tag.tagName}>`;
}

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

function renderChildren(children, level) {
	if (children.length === 0) {
		return '';
	}
	level = level || 0;
	const indent = '\t'.repeat(level + 1);
	const lastIndent = '\t'.repeat(level);
	return `\n${indent}${children.map(child => render(child, level + 1)).join(`\n${indent}`)}\n${lastIndent}`;
}
