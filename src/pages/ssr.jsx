import React from 'react';
import Sublayout from './components/Sublayout';

function ssr() {
	return (
		<Sublayout name={'SSR'}>
			<p>ssr 방식 테스트 페이지</p>
		</Sublayout>
	);
}

export default ssr;
