import React, { useEffect, useState } from 'react';
import User from './components/users/User';
import AddUser from './components/users/AddUser';
import './App.css';

const App = () => {
	const [users, setUsers] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const getUsersData = async () => {
		try {
			await fetch('https://randomuser.me/api/?results=10')
				.then((res) => res.json())
				.then((data) => {
					let rawUserData = data.results;
					let userObj = rawUserData.map((user) => {
						return {
							id: user.login.uuid,
							name: `${user.name.title} ${user.name.first} ${user.name.last}`,
							img: user.picture.thumbnail,
							cell: user.cell,
							phone: user.phone,
						};
					});
					setUsers(userObj);
				});
		} catch (err) {
			return console.log(err);
		}
	};

	useEffect(() => {
		getUsersData();
	}, []);

	const removeUserData = (id) => {
		let filterUsers = users.filter((usr) => usr.id !== id);
		setUsers(filterUsers);
	};

	const addUserData = (userData) => {
		setUsers((prevUsers) => {
			return [userData, ...prevUsers];
		});

		setShowForm(!showForm);
	};

	return (
		<div>
			<p className="text-2xl mx-auto w-fit my-3">Our Employee</p>
			<button
				className="btn btn-md btn-primary block w-[550px] my-6 mx-auto"
				onClick={() => setShowForm((prev) => !prev)}>
				Add User
			</button>
			{showForm && <AddUser addUserData={addUserData} />}
			{users.map((user) => (
				<User key={user.id} user={user} remove={removeUserData} />
			))}
		</div>
	);
};

export default App;
