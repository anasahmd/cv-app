import './styles/App.css';
import BasicInfo from './components/BasicInfo';
import { useState } from 'react';
import Education from './components/Education';

function App() {
	const [education, setEducation] = useState([]);

	return (
		<main id="main-container">
			<BasicInfo />
			<Education education={education} />
		</main>
	);
}

export default App;
