const Header = () => {
  return (
    <header
      className="fixed px-7 h-16 w-full z-50 flex justify-between items-center 
                 bg-white"
    >
      <div className="md:hidden">menu</div>
      <nav className="flex border-2 w-48 justify-around hidden md:block">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contatcs</a>
      </nav>
      <div>The Artist</div>
      <div>Cart</div>
    </header>
  );
};

export default Header;
