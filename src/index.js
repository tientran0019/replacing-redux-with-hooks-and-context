import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "@reach/router";
import FavPage from "./containers/FavPage";
import HomePage from "./containers/HomePage";
import UserPage from "./containers/UserPage";
import { StoreProvider } from "./redux/store";

import "./index.css";

ReactDOM.render(
	<StoreProvider>
		<Router>
			<App path="/">
				<HomePage path="/" />
				<FavPage path="/faves" />
				<UserPage path="/:userId" />
			</App>
		</Router>
	</StoreProvider>,
	document.getElementById("root")
);
