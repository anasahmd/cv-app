import { useState } from 'react';
import '../styles/Experience.css';
import Card from './Card';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuid } from 'uuid';
import ExperienceForm from './ExperienceForm';

const ExperienceList = ({ experience, handleExperienceEdit }) => {
	return (
		<div className="experience-list">
			{experience.map((value) => (
				<div
					key={value.id}
					className="experience-list-item"
					onClick={() => handleExperienceEdit(value)}
				>
					{value.company && (
						<>
							<div className="experience-position">
								<b>{value.company}</b>
								{value.position && `, ${value.position}`}
							</div>

							<div className="experience-info">
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

const Experience = ({ experience, setExperience }) => {
	const [editItem, setEditItem] = useState(false);

	const handleExperienceEdit = (value) => {
		setEditItem(value);
	};

	const handleCancel = () => {
		setEditItem(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = experience.filter((value) => value.id == editItem.id);
		if (data.length) {
			setExperience((experience) =>
				experience.map((value) => (value.id == editItem.id ? editItem : value))
			);
		} else {
			setExperience((experience) => [...experience, editItem]);
		}
		setEditItem(false);
	};

	const handleNewExperience = () => {
		setEditItem({
			id: uuid(),
			company: '',
			position: '',
			location: '',
			description: '',
			start: '',
			end: '',
		});
	};

	const handleDelete = () => {
		setEditItem(false);
		setExperience((experience) =>
			experience.filter((value) => value.id != editItem.id)
		);
	};

	return (
		<div className="experience">
			<Card>
				<h2 className="experience-heading">Experience</h2>
				{editItem ? (
					<ExperienceForm
						editItem={editItem}
						setEditItem={setEditItem}
						handleCancel={handleCancel}
						handleSubmit={handleSubmit}
						handleDelete={handleDelete}
					/>
				) : (
					<>
						<ExperienceList
							experience={experience}
							handleExperienceEdit={handleExperienceEdit}
						/>
						{/* Add Experience Button */}
						<button
							type="button "
							className="add-btn"
							onClick={handleNewExperience}
						>
							<FontAwesomeIcon icon={faPlus} />
							<b>Experience</b>
						</button>
					</>
				)}
			</Card>
		</div>
	);
};

export default Experience;
