import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Helmet } from "react-helmet";
import { formatTitle } from "../../utils/titleFormat";
import Navbar from "../navbar/navbar";
import MobileNavbar from "../mobile-navbar/mobile-navbar";
const Header = () => {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>{formatTitle(location.pathname)}</title>
      </Helmet>
      <div className={styles["Header"]}>
        <Navbar />
        <MobileNavbar />
      </div>
    </>
  );
};

export default Header;
