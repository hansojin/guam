import React, { useState } from 'react';
import './css/Hello.css';
import Topbar from './Topbar';
import Footer from './Footer';

const Hello = () => {
    const HelloBtn = {
        backgroundColor: '#26469B',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: 'NanumSquareNeo-Variable',
        height:'50px',
        width:'150px',
        fontSize: '16px',
        marginLeft:'93px',
        
      };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = () => {
        // 회원가입 처리 로직을 구현합니다.
    };

    return (
        <div>
            <Topbar fixed="top" />
            <div className="hello-container">
                <h1 style={{marginBottom:'40px',marginTop:'60px'}}>회원가입</h1>
                <form>

                    <div className="form-group">
                        <label>아이디</label>
                        <input
                            className='helloInput'
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호</label>
                        <input
                            className='helloInput'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호 확인</label>
                        <input
                            className='helloInput'
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>이름</label>
                        <input
                            className='helloInput'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>전화번호</label>
                        <input
                            className='helloInput'
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSignUp} style={HelloBtn}>가입하기</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Hello;
