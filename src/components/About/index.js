import React from 'react';

import { Link } from 'react-router-dom'

import './about.scss'
import ProfileImg from '../../img/profile2.jpg'


export default class About extends React.Component {
    render() {
        return (
            <div className="about-container">

                <div className="about-header">
                    <h1>About</h1>
                </div>
                <div className="highlight-container">

                    <div className="highlight-wrapper">
                        <div className="highlight-box">
                            <ion-icon name="speedometer"></ion-icon>
                        </div>
                        <div>
                            <h2>Fast</h2>
                            <p>Fast load times and lag free interaction, my highest priority</p>
                        </div>
                    </div>

                    <div className="highlight-wrapper">
                        <div className="highlight-box">
                            <ion-icon name="tablet-landscape"></ion-icon>
                        </div>
                        <div>
                            <h2>Intuitive</h2>
                            <p>Strong preference for easy to use, intuitive UX/UI</p>
                        </div>
                    </div>


                    <div className="highlight-wrapper">
                        <div className="highlight-box">
                            <ion-icon name="bulb"></ion-icon>
                        </div>
                        <div>
                            <h2>Responsive</h2>
                            <p>My layouts will work on any device, big or small</p>
                        </div>
                    </div>

                    <div className="highlight-wrapper">
                        <div className="highlight-box">
                            <ion-icon name="rocket"></ion-icon>
                        </div>
                        <div>
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life</p>
                        </div>
                    </div>

                </div>

                <div className="skill-wrapper">

                    <div className="about-me">
                        <img src={ProfileImg} alt="Profile Pic" className="myImage"></img>
                        <div className="skill-about">
                            <h2> Who's this guy</h2>
                            I'm the Senior Developer for <a className="highlight" href="http://www.shaw.ca" target="_blank" rel="noopener noreferrer">Shaw Communications</a> in Calgary, AB, <br /> OR.
            <br />
                            I have serious passion for UI effects, animations and  <br></br>creating intuitive, dynamic user experiences.
            <br />
                            <Link to="/contact" className="page-link"><span dest="contact">Let's make something special.</span></Link>
                        </div>


                    </div>

                    <div className="about-me" >


                        <div className="skills-container">
                            <div className="skills skill-type">React</div>
                            <div className="skills skill-level" style={{ width: "60%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>80%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Node.js</div>
                            <div className="skills skill-level" style={{ width: "70%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>90%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Mysql</div>
                            <div className="skills skill-level" style={{ width: "50%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>70%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Javascript</div>
                            <div className="skills skill-level" style={{ width: "60%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>80%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Java</div>
                            <div className="skills skill-level" style={{ width: "38%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>50%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">CSS</div>
                            <div className="skills skill-level" style={{ width: "50%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>70%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">UI/UX</div>
                            <div className="skills skill-level" style={{ width: "38%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>50%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">SCSS</div>
                            <div className="skills skill-level" style={{ width: "45%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>60%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Spring</div>
                            <div className="skills skill-level" style={{ width: "28%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>40%</span>
                        </div>


                    </div>
                </div>


                {/* <div>
                        <img src={ProfileImg} alt="Profile Pic" className="myImage"></img>
                        <div className="skill-about">
                            <h2> Who's this guy</h2>
                            I'm the Senior Developer for <a class="highlight" href="http://www.shaw.ca" target="_blank">Shaw Communications</a> in Calgary, AB, <br /> OR.
            <br />
                            I have serious passion for UI effects, animations and  <br></br>creating intuitive, dynamic user experiences.
            <br />
                            <span class="page-link highlight" dest="contact">Let's make something special.</span>
                        </div>

                    </div> */}
                {/* <div >
                        <div className="skills-container">
                            <div className="skills skill-type">React</div>
                            <div className="skills skill-level" style={{ width: "60%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>80%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Node.js</div>
                            <div className="skills skill-level" style={{ width: "70%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>90%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Mysql</div>
                            <div className="skills skill-level" style={{ width: "50%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>70%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Javascript</div>
                            <div className="skills skill-level" style={{ width: "60%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>80%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Sequilize</div>
                            <div className="skills skill-level" style={{ width: "38%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>50%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">CSS</div>
                            <div className="skills skill-level" style={{ width: "50%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>70%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">UI Design</div>
                            <div className="skills skill-level" style={{ width: "38%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>50%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Swagger</div>
                            <div className="skills skill-level" style={{ width: "45%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>60%</span>
                        </div>
                        <div className="skills-container">
                            <div className="skills skill-type">Photoshop</div>
                            <div className="skills skill-level" style={{ width: "28%" }}></div>
                            <span style={{ paddingLeft: "20px" }}>40%</span>
                        </div>


                    </div> */}




            </div >
        )
    }
}