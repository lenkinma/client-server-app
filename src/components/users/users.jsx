import {useGetUserQuery, useGetUsersQuery} from "../../redux";
import styles from './users.module.scss';
import {useState} from "react";
import {modalHoc} from "../common/modalHOC/modalHOC";
import AddNewUser from "./addNewUser/addNewUser";

const Users = () => {
	const [userId, setUserId] = useState('');
	const [inputUserId, setInputUserId] = useState('');
	const [addUserModalIsOpen, setAddUserModalIsOpen] = useState(false);
	const [show, setShow] = useState('users');
	const {data: users} = useGetUsersQuery();
	const {data: user, error: userError} = useGetUserQuery(userId, {skip: show !== 'user'});

	const findByIdHandler = () => {
		if (!inputUserId.trim().length) {
			showAllUsersHandler();
			setInputUserId('');
		}
		else{
			setShow('user');
			setUserId(inputUserId);
		}
	}
	const showAllUsersHandler = () => {
		setShow('users');
	}


	const AddUserModal = modalHoc(AddNewUser,
		{green: {status: true, text: 'Добавить'}, red: {status: false,}, close: true},
		'Добавить пользователя', setAddUserModalIsOpen);

	return (
		<div>
			{addUserModalIsOpen && <AddUserModal setAddUserModalIsOpen={setAddUserModalIsOpen}/> }

			<div className={styles.wrapper}>
				<div className={styles.title}>Users</div>
				<div className={styles.search_by_id_block}>
					<div className={styles.search_by_id_title}>Найти пользователя по id:</div>
					<input
						className={styles.search_by_id_input}
						value={inputUserId}
						onChange={e => setInputUserId(e.target.value)}
						placeholder={'id пользователя...'}
					/>
					<button
						className={styles.search_by_id_button}
						onClick={findByIdHandler}
					>Найти</button>
				</div>
				<div>
					<button
						className={styles.all_users_button}
						onClick={showAllUsersHandler}
					>Показать всех пользователей</button>
				</div>
				<div>
					<button
						className={styles.add_user_button}
						onClick={() => setAddUserModalIsOpen(true)}
					>Добавить пользователя</button>
				</div>

				<div className={styles.users_wrapper}>
					{show === 'users' && users?.map(elem => (
						<div className={styles.user_block} key={elem?.id}>
							<div><span className={styles.user_span}>id:</span>{elem?.id}</div>
							<div><span className={styles.user_span}>Имя:</span>{elem?.name}</div>
							<div><span className={styles.user_span}>Логин:</span>{elem?.login}</div>
							<div><span className={styles.user_span}>Почта:</span>{elem?.email}</div>
							<div><span className={styles.user_span}>Дата рождения:</span>{elem?.birthday}</div>
						</div>
					))}
					{show === 'user' &&
						<div className={styles.user_block}>
							{userError
								?
								<>
									<div>{userError.data?.error}</div>
									<div>{userError.data?.description}</div>
								</>

								:
								<>
									<div><span className={styles.user_span}>id:</span>{user?.id}</div>
									<div><span className={styles.user_span}>Имя:</span>{user?.name}</div>
									<div><span className={styles.user_span}>Логин:</span>{user?.login}</div>
									<div><span className={styles.user_span}>Почта:</span>{user?.email}</div>
									<div><span className={styles.user_span}>Дата рождения:</span>{user?.birthday}</div>
								</>
							}
						</div>
					}
				</div>

			</div>
		</div>

	);
}

export default Users;