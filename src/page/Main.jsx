import Topbar from './Topbar';

const Main = () => {
    return (
        <div>
            <Topbar fixed="top" />
            <div className='mainContent'>
                <p> 여긴 이제 사진 자리</p>
            </div>
        </div>
    )
}

export default Main;