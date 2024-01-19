import React from 'react';
import '/Users/gracekarin/Desktop/project/components/style.css';

const Skill = () => {
  return (
    <div className="container">
      <div className="main-title">
        <h1>My Skills</h1>
        <p>Learning is more enjoyable when shared!</p>
      </div>
      <div className="row">
        <section className="col">
          <div className="sub-title">
            <h2>Languages</h2>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="subject">Python</div>
              <div className="progress-bar" style={{ maxWidth: '60%' }}>
                <div className="progress-line"></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Typescript</div>
              <div className="progress-bar" style={{ maxWidth: '40%' }}>
                <div className="progress-line"></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JavaScript</div>
              <div className="progress-bar" style={{ maxWidth: '45%' }}>
                <div className="progress-line"></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">R</div>
              <div className="progress-bar" style={{ maxWidth: '40%' }}>
                <div className="progress-line"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="col">
          <div className="sub-title">
            <h2>Framework</h2>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="subject">NextJs</div>
              <div className="progress-bar" style={{ maxWidth: '50%' }}>
                <div className="progress-line"></div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Tailwind CSS</div>
              <div className="progress-bar" style={{ maxWidth: '35%' }}>
                <div className="progress-line"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skill;
