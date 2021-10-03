import styles from "./message.module.scss";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/message";
const Message = ({ message }) => {
  const dispatch = useDispatch();
  const handleCloseMessage = () => {
    dispatch(clearMessage());
  };
  return (
    <div className={styles["message"]}>
      <span>{message}</span>
      <div className={styles["close"]} onClick={() => handleCloseMessage()} />
    </div>
  );
};

export default Message;
