import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: ${() => theme.primary};
	height: calc(88vh * 4.7);
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 426px) {
		height: calc(88vh * 4);
	}

	@media screen and (max-width: 320px) {
		height: calc(88vh * 4.2);
	}
`;

export const Header = styled.p`
	font-size: 12vh;
	margin-top: 10vh;
	margin-left: 16vw;
	color: ${() => theme.secondary};

	@media screen and (max-width: 768px) {
		margin-top: 5vh;
		margin-left: 7.5vw;
	}

	@media screen and (max-width: 426px) {
		font-size: 8vh;
		margin-top: 8vh;
	}
`;

export const ContainerTitle = styled.h1`
	font-size: 6vh;
	color: ${() => theme.complementary_1};
	font-weight: 600;
`;

export const UpperContainer = styled.div`
	width: 54vw;
	margin-top: 8vh;
	margin-left: 16vw;

	@media screen and (max-width: 1024px) {
		margin-top: 5vh;
	}

	@media screen and (max-width: 768px) {
		width: 66vw;
		margin-top: 4vh;
		margin-left: 8vw;
	}

	@media screen and (max-width: 426px) {
		width: 80vw;
	}
`;

export const UnderlinedItem = styled.div`
	padding: 3vh 0vw 1vh 0vw;
	border-bottom: 3px solid ${() => theme.complementary_1};
`;

export const Title = styled.p`
	color: ${() => theme.secondary};
	font-size: 4vh;
	font-weight: 500;

	@media screen and (max-width: 426px) {
		font-size: 3vh;
	}
`;

export const Location = styled.p`
	padding-bottom: 1vh;
	color: ${() => theme.secondary};
	font-size: 4vh;
	font-weight: 500;

	@media screen and (max-width: 426px) {
		font-size: 3vh;
	}
`;

export const Duration = styled.p`
	padding-bottom: 2vh;
	color: ${() => theme.secondary};
	font-size: 3vh;
	font-weight: 400;

	@media screen and (max-width: 426px) {
		font-size: 2vh;
		margin-left: 0.2vw;
	}
`;

export const Description = styled.p`
	color: ${() => theme.secondary};
	font-size: 3vh;
	font-weight: 400;

	@media screen and (max-width: 426px) {
		font-size: 2vh;
	}
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

	@media screen and (max-width: 1024px) {
		margin-top: 5vh;
	}

	@media screen and (max-width: 768px) {
		width: 66vw;
		margin-top: 4vh;
		margin-left: 8vw;
		padding: 0.5vh 0vw 1vh 0vw;
	}

	@media screen and (max-width: 426px) {
		margin-top: 2vh;
		padding: 0;
		flex-direction: column;
		border-bottom: none;
	}
`;

export const LowerContainer = styled.div`
	width: 54vw;

	@media screen and (max-width: 426px) {
		width: 80vw;
		padding: 2vh 0vw 1vh 0vw;
		border-bottom: 3px solid ${() => theme.complementary_1};
	}
`;

export const TechContainer = styled.div`
	width: 54vw;
	margin-top: 8vh;
	margin-left: 16vw;

	@media screen and (max-width: 1024px) {
		margin-top: 5vh;
	}

	@media screen and (max-width: 768px) {
		width: 66vw;
		margin-top: 4vh;
		margin-left: 8vw;
	}

	@media screen and (max-width: 426px) {
		width: 80vw;
	}
`;

export const TechItem = styled.div`
	padding: 4vh 0vw 1vh 0vw;
	border-bottom: 3px solid ${() => theme.complementary_1};
	@media screen and (max-width: 768px) {
		padding: 2vh 0vw 0.5vh 0vw;
	}
`;
export const TechName = styled.p`
	color: ${() => theme.secondary};
	font-size: 4vh;
	font-weight: 500;

	@media screen and (max-width: 426px) {
		font-size: 3vh;
	}
`;
export const TechDescription = styled.p`
	color: ${() => theme.secondary};
	font-size: 3vh;
	font-weight: 400;

	@media screen and (max-width: 426px) {
		font-size: 2vh;
	}
`;
