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
        };
      }
    
      handleFormOpen = () => {
        this.setState({ isFormOpen: true });
      };
    
      handleFormClose = () => {
        this.setState({ isFormOpen: false });
      };

  render() {
    const { isFormOpen } = this.state;
    const headerStyle = {
      fontFamily: "'Tsukimi Rounded', sans-serif",
    };
    const linkedInUrl = 'https://www.linkedin.com/in/sai-krishna-darishetti';
    const githubUrl = 'https://github.com/your-github-username';
    
    

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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">services</a>
              <a className="nav-link" href="#">Work-History</a>
            </div>
          </div>

          <div className="navbar-icons">
            <a className="nav-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </a>
            <a className="nav-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
            </a>
            <button className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <FontAwesomeIcon icon={faGoogle} className="icon"/>
            </button>
                         <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered">
                 <div class="modal-content">
                   <div class="modal-header"> 
                     <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">Contact</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body">
                   <div class="form-floating mb-3 text-secondary">
                   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                   <label for="floatingInput">Your Email address</label>
                   </div>
                   <div class="mb-3">
                   <label for="exampleFormControlTextarea1" class="form-label text-secondary">Message</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <input class="btn btn-primary" type="submit" value="Submit"></input>
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

/*
<!-- Vertically centered modal -->
<div class="modal-dialog modal-dialog-centered">
  ...
</div>

<!-- Vertically centered scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div> */