import React from "react";
import { Link } from "@reach/router";
import { Store } from "./redux/store";

function App(props) {
	const { state } = React.useContext(Store);

	return (
		<React.Fragment>
			<header className="header">
				<div>
					<h1>Github users</h1>
					<p>Pick your favourite users</p>
				</div>
				<div>
					<Link to="/">Home</Link>{" "}
					<Link to="/faves">Favourite(s) {state.favourites.length}</Link>
				</div>
			</header>
			{props.children}
		</React.Fragment>
	);
}
export default App;
