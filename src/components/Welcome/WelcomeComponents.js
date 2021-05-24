import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background: linear-gradient(
		45deg,
		${() => theme.primary} 50%,
		${() => theme.complementary_2} 50%
	);
	background-color: aliceblue;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: -12vh;
`;

export const Textbox = styled.div`
	text-align: left;
	width: 48vw;
	margin-top: 20vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Greeting = styled.h4`
	color: ${() => theme.secondary};
	font-size: 5vh;
`;

export const Introduction = styled.h1`
	color: ${() => theme.complementary_1};
	font-size: 4vh;
	margin-top: 15vh;
	margin-left: 0.3vw;
`;

export const Name = styled.h1`
	color: ${() => theme.complementary_1};
	font-size: 12vh;
	margin-top: -3vh;
`;

export const Description = styled.h2`
	color: ${() => theme.secondary};
	font-size: 3vh;
	margin-top: 3vh;
`;

export const TwoColumn = styled.div`
	width: 28vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 14vh;
	margin-left: 16vw;

	@media screen and (max-width: 1320px) {
		width: 30vw;
	}

	@media screen and (max-width: 1200px) {
		width: 32vw;
	}

	@media screen and (max-width: 1080px) {
		width: 36vw;
	}

	@media screen and (max-width: 960px) {
		width: 42vw;
	}

	@media screen and (max-width: 768px) {
		width: 36vw;
		flex-direction: column;
		margin-left: 8vw;
	}
`;

export const CVButton = styled.a`
	background-color: transparent;
	padding: 1vh 2vw;
	color: ${() => theme.secondary};
	font-size: 18px;
	text-align: center;
	border: 3px solid ${() => theme.complementary_1};
	border-radius: 25px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: ${() => theme.complementary_1};
		color: ${() => theme.primary};
	}

	@media screen and (max-width: 768px) {
		padding: 1vh 2vw;
		margin-bottom: 3vh;
	}
`;

export const PortofolioButton = styled.a`
	background-color: transparent;
	padding: 1vh 2vw;
	color: ${() => theme.secondary};
	font-size: 18px;
	text-align: center;
	border: 3px solid ${() => theme.complementary_1};
	border-radius: 25px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: ${() => theme.complementary_1};
		color: ${() => theme.primary};
	}

	@media screen and (max-width: 768px) {
		padding: 1vh 2vw;
	}
`;
