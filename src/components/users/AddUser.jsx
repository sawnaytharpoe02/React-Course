import React, { useState } from 'react';

const AddUser = ({ addUserData }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		addUserData(formData);
	};

	const [formData, setFormData] = useState({
		img: '',
		name: '',
		phone: '',
		cell: '',
		id: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-8 border rounded w-[550px] mx-auto p-5">
				<input
					type="text"
					placeholder="Enter img url"
					className="input input-md input-border rounded-sm input-primary w-full"
					name="img"
					onChange={handleChange}
					value={formData.img}
				/>
				<input
					type="text"
					placeholder="Enter your name"
					className="input input-md input-border rounded-sm input-primary w-full"
					name="name"
					onChange={handleChange}
					value={formData.name}
				/>
				<input
					type="text"
					placeholder="Enter mobile phone"
					className="input input-md input-border rounded-sm input-primary w-full"
					name="phone"
					onChange={handleChange}
					value={formData.phone}
				/>
				<input
					type="text"
					placeholder="Enter cell phone"
					className="input input-md input-border rounded-sm input-primary w-full"
					name="cell"
					onChange={handleChange}
					value={formData.cell}
				/>
				<input
					type="text"
					placeholder="Enter ID"
					className="input input-md input-border rounded-sm input-primary w-full"
					name="id"
					onChange={handleChange}
					value={formData.id}
				/>
				<button className="btn btn-md btn-primary" type="submit">
					Create
				</button>
			</form>
		</>
	);
};

export default AddUser;
