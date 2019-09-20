import React from "react";
import { Store } from "../redux/store";
import { fetchDataUserAction, toggleFavAction } from "../redux/actions";

const UserBox = React.lazy(() => import("../components/UserBox"));

export default function UserPage(props) {
	const { state, dispatch } = React.useContext(Store);

	React.useEffect(
		() => {
			fetchDataUserAction(props.userId, dispatch);
		},
		[props.userId]
	);

	const { user = {} } = state;

	if (!user.id) {
		return <div className="loading">Loading...</div>;
	}

	return (
		<React.Suspense fallback={<div className="loading">Loading...</div>}>
			<UserBox />
		</React.Suspense>
	);
}
