import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './page/Main.jsx';
import Community from "./page/Community.jsx";
import IamHere from "./page/IamHere.jsx";
import Looking4U from "./page/Looking4U.jsx";
import MyPage from "./page/MyPage.jsx";
import Study from "./page/Study.jsx";
import Hello from "./page/Hello.jsx";
import Search from "./page/Search.jsx";
import Login from "./page/Login.jsx";
import CommunityPost from "./page/CommunityPost.jsx";
import InfoEdit from "./page/InfoEdit.jsx";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Looking4U" element={<Looking4U />} />
            <Route path="/IamHere" element={<IamHere/>} />
            <Route path="/Study" element={<Study />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/CommunityPost" element={<CommunityPost />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Hello" element={<Hello />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/InfoEdit" element={<InfoEdit />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
