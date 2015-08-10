var React = require('react');

module.exports.TodoItems = React.createClass({

	getInitialState: function() {
		return {
			items: []			
		}
	},

	onAdd: function(item) {		
		this.setState({ items: this.state.items.concat([item]) });	
	},

	render: function() {

		var items = this.state.items.map(function(item) { return <TodoItem name={item} key={item.name} />; });
		
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