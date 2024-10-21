
import './App.css';
import LandingPage from './components/LandingPage';


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
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
