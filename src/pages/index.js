import Head from 'next/head';
import styles from '@/src/styles/Home.module.scss';
import Header from './components/Header';
import pic from '@/public/img/pic.jpg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

//api 라우팅 (서버요청 처리를 위해서는 express라는 프레임웍을 활용)
//next에서는 api폴더 안쪽에 서버쪽 요청 및 응답에대한 라우팅 설정가능
//api폴더 안쪽의 파일명이 라우터 요청명으로 자동설정됨 /api/hello

export default function Home() {
	//서버쪽에서 프리렌더된 페이지를 가지고온 이후에
	//클라이언트쪽에서 다시 서버쪽 요청가능
	//next자체적으로 서버쪽 요청, 응답처리

	fetch('/api/hello')
		.then((response) => response.json())
		.then((json) => console.log(json));

	useEffect(() => {
		fetch('/api/hello', {
			method: 'POST',
			body: 'ABC',
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	});
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<Header />
				<h1>Main</h1>

				<div className={styles.pic}>
					<Image src={pic} alt='pic' placeholder='blur' fill quality={50} />
				</div>
				<div className={styles.pic}>
					<Image
						src='https://images.unsplash.com/photo-1617001945812-12105ad03af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
						alt='pic2'
						fill
						quality={100}
					/>
				</div>
			</main>
		</>
	);
}
