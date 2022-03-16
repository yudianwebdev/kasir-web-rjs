import { Link } from "react-router-dom";
import "../../style/menuHeader.css";
function Header() {
  return (
    <div className="pl-16 pr-16 bg-fuchsia-500">
      <div className="h-14 flex justify-between items-center ">
        <div>
          <p>buat logo</p>
        </div>
        <div className="flex">
          <Link to="/about">
            <p id="MenuBtn" className="MenuBtn">
              Home
            </p>
          </Link>
          <p id="MenuBtn" className="MenuBtn">
            Home
          </p>
          <p id="MenuBtn" className="MenuBtn">
            Home
          </p>
          <p id="MenuBtn" className="MenuBtn">
            Home
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
