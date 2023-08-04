import { useState } from 'react';
import '../styles/Education.css';
import Card from './Card';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuid } from 'uuid';
import EducationForm from './EducationForm';

const EducationList = ({ education, handleEducationEdit }) => {
	return (
		<div className="education-list">
			{education.map((value) => (
				<div
					key={value.id}
					className="education-list-item"
					onClick={() => handleEducationEdit(value)}
				>
					{value.school && (
						<>
							<div className="education-title">
								<b>{value.school}</b>
								{value.degree && `, ${value.degree}`}
							</div>

							<div className="education-info">
								{value.start && value.end && (
									<>
										{value.start} - {value.end}
									</>
								)}
								{value.start && value.end && value.location && <> | </>}
								{value.location && <>{value.location}</>}
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

const Education = ({ education, setEducation }) => {
	const [editItem, setEditItem] = useState(false);

	const handleEducationEdit = (value) => {
		setEditItem(value);
	};

	const handleCancel = () => {
		setEditItem(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = education.filter((value) => value.id == editItem.id);
		if (data.length) {
			setEducation((education) =>
				education.map((value) => (value.id == editItem.id ? editItem : value))
			);
		} else {
			setEducation((education) => [...education, editItem]);
		}
		setEditItem(false);
	};

	const handleNewEducation = () => {
		setEditItem({
			id: uuid(),
			school: '',
			degree: '',
			location: '',
			start: '',
			end: '',
		});
	};

	const handleDelete = () => {
		setEditItem(false);
		setEducation((education) =>
			education.filter((value) => value.id != editItem.id)
		);
	};

	return (
		<div className="education">
			<Card>
				<h2 className="education-heading">Education</h2>
				{editItem ? (
					<EducationForm
						editItem={editItem}
						setEditItem={setEditItem}
						handleCancel={handleCancel}
						handleSubmit={handleSubmit}
						handleDelete={handleDelete}
					/>
				) : (
					<>
						<EducationList
							education={education}
							handleEducationEdit={handleEducationEdit}
						/>
						{/* Add Education Button */}
						<button
							type="button "
							className="add-btn"
							onClick={handleNewEducation}
						>
							<FontAwesomeIcon icon={faPlus} />
							<b>Education</b>
						</button>
					</>
				)}
			</Card>
		</div>
	);
};

export default Education;
