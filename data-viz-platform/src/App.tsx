import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import NavHeader from "./components/NavHeader";
import { Dashboard } from "./pages/Dashboard";
import { SlideOver } from "./components/Slideover";
import Login from "./pages/Login";
// import your firebase config

// Use Firebase services here

import PrivateRoute from "./context/PrivateRoute"; // Import your PrivateRoute component

function App() {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-auto">
        {/* Top Header */}
        <NavHeader />

        {/* Main Layout */}
        <div className="flex flex-1 relative overflow-x-hidden">
          {/* Left Sidebar */}
          <aside className="fixed z-50 top-20 left-0 h-full md:w-20">
            <Navbar />
          </aside>

          {/* Main Content */}
          <main
            className="flex-1 md:ml-24 ml-0 mt-20 p-1 md:p-4 border-t-2 border-t-[#525252] border-l-2 border-l-[#525252] rounded 
            overflow-y-auto md:overflow-y-auto overflow-x-hidden"
          >
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route
                  path="/"
                  element={
                    <Dashboard
                      setShowSlider={setShowSlider}
                      show={showSlider}
                    />
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <Dashboard
                      setShowSlider={setShowSlider}
                      show={showSlider}
                    />
                  }
                />
              </Route>

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
