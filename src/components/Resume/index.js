import React from "react";
import {
	Section,
	Header,
	UpperContainer,
	ContainerTitle,
	UnderlinedItem,
	Title,
	Location,
	Duration,
	Description,
	TwoColumn,
	SkillContainer,
	LanguageContainer,
	TechContainer,
	TechItem,
	TechName,
	TechDescription,
} from "./ResumeComponents";

export const Resume = () => {
	return (
		<Section id="Resume">
			<Header>Resume</Header>
			<UpperContainer>
				<ContainerTitle>Experience</ContainerTitle>
				<UnderlinedItem>
					<Title>Associate Member</Title>
					<Location>Bina Nusantara IT Division</Location>
					<Duration>Mar 2021 – Present</Duration>
					<Description>
						As associate member at Bina Nusantara IT Division, part of BINUS
						CREATES division.
					</Description>
				</UnderlinedItem>
				<UnderlinedItem>
					<Title>Scholarship Mentor</Title>
					<Location>Binus Student Learning Community</Location>
					<Duration>Oct 2020 – Feb 2021</Duration>
					<Description>
						As peer to peer mentor at Bina Nusantara University to help students
						in improving their academic performance for one semester.
					</Description>
				</UnderlinedItem>
				<UnderlinedItem>
					<Title>Freshmen Partner</Title>
					<Location>BINUS University</Location>
					<Duration>Sep 2020 – Present</Duration>
					<Description>
						Freshmen Partner in First Year Program for Binusian 2024.
					</Description>
				</UnderlinedItem>
				<UnderlinedItem>
					<Title>Freshmen Leader</Title>
					<Location>BINUS University</Location>
					<Duration>Jul 2020 – Aug 2021</Duration>
					<Description>
						Freshmen Leader in First Year Program for Binusian 2024, helping the
						freshmen to familiarize themself with the campus.
					</Description>
				</UnderlinedItem>
			</UpperContainer>
			<UpperContainer>
				<ContainerTitle>Education</ContainerTitle>
				<UnderlinedItem>
					<Title>Bachelor Degree in Computer Science</Title>
					<Location>Bina Nusantara University | Jakarta, Indonesia</Location>
					<Duration>2019 - 2023 (Expected)</Duration>
					<Description>Cumulative GPA : 3.92 / 4.00</Description>
				</UnderlinedItem>
				<UnderlinedItem>
					<Title>Student of Science Program</Title>
					<Location>SMA Negeri 1 Bukit Batu | Riau, Indonesia</Location>
					<Duration>2016 - 2019</Duration>
					<Description></Description>
				</UnderlinedItem>
			</UpperContainer>
			<TwoColumn>
				<SkillContainer>
					<ContainerTitle>Skill</ContainerTitle>
					<Title>Problem Solving</Title>
					<Title>Teamwork</Title>
					<Title>Time Management</Title>
					<Title>Adaptability</Title>
				</SkillContainer>
				<LanguageContainer>
					<ContainerTitle>Language</ContainerTitle>
					<Title>Bahasa Indonesia</Title>
					<Title>English</Title>
				</LanguageContainer>
			</TwoColumn>
			<TechContainer>
				<ContainerTitle>Technology</ContainerTitle>
				<TechItem>
					<TechName>C</TechName>
					<TechDescription>
						Used C for creating basic CRUD application and competitive
						programming.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>C++</TechName>
					<TechDescription>
						Used C++ for competitive programming and basic object oriented
						programming.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>C#</TechName>
					<TechDescription>
						Used C# with ASP.NET framework for university project and CRUD
						application for university project.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>Python</TechName>
					<TechDescription>
						Used python for some data manipulation with pandas, matplotlib, and
						seaborn also using beautifulsoup for some webscraping in public
						website.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>Java</TechName>
					<TechDescription>
						Used Java for creating basic CRUD application and android app for
						job training.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>HTML, CSS, JavaScript</TechName>
					<TechDescription>
						Used HTML, CSS, JavaScript to create static website with simple
						logic for university project.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>SSMS</TechName>
					<TechDescription>
						Used SSMS to create and manipulate database for university project.
					</TechDescription>
				</TechItem>
				<TechItem>
					<TechName>PostgreSQL</TechName>
					<TechDescription>
						Learned PostgreSQL to be used as database for android application.
					</TechDescription>
				</TechItem>
			</TechContainer>
		</Section>
	);
};

export default Resume;
