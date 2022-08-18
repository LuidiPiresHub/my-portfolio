import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="aboutConteiner">
        <h1 className="aboutTitle">Quem sou Eu?</h1>
        <h2>Desenvolvedor Front-End Cursando Desenvolvimento Web Fullstack na Trybe</h2>
        <h3>Skills Desenvolvidas:</h3>
        <ul className="skillsConteiner">
          <li className="skills">Html</li>
          <li className="skills">CSS</li>
          <li className="skills">JavaScript</li>
          <li className="skills">Testes Unitarios</li>
          <li className="skills">React</li>
          <li className="skills">Redux</li>
        </ul>

      </div>
    );
  }
}

export default About;
