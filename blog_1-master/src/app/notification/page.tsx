"use client";
// pages/index.tsx
import { useState } from 'react';

interface NoticeProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const notices = [
    { question: '질문 제목 1', answer: '이곳에 답변 내용이 표시됩니다.' },
    { question: '질문 제목 2', answer: '다른 내용이 표시됩니다.' },
    { question: '질문 제목 3', answer: '추가된 내용입니다.' },
    { question: '질문 제목 4', answer: '더 많은 내용입니다.' },
    { question: '질문 제목 5', answer: '다른 질문입니다.' },
    { question: '질문 제목 6', answer: '추가 질문입니다.' },
    { question: '질문 제목 7', answer: '또 다른 질문입니다.' },
    { question: '질문 제목 8', answer: '마지막 질문입니다.' },
    { question: '질문 제목 9', answer: '더 추가된 질문입니다.' },
    { question: '질문 제목 10', answer: '마지막 질문 10입니다.' },
    { question: '질문 제목 11', answer: '이곳에 답변 내용이 표시됩니다.' },
    { question: '질문 제목 12', answer: '다른 내용이 표시됩니다.' },
    { question: '질문 제목 13', answer: '추가된 내용입니다.' },
    { question: '질문 제목 14', answer: '더 많은 내용입니다.' },
    { question: '질문 제목 15', answer: '다른 질문입니다.' },
    { question: '질문 제목 16', answer: '추가 질문입니다.' },
    { question: '질문 제목 17', answer: '또 다른 질문입니다.' },
    { question: '질문 제목 18', answer: '마지막 질문입니다.' },
    { question: '질문 제목 19', answer: '더 추가된 질문입니다.' },
    { question: '질문 제목 20', answer: '마지막 질문 20입니다.' },
];

const Notice: React.FC<NoticeProps> = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px 0',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
        }}>
            <div 
                onClick={onToggle} 
                style={{
                    padding: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: isOpen ? '#e0e0e0' : '#f9f9f9',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #ddd',
                }}
            >
                <span>{question}</span>
                <span style={{
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: '12px',
                }}>▼</span>
            </div>
            {isOpen && (
                <div style={{
                    padding: '15px',
                    backgroundColor: '#fafafa',
                    color: '#555',
                }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

const Home: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const totalPages = Math.ceil(notices.length / itemsPerPage);
    const [openNoticeIndex, setOpenNoticeIndex] = useState<number | null>(null);

    const sortedNotices = [...notices].reverse();
    const currentNotices = sortedNotices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleToggle = (index: number) => {
        setOpenNoticeIndex(openNoticeIndex === index ? null : index);
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#333',
            }}>공지사항</h1>
            {currentNotices.map((notice, index) => (
                <Notice 
                    key={index} 
                    question={notice.question} 
                    answer={notice.answer} 
                    isOpen={openNoticeIndex === index} 
                    onToggle={() => handleToggle(index)} 
                />
            ))}
            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(index + 1)} 
                        style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            backgroundColor: currentPage === index + 1 ? '#0070f3' : '#f0f0f0',
                            color: currentPage === index + 1 ? '#fff' : '#333',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
