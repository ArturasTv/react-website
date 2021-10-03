import { Link } from "react-router-dom";
import styles from "./home.module.scss";
import { homeText } from "../../config";
const Home = () => {
  return (
    <div className={styles["Content"]}>
      <div className={styles["Name"]}>{homeText.fullName}</div>
      <div className={styles["About"]}>{homeText.introduction}</div>
      <Link to="/projects">
        <div className={styles["Project-button"]}>
          <div className={styles["Button-text"]}>CHECK MY PROJECTS</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
