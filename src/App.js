// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Header from "./components/Header"
import Nav from './components/Nav';
// import { Outlet } from 'react-router-dom';
// import Post from './components/Post';
import {Route, Routes} from "react-router-dom"
import IndexPage from "./pages/Home/IndexPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

function App() {
  return (
    <Routes>
      <Route path ="/" element ={<Nav/>}>
      <Route index element ={<IndexPage/>} />
      <Route path ='/login' element ={<LoginPage/>}/>
      <Route path = "/signup" element ={<SignUpPage/>}/>
      {/* <Route path = "/profile" element={}/>
      <Route path = "/create" element={}/> */}
    </Route>
    </Routes>
   

  );
}

export default App;
