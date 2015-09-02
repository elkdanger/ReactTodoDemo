import { EventEmitter } from 'events'
import { Actions } from './constants'
import Dispatcher from './dispatcher'
import _ from 'underscore'

class Store extends EventEmitter {

	constructor() {
		super();

		this.items = [];

		Dispatcher.register(this.handleAction.bind(this))
	}

	handleAction(action) {

		console.log('Dispatcher action', action);

		switch(action.actionType) {
			case Actions.addItem:				
				this.items.push(action.text.trim())
				this.emitChange();
				break;

			case Actions.removeItem:
				this.items.splice(this.items.indexOf(action.text.trim()), 1)
				console.log(this.items);
				this.emitChange()
				break;
		}

		return true;
	}

	getAll() {
		return this.items;
	}

	emitChange() {
		this.emit('changed');
	}

	addChangeListener(callback) {
		this.on('changed', callback)
	}

	removeChangeListener(callback) {
		this.removeListener('changed', callback)
	}
};

export default new Store();