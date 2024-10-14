// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Firestore 가져오기

const firebaseConfig = {
    apiKey: "AIzaSyCkY4z5GVzdCx4cff40Qo6MC6QWbbYB4II",
    authDomain: "last-f3028.firebaseapp.com",
    projectId: "last-f3028",
    storageBucket: "last-f3028.appspot.com",
    messagingSenderId: "11110938934",
    appId: "1:11110938934:web:b83f7b9dc6f2754a3b5b97"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore 초기화

//사용한 파이어베이스 프로젝트 이름 = LAST