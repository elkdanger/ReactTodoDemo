var React = require('react');

module.exports.TodoItem = React.createClass({

	getInitialState: function() {
		return {
			checked: this.props.checked || false
		}
	},

	handleChecked: function(e) {
		this.setState({ checked: e.currentTarget.checked });
	},

	render: function() {

		var classes = ['todo-item'];

		if (this.state.checked)
			classes.push('success');

		return (
			<tr className={classes.join(' ')}>
				<td><input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} /></td>
				<td>{this.props.name}</td>
				<td>
					<button className="close" onClick={this.props.onDelete.bind(this, this.props.name)}><span>&times;</span></button>
				</td>
			</tr>
		)
	}
});