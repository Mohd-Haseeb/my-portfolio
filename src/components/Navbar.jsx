import './Navbar.css'

const Navbar = () => {
    return (
      <>
        <nav className="navbar-section sticky">
          <ul className="navbar">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <div className="nav-line"></div>
            <li className="nav-item">
              <a href="#blogs">Projects</a>
            </li>
            <div className="nav-line"></div>
            <li className="nav-item">
              <a href="">Blogs</a>
            </li>
            <div className="nav-line"></div>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </>
    );
}
export default Navbar;