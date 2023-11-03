import Topbar from './Topbar';
import Footer from './Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
    const loginBtn = {
        marginTop: '20px',
        marginBottom: '15px',
        width: '120px',
        padding: '10px',
        backgroundColor: '#26469B',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        fontFamily: 'NanumSquareNeo-Variable',
      };
      
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 로그인 처리 로직을 구현
    };
    return (
        <div>
            <Topbar fixed="top" />
            <div className="login-container">
                <h1>로그인</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="아이디"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin} style={loginBtn}>로그인</button>
                <p className="subtext">GUAM 회원이 아니세요? <Link to="/Hello">회원가입</Link></p>
            </div>
            <Footer />
        </div>
    )
}
export default Login;