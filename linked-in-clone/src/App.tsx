import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/profile/">
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
