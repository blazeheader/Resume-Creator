import './App.css';
import LandingPage from "./components/LandingPage";
import ErrorBoundary from './components/ErrorBoundry';

function App() {
  return (
    <ErrorBoundary>
   <LandingPage/>
   </ErrorBoundary>
  );
}

export default App;
