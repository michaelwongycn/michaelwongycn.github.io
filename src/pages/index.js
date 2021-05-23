import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import About from "../components/About";

function Home() {
	const [dropdown, dropdownOpen] = useState(false);

	const toogleDropdown = () => dropdownOpen(!dropdown);
	const closeDropdown = () => dropdownOpen(false);

	return (
		<Router>
			<Navbar
				dropdown={dropdown}
				toogleDropdown={toogleDropdown}
				closeDropdown={closeDropdown}
			/>
			<About />
			<About />
		</Router>
	);
}

export default Home;
