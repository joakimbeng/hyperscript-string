'use strict';
const SELECTOR_REGEX = /(^|#|\.)[^#\.]+/g;

exports.getSelectorParts = (selector) => {
	const matches = selector.match(SELECTOR_REGEX);
	if (!matches) {
		throw new Error(`Invalid selector! Should have the format "name.class1.class2#id", but was: "${selector}"`);
	}
	return {
		tag: getTag(matches),
		id: getId(matches),
		classes: getClasses(matches)
	};
};

function getTag(matches) {
	if (matches[0][0] === '#' || matches[0][0] === '.') {
		return 'div';
	}
	return matches[0].toLowerCase();
}

function getClasses(matches) {
	return matches.filter(isClass).map(slice(1));
}

function getId(matches) {
	return matches.filter(isId).map(slice(1))[0];
}

function slice(a, b) {
	return val => val.slice(a, b);
}

function isId(str) {
	return str[0] === '#';
}

function isClass(str) {
	return str[0] === '.';
}
