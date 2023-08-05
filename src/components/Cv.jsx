import html2pdf from 'html2pdf.js';
import '../styles/Cv.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Cv = ({ basicInfo, education, experience }) => {
	return (
		<div className="cv-view" onClick={(e) => html2pdf(e.target)}>
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
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Cv;
