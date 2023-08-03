import Head from 'next/head';
import Header from './Header';

function Sublayout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>
			<section>
				<Header />
				<h1>{props.name}</h1>
				{props.children}
			</section>
		</>
	);
}

export default Sublayout;
