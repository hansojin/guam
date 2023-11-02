import Topbar from './Topbar';
import './css/Main.css'
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            
            <Topbar fixed="top" />
            
            <div className='mainContent'>
                <div className='mainImg'>
                    <img src='/img/mainImg.png' alt ='mainImg' height={'480px'}/>
                    <p className = 'desc1' >팀원 구-함</p>
                    <p className = 'desc2'>여러분의 스킬과 역량을 어필하는 개발자 커뮤니티</p>
                    <p className = 'desc2'>프로젝트에 참여할 팀원을 찾아 함께 프로젝트를 시작하세요.</p>
                </div>
                <div className='sub1'>
                    <p className = 'descLeft' >모집</p>
                    <p className = 'desc3' >프로젝트를 구현하기 위해 팀원을 모집해요</p>
                    <p className = 'desc4'>프로젝트의 목표를 공유하고</p>
                    <p className = 'desc4'>팀원을 찾아 함께 프로젝트 아이디어를 현실로 만드세요.</p>
                    <img src='/img/sub1.png' alt ='sub1' height={'460px'}/>
                </div>
                <div className='sub2'>
                    <img src='/img/sub2.png' alt ='sub2' height={'440px'}/>
                    <p className = 'descRight' >신청</p>
                    <p className = 'desc5' >자신의 스킬과 역량을 어필해요</p>
                    <p className = 'desc6'>합류된 프로젝트에서 </p>
                    <p className = 'desc6'>스스로의 능력을 뽑내보세요.</p>
                </div>
                <div className='sub3'>
                    <p className = 'descLeft' >스터디</p>
                    <p className = 'desc3' >스터디를 찾아 함께 진행해요</p>
                    <p className = 'desc4'>알고리즘, 취업 준비, 사이드 프로젝트 등  </p>
                    <p className = 'desc4'>다양한 학습 모임을 구하고 함께 성장해보세요.</p>
                    <img src='/img/sub3.png' alt ='sub3' height={'440px'}/>
                </div>
                <div className='sub4'>
                    <img src='/img/sub4.png' alt ='sub4' height={'360px'}/>
                    <p className = 'descRight' >커뮤니티</p>
                    <p className = 'desc5' >다양한 주제로 대화하고 지식을 교환해요</p>
                    <p className = 'desc6'>커뮤니티 멤버들과 함께 </p>
                    <p className = 'desc6'>아이디어를 나누며 정보를 공유하세요.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;