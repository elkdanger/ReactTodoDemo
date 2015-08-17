import Dispatcher from './dispatcher'
import { Actions } from './constants'

export default {
	addItem: function(item) {		
		Dispatcher.dispatch({
			actionType: Actions.addItem,
			text: item
		})
	}
}