import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./profileCss.css";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/profile/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
