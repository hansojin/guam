import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './css/Topbar.css';
import { FaRegUserCircle } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className='TopbarDiv' >
            <Navbar bg="light" data-bs-theme="light" className="Navbar">
                <Container className="Container" style={{ marginTop: '0px' }}>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/" className="guam">🔍<span>괌</span>🔎</Navbar.Brand>
                        <Nav.Link href="/Looking4U" className="navbarName">모집</Nav.Link>
                        <Nav.Link href="/IamHere" className="navbarName">신청</Nav.Link>
                        <Nav.Link href="/Study" className="navbarName">스터디</Nav.Link>
                        <Nav.Link href="/Community" className="navbarName">커뮤니티</Nav.Link>
                        {/* <Nav.Link href="/MyPage" className="navbarName">마이페이지</Nav.Link> */}
                        {/* <Nav.Link href="/Search" className="navbarName">검색</Nav.Link> */}
                    </Nav>
                    <div className="search-bar" >
                        <input className="search-input" type="text" placeholder="Search" aria-label="Search" style={{ marginTop: '5px', marginLeft: '5px' }}/>
                    </div>
                    <div className='user'>
                        <Nav.Link href="/MyPage" className="navbarName"><FaRegUserCircle size={32} style={{ marginTop: '10px' }}/></Nav.Link>
                    </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar;

