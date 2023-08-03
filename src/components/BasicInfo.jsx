import '../styles/BasicInfo.css';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationDot,
	faPenToSquare,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const BasicInfo = () => {
	const [basicInfo, setBasicInfo] = useState({
		fullName: '',
		jobTitle: '',
		email: '',
		phone: '',
		address: '',
	});
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		setIsEditing(isEditing ? false : true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(basicInfo);
	};
	return (
		<div className="basic-info">
			<Card>
				{isEditing ? (
					<div>
						<h2>Edit Personal Details</h2>
						<form action="" className="form">
							<div className="form-input">
								<label htmlFor="full-name">Full Name</label>
								<input
									type="text"
									id="full-name"
									value={basicInfo.fullName}
									onChange={(e) => {
										setBasicInfo({ ...basicInfo, fullName: e.target.value });
									}}
								/>
							</div>
							<div className="form-input">
								<label htmlFor="full-name">Job Title</label>
								<input
									type="text"
									id="full-name"
									value={basicInfo.jobTitle}
									onChange={(e) => {
										setBasicInfo({ ...basicInfo, jobTitle: e.target.value });
									}}
								/>
							</div>
							<div className="form-input">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									id="email"
									value={basicInfo.email}
									onChange={(e) => {
										setBasicInfo({ ...basicInfo, email: e.target.value });
									}}
								/>
							</div>
							<div className="form-input">
								<label htmlFor="phone">Phone</label>
								<input
									type="text"
									id="phone"
									value={basicInfo.phone}
									onChange={(e) => {
										setBasicInfo({ ...basicInfo, phone: e.target.value });
									}}
								/>
							</div>
							<div className="form-input">
								<label htmlFor="address">Address</label>
								<input
									type="text"
									id="address"
									value={basicInfo.address}
									onChange={(e) => {
										setBasicInfo({ ...basicInfo, address: e.target.value });
									}}
								/>
							</div>
							<div className="form-input form-btn">
								<button type="button" onClick={handleEdit} className="cancel">
									Cancel
								</button>
								<button
									type="submit"
									onClick={handleSubmit}
									className="accent-btn save"
								>
									Save
								</button>
							</div>
						</form>
					</div>
				) : (
					<div className="basic-info-show">
						<button>
							<FontAwesomeIcon
								icon={faPenToSquare}
								className="accent-btn edit"
								onClick={handleEdit}
							/>
						</button>

						{basicInfo.fullName ? (
							<h3>{basicInfo.fullName}</h3>
						) : (
							<h3 className="text-muted">Your Name</h3>
						)}

						{basicInfo.jobTitle ? (
							<div className="text-muted job-title">{basicInfo.jobTitle}</div>
						) : (
							''
						)}

						<div className="with-icon">
							<FontAwesomeIcon
								icon={faEnvelope}
								className={basicInfo.email ? '' : 'text-muted'}
							/>
							{basicInfo.email ? (
								basicInfo.email
							) : (
								<span className="text-muted">Email</span>
							)}
						</div>

						<div className="with-icon">
							<FontAwesomeIcon
								icon={faPhone}
								className={basicInfo.phone ? '' : 'text-muted'}
							/>
							{basicInfo.phone ? (
								basicInfo.phone
							) : (
								<span className="text-muted">Phone</span>
							)}
						</div>
						<div className="with-icon">
							<FontAwesomeIcon
								icon={faLocationDot}
								className={basicInfo.address ? '' : 'text-muted'}
							/>
							{basicInfo.address ? (
								basicInfo.address
							) : (
								<span className="text-muted">Address</span>
							)}
						</div>
					</div>
				)}
			</Card>
		</div>
	);
};

export default BasicInfo;
