(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

module.exports.EmailAddress = React.createClass({
	displayName: "EmailAddress",

	render: function render() {
		return React.createElement(
			"section",
			{ id: "emailForm" },
			React.createElement(
				"h3",
				null,
				"Email notifications"
			),
			React.createElement(
				"p",
				null,
				"Enter your email address below to be notified when your todo list changes"
			),
			React.createElement(
				"form",
				{ className: "form-horizontal" },
				React.createElement("input", { name: "email", className: "form-control", placeholder: "Your email address" })
			)
		);
	}

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
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
				{ colSpan: '3' },
				React.createElement(
					'form',
					{ onSubmit: this.handleSubmit, className: 'form-inline' },
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
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var TodoItems = require('./TodoItems.jsx').TodoItems;
var EmailAddress = require('./EmailAddress.jsx').EmailAddress;

module.exports.TodoApp = React.createClass({
	displayName: 'TodoApp',

	getInitialState: function getInitialState() {
		return { showEmailPanel: false };
	},

	handleItemsChanged: function handleItemsChanged(items) {
		this.setState({ showEmailPanel: items.length > 0 });
	},

	render: function render() {
		return React.createElement(
			'section',
			{ id: 'todo' },
			React.createElement(
				'h1',
				null,
				'Todo List Demo'
			),
			React.createElement(TodoItems, { itemsChanged: this.handleItemsChanged }),
			this.state.showEmailPanel && React.createElement(EmailAddress, null)
		);
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./EmailAddress.jsx":1,"./TodoItems.jsx":5}],4:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

module.exports.TodoItem = React.createClass({
	displayName: 'TodoItem',

	getInitialState: function getInitialState() {
		return {
			checked: this.props.checked || false
		};
	},

	handleChecked: function handleChecked(e) {
		this.setState({ checked: e.currentTarget.checked });
	},

	render: function render() {

		var classes = ['todo-item'];

		if (this.state.checked) classes.push('success');

		return React.createElement(
			'tr',
			{ className: classes.join(' ') },
			React.createElement(
				'td',
				null,
				React.createElement('input', { type: 'checkbox', checked: this.state.checked, onChange: this.handleChecked })
			),
			React.createElement(
				'td',
				null,
				this.props.name
			),
			React.createElement(
				'td',
				null,
				React.createElement(
					'button',
					{ className: 'close', onClick: this.props.onDelete.bind(this, this.props.name) },
					React.createElement(
						'span',
						null,
						'×'
					)
				)
			)
		);
	}
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
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

		var newItems = this.state.items.concat([item]);

		this.setState({ items: newItems });
		this.props.itemsChanged(newItems);
	},

	handleDelete: function handleDelete(item) {
		this.state.items.splice(this.state.items.indexOf(item), 1);

		this.setState({ items: this.state.items });
		this.props.itemsChanged(this.state.items);
	},

	render: function render() {
		var self = this;
		var items = this.state.items.map(function (item) {
			return React.createElement(TodoItem, { name: item, key: item.name, onDelete: self.handleDelete });
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
						{ width: '50px' },
						' '
					),
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
},{"./NewItem.jsx":2,"./TodoItem.jsx":4}],6:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var TodoApp = require('./components/TodoApp.jsx').TodoApp;

React.render(React.createElement(TodoApp, null), document.getElementById('app'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/TodoApp.jsx":3}]},{},[6]);
