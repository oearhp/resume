interface NavigationProps {
    currentView: 'home' | 'resume' | 'showcases';
    setView: (view: 'home' | 'resume' | 'showcases') => void;
}

export default function Navigation({ currentView, setView }: NavigationProps) {
    return (
        <nav className="nav">
            <button
                className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                onClick={() => setView('home')}
            >
                Home
            </button>
            <button
                className={`nav-link ${currentView === 'resume' ? 'active' : ''}`}
                onClick={() => setView('resume')}
            >
                Resume
            </button>
            <button
                className={`nav-link ${currentView === 'showcases' ? 'active' : ''}`}
                onClick={() => setView('showcases')}
            >
                Showcases
            </button>
        </nav>
    )
}