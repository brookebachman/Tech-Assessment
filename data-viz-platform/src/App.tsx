import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import NavHeader from "./components/NavHeader";
import { Dashboard } from "./pages/Dashboard";
import { SlideOver } from "./components/Slideover";
import Login from "./pages/Login";
import PrivateRoute from "./context/PrivateRoute";

function App() {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Top Header */}
        <NavHeader />

        {/* Main Layout */}
        <div className="flex">
          {/* Left Sidebar */}
          <aside className="fixed z-50 top-20 left-0 h-full md:w-20">
            <Navbar />
          </aside>

          {/* Main Content */}
          <main className="md:ml-24 ml-0 min-w-screen mt-20 p-1 md:p-4 border-t-2 border-t-[#525252] border-l-2 border-l-[#525252] rounded overflow-x-hidden">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard setShowSlider={setShowSlider} show={showSlider} />
                }
              />
              {/* Use PrivateRoute as a wrapper */}
              <Route
                path="/dashboard"
                element={
                  <Dashboard setShowSlider={setShowSlider} show={showSlider} />
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>

            {/* SlideOver Panel */}
            <SlideOver setShowSlider={setShowSlider} show={showSlider} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
