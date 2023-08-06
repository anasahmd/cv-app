import './styles/App.css';
import BasicInfo from './components/BasicInfo';
import { useState } from 'react';
import Education from './components/Education';
import { v4 as uuid } from 'uuid';
import Experience from './components/Experience';
import Cv from './components/Cv';

function App() {
	const sampleBasicInfo = {
		fullName: 'Anas Ahmad',
		jobTitle: 'Web Developer',
		email: 'anasahmad0239@gmail.com',
		phone: '+916203245463',
		address: 'Purnea, Bihar',
	};
	const sampleEducation = [
		{
			id: uuid(),
			school: 'MIT',
			degree: 'B.Tech',
			location: 'Purnea, Bihar',
			start: '2021',
			end: '2025',
		},
		{
			id: uuid(),
			school: 'Millia Convent English School',
			degree: '12th',
			location: 'Purnea, Bihar',
			start: '2018',
			end: '2020',
		},
	];
	const sampleExperience = [
		{
			id: uuid(),
			company: 'Example',
			position: 'CEO',
			location: 'Purnea, Bihar',
			start: 'March 2021',
			end: 'present',
			description: 'This is an example company',
		},
	];
	const [basicInfo, setBasicInfo] = useState(sampleBasicInfo);
	const [education, setEducation] = useState(sampleEducation);
	const [experience, setExperience] = useState(sampleExperience);

	return (
		<>
			<main id="main-container">
				<div className="info-section">
					<BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
					<Education education={education} setEducation={setEducation} />
					<Experience experience={experience} setExperience={setExperience} />
				</div>
				<div className="cv-section">
					<Cv
						basicInfo={basicInfo}
						education={education}
						experience={experience}
					/>
				</div>
			</main>
			<footer>
				Created by <a href="http://anasahmad.dev"> Anas Ahmad</a>
			</footer>
		</>
	);
}

export default App;
