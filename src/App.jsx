import Login from "./page/Login";
import { Dashboard } from "./page/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
