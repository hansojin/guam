import React, { useState } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import MDEditor from "@uiw/react-md-editor";
import IamList from '../dummy/IamList';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Catebtn from '../component/Catebtn';

const IamHere = () => {
    const [markdown, setMarkdown] = useState(''); 
    const [showForm, setShowForm] = useState(false);
    const [meList, setIamList] = useState(IamList.map(item => ({ content: item.content, isLiked: false })));


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

    const toggleLike = (index) => {
        const updatedIamList = [...IamList];
        updatedIamList[index].isLiked = !updatedIamList[index].isLiked;
        setIamList(updatedIamList);
    };

    const IamBtn = {
        backgroundColor: '#8B8DB9',
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
                {/* DB 등록 로직 구현 */}
            </div>

            <div className='cateField' style={{margin:'25px auto', width: '40%', textAlign:'center'}}>
                <Catebtn />
            </div>

            <div className="IamList" style={{ margin:'0 auto', width:'45%', marginLeft:'28%' , marginTop:'15px'}}>
                <h2 style={{marginBottom:'25px'}}>신청 글</h2> 
                {meList.map((item, index) => (
                    <div key={index}>
                    <div data-color-mode="light" className="markdown-preview">
                        <hr style={{ marginBottom: '40px', marginTop: '40px' }} />
                        <MDEditor.Markdown source={item.content} fontFamily='NanumSquareNeo-Variable' />
                        {item.isLiked ? (
                            <ThumbUpAltIcon onClick={() => toggleLike(index)} style={{ float: 'right', fontSize: '1.8em', cursor: 'pointer', color: '#8B8DB9' }} />
                        ) : (
                            <ThumbUpOffAltIcon onClick={() => toggleLike(index)} style={{ float: 'right', fontSize: '1.8em', cursor: 'pointer', color: '#8B8DB9' }} />
                        )}
                    </div>
                </div>
            ))}
            <hr style={{ marginBottom: '40px', marginTop: '40px' }} />
        </div>
        <Footer />
    </div>
);
};

export default IamHere;
