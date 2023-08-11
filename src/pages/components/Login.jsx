import React, { useState } from 'react';
import firebase from '../../firebase';
function Login() {
	const [Email, setEmail] = useState('');
	const [Pwd, setPwd] = useState('');
	const [Err, setErr] = useState('');

	const handleLogin = async () => {
		if (!Email || !Pwd) return alert('모든값을 입력하세여');

		try {
			await firebase.auth().signInWithEmailAndPassword(Email, Pwd);
			alert('로그인 성공');
		} catch (err) {
			console.log(err.code);
			//로그인 인증에 실패하면 실패코드에 따라 에러 메세지를 state에 담아주고 화면에 출력
			if (err.code === 'auth/user-not-found') setErr('존재하지 않는 이메일입니다.');
			else if (err.code === 'auth/wrong-password') setErr('비밀번호 정보가 일치하지 않습니다.');
			else setErr('로그인에 실패했습니다.');
		}
	};
	return (
		<div>
			<h1>LOGIN</h1>
			<input type='email' placeholder='입력해 이메잃' value={Email} onChange={(e) => setEmail(e.target.value)} />
			<input type='password' placeholder='입력해비번' value={Pwd} onChange={(e) => setPwd(e.target.value)} />
			<nav>
				<button onClick={handleLogin}>로그인</button>
			</nav>
			{Err !== '' && <p>{Err}</p>}
		</div>
	);
}

export default Login;
