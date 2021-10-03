import styles from "./notFound.module.scss";
const NotFound = ({ location }) => {
  return (
    <div>
      <div className={styles["NotFound"]}>
        <p>
          Sorry The requested URL {location.pathname} was not found on this
          website.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
