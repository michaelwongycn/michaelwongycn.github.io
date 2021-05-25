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

	@media screen and (max-width: 426px) {
		font-size: 8vh;
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

	@media screen and (max-width: 426px) {
		width: 75vw;
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

	@media screen and (max-width: 426px) {
		font-size: 2vh;
	}

	@media screen and (max-width: 320px) {
		font-size: 1.7vh;
	}
`;

export const Cell = styled.span`
	width: 7vw;
	display: inline-block;
	color: ${() => theme.secondary};

	@media screen and (max-width: 1024px) {
		width: 9vw;
	}

	@media screen and (max-width: 768px) {
		width: 11vw;
	}

	@media screen and (max-width: 426px) {
		font-size: 2vh;
		width: 16vw;
	}

	@media screen and (max-width: 376px) {
		width: 20vw;
	}

	@media screen and (max-width: 320px) {
		font-size: 1.7vh;
	}
`;
