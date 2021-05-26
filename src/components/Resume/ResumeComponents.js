import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: ${() => theme.primary};
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.p`
	font-size: 4em;
	margin-top: 10vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-left: 8vw;
	}
`;

export const ContainerTitle = styled.h1`
	font-size: 2.5em;
	color: ${() => theme.complementary_1};
	font-weight: 600;
`;

export const UpperContainer = styled.div`
	width: 54vw;
	margin-top: 8vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		width: 70vw;
		margin-left: 8vw;
	}
`;

export const UnderlinedItem = styled.div`
	padding: 3vh 0vw 1vh 0vw;
	border-bottom: 3px solid ${() => theme.complementary_1};
`;

export const Title = styled.p`
	color: ${() => theme.secondary};
	font-size: 1.5em;
	font-weight: 500;
`;

export const Location = styled.p`
	padding-bottom: 1vh;
	color: ${() => theme.secondary};
	font-size: 1.5em;
	font-weight: 500;
`;

export const Duration = styled.p`
	padding-bottom: 1em;
	color: ${() => theme.secondary};
	font-size: 3vh;
	font-weight: 400;
`;

export const Description = styled.p`
	color: ${() => theme.secondary};
	font-size: 1em;
	font-weight: 400;
`;

export const TwoColumn = styled.div`
	width: 54vw;
	margin-left: 16vw;
	margin-top: 8vh;
	display: flex;
	justify-content: space-around;
	align-item: center;
	padding: 1vh 0vw 2vh 0vw;
	border-bottom: 3px solid ${() => theme.complementary_1};

	@media screen and (max-width: 768px) {
		width: 70vw;
		margin-left: 8vw;
		margin-top: 4vh;
		flex-direction: column;
		border-bottom: none;
	}
`;

export const LowerContainer = styled.div`
	width: 54vw;

	@media screen and (max-width: 768px) {
		width: 70vw;
		padding: 4vh 0vw 2vh 0vw;
		border-bottom: 3px solid ${() => theme.complementary_1};
	}
`;

export const TechContainer = styled.div`
	width: 54vw;
	margin-top: 8vh;
	margin-left: 16vw;

	@media screen and (max-width: 768px) {
		width: 70vw;
		margin-left: 8vw;
	}
`;

export const TechItem = styled.div`
	padding: 4vh 0vw 1vh 0vw;
	border-bottom: 3px solid ${() => theme.complementary_1};
`;
export const TechName = styled.p`
	color: ${() => theme.secondary};
	font-size: 1.5em;
	font-weight: 500;
`;
export const TechDescription = styled.p`
	color: ${() => theme.secondary};
	font-size: 1em;
	font-weight: 400;
`;
