import { createStore } from 'redux';

const INITIAL_STATE = { data: [] };

function events(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'GET':
			return { ...state, data: [...action.event] };
		case 'ADD':
			return { ...state, data: [...state.data, action.event] };
		case 'EDIT':
			return { ...state, data: [...state.data.filter(d => d.id !== action.event.id), action.event] };
		case 'REMOVE':
			return { ...state, data: [...state.data.filter(d => d.id !== action.event.id)] };
		default:
			return state;
	}
}

const store = createStore(events);

export default store;