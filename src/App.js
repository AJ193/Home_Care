import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const backgroundStyle = {
      backgroundImage: `url(${require('./images/Picture1.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Adjust height as needed
  };

    return (
        <div className="container-fluid">
            <header className="row py-3">
                <div className="col-8.5 d-flex justify-content-between align-items-center">
                    <h1 className="display-5" style={{ color: 'purple' }}>Archiva</h1>
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ color: '#f3ebff' }}>
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={toggleMenu}
                                aria-controls="navbarNav"
                                aria-expanded={isOpen}
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Our Difference</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Caregivers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Caring Blog</a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-outline-primary rounded-pill ms-3">Contact Us</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Sidebar for Mobile */}
            <div className={`sidebar bg-dark text-light ${isOpen ? 'show' : ''}`} 
                style={{ 
                    position: 'fixed', 
                    top: 0, 
                    right: isOpen ? 0 : '-50%', // Opens from the right
                    width: '50%', 
                    height: '100%', 
                    transition: 'right 0.3s ease', 
                    zIndex: 999 
                }}>
<button 
    className="btn btn-close btn-lg" 
    onClick={closeMenu} 
    style={{ 
        position: 'absolute', 
        top: '20px', 
        right: '20px', 
        color: 'black',  // Set text color to white
        backgroundColor: '#fff' // Make background transparent
    }}
>
</button>


<ul className="list-unstyled text-center p-3">
    <li className="nav-item mb-3">
        <a className="btn btn-light text-dark rounded-pill px-4" href="#">Services</a>
    </li>
    <li className="nav-item mb-3">
        <a className="btn btn-light text-dark rounded-pill px-4" href="#">Our Difference</a>
    </li>
    <li className="nav-item mb-3">
        <a className="btn btn-light text-dark rounded-pill px-4" href="#">Caregivers</a>
    </li>
    <li className="nav-item mb-3">
        <a className="btn btn-light text-dark rounded-pill px-4" href="#">Caring Blog</a>
    </li>
</ul>

    <div className="text-center">
        <a href="#" className="btn btn-outline-primary rounded-pill mb-3">Contact Us</a>
    </div>
            </div>

            {/* Content Section */}
            <section className="row mt-5">
                <div className="col-12">
                    <h2 className="text-center">Home is Where We Thrive</h2>
                    <p className="text-center">Personalized Care by Arcavia, Ontario</p>
                    <div className="text-center">
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                </div>
            </section>

            {/* Image and Why Us Section */}
            <section style={backgroundStyle} className="row mt-5">
            <div className="col-md-6 d-flex align-items-center">
                <div className="card bg-light">
                    <div className="card-body">
                        <h5 className="card-title">Why Us?</h5>
                        <p className="card-text">
                            Caring for a loved one is a profound journey, and Arcavia is here to support you every step of the way. Our team of experienced caregivers delivers professional and compassionate care throughout the Greater Toronto Area, available 24/7, 365 days a year.
                        </p>
                    </div>
                </div>
            </div>
        </section>
            {/* Caregiving Services Section */}
            <section className="row mt-5">
                <div className="col-12 text-center">
                    <h2>Caregiving Services</h2>
                </div>
            </section>

            {/* Services Cards */}
            <section className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-user-friends fa-3x"></i>
                            <h5 className="card-title">Senior Home Care</h5>
                            <p className="card-text">Tailored support to promote independence and well-being.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-heart fa-3x"></i>
                            <h5 className="card-title">Companionship</h5>
                            <p className="card-text">Emotional support and social interaction for seniors.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-brain fa-3x"></i>
                            <h5 className="card-title">Dementia Care</h5>
                            <p className="card-text">Specialized care for individuals with cognitive impairments.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Service Cards */}
            <section className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-utensils fa-3x"></i>
                            <h5 className="card-title">Meal Preparation</h5>
                            <p className="card-text">Ensuring seniors receive nutritious meals.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-heart fa-3x"></i>
                            <h5 className="card-title">Personal Care</h5>
                            <p className="card-text">Help with daily activities like bathing and dressing.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fas fa-user-friends fa-3x"></i>
                            <h5 className="card-title">Respite Care</h5>
                            <p className="card-text">Providing family caregivers with much-needed breaks.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
