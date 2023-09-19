import Classes from "../sass/Header.module.scss";
import Logo from "../assets/getlinked.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  function showHamburger() {
    setClick(!click);
  }
  return (
    <>
      <nav className={Classes["headers"]}>
        <section className={Classes["logo"]}>
          <img src={Logo} alt="logo" />
        </section>
        <ul
          style={
            click
              ? {
                  left: "0",
                }
              : {}
          }
          className={Classes["listItem"]}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Overview</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <div className={Classes["btn"]}>
            <button>Register</button>
          </div>
        </ul>
        <div className={Classes["hamburger-section"]} onClick={showHamburger}>
          {click ? (
            <FaTimes
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          ) : (
            <FaBars
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
