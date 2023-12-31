import { Link } from "react-router-dom";
import './NavBar.css'; // Import your CSS file

export const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Urban Shop</h1>

      <Link to="/" className="nav-link">
        <button className="shop-button">Shop</button>
      </Link>
      <Link to="/Pages/Cart/Cart" className="nav-link">
        <button className="cart-button">Cart</button>
      </Link>
    </div>
  );
};
