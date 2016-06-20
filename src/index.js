'use strict';
const h = require('haitch');
const render = require('./render');

const html = tag => render(tag);

module.exports = exports = h;

exports.html = html;
