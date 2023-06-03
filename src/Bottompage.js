import React, { Component } from 'react';
import './Bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export class Bottompage extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container mt-3 contactContent">
          <h1 className="text-center">Contact Me</h1>
          <footer className="bg-dark text-light text-center py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <h5>Contact Information</h5>
                  <p>Email: saikrishnasai12@gmail.com</p>
                  <p>Phone: 7675819520</p>
                </div>
                <div className="col-lg-4">
                  <h5>Connect with Me</h5>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/sai-krishna-darishetti" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="icon" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/saikrishna-12" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p>&copy; {new Date().getFullYear()} Sai Krishna Darishetti. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}

export default Bottompage;
