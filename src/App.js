import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './page/Main.jsx';
import Community from "./page/Community.jsx";
import IamHere from "./page/IamHere.jsx";
import Looking4U from "./page/Looking4U.jsx";
import MyPage from "./page/MyPage.jsx";
import Search from "./page/Search.jsx";
import Study from "./page/Search.jsx";
import Hello from "./page/Hello.jsx";


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
            <Route path="/Search" element={<Search />} />
            <Route path="/Hello" element={<Hello />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
