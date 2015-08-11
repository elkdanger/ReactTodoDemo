var React = require('react');

module.exports.EmailAddress = React.createClass({

	render: function() {
		return (
			<section id="emailForm">
				<h3>Email notifications</h3>
				<p>Enter your email address below to be notified when your todo list changes</p>

				<form className="form-horizontal">
					<input name="email" className="form-control" placeholder="Your email address" />
				</form>
			</section>
		)
	}

});