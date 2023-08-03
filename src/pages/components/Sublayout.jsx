import Head from 'next/head';

function Sublayout(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
			</Head>
			<section>
				<h1>{props.name}</h1>
				{props.children}
			</section>
		</>
	);
}

export default Sublayout;
