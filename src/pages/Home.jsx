import React from 'react';
import myPhoto from '../images/Minha_foto.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <main className="App-header">
          <h1>Meu portifólio</h1>
          <section>
            <h2>Luídi de Souza Pires</h2>
            <img className="myPhoto" src={ myPhoto } alt="Foto de Luídi" />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
