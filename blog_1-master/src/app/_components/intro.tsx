"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './intro.css';

export function Intro() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      <section className="relative flex-col md:flex-row flex items-start md:justify-center mt-16 mb-16 md:mb-12 fixed-menu">
        <Link href="/" className="logo-text">
          로고 추가
        </Link>

        <div className="flex flex-col md:flex-row items-center justify-center mt-5 md:mt-0 button-container">
        <Link href="/" className="menu-button mr-4">
            메인
          </Link>
          <Link href="/guide" className="menu-button mr-4">
            가이드
          </Link>
          <Link href="/faq" className="menu-button mr-4">
            FAQ
          </Link>
          <Link href="/inquiry" className="menu-button mr-4">
            문의
          </Link>
          <Link href="/notification" className="menu-button mr-4">
            공지
          </Link>
          {isLoggedIn && (
            <Link href="/profile" className="menu-button mr-4">
              내 정보
            </Link>
          )}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="menu-button">
              로그아웃
            </button>
          ) : (
            <Link href="/login" className="menu-button">
              로그인/회원가입
            </Link>
          )}
        </div>

        <hr className="divider" />

        {showAlert && (
          <div className="alert-modal">
            <div className="alert-content">
              <p>로그아웃 되었습니다.</p>
              <button className="confirm-button" onClick={() => setShowAlert(false)}>확인</button>
            </div>
          </div>
        )}
      </section>

      {/* 메뉴바 아래 여백 추가 */}
      <div style={{ paddingTop: '108.5px' }}></div> {/* 메뉴바의 높이에 따라 조정 */}

      <style jsx>{`
        .fixed-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000; /* 메뉴가 항상 위에 있도록 설정 */
          background: white; /* 배경색 추가 */
        }

        .alert-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .alert-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }

        .confirm-button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .confirm-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </>
  );
}
