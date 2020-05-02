import React from 'react';
import './style.scss';
import Python from '../icons/python';

const personalInfo = [
  {
    key: "Age",
    value: 23
  },
  {
    key: "Residence",
    value: "India"
  },
  {
    key: "Freelance",
    value: "Available"
  },
  {
    key: "Address",
    value: "Mumbai"
  },

]

export default class RightPanel extends React.Component {
  render() {
    return (
      <div className="rightPanel">
        <div className="rightContainer">
          <div className="dataContainer">
            <div className="aboutUs">
              <h2 className="dataHeading">About Me</h2>
              <div className="aboutMe">
                <div className="section1">
                  I am Prayas Mittal, a web-developer from Mumbai, Maharashtra. I am a tech-enthusiast and have been working on web-development from past 1 year.
                </div>
                <div className="section1">
                  {personalInfo.map((item, index) => (
                    <div className="personalInfo" key={`persinalInfo${index}`}>
                      <p className="infoKey">{item.key}</p>
                      <p className="infoValue">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="aboutUs">
              <h2 className="dataHeading">Technical Skills</h2>
              <div className="aboutMe">
                <div className="section2">
                  <div className="skillIcon">&lt; &gt;</div>
                  <div className="skillName">Web Development</div>
                  <div className="skillInfo">Modern and mobile-ready website that will help you reach all of your marketing</div>
                </div>
                <div className="section2">
                  <div className="skillIcon">
                    <Python size={25} />
                  </div>
                  <div className="skillName">Python</div>
                  <div className="skillInfo">Machine Learning and web-app development on frameworks like Flask and Django</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
