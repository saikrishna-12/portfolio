import React, { Component } from 'react';
import './MyIntro.css';
import Mypic from './mypic.png';
import Servicecards from './Servicecards';
import Aboutme from './Aboutme';

export class MyIntro extends Component {
  render() {
    const services = ['Website Development', 'Website Design', 'Website Development','QA','Automation'];
    const skill=['HTML', 'CSS', 'Java Script', 'Python', 'Reacrt.js', 'Version Control', 'SQL', 'UiPath'];
    const work= ['As a front-end developer at TCS, I contributed to creating engaging and user-friendly web interfaces. I collaborated with cross-functional teams to implement responsive designs and optimize website performance, ensuring a seamless user experience. I utilized my expertise in HTML, CSS, and JavaScript to develop interactive and visually appealing front-end solutions.']
    return (
        
      <div>
        <div className="block-1">
          <div className="circle1">
            <img src={Mypic} alt="My Pic" className="circle-image" />
          </div>
          <div className="card1">
            <div
              className="card2"
              style={{ fontFamily: 'Rouge Script', fontSize: '18px', color: 'ghostwhite' }}
            >
              <p>
                Welcome to my website! I am a skilled web developer specializing in creating interactive and responsive web pages.
                As a web developer, I bring your ideas to life by designing and developing visually appealing and user-friendly websites.
              </p>
              <p>
                With my expertise in web development, I create dynamic and engaging online experiences that adapt seamlessly across different devices.
              </p>
            </div>
          </div>
        </div>
        <Aboutme/>
        {/* Render the Servicecards component */}
        <div style={{  display: 'flex', flexWrap: 'wrap', justifyContent:'center',padding: '45px'}}>
        <Servicecards title="Services" items={services}/>
        <Servicecards title="Technical Skills" items={skill}/>
        <Servicecards title="Work Exposure" items={work}/>        
        </div>

      </div>
    );
  }
}

export default MyIntro;
