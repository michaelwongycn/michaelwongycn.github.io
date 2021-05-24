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
		<Section>
			<Header>About Me</Header>
			<Description>
				I'm a student in Bina Nusantara University, majoring in Computer Science
				with Software Engineering Streaming, expected to graduate in 2023.
			</Description>
			<DataList>
				<Data>
					<Cell>Name : </Cell>Michael
				</Data>
				<Data>
					<Cell>Address : </Cell>
					Jalan Kyai Haji Syahdan Jakarta Barat
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
