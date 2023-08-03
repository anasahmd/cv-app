import './styles/App.css';
import BasicInfo from './components/BasicInfo';
import { useState } from 'react';
import Education from './components/Education';

function App() {
	const [basicInfo, setBasicInfo] = useState({});
	const [education, setEducation] = useState([]);

	return (
		<main id="main-container">
			<BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
			<Education education={education} />
		</main>
	);
}

export default App;
