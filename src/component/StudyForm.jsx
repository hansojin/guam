import React, { useState } from 'react';
import './StudyForm.css';

const StudyForm = ({ onCancel }) => {
    const [category, setCategory] = useState('코테 준비');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('모집중');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼 데이터 처리 로직 추가
        
    };

    return (
        <div className="study-form-container">
            <h2 style={{ color: '#8B8DB9', textDecoration: 'underline' }}>스터디 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> 카테고리 </label>
                    <div className="radio-group">
                        <label>
                            <input type="radio" name="category" value="코테 준비" checked={category === '코테 준비'} onChange={(e) => setCategory(e.target.value)} /> 코테 준비
                        </label>
                        <label>
                            <input type="radio" name="category" value="면접 준비" checked={category === '면접 준비'} onChange={(e) => setCategory(e.target.value)} /> 면접 준비
                        </label>
                        <label>
                            <input type="radio" name="category" value="취업 준비" checked={category === '취업 준비'} onChange={(e) => setCategory(e.target.value)} /> 취업 준비
                        </label>
                        <label>
                            <input type="radio" name="category" value="그룹/모임" checked={category === '그룹/모임'} onChange={(e) => setCategory(e.target.value)} /> 그룹/모임
                        </label>
                        <label>
                            <input type="radio" name="category" value="사이드 프로젝트" checked={category === '사이드 프로젝트'} onChange={(e) => setCategory(e.target.value)} /> 사이드 프로젝트
                        </label>

                    </div>
                </div>
                <div>
                    <label> 제목 </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label> 내용 </label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    <label> 상태 </label>
                    <div className="radio-group">
                        <label>
                            <input type="radio" name="status" value="모집중" checked={status === "모집중"} onChange={(e) => setStatus(e.target.value)} /> 모집중
                        </label>
                        <label>
                            <input type="radio" name="status" value="종료" checked={status === "종료"} onChange={(e) => setStatus(e.target.value)} /> 종료
                        </label>
                    </div>
                </div>
                <div>
                    <label> 인원 </label>
                    <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-button">등록</button>
                    <button type="button" className="cancel-button" onClick={onCancel}>취소</button>
                </div>
            </form>
        </div>
    );
}

export default StudyForm;
