//import styles from "./logout.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../../redux/actions/auth";

const Logout = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    logOut();
  }, []);

  return <Redirect path="/" />;
};

export default Logout;
