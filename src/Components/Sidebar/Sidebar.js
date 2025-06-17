
import './Sidebar.css';

const Sidebar = ({ setActiveComponent, showSidebar }) => {
  const menuItems = [
    {
      icon: () => <img src="/images/home.svg" alt="Home" style={{ width: '30px', height: '30px' }} />,
      label: 'Home',
      id: 'home'
    },
     {
      icon: () => <img src="/images/address-card.svg" alt="About Us" style={{ width: '30px', height: '30px' }} />,
      label: 'About Us',
      id: 'aboutus'
    },
    {
      icon: () => <img src="/images/services.svg" alt="Services" style={{ width: '30px', height: '30px' }} />,
      label: 'Services',
      id: 'services'
    },
    {
      icon: () => <img src="/images/building-construction.svg" alt="Recent Project" style={{ width: '30px', height: '30px' }} />,
      label: 'Recent Project',
      id: 'recentproject'
    },
    {
      icon: () => <img src="/images/calculator-minimalistic.svg" alt="Estimation" style={{ width: '30px', height: '30px' }} />,
      label: 'Estimation',
      id: 'estimation'
    },
          {
      icon: () => <img src="/images/packages.svg" alt="Package" style={{ width: '30px', height: '30px' }} />,
      label: 'Package',
      id: 'package'
    },
   
     {
      icon: () => <img src="/images/customer.svg" alt="testimonials" style={{ width: '30px', height: '30px' }} />,
      label: 'Testimonials',
      id: 'testimonials'
    },
    {
      icon: () => <img src="/images/contact.svg" alt="Contact Us" style={{ width: '30px', height: '30px' }} />,
      label: 'Contact Us',
      id: 'contactus'
    }
  ];


  const handleClick = (id) => {
    setActiveComponent(id);
  };

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleClick(item.id)}
              >
                <item.icon size={24} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
