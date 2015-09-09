var React = require('react');
var TodoItems = require('./TodoItems.jsx').TodoItems;
import Store from '../store'

export const TodoApp = class extends React.Component {

	constructor() {
		super();

		this.state = {
			count: Store.getAll().length,
			showEmailPanel: false
		};
	}

	componentDidMount() {
		Store.addChangeListener(this.onItemChange.bind(this));
	}

	componentWillUnmount() {
		Store.removeChangeListener(this.onItemChange.bind(this));
	}

	onItemChange() {
		this.setState({
			count: Store.getAll().length
		});
	}

	render() {
		return (
			<section id='todo'>
				<h1>Todo List Demo ({this.state.count})</h1>
				<TodoItems />
				{ this.state.showEmailPanel && <EmailAddress /> }
			</section>
		)
	}
};
