import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';


const About = () => {
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
    
      const sidebarLinkStyle = {  
        display: 'block',
      margin: '25px 0',
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      };
      const bodyStyle = {
        backgroundColor:'lavenderblush',
        fontFamily: 'Segoe UI',
      };
    
      const hoverStyle = {
        backgroundColor: 'blue',
        color: 'black',
      };
    const partnerLogosContainerStyle = {
      marginTop: '5px',
      marginLeft: '250px',
      display: 'flex',
      padding: '20px',
    };
    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '700px',
      };
    const partnerLogoStyle = {
      width: '150px',
      height: '80px',
      margin: '15px',
    };
     
      return (
        <>
        <div style={bodyStyle}>
          <nav style={navStyle}>
            <Link to="/home" style={linkStyle}>
              <img src={logo} alt="Logo" style={logoStyle} />
            </Link>
            <div style={containerStyle}>
              <Link to="/home" style={linkStyle} activeStyle={hoverStyle}>
                Home
              </Link>
              <Link to="/cart" style={linkStyle} activeStyle={hoverStyle}>
                Cart
              </Link>
              <Link to="/about" style={linkStyle} activeStyle={hoverStyle}>
                About
              </Link>
              <Link to="/contact" style={linkStyle} activeStyle={hoverStyle}>
                Contact
              </Link>
              <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
                Logout
              </Link>
              <Link to="/profile" style={linkStyle}>
              <img src={personLogo} alt="Person" style={personLogoStyle} />
            </Link>
            </div>
          </nav>
          <div style={sidebarStyle}>
            <br />
            <h2>
              <b>CATEGORIES</b>
            </h2>
            <Link to="/skin" className="xyz" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Skin Care
            </Link>
            <Link to="/hair" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Hair Care
            </Link>
            <Link to="/body" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Body & Bath
            </Link>
            <Link to="/fragrance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Fragrances
            </Link>
            <Link to="/makeup" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Make Up
            </Link>
            <Link to="/natural" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Natural
            </Link>
            <Link to="/eye" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Eye and Lip Care
            </Link>
            <Link to="/baby" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Baby Care
            </Link>
            <Link to="/gadgets" style={sidebarLinkStyle} activeStyle={hoverStyle}>
              Gadgets
            </Link>
          </div>
          <br/><br/><br/><br/>
          <div>
          <h1 style={titleStyle}>Our Product Partners</h1>
            <div style={partnerLogosContainerStyle}>
            <br/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242712/p15_ggy1bi.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242528/p3_ifzpdp.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242528/p1_wvabxn.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242527/p2_qlmkci.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242527/p4_otexre.webp'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268789/p34_hqxpf5.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268789/p32_gyqs5e.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            </div>
            <div style={partnerLogosContainerStyle}>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242526/p5_msnk8w.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242526/p7_muonbe.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242526/p6_k00bvh.jpg'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242526/p8_yrfi4j.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242526/p10_goqc2r.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268789/p33_fadgfk.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268789/p31_yhmxpe.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            </div>
            <div style={partnerLogosContainerStyle}>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p26_z3fo0h.jpg '} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p22_lpucd1.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p25_jd96xd.jpg'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p19_udgzp1.avif'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p24_zm9f9f.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268789/p30_qfc6pe.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268789/p35_pa0hdy.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            </div>
            <div style={partnerLogosContainerStyle}>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242525/p11_linejh.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242525/p9_oogt9h.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242524/p12_jhabow.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242524/p13_cfoemd.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689242524/p14_fpsnzo.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268790/p28_qp9u4i.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268790/p29_qt2prb.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            </div>
            <div style={partnerLogosContainerStyle}>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253898/p16_uclnsp.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253898/p18_r8erd0.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253898/p20_jarfc7.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253898/p17_aebgt8.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p21_qmlryb.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689253897/p23_jmdnoz.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            <img src={'https://res.cloudinary.com/dg2jouca2/image/upload/v1689268790/p27_qd01bc.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo"/>
            </div>
        </div>
        </div>
        </>
    );
    
} ;
export default About;