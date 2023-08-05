import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExperienceForm = ({
	editItem,
	setEditItem,
	handleCancel,
	handleSubmit,
	handleDelete,
}) => {
	return (
		<form action="" className="form">
			<div className="form-input">
				<label htmlFor="company">Company</label>
				<input
					type="text"
					id="company"
					placeholder="Enter company name"
					value={editItem.company}
					onChange={(e) => {
						setEditItem({ ...editItem, company: e.target.value });
					}}
				/>
			</div>
			<div className="form-input">
				<label htmlFor="position">Position Title</label>
				<input
					type="text"
					id="position"
					placeholder="Enter Position Title"
					value={editItem.position}
					onChange={(e) => {
						setEditItem({ ...editItem, position: e.target.value });
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
			<div className="form-input">
				<label htmlFor="description">Description</label>
				<textarea
					type="text"
					id="description"
					rows={5}
					value={editItem.description}
					onChange={(e) => {
						setEditItem({ ...editItem, description: e.target.value });
					}}
					placeholder="Enter Description"
				></textarea>
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

export default ExperienceForm;
