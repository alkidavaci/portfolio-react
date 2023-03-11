import React from 'react';
import resume from '../../assets/small/resume.png';
import './style.css';

function Resume() {
  return (
    <div>
      <div>
        <h1 className='resume-header text-center'>Resume</h1>
        <div className="container">
          <div className="row p-1">
            <div className="col-md-6">
              <img id="resume" src={resume} alt="thumbnail of resume" className="small-img"></img>
              <div>
                <a href="https://drive.google.com/file/d/11WckioRQxmNzs-tut5YPLU0BN-FSY3tR/view?usp=sharing" >
               <button className="button" type="submit" value="Submit">Open Resume</button>
               </a> 
               </div>
            </div>
            <div className="col-md-6">
              <h2 className='text-center p-1 font-weight-bold'>Technical Skills</h2>
              <div className="row">
                <div className="col-md-4">
                  <h4>Front-End Tech</h4>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>APIs</li>
                    <li>Bootstrap</li>              
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Back-End Tech</h4>
                  <ul>
                    <li>Node.Js</li>
                    <li>Jest</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>Object-Relational Mapping(ORM)</li>
                    <li>Model-View-Controller (MVC)</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Performance Tech</h4>
                  <ul>
                    <li>NoSQL</li>
                    <li>Progressive Web Applications (PWA)</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    <li>React</li>
                    <li>MERN</li>
                    <li>State</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;