import React from "react";
import "./App.css";
import "./pages/Card.css"
import { BrowserRouter,Routes, Route, useParams } from "react-router-dom";
import Page from "./pages/Page"

export default class App extends React.Component {

	render() {
				
		return (
			<div className="main">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PageWrap />} />
						<Route path="/:page" element={<PageWrap />}  />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

function PageWrap() {
  let params = useParams();
  let page = params.page;
  page = page ? page : 1;
  return (
	<Page page={page} />
  );
}