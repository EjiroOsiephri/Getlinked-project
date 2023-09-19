import Classes from "../sass/Header.module.scss";
import Logo from "../assets/getlinked.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <section className={Classes["logo"]}>
          <img src={Logo} alt="logo" />
        </section>
        <ul className={Classes["listItem"]}>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
