import styles from './App.module.scss'
import Users from "../users/users";
import Header from "../header/header";
import Films from "../films/films";


function App() {



	return (
		<div>
			<Header/>
			<div className={styles.main_block}>
				<Users/>
				<Films/>
			</div>
		</div>
	);
}

export default App;
