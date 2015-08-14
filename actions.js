import Dispatcher from './dispatcher'

export default {
	addItem: function(item) {		
		Dispatcher.dispatch({
			actionType: 'add',
			text: item
		})
	}
}