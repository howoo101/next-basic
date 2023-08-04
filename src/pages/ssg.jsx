import Sublayout from './components/Sublayout';

function ssg(props) {
	console.log(props);
	return (
		<Sublayout name={'SSG'}>
			<p>ssg 방식 테스트 페이지</p>
			<h1>{props.now}</h1>
		</Sublayout>
	);
}

export async function getStaticProps() {
	console.log('ssg');
	//해당 프로젝트를 빌드시에 한번만 호출
	return {
		props: { now: performance.now() },
	};
}

export default ssg;
