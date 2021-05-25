import React from "react";
import {
	Section,
	Header,
	Description,
	DataList,
	Data,
	Cell,
} from "./AboutComponents";

export const About = () => {
	return (
		<Section id="About">
			<Header>About Me</Header>
			<Description>
				I'm a student at Bina Nusantara University, majoring in Computer Science
				with Software Engineering Streaming. In my university i join KMBD, a
				organization in which i actively help by becoming a member or leader of
				a division in many event. I'm expected to graduate in 2023.
			</Description>
			<DataList>
				<Data>
					<Cell>Name : </Cell>Michael
				</Data>
				<Data>
					<Cell>Address : </Cell>
					Jalan K.H. Syahdan Jakarta Barat
				</Data>
				<Data>
					<Cell>Email : </Cell>Michaelwongycn@gmail.com
				</Data>
				<Data>
					<Cell>Phone : </Cell>+62-818-0388-8842
				</Data>
			</DataList>
		</Section>
	);
};

export default About;
