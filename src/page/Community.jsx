import React, { useState } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import './css/Community.css';
import CommForm from '../component/CommForm';
import CommList from '../dummy/CommList';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

function getCategoryBorderColor(category) {
    switch (category) {
      case '자유 주제':
        return '#fdf4ea';
      case 'QnA':
        return '#f0eaf3';
      case '진로 고민':
        return '#d4eef8';
      default:
        return 'black';
    }
  }


const Community = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <Topbar fixed="top" />
            <div className='CommunityMain'>
                <button className='joinCommunity' onClick={toggleForm}>
                    + 글 작성하기
                </button>
                <div className='CommForm' style={{ display: showForm ? 'block' : 'none' }}>
                    <CommForm />
                </div>
                <div className='CommList'>
                    {CommList.map((post, index) => (
                        <Link
                            to={'/CommunityPost'}
                            state={{ post: post }}
                            key={index}
                            className="post-link"
                        >
                            <div className="post-box" style={{ borderColor: getCategoryBorderColor(post.cate) }}>
                                <p>{post.cate}</p>
                                <h3>{post.title}</h3>
                                <p>{post.contents.length > 75 ? `${post.contents.slice(0, 75)}...` : post.contents}</p>
                                <p style={{ marginTop: 'auto' }}><VisibilityIcon style={{marginTop:'-2px', size:'0.8em'}}/> {post.views}  <ChatBubbleOutlineIcon style={{marginTop:'-2px', size:'0.8em'}}/> {post.comments}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                
            </div>
            <Footer />
        </div>
    )
}

export default Community;
