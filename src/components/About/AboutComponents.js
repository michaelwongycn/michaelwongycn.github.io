import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import theme from "../../config/theme";

export const Section = styled.section`
	height: calc(100vh - 12vh);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Textbox = styled.div`
	text-align: left;
	width: 44vw;
	margin-top: -20vh;
	margin-left: 16vw;
`;

export const Greeting = styled.h4`
	color: ${() => theme.secondary};
	font-size: 3vh;
`;

export const Name = styled.h1`
	color: ${() => theme.complement_1};
	font-size: 12vh;
	margin-top: 2vh;
`;

export const Description = styled.h2`
	color: ${() => theme.secondary_light};
	font-size: 3vh;
	margin-top: 2vh;
`;

export const CVButton = styled.a`
	width: 8vw;
	background-color: transparent;
	padding: 1vh 2vw;
	color: ${() => theme.complement_1};
	font-size: 18px;
	text-align: center;
	margin-top: 4vh;
	margin-left: 16vw;
	border: 3px solid ${() => theme.complement_1};
	border-radius: 25px;
	cursor: pointer;

	&:hover {
		background-color: ${() => theme.complement_1};
		color: ${() => theme.primary};
	}
`;
