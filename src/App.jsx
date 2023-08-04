import './styles/App.css';
import BasicInfo from './components/BasicInfo';
import { useState } from 'react';
import Education from './components/Education';
import { v4 as uuid } from 'uuid';

function App() {
	const sampleEducation = [
		{
			id: uuid(),
			school: 'MIT',
			degree: 'B.Tech',
			location: 'Purnea, Bihar',
			start: 'March 2021',
			end: 'April 2025',
		},
		{
			id: uuid(),
			school: 'VVIT',
			degree: 'B.Tech',
			location: 'Purnea, Bihar',
			start: 'March 2021',
			end: 'April 2025',
		},
	];
	const sampleExperience = [
		{
			id: uuid(),
			company: 'MIT',
			position: 'B.Tech',
			location: 'Purnea, Bihar',
			start: 'March 2021',
			end: 'April 2025',
		},
		{
			id: uuid(),
			company: 'VVIT',
			position: 'B.Tech',
			location: 'Purnea',
			country: 'India',
			start: 'March 2021',
			end: 'April 2025',
		},
	];
	const [basicInfo, setBasicInfo] = useState({});
	const [education, setEducation] = useState(sampleEducation);

	return (
		<main id="main-container">
			<div className="info-section">
				<BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
				<Education education={education} setEducation={setEducation} />
			</div>
		</main>
	);
}

export default App;
