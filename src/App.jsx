import './styles/App.css';
import BasicInfo from './components/BasicInfo';
import { useState } from 'react';
import Education from './components/Education';

function App() {
	const [basicInfo, setBasicInfo] = useState({
		fullName: 'Anas Ahmad',
		jobTitle: '',
		email: '',
		phone: '',
		address: '',
	});
	const [education, setEducation] = useState([]);
	return (
		<main id="main-container">
			<BasicInfo
				basicInfo={basicInfo}
				onInputChange={(data) => {
					setBasicInfo({ ...basicInfo, ...data });
				}}
			/>
			<Education />
		</main>
	);
}

export default App;
