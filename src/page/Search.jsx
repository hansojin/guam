import React from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');

  return (
    <div  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Topbar fixed="top" />
      <div className='SearchContent' style={{margin:'25px auto', width:'50%' , flex: 1 }}>
        <p style={{marginBottom:'25px'}}><span style={{fontWeight:'bold', fontSize:'1.2em'}}>{searchQuery}</span> 을(를) 포함한 검색 결과</p>
        <div className='LookSearch'>
            <p style={{fontWeight:'bold', fontSize:'1.3em'}}>모집 글</p>
            {/* Look DB에서 가져와 넣기 
            없으면 `${searchQuery}을(를) 포함한 검색 결과가 없습니다` */}
        </div>
        <hr style={{marginBottom:'35px', marginTop:'35px'}} />
        <div className='IamSearch'>
            <p style={{fontWeight:'bold', fontSize:'1.3em'}}>신청 글</p>
            {/* 여긴 IAM DB 에서 가져오기 */}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Search;
