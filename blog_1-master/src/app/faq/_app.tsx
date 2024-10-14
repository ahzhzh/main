import '../faq/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 화살표, 애니메이션 추가
import { AppProps } from 'next/app'; // Next.js의 AppProps 타입 임포트

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;