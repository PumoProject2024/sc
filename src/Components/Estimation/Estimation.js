import  { useState } from 'react';
import './Estimation.css';
import WhatsAppButton from '../Whatsapp/WhatsAppButton';

const Estimation = () => {
    const [selectedPackage, setSelectedPackage] = useState('');
    const [formData, setFormData] = useState({
        area: "",
        overheadTank: "",
        undergroundSump: "",
        compoundWall: ""
    });

    const packages = {
        basic: { name: 'BASIC', price: 2050, icon: '' },
        standard: { name: 'STANDARD', price: 2200, icon: '' },
        premium: { name: 'PREMIUM', price: 2400, icon: '' }
    };

    const rates = {
        overheadTank: 25,
        undergroundSump: 25,
        compoundWall: 2000
    };

    const handlePackageSelect = (packageType) => {
        setSelectedPackage(packageType);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value === '' ? '' : parseFloat(value) || 0
        }));
    };

    const calculateCosts = () => {
        if (!selectedPackage) return { items: [], total: 0 };

        const packagePrice = packages[selectedPackage].price;
        
        const items = [
            {
                value: formData.area || 'Area',
                units: 'SQFT',
                amount: packagePrice,
                totalCost: formData.area * packagePrice
            },
            {
                value: formData.overheadTank || 'Overhead Tank',
                units: 'LITRES',
                amount: rates.overheadTank,
                totalCost: formData.overheadTank * rates.overheadTank
            },
            {
                value: formData.undergroundSump || 'Underground Sump ',
                units: 'LITRES',
                amount: rates.undergroundSump,
                totalCost: formData.undergroundSump * rates.undergroundSump
            },
            {
                value: formData.compoundWall || 'Compound Wall',
                units: 'RFT',
                amount: rates.compoundWall,
                totalCost: formData.compoundWall * rates.compoundWall
            }
        ];

        const total = items.reduce((sum, item) => sum + item.totalCost, 0);
        
        return { items, total };
    };

    const { items, total } = calculateCosts();

    return (
        <div className="estimation-container">
            <div className="header">
                <h1>Calculate Your Price</h1>
            </div>

            {/* Package Selection */}
            <div className="package-selection">
                <h3>Select Your Package:</h3>
                <div className="package-cards">
                    {Object.entries(packages).map(([key, pkg]) => (
                        <div
                            key={key}
                            className={`package-card ${selectedPackage === key ? 'selected' : ''}`}
                            onClick={() => handlePackageSelect(key)}
                        >
                            <div className="package-icon">{pkg.icon}</div>
                            <div className="package-name">{pkg.name}</div>
                            <div className="package-price">₹{pkg.price}/sqft</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Left Side - Form */}
                <div className="left-section">
                    <div className="estimation-form">
                        <h3>Project Details</h3>
                        <div className="form-group">
                            <label>Enter Your Area (SQFT):</label>
                            <input
                                type="number"
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                placeholder="Enter area in square feet"
                            />
                        </div>

                        <div className="form-group">
                            <label>Over Head Tank (LITRES):</label>
                            <input
                                type="number"
                                name="overheadTank"
                                value={formData.overheadTank}
                                onChange={handleInputChange}
                                placeholder="Enter tank capacity in litres"
                            />
                        </div>

                        <div className="form-group">
                            <label>Underground Sump (LITRES):</label>
                            <input
                                type="number"
                                name="undergroundSump"
                                value={formData.undergroundSump}
                                onChange={handleInputChange}
                                placeholder="Enter tank capacity in litres"
                            />
                        </div>

                        <div className="form-group">
                            <label>Compound Wall (RFT):</label>
                            <input
                                type="number"
                                name="compoundWall"
                                value={formData.compoundWall}
                                onChange={handleInputChange}
                                placeholder="Enter wall length in running feet"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Calculation Table */}
                <div className="right-section">
                    <div className="calculation-table">
                        <h3>Cost Breakdown</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Value</th>
                                    <th>Units</th>
                                    <th>Amount</th>
                                    <th>Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.value}</td>
                                        <td>{item.units}</td>
                                        <td>₹{item.amount}</td>
                                        <td>₹{item.totalCost.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="total-estimation">
                        <h3>Total Estimation</h3>
                        <div className="total-amount">₹{total.toLocaleString()}</div>
                    </div>
                </div>
            </div>
              <WhatsAppButton
        phone="919840524873"
        message="Hello Sarrathi Constructions, Can I get more info on package details?"
        size={48}
      />
        </div>
        
    );
};

export default Estimation;