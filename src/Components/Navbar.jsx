import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <span className="logo">Spacestagram</span>
      </h1>
      <span className="nav-info">
        Powered by NASA's Astronomy Picture of the Day (APOD) API
      </span>
    </div>
  );
};

export default Navbar;
