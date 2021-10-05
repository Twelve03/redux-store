import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="fixed h-16 w-full z-50 flex justify-between items-center 
                 bg-white"
    >
      {/* Mobile Nav */}
      <div onClick={() => setShowMenu(!showMenu)} className="ml-7 md:hidden">
        menu
      </div>
      {showMenu && (
        <nav
          className="fixed top-16 h-full w-full flex flex-col justify-center 
                     items-center text-2xl bg-white"
        >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contatcs</a>
        </nav>
      )}

      {/* Bigger screens' Nav*/}
      <nav className="ml-7 w-48 items-center justify-around hidden md:flex">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </nav>

      <div className="md:-ml-40">The Artist</div>

      <div className="p-1 mr-6 flex border-2 rounded-full">
        <p>Cart</p>
        <p className="ml-1">0</p>
      </div>
    </header>
  );
};

export default Header;
