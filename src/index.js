import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "@reach/router";
import { StoreProvider } from "./redux/store";

import "./index.css";

const HomePage = lazy(() => import('./containers/HomePage'));
const FavPage = lazy(() => import('./containers/FavPage'));
const UserPage = lazy(() => import('./containers/UserPage'));

ReactDOM.render(
	<StoreProvider>
		<Suspense fallback={<div className="loading">Loading...</div>}>
			<Router>
				<App path="/">
					<HomePage path="/" />
					<FavPage path="/faves" />
					<UserPage path="/:userId" />
				</App>
			</Router>
		</Suspense>
	</StoreProvider>,
	document.getElementById("root")
);
