import React from "react";
import { Store } from "../redux/store";
import { fetchDataAction, toggleFavAction } from "../redux/actions";

const UsersList = React.lazy(() => import("../components/UsersList"));

export default function HomePage() {
	const { state, dispatch } = React.useContext(Store);

	React.useEffect(
		() => {
			state.users.length === 0 && fetchDataAction(dispatch);
		},
		[state]
	);

	const props = {
		users: state.users || [],
		state: { state, dispatch },
		toggleFavAction,
		favourites: state.favourites
	};

	return (
		<React.Fragment>
			<React.Suspense fallback={<div>Loading...</div>}>
				<div className="user-layout">
					<UsersList {...props} />
				</div>
			</React.Suspense>
		</React.Fragment>
	);
}
