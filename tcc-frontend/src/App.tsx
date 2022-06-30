import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./pages/activity/Activity";
import Activities from "./pages/activity/Activities";
import ProjectPage from "./pages/project/ProjectPage";
import NavBar from "./components/navbar/NavBar";
import Items from "./pages/items/Items";
import Help from "./pages/help/Help";
import Testimonials from "./pages/testimonial/Testimonials";
import TestimonialForm from "./pages/testimonial/TestimonialForm";
import HomePage from "./pages/home/HomePage";
import "./global.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ProjectPage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/detail/:id" element={<Activity />} />
          <Route path="/items" element={<Items />} />
          <Route path="/help" element={<Help />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/testimonials/new" element={<TestimonialForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
