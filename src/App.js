import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{background:"black"}}>
      <Header/>
      {/* <Outlet/> */}
    </div>
  );
}

export default App;
