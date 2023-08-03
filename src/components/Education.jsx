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

const EducationForm = ({
	editItem,
	setEditItem,
	handleCancel,
	handleSubmit,
}) => {
	return (
		<form action="" className="form">
			<div className="form-input">
				<label htmlFor="school">School</label>
				<input
					type="text"
					id="school"
					placeholder="Enter school / university"
					value={editItem.school}
					onChange={(e) => {
						setEditItem({ ...editItem, school: e.target.value });
					}}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					id="degree"
					placeholder="Enter Degree / Field Of Study"
					value={editItem.degree}
					onChange={(e) => {
						setEditItem({ ...editItem, degree: e.target.value });
					}}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="city">City</label>
				<input
					type="text"
					id="city"
					placeholder="Enter City"
					value={editItem.city}
					onChange={(e) => {
						setEditItem({ ...editItem, city: e.target.value });
					}}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="county">Country</label>
				<input
					type="text"
					id="county"
					placeholder="Enter County"
					value={editItem.country}
					onChange={(e) => {
						setEditItem({ ...editItem, country: e.target.value });
					}}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="start">Start Date</label>
				<input
					type="text"
					id="start"
					value={editItem.start}
					onChange={(e) => {
						setEditItem({ ...editItem, start: e.target.value });
					}}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="end">End Date</label>
				<input
					type="text"
					id="end"
					value={editItem.end}
					onChange={(e) => {
						setEditItem({ ...editItem, end: e.target.value });
					}}
				/>
			</div>
			<div className="form-input form-btn">
				<button type="button" className="delete">
					<FontAwesomeIcon icon={faTrash} />
					<b>Delete</b>
				</button>
				<button type="button" className="cancel" onClick={handleCancel}>
					Cancel
				</button>
				<button
					type="submit"
					className="accent-btn save"
					value={editItem.id}
					onClick={handleSubmit}
				>
					Save
				</button>
			</div>
		</form>
	);
};

const Education = ({ education, setEducation }) => {
	const [editItem, setEditItem] = useState(false);
	const handleEducationEdit = (value) => {
		setEditItem(value);
	};

	const handleCancel = () => {
		setEditEducation(education);
		setEditItem(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setEducation((education) =>
			education.map((value) => (value.id == e.target.value ? editItem : value))
		);
		setEditItem(false);
	};

	return (
		<div className="education">
			<Card>
				<h2>Education</h2>
				{editItem ? (
					<EducationForm
						editItem={editItem}
						setEditItem={setEditItem}
						handleCancel={handleCancel}
						handleSubmit={handleSubmit}
					/>
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
