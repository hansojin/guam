import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';


const Topbar = () => {
    return (
        <div >
            <Navbar bg="light" data-bs-theme="light" className="Navbar">
                <Container>
                    <Navbar.Brand href="/"><h1>괌</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Looking4U" className="navbarName">모집</Nav.Link>
                        <Nav.Link href="/IamHere" className="navbarName">신청</Nav.Link>
                        <Nav.Link href="/Study" className="navbarName">스터디</Nav.Link>
                        <Nav.Link href="/Community" className="navbarName">커뮤니티</Nav.Link>
                        <Nav.Link href="/MyPage" className="navbarName">마이페이지</Nav.Link>
                        <Nav.Link href="/Search" className="navbarName">검색</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar;