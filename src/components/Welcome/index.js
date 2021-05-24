import React from "react";
import {
	Section,
	Textbox,
	Introduction,
	Greeting,
	Name,
	Description,
	TwoColumn,
	CVButton,
	PortofolioButton,
} from "./WelcomeComponents";
import Pdf from "../../assets/Michael_CV.pdf";

export const Welcome = () => {
	return (
		<Section>
			<Textbox>
				<Greeting>Welcome!</Greeting>
				<Introduction>I'm</Introduction>
				<Name>Michael</Name>
				<Description>
					Currently, a computer science undergraduate student, <br />
					I'm passionate about data science and software engineering.
				</Description>
			</Textbox>
			<TwoColumn>
				<CVButton href={Pdf} target="blank">
					My CV
				</CVButton>
				<PortofolioButton
					href="https://drive.google.com/drive/folders/13wu8AHloZcL9I-xA4td6l6f9IWH4KGGU?usp=sharing"
					target="_blank"
				>
					Check My Portofolio
				</PortofolioButton>
			</TwoColumn>
		</Section>
	);
};

export default Welcome;
