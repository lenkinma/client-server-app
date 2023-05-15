import React from 'react';
import styles from './header.module.scss';

function Header(props) {
	return (
		<div className={styles.header_wrapper}>
			<div className={styles.header_title}>Client-Server-App</div>
		</div>
	);
}

export default Header;