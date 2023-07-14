import React,{useState} from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './Cart.css';

const Cart = () => {
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
    marginLeft: '200px',
  };

const [cartItems, setCartItems] = useState([
  { id: 1, name: "MCaffeine Coffee Hydrogel Under Eye Patches for Dark Circles with Hyaluronic Acid - 30 Pairs", price: 759.99, image: "https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdMCAFF00000257ab_1.jpg" },
  { id: 2, name: "Victoria's Secret Lavender Vanilla Mist", price: 2099.99, image: "https://images-static.nykaa.com/media/catalog/product/f/3/f36e7a1667553848123.jpg" },
  { id: 3, name: "Havells SC5065 Multifunction Skin Care Device - Pink", price: 3868.99, image: "https://images-static.nykaa.com/media/catalog/product/6/5/65a454c8901762141074__1_.jpg" },
  { id: 4, name: "Love Beauty & Planet Curry Leaves- Biotin & Mandarin Orange Sulfate Free Shampoo", price: 529.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/2/82b17ffLOVEB00000102_1.jpg" },
  { id: 5, name: "Makeup Revolution Reloaded Fundamental Eyeshadow Palette", price: 594.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/5057566099462.jpg" },
  { id: 6, name: "Himalaya Purifying Neem Face Wash", price: 350.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg" },
  { id: 7, name: "Lakme Lumi Skin Cream", price: 268.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/9/f9ea5efLAKME00000281_1.jpg" },
  { id: 8, name: "Cetaphil Baby Daily Lotion With Shea Butter(400ml)", price: 739.99, image: "https://images-static.nykaa.com/media/catalog/product/d/c/dc9921e9318637043316_1.jpg" },
  { id: 9, name: "Nykaa Love Struck Body Lotion - First Date", price: 250.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/e/ae01cf48904245714567_1.jpg" },
]);

const removeItem = (itemId) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
};

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
      <div className="cart-container">
      <h1 style={titleStyle}> Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.image} alt={item.name} className="item-image" />
              <span className="item-name">{item.name}</span>
              <span className="item-price">{formatIndianPrice(item.price)}</span>
            </div>
            <button className="remove-button" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
    </>
);

} ;
export default Cart;
