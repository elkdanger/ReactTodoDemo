import { EventEmitter } from 'events'
import { Dispatcher } from 'flux'
import * as _ from 'underscore'

let items = ['Get up', 'Eat']

let dispatcher = new Dispatcher();

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

	dispatcherIndex: dispatcher.register(function(payload) {
		let action = payload.action;
		var text;

		switch(action.actionType) {
			case 'add':
				text = action.text.trim()
				items.push(text)
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