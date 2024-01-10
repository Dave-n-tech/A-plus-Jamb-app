import { Routes, Route } from "react-router-dom";
import HomeApp from "./pages/HomeApp";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
   <Routes>
    <Route path="/" element={<HomeApp />}/>
    <Route path="signup" element={<SignUpPage/>}/>
    <Route path="login" element={<LoginPage/>}/>
    <Route path="resetPassword" element={<ResetPassword/>}/>
    <Route path="/dashboard" element={<Dashboard />}/>
   </Routes>
  );
}

export default App;
