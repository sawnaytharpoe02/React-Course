import React from 'react';

const User = ({ user, remove }) => {
	return (
		<>
			<div className="card w-[800px] mx-auto justify-between flex-row m-5 border rounded p-5">
				<img src={user.img} alt="" className="w-20 h-20" />
				<div>
					<p>User Name : {user.name}</p>
				</div>
				<div>
					<p>Cell : {user.cell}</p>
					<p>Phone : {user.phone}</p>
				</div>
				<button className="btn btn-sm btn-primary" onClick={() => remove(user.id)}>
					Delete
				</button>
			</div>
		</>
	);
};

export default User;
