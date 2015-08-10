(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

module.exports.NewItem = React.createClass({
	displayName: 'NewItem',

	getInitialState: function getInitialState() {
		return {
			value: ''
		};
	},

	handleChange: function handleChange(e) {
		this.setState({ value: e.target.value });
	},

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();

		if (this.props.onAdd && this.state.value.length) this.props.onAdd(this.state.value);

		this.setState({ value: '' });
	},

	render: function render() {
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				{ colspan: '2' },
				React.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter a new todo item', onChange: this.handleChange, value: this.state.value }),
					React.createElement(
						'button',
						{ type: 'submit', className: 'btn btn-primary' },
						'Add item'
					)
				)
			)
		);
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var TodoItems = require('./TodoItems.jsx').TodoItems;

module.exports.TodoApp = React.createClass({
	displayName: 'TodoApp',

	render: function render() {
		return React.createElement(
			'section',
			{ id: 'todo' },
			React.createElement(
				'h1',
				null,
				'Todo List Demo'
			),
			React.createElement(TodoItems, null)
		);
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./TodoItems.jsx":4}],3:[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

module.exports.TodoItem = React.createClass({
	displayName: "TodoItem",

	render: function render() {
		return React.createElement(
			"tr",
			{ className: "todo-item" },
			React.createElement(
				"td",
				null,
				this.props.name
			),
			React.createElement(
				"td",
				null,
				React.createElement("input", { type: "checkbox" })
			)
		);
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var TodoItem = require('./TodoItem.jsx').TodoItem;
var NewItem = require('./NewItem.jsx').NewItem;

module.exports.TodoItems = React.createClass({
	displayName: 'TodoItems',

	getInitialState: function getInitialState() {
		return {
			items: []
		};
	},

	onAdd: function onAdd(item) {
		this.setState({ items: this.state.items.concat([item]) });
	},

	render: function render() {

		var items = this.state.items.map(function (item) {
			return React.createElement(TodoItem, { name: item, key: item.name });
		});

		return React.createElement(
			'table',
			{ className: 'table table-striped' },
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'th',
						null,
						'Name'
					),
					React.createElement(
						'th',
						null,
						' '
					)
				)
			),
			React.createElement(
				'tbody',
				null,
				items,
				React.createElement(NewItem, { onAdd: this.onAdd })
			)
		);
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./NewItem.jsx":1,"./TodoItem.jsx":3}],5:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var TodoApp = require('./components/TodoApp.jsx').TodoApp;

React.render(React.createElement(TodoApp, null), document.getElementById('app'));

console.log('hello');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/TodoApp.jsx":2}]},{},[5]);
