import Sublayout from './components/Sublayout';

function isr(props) {
	return (
		<Sublayout name={'ISR'}>
			<p>isr 방식 테스트 페이지</p>
			<h1>{props.now}</h1>
		</Sublayout>
	);
}

export async function getStaticProps() {
	//새로운 pre-render-page로 재빌드
	//해당 프로젝트를 빌드시 호출
	//revalidate에 지정한시간마다 새로 revalidate해서
	//새로운 pre-render-page지로 재빌드
	console.log('isr');
	return {
		props: { now: performance.now() },
		revalidate: 5,
	};
}

export default isr;
