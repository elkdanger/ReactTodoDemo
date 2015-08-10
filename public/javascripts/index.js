(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var TodoItem = React.createClass({
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

var NewItem = React.createClass({
	displayName: "NewItem",

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
			"tr",
			null,
			React.createElement(
				"td",
				{ colspan: "2" },
				React.createElement(
					"form",
					{ onSubmit: this.handleSubmit },
					React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter a new todo item", onChange: this.handleChange, value: this.state.value }),
					React.createElement(
						"button",
						{ type: "submit", className: "btn btn-primary" },
						"Add item"
					)
				)
			)
		);
	}
});

var TodoItems = React.createClass({
	displayName: "TodoItems",

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
			"table",
			{ className: "table table-striped" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Name"
					),
					React.createElement(
						"th",
						null,
						" "
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				items,
				React.createElement(NewItem, { onAdd: this.onAdd })
			)
		);
	}
});

var Todo = React.createClass({
	displayName: "Todo",

	render: function render() {
		return React.createElement(
			"section",
			{ id: "todo" },
			React.createElement(
				"h1",
				null,
				"Todo List"
			),
			React.createElement(TodoItems, null)
		);
	}
});

module.exports.Todo = Todo;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Todo = require('./components/Todo.jsx').Todo;

React.render(React.createElement(Todo, null), document.getElementById('app'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/Todo.jsx":1}]},{},[2]);
