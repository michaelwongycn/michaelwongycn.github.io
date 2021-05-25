import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: ${() => theme.primary};
	height: 88vh;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 426px) {
		height: calc(88vh * 1.1);
	}

	@media screen and (max-width: 320px) {
		height: calc(88vh * 1.2);
	}
`;

export const Header = styled.p`
	font-size: 12vh;
	margin-top: 8vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}

	@media screen and (max-width: 426px) {
		font-size: 8vh;
	}
`;

export const ContactContainer = styled.div`
	width: 72vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 4vh 2vw;
	margin-top: 4vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}

	@media screen and (max-width: 426px) {
		width: 80vw;
		gap: 4vh 3vw;
	}
`;

export const ContactItem = styled.a`
	width: calc(68vw * 0.25);
	justify-content: center;
	text-align: center;
	padding: 4vh 2vw;
	border: 3px solid ${() => theme.secondary};
	border-radius: 20px;
	text-decoration: none;

	&:hover {
		background-color: ${() => theme.secondary};
	}
	&:hover i {
		color: ${() => theme.primary};
	}
	&:hover p {
		color: ${() => theme.primary};
	}

	@media screen and (max-width: 768px) {
		width: calc(68vw * 0.3);
		padding: 4vh 2vw;
	}

	@media screen and (max-width: 426px) {
		width: calc(72vw * 0.5);
		padding: 4vh 1vw;
	}
`;

export const Icon = styled.i`
	color: ${() => theme.secondary};
	font-size: 15vh;

	@media screen and (max-width: 426px) {
		font-size: 12vh;
	}
`;

export const ContactDescription = styled.p`
	text-align: center;
	margin-top: 3vh;
	color: ${() => theme.secondary};
	font-size: 2.3vh;
`;
