import React from "react";
import "./Cart.css";
import {createStore} from 'redux';
import { Link } from "react-router-dom";
import logo from './logo1.jpg';
import personLogo from './person.png';
import {Provider,useSelector,useDispatch} from 'react-redux';



const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const incrementQuantity = (itemId) => ({
  type: INCREMENT_QUANTITY,
  payload: itemId,
});

const decrementQuantity = (itemId) => ({
  type: DECREMENT_QUANTITY,
  payload: itemId,
});

const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});


const initialState = {
  cartItems: [
    { id: 1, name: "MCaffeine Coffee Hydrogel Under Eye Patches for Dark Circles with Hyaluronic Acid - 30 Pairs", price: 759.99, image: "https://images-static.nykaa.com/media/catalog/product/4/8/4870ebdMCAFF00000257ab_1.jpg",quantity:1 },
    { id: 2, name: "Victoria's Secret Lavender Vanilla Mist", price: 2099.99, image: "https://images-static.nykaa.com/media/catalog/product/f/3/f36e7a1667553848123.jpg" ,quantity:1},
    { id: 3, name: "Havells SC5065 Multifunction Skin Care Device - Pink", price: 3868.99, image: "https://images-static.nykaa.com/media/catalog/product/6/5/65a454c8901762141074__1_.jpg" ,quantity:1},
    { id: 4, name: "Love Beauty & Planet Curry Leaves- Biotin & Mandarin Orange Sulfate Free Shampoo", price: 529.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/2/82b17ffLOVEB00000102_1.jpg",quantity:1 },
    { id: 5, name: "Makeup Revolution Reloaded Fundamental Eyeshadow Palette", price: 594.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/5057566099462.jpg",quantity:1 },
    { id: 6, name: "Himalaya Purifying Neem Face Wash", price: 350.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg" ,quantity:1},
    { id: 7, name: "Lakme Lumi Skin Cream", price: 268.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/9/f9ea5efLAKME00000281_1.jpg",quantity:1 },
    { id: 8, name: "Cetaphil Baby Daily Lotion With Shea Butter(400ml)", price: 739.99, image: "https://images-static.nykaa.com/media/catalog/product/d/c/dc9921e9318637043316_1.jpg" ,quantity:1},
    { id: 9, name: "Nykaa Love Struck Body Lotion - First Date", price: 250.99, image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/e/ae01cf48904245714567_1.jpg",quantity:1 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity:item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ),
      };

      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };

    default:
      return state;
  }
};

const store = createStore(reducer);

// Component
const CartC = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  const bodyStyle = {
    backgroundColor:'lavenderblush',
    fontFamily: 'Segoe UI',
  };

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
  const logoStyle = {
    width: '250px',
    height: '70px',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
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

  const titleStyle = {
    fontSize: '40px',
    lineHeight: '1.5',
    margin: '20px',
    textAlign: 'justify',
    marginLeft: '230px',
    marginTop: ' 85px',
  };



  return (
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
        <h2>
          <b>CATEGORIES</b>
        </h2>
        <Link to="/skin" className='sideBarStyle'>
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
    <div className="cart-container">
      <h1 style={titleStyle}>Shopping Cart</h1>
      <div className="cart-items">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} height={50} width={50} className="item-image"/>
                <h3 className="item-name">{item.name}</h3>
                <button className="reducer1"onClick={() => handleDecrement(item.id)}>-</button>
                <h4 className="item-quantity"> {item.quantity} </h4>
                <button className="reducer2" onClick={() => handleIncrement(item.id)}>+</button>
                <div className="item-price">₹{(item.price*item.quantity).toFixed(2)}</div>
                <button  className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </ul>

      )}
      </div>
      <p className="total"> Total: ₹{getTotalPrice()}</p>
    </div>
  </div>
  );
}

const Cart = () => (
  <Provider store={store}>
    <CartC />
  </Provider>
);

export default Cart;