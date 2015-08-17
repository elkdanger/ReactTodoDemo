import React from 'react'
import Actions from '../actions'

module.exports.TodoItem = React.createClass({

	getInitialState: function() {
		return {
			checked: this.props.checked || false
		}
	},

	handleChecked: function(e) {
		this.setState({ checked: e.currentTarget.checked });
	},

	handleDelete: function() {
		Actions.deleteItem(this.props.name);
	},

	render: function() {

		var classes = ['todo-item'];

		if (this.state.checked)
			classes.push('success');

		return (
			<tr className={classes.join(' ')}>
				<td>{this.props.name}</td>
				<td>
					{ /*<input type="checkbox" checked={this.state.checked} onChange={this.handleChecked} />*/ }
					<button className="close" onClick={this.handleDelete}><span>&times;</span></button>
				</td>
			</tr>
		)
	}
});