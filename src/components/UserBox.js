import React from "react";
import { Store } from "../redux/store";
import { toggleFavAction } from "../redux/actions";

export default function UserBox(props) {
	const { state, dispatch } = React.useContext(Store);

	const { user = {}, favourites = [] } = state;

	return (
		<div
			style={{
				height: '80vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<section className="user-box">
				<img
					src={user.avatar}
					alt={`${user.name}`}
					height={300}
					width={300}
				/>
				<section style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', }}>
					<h4>{user.name}</h4>

					<button
						type="button"
						onClick={() =>
							toggleFavAction(user, state, dispatch)
						}
					>
						{favourites.find(fav => fav.id === user.id) ? "Unfav" : "Fav"}
					</button>
				</section>
				<p>{user.desc}</p>
			</section>
		</div>
	);
}
