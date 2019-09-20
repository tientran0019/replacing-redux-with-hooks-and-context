import React from "react";
import { Store } from "../redux/store";
import { toggleFavAction } from "../redux/actions";

const UsersList = React.lazy(() => import("../components/UsersList"));

export default function FavPage() {
	const { state, dispatch } = React.useContext(Store);

	const props = {
		users: state.favourites || [],
		state: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites
	};

	return (
		<React.Suspense fallback={<div className="loading">Loading...</div>}>
			<div className="user-layout">
				<UsersList {...props} />
			</div>
		</React.Suspense>
	);
}
