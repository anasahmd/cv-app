import '../styles/Education.css';
import Card from './Card';

const Education = () => {
	return (
		<div className="education">
			<Card>
				<h2>Education</h2>
				<form action="" className="form">
					<div className="form-input">
						<label htmlFor="school">School</label>
						<input
							type="text"
							id="school"
							placeholder="Enter school / university"
						/>
					</div>
					<div className="form-input">
						<label htmlFor="degree">Degree</label>
						<input
							type="text"
							id="degree"
							placeholder="Enter Degree / Field Of Study"
						/>
					</div>
					<div className="form-input">
						<label htmlFor="city">City</label>
						<input type="text" id="city" placeholder="Enter City" />
					</div>
					<div className="form-input">
						<label htmlFor="county">Country</label>
						<input type="text" id="county" placeholder="Enter County" />
					</div>
					<div className="form-input">
						<label htmlFor="start">Start Date</label>
						<input type="month" id="start" />
					</div>
					<div className="form-input">
						<label htmlFor="end">Start Date</label>
						<input type="month" id="end" />
					</div>
				</form>
			</Card>
		</div>
	);
};

export default Education;
