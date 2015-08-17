import { EventEmitter } from 'events'
import { Actions } from './constants'
import Dispatcher from './dispatcher'
import _ from 'underscore'

let items = []

let store = _.extend({}, EventEmitter.prototype, {

	getAll: function() {
		return items;
	},

	emitChange: function() {
		this.emit('changed');
	},

	addChangeListener: function(callback) {
		this.on('changed', callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener('changed', callback)
	},

	dispatcherIndex: Dispatcher.register(function(action) {
		
		console.log('Dispatcher action', action);

		switch(action.actionType) {
			case Actions.addItem:				
				items.push(action.text.trim())
				store.emitChange();
				break;

			case Actions.removeItem:
				items.splice(items.indexOf(action.text.trim()), 1)
				console.log(items);
				store.emitChange()
				break;
		}

		return true
	})

});

export default store;