import React,{useRef} from 'react';
import './NavSide.css';
import logo from './logo.jpg';
//import Sidebar from './SideBar';
import {Link} from 'react-router-dom';
//import {Slide} from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';

const NavigationBar =() => {
  const navStyle = {
    backgroundColor: 'lavenderblush',
    color: 'purple',
    padding: '20px',
    display: 'flex',
    alignItems:'center',
    position: 'fixed',
    justifyContent:'space-between',
    top:0,
    left:0,
    right:0,
    zIndex: 9999,
  };

  const linkStyle = {
    color: 'black',
    textDecoration:'none',
    padding:'5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle={
    width:'50px',
    height:'40px',
  };

  const textStyle = {
    fontSize:'20px',
    lineHeight:'1.5',
    marginTop:'150px',
    marginLeft:'250px',
    textAlign:'justify',
    marginRight: '500px',
    fontFamily:'Georgia',
  }
  const sidebarStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
    margin: '25px 0',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };
  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };

  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };


  const slideshowContainerStyle = {
    marginTop: '70px',
    marginLeft: '220px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    "https://tse2.mm.bing.net/th?id=OIP.1ZwbiO2COpPjfJ7ppEXfngHaDQ&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.o0-QlfkZf9xlNmwa9Sk3xAHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.uKDrg9_OIgtS_qajSkJ5agHaDB&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.wxj_VetISpGTp7JcSsiq_QHaEK&pid=Api&P=0&h=180",

  ];

  const slideProperties = {
    duration: 5000, 
    transitionDuration: 500, // Transition duration between slides in milliseconds
    infinite: true, // Whether to loop the slideshow continuously
    indicators: true, // Whether to show slide indicators at the bottom
    arrows: true, // Whether to show previous/next arrows
    autoplay: true, // Whether to automatically transition to the next slide
    pauseOnHover: true, // Whether to pause the slideshow on hover
    canSwipe: true, // Whether to allow swiping on touch-enabled devices
  };

  const slideContainerStyle = {
    height: '10px', // Adjust the height as needed
    width: '400px', // Adjust the width as needed
    margin: '20px 0', // Center the slideshow horizontally
  };

  const slideImageStyle = {
    height: '100%', // Make the images fill the slide container vertically
    width: '100%', // Make the images fill the slide container horizontally
    objectFit: 'cover', // Scale and crop the images to fit the container
  };

  const slideshowRef = useRef(null);

  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();
    }
  };
  
  const headStyle={
    marginLeft:'500px',
  }

  return (
    <>
      <nav style = {navStyle}>
        <h1 style = {headStyle}>
          GLAM MART
        </h1>
        <Link to="/home" style={linkStyle}></Link>
        <div style = {containerStyle}>
          <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
          <Link to ='/contact' style={linkStyle} activeStyle={hoverStyle}>Contact Us</Link>
          <Link to ='/settings' style={linkStyle} activeStyle={hoverStyle}>Setting</Link>
          <Link to ='/profile' style={linkStyle} activeStyle={hoverStyle}>Profile</Link>
          <Link to="/cart" style={linkStyle} activeStyle={hoverStyle}>Cart</Link>
          <Link to="/orders" style={linkStyle} activeStyle={hoverStyle}>Orders</Link>
        </div>
      </nav>
      <div style={sidebarStyle}>
        <br/>
       <h3>Category</h3>
        <Link to="/skin" style={sidebarLinkStyle} activeStyle={hoverStyle}>Skin Care</Link>
        <Link to="/makeup" style={sidebarLinkStyle} activeStyle={hoverStyle}>Make Up</Link>
        <Link to="/hair" style={sidebarLinkStyle} activeStyle={hoverStyle}>Hair Care</Link>
        <Link to="/Fragrance" style={sidebarLinkStyle} activeStyle={hoverStyle}>Fragrances</Link> 
        <Link to="/body" style={sidebarLinkStyle} activeStyle={hoverStyle}>Bath & Body</Link>
      </div>
      <div className='body'>
        <div>
          <h2 className='title'>
            Welcome To Glam Mart
          </h2>
          <h3 className='para'>
            People's Favorite
          </h3>
        </div>
        <div>
          <div className='image'>
            <Link to="/skin" target='_blank' rel="noreferrer">
              <img src='logo.jpg' alt = 'Glam Mart Logo'/>
            </Link>          
          </div> 
        </div>
      </div>
    </>
  );
}

export default NavigationBar;