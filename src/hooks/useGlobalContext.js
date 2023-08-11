import { createContext, useContext, useState } from 'react';

// 전역으로 관리할 저장객체 컨텍스트 생성 (Provider라는 컴포넌트 포함 : 전역관리할 값을 루트컴포넌트에 전달)
export const GlobalContext = createContext();

// 전역으로 관리할 값을 내부적으로 만들어서 루트컴포넌트를 감싸서 전달해주는 커스텀 Provider 컴포넌트 리턴함수
export function GlobalProvider({ children }) {
	// 전역으로 관리할 로그인 정보값이 담길 state와 state변경함수 생성
	const [LoginInfo, setLoginInfo] = useState({ displayName: '', uid: '' });
	// 전역정보값을 자식요소로 전달해주는 커스텀 Provider 컴포넌트 리턴
	return <GlobalContext.Provider value={{ LoginInfo, setLoginInfo }}>{children}</GlobalContext.Provider>;
}

export function useGlobalData() {
	const globalContext = useContext(GlobalContext);
	if (!globalContext) throw new Error('useGlobalData hook은 GlobalProvider 컴포넌트 안에서만 호출가능');
	return globalContext;
}
