import React, { useState } from 'react';
import './css/Hello.css';
import Topbar from './Topbar';
import Footer from './Footer';

const InfoEdit = () => {
    const EditBtn = {
        backgroundColor: '#26469B',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: 'NanumSquareNeo-Variable',
        height: '50px',
        width: '150px',
        fontSize: '16px',
        marginLeft: '28%',
    };

    const [formData, setFormData] = useState({
        number: '', // <= 얘는 userDB에서 가져오기(회원가입시 받아옴)
        school: '',
        github: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveChanges = () => {
        // 수정된 정보를 저장하거나 처리하는 로직을 구현
        // user DB에 반영 + mypage 로 돌아가기
        console.log(formData);
    };

    return (
        <div>
            <Topbar fixed="top" />
            <div className="hello-container">
                <h1 style={{ marginBottom: '40px', marginTop: '60px' }}>회원정보 수정하기</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="number">아이디</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={'hansojin'}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={'한소진'}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">번호</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={formData.number}
                            placeholder='010-1234-5678'
                            onChange={handleInputChange}
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="school">학교</label>
                        <input
                            type="text"
                            id="school"
                            name="school"
                            value={formData.school}
                            onChange={handleInputChange}
                            placeholder='아주대학교'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="github">깃헙</label>
                        <input
                            type="text"
                            id="github"
                            name="github"
                            value={formData.github}
                            onChange={handleInputChange}
                            placeholder='github.com/hansojin'
                        />
                    </div>
                    <button style={EditBtn} onClick={handleSaveChanges}>
                        수정하기
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default InfoEdit;
