import { GlobalProvider } from '../hooks/useGlobalContext';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	);
}
