import "./app.scss";
import { Routes, Route } from "react-router-dom";
import HomeApp from "./components/pages/HomeApp";
import LoginPage from "./components/pages/LoginPage";


function App() {
  return (
   <Routes>
    <Route path="/" element={<HomeApp />}/>
    <Route path="login" element={<LoginPage/>}/>
   </Routes>
  );
}

export default App;
