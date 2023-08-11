import Head from 'next/head';
import styles from '@/src/styles/Home.module.scss';
import Header from './components/Header';
import pic from '@/public/img/pic.jpg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useGlobalData } from '../hooks/useGlobalContext';
import firebase from '../firebase';
//api 라우팅 (서버요청 처리를 위해서는 express라는 프레임웍을 활용)
//next에서는 api폴더 안쪽에 서버쪽 요청 및 응답에대한 라우팅 설정가능
//api폴더 안쪽의 파일명이 라우터 요청명으로 자동설정됨 /api/hello

export default function Home() {
	const { LoginInfo, setLoginInfo } = useGlobalData();

	useEffect(() => {
		//시작 페이지 접속시 firebase로 현재 로그인 상태값이 변경되면
		firebase.auth().onAuthStateChanged((userInfo) => {
			//해당 값이 비어있을때 (비로그인시) 전역 스테이트의 값을 비움
			if (userInfo === null) setLoginInfo({ displayName: '', uid: '' });
			//값이 있으면 (로그인) firebase로 받은 유저정보값을 전역 스테이트에 덮어쓰기
			else setLoginInfo(userInfo.multiFactor.user);
			console.log(userInfo);
		});
	}, [setLoginInfo]);
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
				<button
					onClick={() => {
						firebase.auth().signOut();
						alert('로그아웃 되었습니다.');
					}}
				>
					로그아웃
				</button>
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
