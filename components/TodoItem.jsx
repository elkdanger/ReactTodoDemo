var React = require('react');

module.exports.TodoItem = React.createClass({

	render: function() {
		return (
			<tr className="todo-item">
				<td>{this.props.name}</td>
				<td><input type="checkbox" /></td>
			</tr>
		)
	}
});