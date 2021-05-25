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
				<ContactItem
					href="https://www.linkedin.com/in/michaelwongycn"
					target="_blank"
				>
					<Icon className={"fab fa-linkedin"}></Icon>
				</ContactItem>
				<ContactItem href="https://wa.me/6281803888842" target="_blank">
					<Icon className={"fas fa-mobile-alt"}></Icon>
				</ContactItem>
				<ContactItem href="mailto:michael073@binus.ac.id" target="_blank">
					<Icon className={"fas fa-envelope"}></Icon>
				</ContactItem>
				<ContactItem href="https://github.com/michaelwongycn" target="_blank">
					<Icon className={"fab fa-github"}></Icon>
				</ContactItem>
				<ContactItem href="https://michaelwongycn.github.io/" target="_blank">
					<Icon className={"fas fa-globe"}></Icon>
				</ContactItem>
				<ContactItem
					href="https://www.hackerrank.com/michaelwongycn"
					target="_blank"
				>
					<Icon className={"fab fa-hackerrank"}></Icon>
				</ContactItem>
			</ContactContainer>
		</Section>
	);
};

export default Project;
