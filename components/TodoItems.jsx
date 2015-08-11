var React = require('react');
var TodoItem = require('./TodoItem.jsx').TodoItem;
var NewItem = require('./NewItem.jsx').NewItem;

module.exports.TodoItems = React.createClass({

	getInitialState: function() {
		return {
			items: []		
		}
	},

	onAdd: function(item) {		
		this.setState({ items: this.state.items.concat([item]) });	
	},

	handleDelete: function(item) {		
		this.state.items.splice(this.state.items.indexOf(item), 1);
		this.setState({ items: this.state.items });
	},

	render: function() {
		var self = this;
		var items = this.state.items.map(function(item) { return <TodoItem name={item} key={item.name} onDelete={self.handleDelete} />; });
		
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th width="50px">&nbsp;</th>
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