'use strict';
const arrify = require('arrify');
const isPlainObject = require('is-plain-object');
const classNames = require('classnames');
const render = require('./render');
const utils = require('./utils');

const h = (selector, attrs, children) => {
	if (attrs && !isPlainObject(attrs)) {
		children = attrs;
		attrs = {};
	} else if (!attrs) {
		attrs = {};
	}
	children = arrify(children);
	const parts = utils.getSelectorParts(selector);
	if (parts.id) {
		attrs.id = parts.id;
	}
	if (parts.classes.length) {
		attrs.class = classNames(attrs.class, parts.classes);
	}
	return render(parts.tag, attrs, children);
};

module.exports = exports = h;
