var React = require('react');
var TodoItem = require('./TodoItem.jsx').TodoItem;
var NewItem = require('./NewItem.jsx').NewItem;
import Store from '../store';

module.exports.TodoItems = React.createClass({

	getInitialState: function() {
		return {
			items: Store.getAll()
		}
	},

	componentDidMount: function() {
		Store.addChangeListener(this.onChange);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this.onChange);
	},

	onChange: function() {
		this.setState({ items: Store.getAll() });
	},

	render: function() {
		var self = this;
		var items = this.state.items.map(function(item) { return <TodoItem name={item} key={item.name} onDelete={self.handleDelete} />; });
		
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					{items}
					<NewItem onAdd={this.onAdd} />
				</tbody>
			</table>
		)
	}
});