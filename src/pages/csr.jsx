import Sublayout from './components/Sublayout';
import { useState, useEffect } from 'react';

function Csr() {
	console.log('csr');
	const [now, setnow] = useState('');

	useEffect(() => {
		setnow(performance.now());
	}, []);

	return (
		<Sublayout name={'CSR'}>
			<p>csr 방식 테스트 페이지</p>
			<h1>{now}</h1>
		</Sublayout>
	);
}

export default Csr;
