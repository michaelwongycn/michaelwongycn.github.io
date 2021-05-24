import React from "react";
import {
	Section,
	Header,
	ContactContainer,
	ContactItem,
	Icon,
	ContactDescription,
} from "./ContactComponents";

export const Project = () => {
	return (
		<Section id="Contact">
			<Header>Contact Me</Header>
			<ContactContainer>
				<ContactItem href="#">
					<Icon className={"fab fa-linkedin"}></Icon>
					<ContactDescription>Michaelwongycn</ContactDescription>
				</ContactItem>
				<ContactItem>
					<Icon className={"fas fa-mobile-alt"}></Icon>
					<ContactDescription>+62-818-0388-8842</ContactDescription>
				</ContactItem>
				<ContactItem>
					<Icon className={"fas fa-envelope"}></Icon>
					<ContactDescription>michael073@binus.ac.id</ContactDescription>
				</ContactItem>
				<ContactItem>
					<Icon className={"fab fa-github"}></Icon>
					<ContactDescription>Michaelwongycn</ContactDescription>
				</ContactItem>
				<ContactItem>
					<Icon className={"fas fa-globe"}></Icon>
					<ContactDescription>Michaelwongycn.github.io</ContactDescription>
				</ContactItem>
				<ContactItem>
					<Icon className={"fab fa-hackerrank"}></Icon>
					<ContactDescription>Michaelwongycn</ContactDescription>
				</ContactItem>
			</ContactContainer>
		</Section>
	);
};

export default Project;
