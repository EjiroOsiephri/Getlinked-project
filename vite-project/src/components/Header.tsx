import Classes from "../sass/Header.module.scss";
import Logo from "../assets/getlinked.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={Classes["headers"]}>
        <section className={Classes["logo"]}>
          <img src={Logo} alt="logo" />
        </section>
        <ul className={Classes["listItem"]}>
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
      </nav>
    </>
  );
};

export default Header;
