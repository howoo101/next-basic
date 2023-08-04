import Sublayout from './components/Sublayout';
import data from '@/public/members.json';
function ssg(props) {
	return (
		<Sublayout name={'SSG'}>
			<p>ssg 방식 테스트 페이지</p>
			<h1>{props.now}</h1>

			{props.members.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
		</Sublayout>
	);
}

export async function getStaticProps() {
	console.log('ssg');
	//해당 프로젝트를 빌드시에 한번만 호출
	return {
		props: { now: performance.now(), members: data.members },
	};
}

export default ssg;
