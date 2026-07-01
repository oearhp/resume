interface NavigationProps {
    currentView: 'home' | 'resume' | 'showcases';
    setView: (view: 'home' | 'resume' | 'showcases') => void;
}

export default function Navigation({ currentView, setView }: NavigationProps) {
    return (
        <nav className='nav'>
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
                Resumé
            </button>

            {/* <button
                className={`nav-link ${currentView === 'showcases' ? 'active' : ''}`}
                onClick={() => setView('showcases')}
            >
                Showcases
            </button> */}

            <a
                href='https://www.linkedin.com/in/phraeophan-s-60b9554a/'
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link linkedin'
            >
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg'
                    alt='Linkedin'
                    className='linkedin-logo'
                ></img>
            </a>
        </nav>
    )
}