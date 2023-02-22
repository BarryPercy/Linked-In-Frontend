import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./profileCss.css";
import Main from "./components/Main";
import MainFeed from "./components/feed/MainFeed";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/profile/" element={<Main />}></Route>
        <Route path="/feed/" element={<MainFeed />}></Route>
        <Route path="/profile/:userId" element={<h1>testing</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
