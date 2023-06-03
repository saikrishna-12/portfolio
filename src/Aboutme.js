import React, { Component } from 'react'
import Mypic from './Myavatar.png';

export class Aboutme extends Component {
  render() {
    return (
<div>
  <section id="about">
    <div class="container mt-4 pt-4">
      <h1 class="text-center">About Me</h1>
      <div class="row mt-4" style={{ display: 'flex', alignItems:'center'}}>
        <div class="col-lg-4">
          <img src={Mypic} class="imageAboutPage" alt="" style={{ width: "100%", height: "466px",  objectFit: "contain"  }}/>
        </div>       
        <div class="col-lg-8">
          <p>
          As a front-end developer with 2 years of experience, I am skilled in creating beautiful, responsive websites that deliver engaging user experiences. My technical expertise includes proficiency in HTML, CSS, JavaScript, and jQuery, as well as experience with popular front-end frameworks such as React.
          I am also experienced in Figma UI/UX designing, and enjoy collaborating with designers to create visually stunning and user-friendly interfaces. With a strong eye for design, I am able to bring ideas to life and deliver polished designs that meet business goals and user needs.
          </p>
          <div class="row mt-3">
            <div class="col-md-6">
              <ul>
                <li>Name: Sai Krshna Darishetti</li>
                <li>Age: 24</li>
                <li>Occupation: Web Developer</li>
              </ul>
            </div>
            
          </div>
          <div class="row mt-3">
            <p>
            I am passionate about staying up-to-date with the latest web development and UI/UX trends and technologies, and enjoy exploring new tools and techniques to continually improve my craft. I am a reliable team player who thrives in fast-paced environments, and I am excited to bring my skills and experience to new challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}

export default Aboutme
