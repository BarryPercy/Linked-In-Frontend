import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./profileCss.css";
import Main from "./components/Main";
import MainFeed from "./components/feed/MainFeed";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getMyUser } from "./redux/actions";
import LoginPage from "./components/LoginPage";

const App = () => {
  const dispatch = useAppDispatch();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile/:userId" element={<Main />}></Route>
        <Route path="/main" element={<MainFeed />}></Route>
        <Route path="/feed/" element={<MainFeed />}></Route>
        <Route path="/profile/:userId" element={<h1>testing</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
