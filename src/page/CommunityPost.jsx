import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';
import './css/Community.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';

const CommunityPost = () => {
    const location = useLocation();
    console.log(location);
    const { post } = location.state;

    const [comment, setComment] = useState(''); // 댓글을 저장할 상태

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        // 댓글 제출 로직 구현
        // comment 상태를 이용하여 댓글 처리
    };

    return (
        <div>
            <Topbar fixed="top" />

            <div className='CommunityPostMain'>
                <div className='post-content'>
                    <p>{post.cate}</p>
                    <h2>{post.title}</h2>
                    <hr style={{ marginBottom: '25px', marginTop: '25px' }} />
                    <p>{post.contents}</p><br />
                    <p>{post.writer}</p>
                    <p><VisibilityIcon /> {post.views}    <ChatBubbleOutlineIcon /> {post.comments}</p>
                    <hr style={{ marginBottom: '25px', marginTop: '25px' }} />
                    <p>Comments</p>
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="댓글을 입력하세요"
                        rows="4"
                        cols="50"
                    ></textarea>
                    <button onClick={handleCommentSubmit}>등<br /><br />록</button>

                    {post.oneW && (
                        <div className="comment-block">
                            <p className="comment-author"><PersonIcon style={{marginBottom:'-7px'}}/>{post.oneW}</p>
                            <p className="comment-content">{post.one}</p>
                        </div>
                    )}

                    {post.twoW && (
                        <div className="comment-block">
                            <p className="comment-author"><PersonIcon style={{marginBottom:'-7px'}} />{post.twoW}</p>
                            <p className="comment-content">{post.two}</p>
                        </div>
                    )}

                    {post.threeW && (
                        <div className="comment-block">
                            <p className="comment-author"><PersonIcon style={{marginBottom:'-7px'}} />{post.threeW}</p>
                            <p className="comment-content">{post.three}</p>
                        </div>
                    )}
                </div>


            </div>


            <Footer />
        </div>
    );
}

export default CommunityPost;
