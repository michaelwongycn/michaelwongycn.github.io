import React, { useState, useEffect } from "react";
import {
	Nav,
	NavbarContainer,
	NavbarLogo,
	HamburgerBar,
	NavMenu,
	NavItem,
	NavLink,
	FasIcon,
} from "./NavbarComponent";

export const Navbar = ({ dropdown, toogleDropdown, closeDropdown }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		// if (window.scrollY >= 80) {
		if (window.pageYOffset > window.innerHeight * 0.12) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	return (
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavbarLogo to="/" onClick={closeDropdown}>
					Michael
				</NavbarLogo>
				<HamburgerBar onClick={toogleDropdown}>
					<FasIcon
						className={dropdown ? "fas fa-times" : "fas fa-bars"}
					></FasIcon>
				</HamburgerBar>
				<NavMenu className={dropdown ? "active" : ""}>
					<NavItem>
						<NavLink to="./" onClick={closeDropdown}>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="./" onClick={closeDropdown}>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" onClick={closeDropdown}>
							Resume
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" onClick={closeDropdown}>
							Project
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" onClick={closeDropdown}>
							Contact
						</NavLink>
					</NavItem>
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
