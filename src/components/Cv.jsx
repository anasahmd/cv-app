import html2pdf from 'html2pdf.js';
import '../styles/Cv.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const Cv = ({ basicInfo, education, experience }) => {
	return (
		<div className="cv-div">
			<Card>
				<div className="download-btn-div">
					<button
						type="button"
						className="accent-btn download-btn"
						onClick={() => html2pdf(document.getElementById('cv-view'))}
					>
						Download CV
					</button>
				</div>
			</Card>
			<div id="cv-view" className="cv-view">
				<div className="cv-basic">
					<h2>{basicInfo.fullName}</h2>
					<div className="job-title">{basicInfo.jobTitle}</div>
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
				{education.length !== 0 && (
					<div className="cv-education">
						<div className="cv-heading">Education</div>
						{education.map((value) => (
							<div
								key={value.id}
								className="cv-item"
								onClick={() => handleEducationEdit(value)}
							>
								{value.school && (
									<>
										<div className="cv-title">
											<b>{value.school}</b>
											{value.degree && `, ${value.degree}`}
										</div>

										<div className="cv-info">
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
				)}
				{experience.length !== 0 && (
					<div className="cv-experience">
						<div className="cv-heading">Experience</div>
						{experience.map((value) => (
							<div
								key={value.id}
								className="cv-item"
								onClick={() => handleExperienceEdit(value)}
							>
								{value.company && (
									<>
										<div className="experience-position">
											<b>{value.company}</b>
											{value.position && `, ${value.position}`}
										</div>

										<div className="cv-info">
											{value.start && value.end && (
												<>
													{value.start} - {value.end}
												</>
											)}
											{value.start && value.end && value.location && <> | </>}
											{value.location && <>{value.location}</>}
										</div>
										<div className="cv-description">
											{value.description && <>{value.description}</>}
										</div>
									</>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Cv;
