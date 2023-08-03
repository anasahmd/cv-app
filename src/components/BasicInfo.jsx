import '../styles/BasicInfo.css';
import Card from './Card';

const BasicInfo = ({ basicInfo, onInputChange }) => {
	return (
		<div className="basic-info">
			<Card>
				<h2>Edit Personal Details</h2>
				<form action="" className="form">
					<div className="form-input">
						<label htmlFor="full-name">Full Name</label>
						<input
							type="text"
							id="full-name"
							value={basicInfo.fullName}
							onChange={(e) => {
								onInputChange({ fullName: e.target.value });
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
								onInputChange({ jobTitle: e.target.value });
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
								onInputChange({ email: e.target.value });
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
								onInputChange({ phone: e.target.value });
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
								onInputChange({ address: e.target.value });
							}}
						/>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default BasicInfo;
