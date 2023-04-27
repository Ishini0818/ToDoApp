import Sign from "./pages/Sign";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [ token, setToken ] = useState();

  return (
    <div>
      {!token? <Sign setToken={setToken} /> : <Dashboard />}
    </div>
  )
}

export default App
