import styles from "./admin.module.scss";
import UploadForm from "../../components/upload-form/upload-form";
import Message from "../../components/message/message";
import { useSelector } from "react-redux";
const Admin = () => {
  const { message } = useSelector((state) => state.message);
  return (
    <div className={styles["admin-panel"]}>
      {message ? <Message message={message} /> : <UploadForm />}
    </div>
  );
};

export default Admin;
