import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Eye = () => {
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

    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '800px',
      };
    const Products1 = [
      {
        name: "MCaffeine Coffee Under Eye Cream for Dark Circle & Puffiness Reduction with Hyaluronic Acid & Vit E",
        image: "https://images-static.nykaa.com/media/catalog/product/4/2/423c13fMCAFF00000222a_1.jpg",
        price: 299.99,
      },
      {
        name: "L'Oreal Paris Revitalift Hyaluronic Acid Eye Serum With 2.5% Hyaluronic Acid + Caffeine",
        image: "https://images-static.nykaa.com/media/catalog/product/0/6/06d7d68LOREA000004210_1.jpg",
        price: 809.99,
      },
      {
        name:"Nykaa Serial Kisser Tinted Lip Balm - Chocolate",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/a/7a9fe62NYKAC00000637_2.jpg",
        price: 161.99,
      },
      {
        name: "Biotique Bio Sea Weed Cooling Anti Fatigue Eye Gel",
        image: "https://images-static.nykaa.com/media/catalog/product/7/f/7fffc078906009450223_1.jpg",
        price: 192.99,
      },
      

    ];

    const Products2 = [
      {
        name:"MCaffeine Coffee Hydrogel Under Eye Patches for Dark Circles with Hyaluronic Acid - 30 Pairs",
        image:"https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdMCAFF00000257ab_1.jpg",
        price: 759.99,
      },
      {
        name:"Minimalist SPF 30 Lip Balm",
        image:"https://images-static.nykaa.com/media/catalog/product/a/f/afa0685MINIM00000086.jpg",
        price: 299.99,
      },
      {
        name: "Be Bodywise 2% Bio Retinol Under Eye Cream - Helps Reduce Dark Circles, Fine Lines ,Wrinkles",
        image: "https://images-static.nykaa.com/media/catalog/product/0/d/0da3b24BEBOD00000079_1.jpg",
        price: 349.99,
      },
      {
        name:"MCaffeine Choco Kissed Lip Gift Kit - Gift Sets & Combos for Women & Men",
        image:"https://images-static.nykaa.com/media/catalog/product/d/f/df047dfMCAFF00000165_nws1.jpg",
        price: 809.99,
      }

    ]
  
    const formatIndianPrice = (price) => {
      const formattedPrice = price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
      return formattedPrice;
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
            <h1 style={titleStyle}>Eye & Lip Care</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
          <br/>
          <div className='product-container'>
            {Products2.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
    
} ;
export default Eye;