import "./App.css";
import LandingPage from "./components/LandingPage";
import ComingSoonPage from "./components/ComingSoonPage"; // Import the Coming Soon component
import Loader from "./Loader/Loader";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router

function App() {
  const timeline = gsap.timeline();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the loader completing after 5 seconds (or your animation duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust this duration based on your animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {" "}
      {/* Wrap your app with Router */}
      <div className="App dark-theme">
        {/* Show loader only when loading */}
        {isLoading && <Loader timeline={timeline} />}

        {/* When not loading, display the routed pages */}
        {!isLoading && (
          <Routes>
            <Route path="/" element={<LandingPage />} />{" "}
            {/* Your landing page */}
            <Route path="/coming-soon" element={<ComingSoonPage />} />{" "}
            {/* Coming soon page */}
            {/* <Route path="/merchandise" element={<Merchandise />} /> Your merchandise page */}
            {/* Add other routes as needed */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
