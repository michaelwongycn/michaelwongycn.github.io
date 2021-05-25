import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: ${() => theme.primary};
	height: 88vh;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.p`
	font-size: 4em;
	margin-top: 12vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Description = styled.p`
	font-size: 1em;
	width: 54vw;
	margin-top: 12vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		width: 70vw;
		margin-left: 8vw;
	}
`;

export const DataList = styled.ul`
	font-size: 1em;
	margin-top: 4vh;
	margin-left: 16vw;
	list-style: none;

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Data = styled.li`
	padding: 1vh 0vw;
	color: ${() => theme.secondary};
`;

export const Cell = styled.span`
	width: 5em;
	display: inline-block;
	color: ${() => theme.secondary};
`;
