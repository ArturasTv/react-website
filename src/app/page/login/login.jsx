import LoginForm from "../../components/login-form/login-form";
import styles from "./login.module.scss";
import Message from "../../components/message/message";
import { useSelector } from "react-redux";
const Login = () => {
  const { message } = useSelector((state) => state.message);
  return (
    <div className={styles["login"]}>
      {message ? <Message message={message} /> : <LoginForm />}
    </div>
  );
};

export default Login;
