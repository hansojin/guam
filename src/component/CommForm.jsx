import React, { useState } from 'react';
import './CommForm.css'; 

const CommForm = () => {
    const [category, setCategory] = useState('자유 주제');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼 데이터 처리 로직 추가
    };

    return (
        <div className="community-form-container">
            <h2 style={{ color: '#8B8DB9', textDecoration: 'underline' }}>글 작성하기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>분류</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="자유 주제">자유 주제</option>
                        <option value="진로 고민">진로 고민</option>
                        <option value="QnA">QnA</option>
                    </select>
                </div>
                <div>
                    <label>제목</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>내용</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">등록</button>
                    <button type="button" className="cancel-button">취소</button>
                </div>
            </form>
        </div>
    );
}

export default CommForm;
