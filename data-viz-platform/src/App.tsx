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
          <aside className="fixed top-20 left-0 h-full w-20">
            <Navbar />
          </aside>

          {/* Main Content */}
          <main className="ml-20 mt-20 p-4 border-t-2 border-t-[#525252] border-l-2 border-l-[#525252] rounded overflow-auto flex-grow">
            <Routes>
              {/* Protect dashboard route */}
              <PrivateRoute
                path="/dashboard"
                element={
                  <Dashboard setShowSlider={setShowSlider} show={showSlider} />
                }
              />
              <Route path="/login" element={<Login />} />
              {/* Other routes */}
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
