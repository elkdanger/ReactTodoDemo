var React = require('react');

var TodoItem = React.createClass({

	render: function() {
		return (
			<tr className="todo-item">
				<td>{this.props.name}</td>
				<td><input type="checkbox" /></td>
			</tr>
		)
	}
});

var NewItem = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		};		
	},

	handleChange: function(e) {
		this.setState({ value: e.target.value });
	},

	handleSubmit: function(e) {
		e.preventDefault();

		if (this.props.onAdd && this.state.value.length)
			this.props.onAdd(this.state.value);

		this.setState({ value: '' });
	},

	render: function() {
		return (
			<tr>
				<td colspan="2">
					<form onSubmit={this.handleSubmit}>
						<input type="text" className="form-control" placeholder="Enter a new todo item" onChange={this.handleChange} value={this.state.value} />					
						<button type="submit" className="btn btn-primary">Add item</button>
					</form>
				</td>
			</tr>
		)
	}
});

var TodoItems = React.createClass({

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

var Todo = React.createClass({
	render: function() {
		return (
			<section id='todo'>
				<h1>Todo List</h1>		
				<TodoItems />
			</section>
		)
	}
});

module.exports.Todo = Todo;