import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./login-form.module.scss";
import { login } from "../../redux/actions/auth";
import Loading from "../loading/loading";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePassChange = (e) => {
    setUserPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserPass("");
    setUserName("");
    setLoading(true);
    dispatch(login(userName, userPass))
      .then(() => {})
      .catch((err) => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }
  return loading ? (
    <Loading />
  ) : (
    <div className={styles["form"]}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="fname"
          value={userName}
          onChange={(e) => handleUserChange(e)}
          placeholder="User Name"
        />
        <br />
        <input
          type="password"
          name="lname"
          value={userPass}
          onChange={(e) => handlePassChange(e)}
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
