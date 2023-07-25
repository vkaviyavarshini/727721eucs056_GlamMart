import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { ChevronLeftCircle } from 'lucide-react';
import { addFeedback } from './api';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './feedback.css'

const Feedback = () => {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
      uname: '',
      uemail: '',
      answer: ''
    })

    const navStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '1px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      };
      const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px',
        padding: '4px 20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      };
    
      const containerStyle = {
        display: 'flex',
        alignItems: 'center',
      };
    
      const logoStyle = {
        width: '250px',
        height: '70px',
      };
    
      const personLogoStyle = {
        width: '60px',
        height: '60px',
        marginRight: '30px',
        marginLeft:'20px',
      };
    
    
      const sidebarStyle = {
        backgroundColor: 'palevioletred',
        padding: '23px',
        width: '200px',
        position: 'fixed',
        top: '50px',
        left: 0,
        bottom: 0,
      };
    
      const bodyStyle = {
        backgroundColor:'lavenderblush',
        fontFamily: 'Segoe UI',
      };
    

    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '750px',
        marginTop: ' 85px',
      };
  
    const handleChange = (e) => {
      e.preventDefault();
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit =  async(e) => {
      e.preventDefault();
  
      try {
        const res = await addFeedback(formdata);
        if (res.status == 200) {
          toast.success('Feedback Added Successfully !');
          setTimeout(() => {
            navigate('/')
          }, 1000)
        }
      }
      catch (error) {
        console.log(error);
      }
  
    }
  
    const routeBack = () => {
      navigate(-1)
    }
    return (
      <>
        <div style={bodyStyle}>
            <nav style={navStyle}>
                <Link to="/home" style={linkStyle}>
                <img src={logo} alt="Logo" style={logoStyle} />
                </Link>
                <div style={containerStyle}>
                    <Link to="/home" className='navBarStyle'>
                        Home
                    </Link>
                    <Link to="/cart" className='navBarStyle'>
                        Cart
                    </Link>
                    <Link to="/about" className='navBarStyle'>
                        About
                    </Link>
                    <Link to="/contact" className='navBarStyle'>
                        Contact
                    </Link>
                    <Link to="/feedback" className='navBarStyle'>
                    Feedback
                    </Link>
                    <Link to="/" className='navBarStyle'>
                        Logout
                    </Link>
                    <Link to="/profile" style={linkStyle}>
                        <img src={personLogo} alt="Person" style={personLogoStyle} />
                    </Link>
                </div>
            </nav>
                <div style={sidebarStyle}>
                    <br />
                    <h2><b>CATEGORIES</b></h2>
                    <Link to="/skin"  className='sideBarStyle'>
                        Skin Care
                    </Link>
                    <Link to="/hair"  className='sideBarStyle'>
                        Hair Care
                    </Link>
                    <Link to="/body"  className='sideBarStyle'>
                        Body & Bath
                    </Link>
                    <Link to="/fragrance"  className='sideBarStyle'>
                        Fragrances
                    </Link>
                    <Link to="/makeup"  className='sideBarStyle'>
                        Make Up
                    </Link>
                    <Link to="/natural"  className='sideBarStyle'>
                        Natural
                    </Link>
                    <Link to="/eye"  className='sideBarStyle'>
                        Eye and Lip Care
                    </Link>
                    <Link to="/baby"  className='sideBarStyle'>
                        Baby Care
                    </Link>
                    <Link to="/gadgets"  className='sideBarStyle'>
                        Gadgets
                    </Link>
                </div>
        <div className='main'>
  
          <form className='form1' onSubmit={handleSubmit}>
            <h3 className='title'>Feedback</h3>
            <input type="text" name="uname" id="uname" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} required />
            <input type="email" name="uemail" id="uemail" placeholder='Email' className='data-input bg-secondary black' onChange={handleChange} required />
            <h5>Describe your experince</h5>
            <input type='text' name='answer' id='answer' placeholder='Answer' className='data-input bg-secondary black' onChange={handleChange} required/>
            <button type="submit">Submit</button>
  
          </form>
  
  
          <button onClick={routeBack} className='route-btn-1 bg-white'><ChevronLeftCircle color="#25db00" /></button>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 500,
          }}
        />
        </div>
      </>
    )
}

export default Feedback