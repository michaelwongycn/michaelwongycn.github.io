import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: ${() => theme.primary};
	height: 88vh;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.p`
	font-size: 12vh;
	margin-top: 10vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Description = styled.p`
	font-size: 2.5vh;
	width: 44vw;
	margin-top: 4vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

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
	color: ${() => theme.secondary};
`;

export const Cell = styled.span`
	width: 7vw;
	display: inline-block;
	color: ${() => theme.secondary};
`;
