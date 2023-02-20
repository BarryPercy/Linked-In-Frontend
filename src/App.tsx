import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/profile/" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
