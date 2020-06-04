import { createStore } from 'redux'

const INITIAL_STATE = {
	data: [{
		title: 'Venicyus',
		description: 'testando 1',
		date: '2020-06-03T08:00:00.000'
	}, {
		title: 'Geovane',
		description: 'testando 2',
		date: '2020-06-02T08:00:00.000'
	}]
};

function events(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_EVENTS':
			return { ...state, data: [...state.data, action.title] };
		default:
			return state;
	}
}

const store = createStore(events);

export default store;