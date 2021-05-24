import styled from "styled-components";
import theme from "../../config/theme";

export const Section = styled.section`
	background-color: beige;
	height: calc(88vh * 5);
	display: flex;
	flex-direction: column;
`;

export const ContainerTitle = styled.h1`
	font-size: 6vh;
	color: ${() => theme.complementary_1};
	font-weight: 600;
`;

export const ExperienceContainer = styled.div`
	width: 54vw;
	margin-top: 12vh;
	margin-left: 16vw;
`;

export const EducationContainer = styled.div`
	width: 54vw;
	margin-top: 8vh;
	margin-left: 16vw;
`;

export const UnderlinedItem = styled.div`
	padding: 4vh 0vw 1vh 0vw;
	border-bottom: 3px solid ${() => theme.secondary};
`;

export const Title = styled.p`
	font-size: 4vh;
	font-weight: 500;
`;

export const Location = styled.p`
	padding-bottom: 1vh;
	font-size: 4vh;
	font-weight: 500;
`;

export const Duration = styled.p`
	padding-bottom: 2vh;
	font-size: 3vh;
	font-weight: 400;
`;

export const Description = styled.p`
	font-size: 3vh;
	font-weight: 400;
`;

export const TwoColumn = styled.div`
	width: 54vw;
	margin-left: 16vw;
	margin-top: 8vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-item: center;
	padding: 1vh 0vw 2vh 0vw;
	border-bottom: 3px solid ${() => theme.secondary};
`;

export const SkillContainer = styled.div`
	width: 54vw;
`;

export const LanguageContainer = styled.div`
	width: 54vw;
`;
export const TechContainer = styled.div`
	width: 54vw;
	margin-top: 8vh;
	margin-left: 16vw;
`;

export const TechItem = styled.div`
	padding: 4vh 0vw 1vh 0vw;
	border-bottom: 3px solid ${() => theme.secondary};
`;
export const TechName = styled.p`
	font-size: 4vh;
	font-weight: 500;
`;
export const TechDescription = styled.p`
	font-size: 3vh;
	font-weight: 400;
`;