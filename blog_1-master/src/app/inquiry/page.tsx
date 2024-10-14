"use client"; 

import { useState } from 'react';
import './inquiry.css'; // CSS 파일 import

const InquiryPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState(''); // 문의 종류 상태 추가

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const isLoggedIn = false; // 로그인 상태 확인 로직 (여기서는 예시로 false로 설정)

    if (!isLoggedIn) {
      alert('로그인을 먼저 진행해주세요.'); // 로그인 요청 알림
      return; // 폼 제출 중단
    }

    console.log({ name, email, inquiryType, message }); // 문의 정보 로그

    // 폼 초기화
    setName('');
    setEmail('');
    setInquiryType('');
    setMessage('');
    alert('문의가 제출되었습니다!');
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputField"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="inputField"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          className="inputField" // 스타일 적용을 위해 같은 클래스를 사용
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          required
        >
          <option value="" disabled>문의 종류 선택</option>
          <option value="general">일반 문의</option>
          <option value="technical">기술적 문제</option>
          <option value="billing">청구 관련</option>
        </select>
        <textarea
          className="textareaField"
          placeholder="문의 내용"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="submitButton">제출</button>
      </form>
    </div>
  );
};

export default InquiryPage;
