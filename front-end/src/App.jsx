import Sign from "./pages/Sign";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import authService from "./services/authService";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const jwt = authService.getToken();
    setToken(jwt);
  }, []);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/sign" />}
        />
        <Route
          path="/sign"
          element={
            !token ? <Sign setToken={setToken} /> : <Navigate to="/dashboard" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
