import React, {useEffect, useState} from 'react';
import {useAddUserMutation} from "../../../redux";

function AddNewUser(props) {
	const [name, setName] = useState('');
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');
	const [errorSubmit, setErrorSubmit] = useState(false);
	const [addUser, {error, payload}] = useAddUserMutation();
	// const [error, setError] = useState({error: '', description: ''});

	const handleAddUser = async () => {
			await addUser({name, login, email, birthday})
				.unwrap()
				.then((payload) => console.log('fulfilled', payload))
				.catch((error) => (setErrorSubmit(true)));
			// props.setAddUserModalIsOpen(false);
			// setError({error: '', description: ''});

	}

	// useEffect(() => {
	// }, [error]);
	//
	//
	return (
		<div>
			<div>
				<div>Имя: <input
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder={'Иван'}
				/>
				</div>
				<div>Логин: <input
					value={login}
					onChange={e => setLogin(e.target.value)}
					placeholder={'nagibator671'}
				/>
				</div>
				<div>Почта: <input
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder={'example@gmail.com'}
				/>
				</div>
				<div>Дата рождения: <input
					value={birthday}
					onChange={e => setBirthday(e.target.value)}
					placeholder={'2000-12-31'}
				/>
				</div>
			</div>
			<div>
				<button onClick={handleAddUser}>Добавить!</button>
			</div>
			{errorSubmit &&
				<div>
					<div>b</div>
				</div>
			}


		</div>
	);
}

export default AddNewUser;