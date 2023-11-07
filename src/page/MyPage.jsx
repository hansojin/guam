import Topbar from './Topbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MyPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Topbar fixed="top" />
            <div className='MyPageContent' style={{ margin: '25px auto', width: '50%' }}>
                <div className='Info' style={{ height: '240px', width: '30%', border: '2px solid #8B8DB9', float: 'left', marginTop: '50px', borderRadius: '12px' }}>
                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1em' }}>내 정보</p>
                    <p style={{ marginLeft: '20px' }}>이름<span style={{ marginLeft: '20px' }}>한소진</span></p>
                    <p style={{ marginLeft: '20px' }}>학교<span style={{ marginLeft: '20px' }}>아주대학교</span></p>
                    <p style={{ marginLeft: '20px' }}>깃헙<span style={{ marginLeft: '20px' }}>github.com/hansojin</span></p>
                    <Link to="/InfoEdit" style={{ textDecoration: 'none' }}>
                        <p style={{ marginRight: '20px', marginTop: '30px', fontSize: '0.9em', color: 'gray', textAlign: 'right' }}>수정하기</p>
                    </Link>


                    <p onClick={handleClickOpen} style={{ marginRight: '20px', fontSize: '0.9em', cursor: 'pointer', color: 'gray', textAlign: 'right' }}>탈퇴하기</p>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'NanumSquareNeo-Variable' }}>
                            {"회원 탈퇴"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" style={{ fontFamily: 'NanumSquareNeo-Variable' }}>
                                정말 탈퇴 하시겠습니까?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} style={{ fontFamily: 'NanumSquareNeo-Variable' }}>취소</Button>
                            <Button onClick={handleClose} autoFocus style={{ fontFamily: 'NanumSquareNeo-Variable' }}>탈퇴하기</Button>
                                        {/* 탈퇴하기 누르면 user table에서 삭제 처리 + GUAM 메인 페이지로 이동*/}
                        </DialogActions>
                    </Dialog>

                </div>
                <div className='Track' style={{ width: '66%', marginLeft: '38%', marginTop: '50px', minHeight: '650px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', marginLeft: '-30px', fontSize: '1.2em' }}>
                        <FindInPageOutlinedIcon style={{ marginRight: '10px' }} />내가 쓴 글
                    </p>
                    <p style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                        {/* 쓴글 가져오기 */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eaque atque tenetur error nostrum ipsum, vel harum blanditiis expedita optio nemo exercitationem distinctio beatae ullam omnis est libero natus illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet possimus cupiditate, provident veritatis eius iusto hic, vitae error asperiores quidem accusamus, voluptate inventore porro. Laudantium cumque nesciunt atque perspiciatis quae?
                    </p>
                    <br />
                    <p style={{ display: 'flex', alignItems: 'center', marginLeft: '-30px', fontSize: '1.2em' }}>
                        <ThumbUpOutlinedIcon style={{ marginRight: '10px' }} />내 좋아요
                    </p>
                    <p>
                        {/* 좋아요 가져오기 */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eaque atque tenetur error nostrum ipsum, vel harum blanditiis expedita optio nemo exercitationem distinctio beatae ullam omnis est libero natus illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet possimus cupiditate, provident veritatis eius iusto hic, vitae error asperiores quidem accusamus, voluptate inventore porro. Laudantium cumque nesciunt atque perspiciatis quae?
                    </p>
                    <br />
                    <p style={{ display: 'flex', alignItems: 'center', marginLeft: '-30px', fontSize: '1.2em' }}>
                        <LibraryBooksIcon style={{ marginRight: '10px' }} />참여한 스터디
                    </p>
                    <p>
                        {/* 스터디 참여하기 목록 가져오기 */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eaque atque tenetur error nostrum ipsum, vel harum blanditiis expedita optio nemo exercitationem distinctio beatae ullam omnis est libero natus illum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet possimus cupiditate, provident veritatis eius iusto hic, vitae error asperiores quidem accusamus, voluptate inventore porro. Laudantium cumque nesciunt atque perspiciatis quae?
                    </p>
                </div>
            </div>
            <Footer />

        </div>

    )
}
export default MyPage;