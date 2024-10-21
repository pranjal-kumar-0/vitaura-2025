import "./App.css";
import LandingPage from "./components/LandingPage";
import gsap from "gsap";
import Loader from "./Loader/Loader";
import { useState, useEffect } from "react";

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
    <div className="App dark-theme">
      {" "}
      {/* Ensuring the whole app stays dark */}
      {isLoading && <Loader timeline={timeline} />}{" "}
      {/* Show loader only when loading */}
      {!isLoading && <LandingPage />} Show content only after animation
    </div>
  );
}

export default App;
