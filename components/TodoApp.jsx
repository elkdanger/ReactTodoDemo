var React = require('react');
var TodoItems = require('./TodoItems.jsx').TodoItems;
var EmailAddress = require('./EmailAddress.jsx').EmailAddress;

module.exports.TodoApp = React.createClass({

	getInitialState: function() {
		return { showEmailPanel: false };
	},

	handleItemsChanged: function(items) {
		this.setState({ showEmailPanel: items.length > 0 });
	},

	render: function() {
		return (
			<section id='todo'>
				<h1>Todo List Demo</h1>		
				<TodoItems itemsChanged={this.handleItemsChanged} />
				{ this.state.showEmailPanel && <EmailAddress /> }
			</section>
		)
	}
});