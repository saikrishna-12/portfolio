import React, { Component } from 'react';
import './MyIntro.css';
import Mypic from './mypic.png';

export class MyIntro extends Component {
    render() {
        return (
            <div className="block-1">
                <div className="circle">
                    <img src={Mypic} alt="My Pic" className="circle-image" />
                </div>
                <div class="card">
                    <div class="card2" style={{ fontFamily: 'Rouge Script', fontSize: '18px', color:'ghostwhite' }}>
                    <p>Welcome to my website! I am a skilled web developer specializing in creating interactive and responsive web pages.
                     As a web developer, I bring your ideas to life by designing and developing visually appealing and user-friendly websites.
                     With my expertise in web development, I create dynamic and engaging online experiences that adapt seamlessly across different devices.</p>
                
                    </div>
                </div>
            </div>
        );
    }
}

export default MyIntro;
