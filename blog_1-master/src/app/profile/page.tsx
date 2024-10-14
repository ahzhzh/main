"use client";

import React, { useEffect, useState } from 'react';
import './Profile.css'; // CSS 파일 import

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  loginDate: string;
}

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="profileContainer">
      <h2>내 정보</h2>
      {userInfo ? (
        <div className="profileDetail">
          <p><strong>이름:</strong> {userInfo.name}</p>
          <p><strong>이메일:</strong> {userInfo.email}</p>
          <p><strong>전화번호:</strong> {userInfo.phoneNumber}</p> {/* 전화번호 표시 */}
        </div>
      ) : (
        <p>사용자 정보가 없습니다.</p>
      )}
    </div>
  );
};

export default UserProfile;
