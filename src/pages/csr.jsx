import Sublayout from './components/Sublayout';
import { useState, useEffect } from 'react';

function Csr() {
	console.log('csr');
	const [now, setnow] = useState('');

	useEffect(() => {
		//데이터가 연산되는 시점은 클라이언트단에서 컴포넌트가 재실행될때마다

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
