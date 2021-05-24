import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: bisque;
	height: 88vh;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.h1`
	font-size: 12vh;
	margin-top: 10vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Description = styled.h3`
	font-size: 2.5vh;
	width: 44vw;
	margin-top: 4vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		width: 52vw;
		margin-left: 8vw;
	}
`;

export const DataList = styled.ul`
	font-size: 2.5vh;
	margin-top: 4vh;
	margin-left: 16vw;
	list-style: none;

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Data = styled.li`
	padding: 1vh 0vw;
`;

export const Cell = styled.span`
	display: inline-block;
	width: 7vw;
`;
