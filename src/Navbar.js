import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';
import FormModal from './FormModal';

export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false, // Track the state of the form visibility
            email: '',
        isEmailValid: true,
        };
    }

    handleSubmit = () => {
        if (this.state.isEmailValid) {
            const emailContent = {
                to: 'saikrishnasai12@gmail.com',
                subject: 'New message from website',
                body: `Email: ${this.state.email}\nMessage: ${this.state.message}`,
            };
            // Add code to send the email
        }
    };

    handleFormOpen = () => {
        this.setState({ isFormOpen: true, isEmailValid: true });
    };

    handleFormClose = () => {
        this.setState({ isFormOpen: false });
    };

    handleAboutClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    handleServiceClick = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    handleEmailChange = (event) => {
        const email = event.target.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        this.setState({ email, isEmailValid: isValid });
    };

    render() {
        const { isFormOpen } = this.state;
        const headerStyle = {
            fontFamily: "'Tsukimi Rounded', sans-serif",
        };
        const linkedInUrl = 'https://www.linkedin.com/in/sai-krishna-darishetti';
        const githubUrl = 'https://github.com/saikrishna-12';

        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <style>@import url('https://fonts.googleapis.com/css2?family=Tsukimi+Rounded:wght@500&display=swap');</style>
                    <a className="navbar-brand" style={headerStyle}>Sai Krishna</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <button className="nav-link active" aria-current="page" href="#">Home</button>
                            <button className="nav-link"  onClick={this.handleAboutClick}>About</button>
                            <button className="nav-link" onClick={this.handleServiceClick}>Services</button>
                            <button className="nav-link" onClick={this.handleServiceClick}>Work-History</button>
                        </div>
                    </div>

                    <div className="navbar-icons">
                        <a className="nav-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a className="nav-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                        <button className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <FontAwesomeIcon icon={faGoogle} className="icon" />
                        </button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-white" id="staticBackdropLabel">Contact</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-floating mb-3 text-secondary">
                                        <input
                                        type="email"
                                        className={`form-control ${this.state.isEmailValid ? '' : 'is-invalid'}`}
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                        required
                                    />
                                            <label htmlFor="floatingInput">Your Email address</label>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-secondary">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <input
                                              className="btn btn-primary"
                                              type="submit"
                                              value="Submit"
                                              onClick={this.handleSubmit}
                                              disabled={!this.state.isEmailValid}
/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {isFormOpen && <FormModal onClose={this.handleFormClose} />}
            </nav>
        );
    }
}

export default Navbar;
