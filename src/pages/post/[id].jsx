import { useRouter } from 'next/router';
import Sublayout from '../components/Sublayout';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);
	return (
		<Sublayout name={'DETAIL'}>
			<p>{id}번째 포스트페이지 상세페이지 입니다.</p>
		</Sublayout>
	);
}

export default Detail;
