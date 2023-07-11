import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './select.css';
class Pass extends Component{
    render() {
      return (
        <center>
        <div className="pass">
        
           
            <fieldset className="in">
                 <h1>GLAM MART</h1><br></br><br></br>
          
              <img src = "logo.jpg" alt="imag" width="350px"/><br></br><br></br><br></br><br></br>                 
                 <ul className="good">
                <li className="bad">
                <Link to='/NavSide'><button>OPEN</button></Link></li>
                {/* <li className="bad"><button><Link to='/mypass'>OUTPASS FORM</Link></button></li>
                <li className="bad"><button><Link to='/OnDuty'>ON DUTY FORM</Link></button></li> */}
                </ul>
              
            </fieldset>
            
         
          </div>
         
          </center>
         
        
      );
    }
  }
  export default Pass;