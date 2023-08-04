import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationForm = ({
	editItem,
	setEditItem,
	handleCancel,
	handleSubmit,
	handleDelete,
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
				<label htmlFor="county">Location</label>
				<input
					type="text"
					id="county"
					placeholder="Enter location"
					value={editItem.location}
					onChange={(e) => {
						setEditItem({ ...editItem, location: e.target.value });
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
					placeholder="Enter start date"
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
					placeholder="Enter end date"
				/>
			</div>
			<div className="form-input form-btn">
				<button
					type="button"
					className="delete"
					onClick={handleDelete}
					value={editItem.id}
				>
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

export default EducationForm;
