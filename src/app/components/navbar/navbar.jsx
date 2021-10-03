import styles from "./navbar.module.scss";
import { useSelector } from "react-redux";
import { menuItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    <div className={styles["Navbar"]}>
      {menuItems.map((item, i) =>
        item.visible || isLoggedIn ? (
          <Link
            key={item.key}
            to={item.path}
            className={`${
              item.path === location.pathname ? styles["active"] : ""
            } ${isLoggedIn && !item.visible ? styles["Admin-Nav"] : ""}`}
          >
            {item.title}
          </Link>
        ) : null
      )}
    </div>
  );
};

export default Navbar;
