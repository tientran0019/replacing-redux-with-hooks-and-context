import React from "react";
import { Link } from "@reach/router";

export default function UsersList(props) {
	const { users = [], toggleFavAction, favourites = [], state } = props;

	return users && users.map(user => {
		return (
			<section key={user.id} className="user-box">
				<img
					src={user.avatar}
					alt={`${user.name}`}
					height={200}
					width={200}
				/>
				<section style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', }}>
					<Link to={'/' + user.id}><h4>{user.name}</h4></Link>

					<button
						type="button"
						onClick={() =>
							toggleFavAction(user, state.state, state.dispatch)
						}
					>
						{favourites.find(fav => fav.id === user.id) ? "Unfav" : "Fav"}
					</button>
				</section>
			</section>
		);
	});
}
