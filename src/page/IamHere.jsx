import React, { useState } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import MDEditor from "@uiw/react-md-editor";
import IamList from '../dummy/IamList';

const IamHere = () => {
    const [markdown, setMarkdown] = useState(''); 
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleMarkdownChange = (value) => {
        // Markdown 내용이 변경될 때 호출되는 콜백 함수
        setMarkdown(value);
    }

    const handleSave = () => {
        // Handle save logic here, you can save 'markdown' to your data store or send it to the server.
    }

    const IamBtn = {
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
        marginLeft:'42%',
        marginTop:'15px',
    };

    return (
        <div>
            <Topbar fixed="top" />
            <button className='createStudy' onClick={toggleForm} style={{marginLeft:"67%"}}>
                + 신청글 작성하기
            </button>
            <div className="IamContainer" style={{display: showForm ? 'block' : 'none', margin:'0 auto', width:'50%', marginTop:'50px'}}>
                <h6 style={{color:'gray'}}>MARKDOWN 지원</h6>
                <div data-color-mode="light">
                    <MDEditor
                        height={400}
                        value={markdown}
                        onChange={handleMarkdownChange}
                    />
                </div>
                <button onClick={handleSave} style={IamBtn}>등록</button>
            </div>
            <div className="IamList" style={{ margin:'0 auto', width:'45%', marginLeft:'28%'}}>
                <h2 style={{marginBottom:'25px'}}>신청 글 보기</h2> 
                {IamList.map((item, index) => (
                    <div key={index}>
                        <div data-color-mode="light" className="markdown-preview">
                            <hr style={{marginBottom:'25px', marginTop:'25px'}}/>
                            <MDEditor.Markdown source={item.content} fontFamily='NanumSquareNeo-Variable'/> 
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default IamHere;
