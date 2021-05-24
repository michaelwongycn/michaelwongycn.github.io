import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import theme from "../../config/theme";

export const Nav = styled.nav`
	background-color: ${({ scrollNav }) =>
		scrollNav ? theme.complementary_3 : "transparent"};
	height: 12vh;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 12vh;
`;

export const NavbarLogo = styled(LinkRouter)`
	display: flex;
	justify-self: start;
	align-items: center;
	color: ${() => theme.secondary};
	font-size: 6vh;
	cursor: pointer;
	text-decoration: none;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		position: absolute;
		margin-left: 8vw;
		align-items: center;
	}
`;

export const HamburgerBar = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		right: 0;
        margin-right 8vw;
		cursor: pointer;
	}
`;

export const FasIcon = styled.i`
	@media screen and (max-width: 768px) {
		color: ${() => theme.secondary};
		font-size: 6vh;
	}
`;

export const NavMenu = styled.ul`
	width: 60vw;
	display: flex;
	justify-content: flex-end;
	text-align: center;
	margin-right: 16vw;
	font-size: 2.5vh;
	list-style: none;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
		position: absolute;
		top: 12vh;
		left: -200%;
		transition: all 0.75s ease;

		&.active {
			background-color: ${() => theme.primary};
			height: fit-content;
			width: 100%;
			left: 0;
			transition: all 0.75s ease;
			z-index: 1;
		}
	}
`;

export const NavItem = styled.li`
	height: 12vh;

	@media screen and (max-width: 768px) {
		position: relative;
		height: fit-content;
	}
`;

export const NavLink = styled(LinkScroll)`
	padding: 0vh 1.5vw;
	height: 12vh;
	display: flex;
	align-items: center;
	color: ${() => theme.secondary};
	text-decoration: none;

	&:hover {
		border-bottom: 0.75vh solid ${() => theme.secondary};
		transition: all 0.2s ease-out;
	}

	@media screen and (max-width: 768px) {
		background-color: ${() => theme.primary};
		text-align: center;
		padding: 5vh 1.5vw;
		width: 100vw;
		display: table;

		&:hover {
			background-color: ${() => theme.complementary_3};
		}
	}
`;
