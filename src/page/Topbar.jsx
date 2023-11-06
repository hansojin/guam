import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './css/Topbar.css';
import { useLocation } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
    const location = useLocation();
    const { pathname } = location;

    const navigate = useNavigate();
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          const searchQuery = e.target.value;
          navigate(`/Search?q=${searchQuery}`);
        }
      };

    return (
        <div className='TopbarDiv' >
            <Navbar bg="light" data-bs-theme="light" className="Navbar">
                <Container className="Container" style={{ marginTop: '0px' }}>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/" className="guam">🔍<span style={{fontFamily:'GoryeongStrawberry', fontSize:'2.2em',color:'#26469B'}}>괌</span>🔎</Navbar.Brand>
                        <Nav.Link href="/Looking4U" className={pathname === '/Looking4U' ? 'navbarName active' : 'navbarName'}>모집</Nav.Link>
                        <Nav.Link href="/IamHere" className={pathname === '/IamHere' ? 'navbarName active' : 'navbarName'}>신청</Nav.Link>
                        <Nav.Link href="/Study" className={pathname === '/Study' ? 'navbarName active' : 'navbarName'}>스터디</Nav.Link>
                        <Nav.Link href="/Community" className={pathname === '/Community' ? 'navbarName active' : 'navbarName'}>커뮤니티</Nav.Link>
                        <Nav.Link href="/MyPage" className={pathname === '/MyPage' ? 'navbarName active' : 'navbarName'}>마이페이지</Nav.Link>
                        {/* <Nav.Link href="/Search" className="navbarName">검색</Nav.Link> */}
                    </Nav>
                    <div className="search-bar" >
                        <input className="search-input" type="text" placeholder="Search" aria-label="Search" style={{ marginTop: '5px', marginLeft: '5px' }} onKeyPress={handleKeyPress} />
                    </div>
                    <div className='user'>
                        <Nav.Link href="/Login" className={pathname === '/Login' ? 'navbarName active' : 'navbarName'}>
                            <LoginIcon style={{ fontSize: '1.7em', color: pathname === '/Login' ? '#26469B' : '#8B8DB9' }} />
                        </Nav.Link>
                        {/* 로그인 된 상태면, logout 아이콘으로 바꾸고, logout 버튼 누르면 로그아웃되게 */}
                    </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar;

