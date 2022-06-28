import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./pages/activity/Activity";
import Activities from "./pages/activity/Activities";
import HomePage from "./pages/home/HomePage";
import './global.css'
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/detail/:id" element={<Activity />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
