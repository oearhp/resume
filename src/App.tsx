import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import { useState } from "react";
import ResumePage from "./components/ResumePage";
import ShowcasesPage from "./components/ShowcasesPage";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'resume' | 'showcases' >('home');

  return (
    <div className="app-container">
      <Navigation currentView={currentView} setView={setCurrentView} />

      {currentView === 'home' && <LandingPage />}
      {currentView === 'resume' && <ResumePage />}
      {currentView === 'showcases' && <ShowcasesPage />}
    </div>
  )
}