import { FaSistrix } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="h1">
        <h1>Website</h1>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cnct">
        <div className="search">
          <FaSistrix />
        </div>
        <div className="contact">
          <li>
            <a href="#">Call us now</a>
          </li>
          <li>
            <a href="#">080XXXXXXXXXXX</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
