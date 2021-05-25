import React from "react";
import {
	Section,
	Header,
	ContactContainer,
	ContactItem,
	Icon,
} from "./ContactComponents";

export const Project = () => {
	return (
		<Section id="Contact">
			<Header>Contact Me</Header>
			<ContactContainer>
				<ContactItem href="#">
					<Icon className={"fab fa-linkedin"}></Icon>
				</ContactItem>
				<ContactItem>
					<Icon className={"fas fa-mobile-alt"}></Icon>
				</ContactItem>
				<ContactItem>
					<Icon className={"fas fa-envelope"}></Icon>
				</ContactItem>
				<ContactItem>
					<Icon className={"fab fa-github"}></Icon>
				</ContactItem>
				<ContactItem>
					<Icon className={"fas fa-globe"}></Icon>
				</ContactItem>
				<ContactItem>
					<Icon className={"fab fa-hackerrank"}></Icon>
				</ContactItem>
			</ContactContainer>
		</Section>
	);
};

export default Project;
