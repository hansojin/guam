import Topbar from './Topbar';
import Footer from './Footer';
const Hello = () => {
    return(
        <div>
            <Topbar fixed="top" />
            회원가입
            <Footer />
        </div>
    )
}
export default Hello;