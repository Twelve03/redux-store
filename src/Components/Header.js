import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productsInCart = useSelector((state) => state.cart.cart);
  const [cartCount, setCartCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let count = 0;
    productsInCart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [productsInCart, cartCount]);

  return (
    <header
      className="fixed h-16 w-full z-50 flex justify-between items-center 
                 bg-white"
    >
      {/* Mobile Nav */}
      <div onClick={() => setShowMenu(!showMenu)} className="ml-7 md:hidden">
        <i className="fas fa-ellipsis-h text-xl"></i>
      </div>
      {showMenu && (
        <nav
          className="fixed top-16 h-full w-full flex flex-col justify-center 
                     items-center text-2xl bg-white"
        >
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </nav>
      )}

      {/* Bigger screens' Nav*/}
      <nav className="ml-7 w-48 items-center justify-around hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>

      <Link to="/">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          The Artist
        </div>
      </Link>

      <Link to="/cart">
        <div className="p-1 mr-6 flex items-center rounded-full">
          <i className="fas fa-shopping-cart"></i>
          <p className="ml-1">{cartCount}</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
