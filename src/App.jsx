import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Dashboard } from "./components/pages/Dashboard";
import { NotFound } from "./components/pages/NotFound";

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
