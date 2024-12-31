import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import NavHeader from "./components/NavHeader";
import { Dashboard } from "./pages/Dashboard";
import { SlideOver } from "./components/Slideover";

function App() {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <>
      {/* Main container with full height */}
      <div className="flex flex-col h-screen ">
        {/* Top header */}
        <NavHeader />

        {/* Main layout with Navbar on the left and content on the right */}
        <div className="flex">
          {/* Left Sidebar */}
          <div className="fixed top-20 left-0 h-full w-20">
            <Navbar />
          </div>

          {/* Content Area */}
          <div className="ml-20 mt-20 p-4 border-t-2 border-t-[#525252] border-l-2 border-l-[#525252] rounded overflow-auto ">
            <Dashboard setShowSlider={setShowSlider} show={showSlider} />
            <SlideOver setShowSlider={setShowSlider} show={showSlider} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
