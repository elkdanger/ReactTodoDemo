var React = require('react');
var NewItem = require('./NewItem.jsx').NewItem;
var TodoItem = require('./TodoItem.jsx').TodoItem;
var TodoItems = require('./TodoItems.jsx').TodoItems;

module.exports.TodoApp = React.createClass({
	render: function() {
		return (
			<section id='todo'>
				<h1>Todo List</h1>		
				<TodoItems />
			</section>
		)
	}
});