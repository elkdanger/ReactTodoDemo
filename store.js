import { EventEmitter } from 'events'
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
		
		switch(action.actionType) {
			case 'add':				
				items.push(action.text.trim())
				store.emitChange();
				break;

			case 'delete':
				items = items.splice(items.indexOf(action.text), 1)
				store.emitChange()
				break;
		}

		return true
	})

});

export default store;