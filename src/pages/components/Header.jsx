import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Orbitron } from 'next/font/google';
import { FaAirbnb } from 'react-icons/fa6';
//npm i react-icons 설치후
//https://react-icons.github.io/react-icons에서 활용할 아이콘 컴포넌트 import문과 아이콘명 확인
import { IconContext } from 'react-icons';
// 구글 웹폰트 시스템이 내장되어 있음
//next자체적으로 구글웹폰트의 용량을 최적화 시켜서 페이지에 적용
//비구조화할당으로 원하는 폰트 객체를 import

//Orbitron생성자로부터 사용할 객체를 반환 (subsets: 언어타입, weight: [사용할 폰트 굵기] , preload: 사전로딩유무)
//weight값이 등록되지않으면 콘솔 오류
//반환된 폰트객체 안에는 클래스명이 프로퍼티로 등록되어 있음
//해당 폰트를 사용하고자 하는 부모요소에 해당객체의 클래스명을 등록하면 자식컴포넌트에서는 자유롭게 해당 폰트 사용가능
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true });

function Header() {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<header id={styles.header} className={orbitron.className}>
			<h1>
				<Link href='/' className={currentPath === '/' ? styles.on : ''}>
					Logo
					<FaAirbnb />
				</Link>
			</h1>

			<ul id={styles.gnb}>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={currentPath === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={currentPath === '/isr' ? styles.on : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='/post' className={currentPath === '/post' ? styles.on : ''}>
						POST
					</Link>
				</li>
				<li>
					<Link href='/redirect' className={currentPath === '/redirect' ? styles.on : ''}>
						REDIRECT
					</Link>
				</li>
				<li>
					<Link href='/csr' className={currentPath === '/csr' ? styles.on : ''}>
						CSR
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
