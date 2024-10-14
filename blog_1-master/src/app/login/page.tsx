"use client"; 

import React, { useState } from 'react';
import { auth, db } from './firebaseconfig'; // Firestore도 가져오기
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore 함수 추가

interface User {
  email: string;
  password: string;
  name?: string; // 이름 추가
  phoneNumber?: string; // 전화번호 추가
}

const Login = () => {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [nameRegister, setNameRegister] = useState('');
  const [phoneNumberRegister, setPhoneNumberRegister] = useState('');
  const [activeForm, setActiveForm] = useState('login');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
      const user = userCredential.user;

      // Firestore에서 사용자 정보 가져오기
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('사용자 정보:', userData); // 사용자 정보 출력
      } else {
        console.log('사용자 정보가 존재하지 않습니다.');
      }

      setMessage('로그인 완료!');
      setIsError(false);
      setShowAlert(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } catch (error) {
      setMessage('로그인 실패! 다시 시도해 주세요.');
      setIsError(true);
      setShowAlert(true);
      console.error('로그인 오류:', error);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailRegister, passwordRegister);
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, 'users', user.uid), {
        email: emailRegister,
        name: nameRegister,
        phoneNumber: phoneNumberRegister,
      });

      setMessage('회원가입 완료! 로그인해주세요.');
      setIsError(false);
      setShowAlert(true);
    } catch (error) {
      setMessage('회원가입 실패! 다시 시도해 주세요.');
      setIsError(true);
      setShowAlert(true);
      console.error('회원가입 오류:', error);
    }
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
    setActiveForm('login');
  };

  return (
    <div className="container">
      <div className="tabs">
        <button 
          className={`tab-button ${activeForm === 'login' ? 'active' : ''}`} 
          onClick={() => setActiveForm('login')}
        >
          로그인
        </button>
        <button 
          className={`tab-button ${activeForm === 'register' ? 'active' : ''}`} 
          onClick={() => setActiveForm('register')}
        >
          회원가입
        </button>
      </div>

      {activeForm === 'login' ? (
        <form onSubmit={handleLoginSubmit} className="form">
          <div className="form-group">
            <label htmlFor="emailLogin">이메일</label>
            <input
              type="email"
              id="emailLogin"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordLogin">비밀번호</label>
            <input
              type="password"
              id="passwordLogin"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">로그인</button>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit} className="form">
          <div className="form-group">
            <label htmlFor="nameRegister">이름</label>
            <input
              type="text"
              id="nameRegister"
              value={nameRegister}
              onChange={(e) => setNameRegister(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumberRegister">전화번호</label>
            <input
              type="tel"
              id="phoneNumberRegister"
              value={phoneNumberRegister}
              onChange={(e) => setPhoneNumberRegister(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailRegister">이메일</label>
            <input
              type="email"
              id="emailRegister"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordRegister">비밀번호</label>
            <input
              type="password"
              id="passwordRegister"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">회원가입</button>
        </form>
      )}

      {showAlert && (
        <div className="alert-modal">
          <div className="alert-content" style={{ minHeight: '120px' }}>
            <p>{message}</p>
            <button className="confirm-button" onClick={handleAlertConfirm}>확인</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 100px auto;
          padding: 40px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .tabs {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }

        .tab-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          padding: 10px;
        }

        .tab-button.active {
          border-bottom: 2px solid #0070f3;
          font-weight: bold;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }

        .submit-button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 15px;
        }

        .submit-button:hover {
          background-color: #005bb5;
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
          position: relative;
          min-height: 120px;
        }

        .confirm-button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 15px;
        }

        .confirm-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Login;
