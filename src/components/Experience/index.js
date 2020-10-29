import React from "react";

import "./experience.scss";

export default class Experience extends React.Component {
  render() {
    return (
      <div className='experience-container'>
        <div className='experience-header'>
          <h1>Experience</h1>
        </div>
        <div>
          <div
            className='experience-item item-container'
            style={{ backgroundColor: "rgb(122, 247, 252)" }}
          >
            <h2>Full Stack Developer at Shaw Communications</h2>
            <p style={{ color: "#999" }}>Dates: Dec 2018 - Present</p>
            <h3>Responsibilities</h3>
            <ul className='experience-highlights'>
              <li>
                Worked with data team to make our product smarter and more
                intuitive to use
              </li>
              <li>
                Worked with graphic designers and converted designs to visual
                elements
              </li>
              <li>Developed new functionalities in TDD environment.</li>
            </ul>
            <h4>Technologies Used</h4>
            <table width='100%'>
              <tbody>
                <tr>
                  <td width='33%'>
                    <ul>
                      <li>Node.js</li>
                      <li>Type Script</li>
                      <li>Oracle Sql</li>
                    </ul>
                  </td>
                  <td width='33%'>
                    <ul>
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>HTML, CSS</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div
            className='experience-item item-container'
            style={{ backgroundColor: "rgb(178, 244, 247)" }}
          >
            <h2>Full Stack Developer at ATB Financial </h2>
            <p style={{ color: "#999" }}>Dates: June 2018 - Dec 2018</p>
            <h3>Responsibilities</h3>
            <ul className='experience-highlights'>
              <li>
                Developed UI and RESTful services for onboarding business
                customers and Mortgage fulfilment applications
              </li>
              <li>Consumed data from Enterprise API’s and CRM Databases </li>
              <li>
                Maintained test coverage using Jest and enzyme for UI and Mocha
                for node backend API
              </li>
            </ul>
            <h4>Technologies Used</h4>
            <table width='100%'>
              <tbody>
                <tr>
                  <td width='33%'>
                    <ul>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Node.js</li>
                    </ul>
                  </td>
                  <td width='33%'>
                    <ul>
                      <li>MongoDB</li>
                      <li>SemanticUI</li>
                      <li>Styled-components</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div
            className='experience-item item-container'
            style={{ backgroundColor: "rgb(122, 247, 252)" }}
          >
            <h2>Full Stack Developer at Shaw Communications </h2>
            <p style={{ color: "#999" }}>Dates: Nov 2017 - May 2018</p>
            <h3>Responsibilities</h3>
            <ul className='experience-highlights'>
              <li>
                Developed JSON RESTful API Service for internal workflow
                management application including OAuth, user profiles, messages
              </li>
              <li>
                Used Ajax, JSON with jQuery for request data and response
                processing
              </li>
              <li>
                Developed mobile client to consume the API using the
                ReactJS/HTML5/CSS
              </li>
            </ul>
            <h4>Technologies Used</h4>
            <table width='100%'>
              <tbody>
                <tr>
                  <td width='33%'>
                    <ul>
                      <li>Node.js</li>
                      <li>Oracle Sql</li>
                      <li>React</li>
                    </ul>
                  </td>
                  <td width='33%'>
                    <ul>
                      <li>Javascript</li>
                      <li>Swagger</li>
                      <li>SCSS</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div
            className='experience-item item-container'
            style={{ backgroundColor: "rgb(178, 244, 247)" }}
          >
            <h2>Software Developer At TCR (contract)</h2>
            <p style={{ color: "#999" }}>Dates: Jan 2016 - Nov 2017</p>
            <h3>Responsibilities</h3>
            <ul className='experience-highlights'>
              <li>
                Implemented different mode of payment like Credit, Master Card,
                interac
              </li>
              <li>
                Used React Js to build encapsulated components that manage their
                own state, then compose them to make complex UI’s
              </li>
              <li>
                Developed a single-page web application – Customer Portal for
                customers of TCR
              </li>
            </ul>
            <h4>Technologies Used</h4>
            <table width='100%'>
              <tbody>
                <tr>
                  <td width='33%'>
                    <ul>
                      <li>Node.js</li>
                      <li>React</li>
                      <li>Mysql</li>
                    </ul>
                  </td>
                  <td width='33%'>
                    <ul>
                      <li>Javascript</li>
                      <li>Sequelize</li>
                      <li>Redux</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div
            className='experience-item item-container-last'
            style={{ backgroundColor: "rgb(122, 247, 252)" }}
          >
            <h2>Web Developer At Accenture</h2>
            <p style={{ color: "#999" }}>Dates: May 2013 - Aug 2014</p>
            <h3>Responsibilities</h3>
            <ul className='experience-highlights'>
              <li>
                Developed web forms in an ecommerce platform integrating with
                server programming (Java) and with client-side programming such
                as JavaScript with the combination of HTML/CSS{" "}
              </li>
              <li>Used GIT for software configuration management</li>
              <li>Used JIRA for bug tracking</li>
            </ul>
            <h4>Technologies Used</h4>
            <table width='100%'>
              <tbody>
                <tr>
                  <td width='33%'>
                    <ul>
                      <li>Java</li>
                      <li>Node.js</li>
                      <li>Mysql</li>
                    </ul>
                  </td>
                  <td width='33%'>
                    <ul>
                      <li>Jira</li>
                      <li>Git</li>
                      <li>JQuery</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
