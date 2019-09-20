export const initialState = {
	users: [],
	user: {},
	favourites: []
};

export default function reducer(state, action) {
	switch (action.type) {
	case "FETCH_DATA":
		return { ...state, users: action.payload || [] };
	case "FETCH_USER_DATA":
		return { ...state, user: action.payload || {} };
	case "FETCH_USER_DATA_REQUEST":
		return { ...state, user: {} };
	case "ADD_FAV":
		return {
			...state,
			favourites: [...state.favourites, action.payload]
		};
	case "REMOVE_FAV":
		return {
			...state,
			favourites: action.payload
		};
	default:
		return state;
	}
}
