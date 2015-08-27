var React = require('react');
var TodoItems = require('./TodoItems.jsx').TodoItems;
var EmailAddress = require('./EmailAddress.jsx').EmailAddress;
import Store from '../store'

module.exports.TodoApp = React.createClass({

	getInitialState: function() {
		return {
			count: Store.getAll().length,
			showEmailPanel: false
		}
	},

	componentDidMount: function() {
		Store.addChangeListener(this.onItemChange);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this.onItemChange);
	},

	onItemChange: function() {
		this.setState({ 
			count: Store.getAll().length 
		});
	},

	render: function() {
		return (
			<section id='todo'>
				<h1>Todo List Demo ({this.state.count})</h1>		
				<TodoItems />
				{ this.state.showEmailPanel && <EmailAddress /> }
			</section>
		)
	}
});