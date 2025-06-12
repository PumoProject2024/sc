import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-left">
                <img src="/images/logo6.png" alt="Sarrathi Logo" className="hero-logo" />
                <div className="header-text">
                    <h1 className="company-name">Sarrathi Constructions</h1>
                    <div className="heading-underline"></div>
                    <h3>Art of Construction </h3>
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
