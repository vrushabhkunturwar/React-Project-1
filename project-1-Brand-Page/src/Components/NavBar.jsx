const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/Images/brand_logo.png" alt="Logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Lcation</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default NavBar;
