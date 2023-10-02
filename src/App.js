// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
// import Nav from './components/Nav';
// import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{background:"black"}}>
      <Login/>
      <Header/>
      <Homepage/>
      {/* <Outlet/> */}
    </div>
  );
}

export default App;
