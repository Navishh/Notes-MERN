import Modal from "react-modal";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

Modal.setAppElement("#root");

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div id="root">{routes}</div>;
};

export default App;
