var React = require('react');

module.exports.NewItem = React.createClass({

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
				<td colSpan="3">
					<form onSubmit={this.handleSubmit} className="form-inline">
						<input type="text" className="form-control" placeholder="Enter a new todo item" onChange={this.handleChange} value={this.state.value} />					
						<button type="submit" className="btn btn-primary">Add item</button>
					</form>
				</td>
			</tr>
		)
	}
});