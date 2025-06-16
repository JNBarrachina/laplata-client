import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useState } from "react";

import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/LoginRegister/Login";
import { Register } from "./components/pages/LoginRegister/Register";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { NotFound } from "./components/pages/NotFound/NotFound";

import registros from "../src/data/datatest.json";
import { UserTransactionsContext } from "./contexts/UserTransactionsContext";

function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem("userLogged");
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function RedirectLogged({ children }) {
  const isAuthenticated = localStorage.getItem("userLogged");
  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
}

function App() {
  const [userTransactionsList, setUserTransactionsList] = useState(registros);

  return (
    <>
      <UserTransactionsContext.Provider
        value={{ userTransactionsList, setUserTransactionsList }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <RedirectLogged>
                  <Home />
                </RedirectLogged>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectLogged>
                  <Login />
                </RedirectLogged>
              }
            />
            <Route
              path="/register"
              element={
                <RedirectLogged>
                  <Register />
                </RedirectLogged>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserTransactionsContext.Provider>
    </>
  );
}

export default App;
