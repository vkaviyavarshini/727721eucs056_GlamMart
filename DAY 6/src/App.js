import './App.css';
import LoginForm from './components/Login';
import Pass from './components/Select';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Signup from './components/Signup';
//import NavBar from './components/NavBar';
//import Sidebar from './components/SideBar';
import NavSide from './components/NavSide';
function App() {
  return (
    <div className="App">
  
    {/* <NavSide/> */}
   <Router>

      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Pass" element={<Pass/>}/>
        <Route path='/NavSide'element={<NavSide/>}/>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;