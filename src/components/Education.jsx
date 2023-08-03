import { useState } from 'react';
import '../styles/Education.css';
import Card from './Card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationList = ({ education, handleEducationEdit }) => {
	return (
		<div className="education-list">
			{education.map((value) => (
				<div
					key={value.id}
					className="education-list-item"
					onClick={() => handleEducationEdit(value)}
				>
					<div className="education-title">
						<b>{value.school}</b>, {value.degree}
					</div>
					<div className="education-info">
						{value.start} - {value.end} | {value.city}, {value.country}
					</div>
				</div>
			))}
		</div>
	);
};

const EducationForm = ({ editItem }) => {
	return (
		<form action="" className="form">
			<div className="form-input">
				<label htmlFor="school">School</label>
				<input
					type="text"
					id="school"
					placeholder="Enter school / university"
					value={editItem.school}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					id="degree"
					placeholder="Enter Degree / Field Of Study"
					value={editItem.degree}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="city">City</label>
				<input
					type="text"
					id="city"
					placeholder="Enter City"
					value={editItem.city}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="county">Country</label>
				<input
					type="text"
					id="county"
					placeholder="Enter County"
					value={editItem.country}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="start">Start Date</label>
				<input type="text" id="start" value={editItem.start} />
			</div>
			<div className="form-input">
				<label htmlFor="end">Start Date</label>
				<input type="text" id="end" value={editItem.end} />
			</div>
			<div className="form-input form-btn">
				<button type="button" className="delete">
					<FontAwesomeIcon icon={faTrash} />
					<b>Delete</b>
				</button>
				<button type="button" className="cancel">
					Cancel
				</button>
				<button type="submit" className="accent-btn save">
					Save
				</button>
			</div>
		</form>
	);
};

const Education = ({ education }) => {
	const [editItem, setEditItem] = useState(false);
	const handleEducationEdit = (value) => {
		setEditItem(value);
	};
	return (
		<div className="education">
			<Card>
				<h2>Education</h2>
				{editItem ? (
					<EducationForm editItem={editItem} />
				) : (
					<EducationList
						education={education}
						handleEducationEdit={handleEducationEdit}
					/>
				)}
			</Card>
		</div>
	);
};

export default Education;
