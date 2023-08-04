import Head from 'next/head';
import Header from './Header';
import styles from './SubLayout.module.scss';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true });
console.log(orbitron);

function Sublayout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>
			<section>
				<Header />
				<div className={styles.subLayout}>
					<h1>{props.name}</h1>
					{props.children}
				</div>
			</section>
		</>
	);
}

export default Sublayout;
