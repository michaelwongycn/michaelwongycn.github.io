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
	width: 70vw;
	margin-top: 20vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const Greeting = styled.h4`
	color: ${() => theme.secondary};
	font-size: 2em;
`;

export const Introduction = styled.h1`
	color: ${() => theme.complementary_1};
	font-size: 1.5em;
	margin-top: 10vh;
	margin-left: 0.3vw;
`;

export const Name = styled.h1`
	color: ${() => theme.complementary_1};
	font-size: 5em;
	margin-top: -3vh;
`;

export const Description = styled.p`
	color: ${() => theme.secondary};
	font-size: 1em;
	margin-top: 10vh;
`;

export const TwoColumn = styled.div`
	width: 38vw;
	display: flex;
	justify-content: space-between;
	margin-top: 10vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		width: 80vw;
		margin-left: 8vw;
	}
`;

export const CVButton = styled.a`
	background-color: transparent;
	padding: 2vh 2vw;
	color: ${() => theme.secondary};
	font-size: 1em;
	text-align: center;
	border: 0.2em solid ${() => theme.complementary_1};
	border-radius: 1.5em;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: ${() => theme.complementary_1};
		color: ${() => theme.primary};
	}

	@media screen and (max-width: 768px) {
		padding: 2vh 6vw;
	}
`;

export const PortofolioButton = styled.a`
	background-color: transparent;
	padding: 2vh 2vw;
	color: ${() => theme.secondary};
	font-size: 1em;
	text-align: center;
	border: 0.2em solid ${() => theme.complementary_1};
	border-radius: 1.5em;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: ${() => theme.complementary_1};
		color: ${() => theme.primary};
	}
`;
