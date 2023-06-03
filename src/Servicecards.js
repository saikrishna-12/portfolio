import React, { PureComponent } from 'react';
import './Servicecards.css'

class Servicecards extends PureComponent {
  render() {

    const { items } = this.props;
    if (!items || items.length === 0) {
        return <div>No items to display.</div>;
      }

    return (
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <svg stroke="#ffffff" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M10 20H40V30H10V20ZM10 40H40V50H10V40ZM10 60H40V70H10V60Z" ></path>
                </g>
              </svg>
              <strong>{this.props.title}</strong>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">{this.props.title}</small>
              <div className="description">
                <div className="title">

                  <p className="title">
                    <strong>
                    <ul>
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                    </strong>
                  </p>
                  <svg
                    fillRule="nonzero"
                    height="15px"
                    width="15px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      style={{ mixBlendMode: 'normal' }}
                      textAnchor="none"
                      fontSize="none"
                      fontWeight="none"
                      fontFamily="none"
                      strokeDashoffset="0"
                      strokeDasharray=""
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeWidth="1"
                      stroke="none"
                      fillRule="nonzero"
                      fill="#20c997"
                    >
                      <g transform="scale(8,8)">
                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Servicecards.propTypes = {};

export default Servicecards;
