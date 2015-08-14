var React = require('react');
var TodoItems = require('./TodoItems.jsx').TodoItems;
import Store from '../store'

module.exports.TodoApp = React.createClass({

	getInitialState: function() {
		return {
			count: Store.getAll().length
		}
	},

	componentDidMount: function() {
		Store.addChangeListener(this.onItemChange);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this.onItemChange);
	},

	onItemChange: function() {
		this.setState({ count: Store.getAll().length });
	},

	render: function() {
		return (
			<section id='todo'>
				<h1>Todo List Demo ({this.state.count})</h1>		
				<TodoItems />
			</section>
		)
	}
});