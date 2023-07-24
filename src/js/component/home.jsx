import React from "react";

import NavBar from "./navbar.jsx"
import Card from "./cards.jsx"
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div >
			<NavBar/>
			<Jumbotron/>
			<Card/>
		</div>
	);
};

export default Home;
