import { Routes, Route } from "react-router";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
