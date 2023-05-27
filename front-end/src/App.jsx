import Sign from "./pages/Sign";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState();

  return (
    <div>
      <ToastContainer />
      {!token ? <Sign setToken={setToken} /> : <Dashboard />}
    </div>
  );
}

export default App;
