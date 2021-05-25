import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: ${() => theme.primary};
	height: 88vh;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.p`
	font-size: 3.5em;
	margin-top: 4vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const ContactContainer = styled.div`
	width: 72vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 2vh 2vw;
	margin-top: 4vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		justify-content: space-between;
		margin-left: 8vw;
		gap: 0vh 2vw;
	}
`;

export const ContactItem = styled.a`
	width: calc(72vw * 0.25);
	justify-content: center;
	text-align: center;
	padding: 2vh 2vw;
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
		width: calc(72vw * 0.45);
		margin-top: 2vh;
	}
`;

export const Icon = styled.i`
	color: ${() => theme.secondary};
	font-size: 6em;
`;
