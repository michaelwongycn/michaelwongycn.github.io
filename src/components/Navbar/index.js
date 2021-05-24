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
						<NavLink
							to="Welcome"
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeDropdown}
						>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="About"
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeDropdown}
						>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="Resume"
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeDropdown}
						>
							Resume
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="Contact"
							smooth={true}
							offset={-70}
							duration={750}
							onClick={closeDropdown}
						>
							Contact
						</NavLink>
					</NavItem>
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
