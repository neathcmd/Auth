import { Routes, Route } from "react-router";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Loginpage from "./Auth/loginpage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginpage" element={<Loginpage />} />
      </Routes>
    </>
  );
};

export default App;
