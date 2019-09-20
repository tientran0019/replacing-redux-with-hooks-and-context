export const fetchDataAction = async dispatch => {
	const data = await fetch('http://5d846591baffda001476ae57.mockapi.io/api/v1/users');
	const dataJSON = await data.json();
	return dispatch({
		type: "FETCH_DATA",
		payload: dataJSON,
	});
};

export const fetchDataUserAction = async (userId, dispatch) => {
	dispatch({
		type: "FETCH_USER_DATA_REQUEST",
	});

	const data = await fetch('http://5d846591baffda001476ae57.mockapi.io/api/v1/users/' + userId);
	const dataJSON = await data.json();
	return dispatch({
		type: "FETCH_USER_DATA",
		payload: dataJSON,
	});
};

export const toggleFavAction = (user, state, dispatch) => {
	const userInFavourites = state.favourites.find(fav => fav.id === user.id);
	let dispatchObj = {
		type: "ADD_FAV",
		payload: user
	};
	if (userInFavourites) {
		dispatchObj = {
			type: "REMOVE_FAV",
			payload: state.favourites.filter(fav => fav.id !== user.id)
		};
	}

	return dispatch(dispatchObj);
};
