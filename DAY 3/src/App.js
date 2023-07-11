import './App.css';
import LoginForm from './components/Login';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
  
    {/* <NavSide/> */}
   <Router>

      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;