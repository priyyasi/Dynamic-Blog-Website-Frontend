import { Link } from "react-router-dom";
import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isNavShow, setIsNavShow] = useState(
    window.innerWidth > 1024 ? true : false
  );

  const closeNavHandler = () => {
    if (window.innerWidth < 1024) {
      setIsNavShow(false);
    } else {
      setIsNavShow(true);
    }
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link className="nav-logo" to={"/"} onClick={closeNavHandler}>
          <h3>
            Enlighten<span>Echoes</span>
          </h3>
        </Link>

        {isNavShow && (
          <ul className="nav-menu">
            <li>
              <Link to={"/profile/id"} onClick={closeNavHandler}>
                Pranjal Gupta
              </Link>
            </li>
            <li>
              <Link to={"/create"} onClick={closeNavHandler}>
                Create Posts
              </Link>
            </li>
            <li>
              <Link to={"/authors"} onClick={closeNavHandler}>
                Authors
              </Link>
            </li>
            <li>
              <Link to={"/logout"} onClick={closeNavHandler}>
                Logout
              </Link>
            </li>
          </ul>
        )}

        <button
          className="nav-toggle-button"
          onClick={() => setIsNavShow(!isNavShow)}
        >
          {isNavShow ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
