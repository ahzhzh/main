"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState } from 'react';
import Link from 'next/link'; // Link 컴포넌트 가져오기


//document.addEventListener("DOMContentLoaded", function() {
  // 초기화 코드
//});

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  { question: '1. 서비스는 어떻게 이용하나요?', answer: '서비스 사용 방법 설명' },
  { question: '2. 서비스를 이용하기 위해 필요한 것은 무엇인가요?', answer: '정상화 필요' },
  { question: '3. 이용 요금이 어떻게 되나요?', answer: '5000+-' },
  { question: '4. 서비스 관련 지원은 어떻게 받나요?', answer: '홈페이지의 정상화' },
  { question: '5. 서비스 사용 시 주의사항은 무엇인가요?', answer: '주의사항 설명' },
  { question: '6. 양옆에 회색줄 ㅈㄴ 신경쓰이는데 어캐 없애지?', answer: '1' },
  { question: '7. 결제 방법은 어떤 것이 있나요?', answer: '결제 방법 설명' },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-background">
      <div className="faq-container">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="" className="logo-image" />
        </Link>
        <h1 className="faq-title">FAQ</h1>
        <hr className="divider" />
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
              <h2 className="faq-question" aria-expanded={openIndex === index}>
                <span>{faq.question}</span>
                <i className={`fas fa-chevron-down icon ${openIndex === index ? 'rotate' : ''}`}></i>
              </h2>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                aria-hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
              <span className={`arrow ${openIndex === index ? 'rotate' : ''}`}></span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .faq-background {
          padding: 0px 20px;
          background-color: #f9f9f9;
        }

        .faq-container {
          margin: auto;
          margin-top: 5px;
          width: 68%; /* 부모의 너비를 100%로 설정 */
        }

        .logo {
          margin-bottom: 30px;
          display: block;
          transform: translate(-20px, -20px);
        }

        .logo-image {
          width: 150px; /* 원하는 너비로 조정 */
          height: auto; /* 비율에 맞게 높이 자동 조정 */
        }

        .faq-title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .divider {
          border: none;
          border-top: 2px solid #ddd;
          margin: 0;
          margin-bottom: 30px;
          width: 100%; /* 구분선 길이 설정 */
        }

        .faq-item {
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 30px;
          overflow: hidden;
          transition: box-shadow 0.3s;
          position: relative;
          width: 100%; /* 박스 길이 설정 */
        }

        .faq-item:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          cursor: pointer;
          background-color: #fff;
          transition: background-color 0.3s;
        }

        .faq-question:hover {
          background-color: #f1f1f1;
        }

        .icon {
          transition: transform 0.3s;
        }

        .faq-answer {
          overflow: hidden;
          padding: 0 15px;
          color: #555;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.5s ease, opacity 0.5s ease;
        }

        .faq-answer.open {
          max-height: 300px;
          opacity: 1;
          padding: 10px 15px;
        }

        .arrow {
          position: absolute;
          right: 15px;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #333;
          transition: transform 0.3s;
          transform: translateY(-50%) rotate(0deg);
        }

        .arrow.rotate {
          transform: translateY(-50%) rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default Faq;
