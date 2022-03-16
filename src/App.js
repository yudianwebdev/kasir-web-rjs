import "./style/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />}></Route>
        <Route exact path="/about" element={<SignUp />}></Route>
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
