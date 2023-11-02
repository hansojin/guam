import React from 'react';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const StudyList = () => {
  const studyData = [
    {
      cate: '코테 준비',
      title: 'PYTHON 코테 같이 준비해요',
      content: '- 목표 : 코테에 많이 등장하는 알고리즘 익히기 및 실제 기업 기출 문제 풀이 예상<br /> - 커리큘럼 : 주차별로 정해진 알고리즘에 대해 공부하고 블로그나 깃헙 정리 and 주차별로 정해진 알고리즘과 관련된 코테 문제 풀이<br /> - 주의사항 : 하반기 공고가 은근히 많이 올라오고 있어서 도전하고 싶어요. 진짜 열심히 빡세게 준비하실 분들만 지원부탁드릴게요<br /><br /><a href="https://open.kakao.com/">카카오톡 오픈 채팅</a> ',
      status: '모집중',
      max: '10',
      cur : '1'
    },
    {
      cate: '취업 준비',
      title: '프론트엔드 엔지니어 취업 스터디',
      content: '- 목표 : 프론트엔드 개발 관련 기술 습득 및 이력서/면접 준비<br /> - 커리큘럼 : HTML, CSS, JavaScript, React 등의 기술 학습 및 프로젝트 경험 쌓기<br /> - 주의사항 : 경력자 및 신입 모두 환영합니다. 취업을 목표로 열심히 노력하겠습니다.<br /><br /><a href="https://open.kakao.com/">카카오톡 오픈 채팅</a> ',
      status: '종료',
      max: '8',
      cur : '3'
    },
    {
      cate: '면접 준비',
      title: '소프트웨어 엔지니어 면접 스터디',
      content: '- 목표 : 기술 면접 준비 및 문제 해결 능력 향상<br />- 커리큘럼 : 기술 면접 관련 주제에 대한 학습 및 모의 면접 진행<br /> - 주의사항 : 실제 면접 경험을 쌓고자 하는 분들과 함께 준비합니다.<br /><br /><a href="https://open.kakao.com/">카카오톡 오픈 채팅</a> ',
      status: '모집중',
      max: '6',
      cur : '5'
    },
    {
      cate: '사이드 프로젝트',
      title: '개인 프로젝트 협업 스터디',
      content: '- 목표 : 각자의 개인 프로젝트 개발 및 협업<br /> - 커리큘럼 : 프로젝트 기획, 디자인, 개발 및 협업 방법 학습<br /> - 주의사항 : 프로젝트 아이디어를 함께 나누며 협업하고자 하는 분들을 환영합니다.<br /><br /><a href="https://open.kakao.com/">카카오톡 오픈 채팅</a> ',
      status: '종료',
      max: '5',
      cur : '1'
    }
  ];

  return (
    <div className="StudyList">
      {studyData.map((study, index) => (
        <div key={index} className="studyItem">
          <p style={{ color: study.status === '모집중' ? 'green' : 'red' }}>{study.status}</p>
          <h2>➤ {study.title}</h2>
          <h3><CategoryOutlinedIcon style={{marginBottom:'-7px'}}/>  {study.cate}</h3>
          <p dangerouslySetInnerHTML={{ __html: study.content }} />
          <p>
            <PeopleAltOutlinedIcon style={{marginBottom:'-7px'}}/>  {study.cur} / {study.max}
            <button className='JoinStudyBtn' style={{ border:'solid blue 1px', borderRadius: '4px',backgroundColor:'white', height:'30px', width:'70px', float:'right', cursor:'pointer',marginTop:'-8px', fontFamily: 'NanumSquareNeo-Variable'}}>참여하기</button>
          </p>
          
          <hr />
        </div>
      ))}
    </div>
  );
};

export default StudyList;
