import './Header.css';

const Header = ({ showSidebar, setShowSidebar }) => {
    return (
        <header className="header-container">
            <button
                className="header-mobile-toggle"
                onClick={() => setShowSidebar(!showSidebar)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
            <div className="header-left">
                <img src="/images/logo8.jpeg" alt="Sarrathi Logo" className="hero-logo" />
                <div className="header-text">
                    <h1 className="company-name">SARRATHI CONSTRUCTIONS</h1>
                    <div className="heading-underline"></div>
                    <h3>ART OF CONSTRUCTION </h3>
                </div>
            </div>
            <div className="header-contact">
                <p>
                    <i className="fas fa-phone" style={{ color: '#fff', marginRight: '8px' }}></i>
                    +91 98405 24873 / 98407 98059
                </p>
            </div>
        </header>
    );
};

export default Header;
