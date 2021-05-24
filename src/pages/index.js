import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Resume from "../components/Resume";
import Project from "../components/Project";

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
			<Welcome />
			<About />
			<Resume />
			<Project />
		</Router>
	);
}

export default Home;
