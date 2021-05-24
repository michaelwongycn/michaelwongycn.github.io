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
	margin-top: 8vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const ContactContainer = styled.div`
	width: 68vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin-top: 4vh;
	margin-left: 14vw;
`;

export const ContactItem = styled.a`
	width: calc(68vw * 0.25);
	justify-content: center;
	text-align: center;
	padding: 2vh 2vw;
	margin: 2vh 1vw;
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
`;

export const Icon = styled.i`
	color: ${() => theme.secondary};
	font-size: 15vh;
`;

export const ContactDescription = styled.p`
	text-align: center;
	margin-top: 3vh;
	color: ${() => theme.secondary};
	font-size: 2.3vh;
`;
