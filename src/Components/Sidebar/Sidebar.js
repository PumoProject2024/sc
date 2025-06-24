// Sidebar.js
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ showSidebar }) => {
  const menuItems = [
    {
      icon: () => <img src="/images/home.svg" alt="Home" style={{ width: '30px', height: '30px' }} />,
      label: 'Home',
      path: '/home'
    },
    {
      icon: () => <img src="/images/address-card.svg" alt="About Us" style={{ width: '30px', height: '30px' }} />,
      label: 'About Us',
      path: '/aboutus'
    },
    {
      icon: () => <img src="/images/services.svg" alt="Services" style={{ width: '30px', height: '30px' }} />,
      label: 'Services',
      path: '/services'
    },
    {
      icon: () => <img src="/images/building-construction.svg" alt="Recent Project" style={{ width: '30px', height: '30px' }} />,
      label: 'Recent Project',
      path: '/recentproject'
    },
    {
      icon: () => <img src="/images/calculator-minimalistic.svg" alt="Estimation" style={{ width: '30px', height: '30px' }} />,
      label: 'Estimation',
      path: '/estimation'
    },
    {
      icon: () => <img src="/images/packages.svg" alt="Package" style={{ width: '30px', height: '30px' }} />,
      label: 'Package',
      path: '/package'
    },
    {
      icon: () => <img src="/images/customer.svg" alt="Testimonials" style={{ width: '30px', height: '30px' }} />,
      label: 'Testimonials',
      path: '/testimonials'
    },
    {
      icon: () => <img src="/images/contact.svg" alt="Contact Us" style={{ width: '30px', height: '30px' }} />,
      label: 'Contact Us',
      path: '/contactus'
    }
  ];

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link to={item.path} className="nav-link" onClick={() => window.scrollTo(0, 0)}>
                <item.icon />
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
