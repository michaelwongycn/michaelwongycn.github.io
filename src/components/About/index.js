import React from "react";
import {
	Section,
	Textbox,
	Greeting,
	Name,
	Description,
	CVButton,
} from "./AboutComponents";
import Pdf from "../../assets/Michael_CV.pdf";

export const About = () => {
	return (
		<Section>
			<Textbox>
				<Greeting>Welcome!</Greeting>
				<Name>I am Michael</Name>
				<Description>
					Currently, a computer science undergraduate student, I'm passionate
					about data and software engineering.
				</Description>
			</Textbox>
			<CVButton>my CV</CVButton>
		</Section>
	);
};

export default About;
