import { useEffect, useState } from 'react';
import Sublayout from '../components/Sublayout';
import axios from 'axios';
import { useGlobalData } from '@/src/hooks/useGlobalContext';
import Login from '../components/Login';

function Post() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { LoginInfo } = useGlobalData();

	console.log(LoginInfo);
	const handleSubmit = (e) => {
		e.preventDefault();
		const item = {
			title: title,
			content: content,
		};

		axios
			.post('/api/posts', item)
			.then((res) => {
				console.log(res);
				alert('글 저장 성공');
			})
			.catch((err) => {
				console.log(err);
				alert('글 저장 실패');
			});
	};

	useEffect(() => {
		axios
			.get('/api/posts')
			.then((json) => {
				console.log('get', json.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Sublayout name={'POST'}>
			<p>포스트페이지 인트로 화면입니다.</p>
			<Login />
			<div className='inputBox'>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='입력해라 제목' value={title} onChange={(e) => setTitle(e.target.value)} />
					<textarea
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='입력해라 본문'
						onChange={(e) => setContent(e.target.value)}
					></textarea>

					<nav>
						<input type='reset' defaultValue='리셋' />
						<input type='submit' defaultValue='제출' />
					</nav>
				</form>
			</div>
		</Sublayout>
	);
}

export default Post;
