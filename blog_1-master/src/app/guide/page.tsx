import Head from 'next/head';
import './guide.css';

const Guide = () => {
  return (
    <div>
      <Head>
        <title></title>
      
      </Head>

      <nav className="horizontal-nav">
        <ul>
          <li><a href="#overview">개요</a></li>
          <li><a href="#installation">설치 방법</a></li>
          <li><a href="#features">주요 기능</a></li>
          <li><a href="#user-guide">사용자 가이드</a></li>
          <li><a href="#troubleshooting">문제 해결</a></li>
        </ul>
      </nav>

      <h1>프로그램 가이드</h1>
      
      <section id="overview">
        <h2>1. 개요</h2>
        <p>프로그램 이름: </p>
        <p>버전: </p>
        <p>개발자: </p>
      </section>

      <section id="installation">
        <h2>2. 설치 방법</h2>
        <h3>시스템 요구 사항</h3>
        <p>운영체제: </p>
        <p>메모리: </p>

        <h3>설치 절차</h3>
        <ol>
          <li>다운로드 링크: </li>
          <li>설치 파일 실행 방법: </li>
        </ol>
      </section>

      <section id="features">
        <h2>3. 주요 기능</h2>
        <ul>
          <li>기능 1: 설명</li>
          <li>기능 2: 설명</li>
        </ul>
      </section>

      <section id="user-guide">
        <h2>4.사용자 가이드</h2>
        <h3>기본 사용법</h3>
        <p>시작하기: </p>
        
        <h3>고급 사용법</h3>
        <p>기능 1의 고급 설정: </p>
      </section>

      <section id="troubleshooting">
        <h2>5.문제 해결</h2>
        <ul>
          <li>오류 1: 해결 방법</li>
          <li>오류 2: 해결 방법</li>
        </ul>
      </section>
    </div>
  );
};

export default Guide;
