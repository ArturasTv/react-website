import { Switch } from "react-router";
import { Route } from "react-router-dom";
import PrivateRoute from "../navigation/privateroute/privateRoute";
import Header from "../components/header/Header";
import Home from "../page/home/home";
import About from "../page/about/about";
import Contact from "../page/contact/contact";
import Projects from "../page/projects/projects";
import Github from "../page/github/github";
import NotFound from "../navigation/notfound/notFound";
import Login from "../page/login/login";
import Admin from "../page/admin/admin";
import AuthVerify from "../api/services/AuthVerify";
import { logout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import Logout from "../page/logout/logout";
const Layout = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/github" component={Github} exact />
        <Route path="/login" component={Login} exact />
        <PrivateRoute path="/admin" component={Admin} exact />
        <PrivateRoute path="/logout" component={Logout} exact />
        <Route component={NotFound} />
      </Switch>
      <AuthVerify logOut={logOut} />
    </div>
  );
};

export default Layout;
