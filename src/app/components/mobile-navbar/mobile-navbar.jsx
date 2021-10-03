import styles from "./mobile-navbar.module.scss";
import { useSelector } from "react-redux";
import { menuItems } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
const MobileNavbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className={styles["MobileNavbar"]}>
      {!open ? (
        <TiThMenu
          className={styles["MobileMenu"]}
          size="40px"
          color="white"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <IoCloseCircleOutline
          className={styles["MobileMenu"]}
          size="40px"
          color="white"
          s
          onClick={() => setOpen(!open)}
        />
      )}
      <nav>
        {open &&
          menuItems.map((item, i) =>
            item.visible || isLoggedIn ? (
              <ul>
                <Link
                  onClick={() => setOpen(!open)}
                  key={item.key + "-Mobile"}
                  to={item.path}
                  className={`${
                    item.path === location.pathname ? styles["active"] : ""
                  } ${isLoggedIn && !item.visible ? styles["Admin-Nav"] : ""}`}
                >
                  {item.title}
                </Link>
              </ul>
            ) : null
          )}
      </nav>
    </div>
  );
};

export default MobileNavbar;
