import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/LoginRegister/Login";
import { Register } from "./components/pages/LoginRegister/Register";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
