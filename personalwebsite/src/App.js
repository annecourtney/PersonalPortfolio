import React, { Component } from 'react';
import JumbotronIntro from './jumbotron.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>Anne Courtney</header>

    {/* top navigation */}
     <nav>
       <ul>
         <li>Home</li>
         <li>Projects</li>
         <li>Contact</li>
         </ul>
     </nav>

    {/* intro jumbotron */}
    <JumbotronIntro />

    {/* paint images for background */}
    <img className="img1" src="https://i.pinimg.com/564x/f6/f4/99/f6f4991d47a20bdb9978d6ce7683f9a6.jpg" alt="pic" />
    <img className="img2" src="https://i.pinimg.com/564x/72/16/18/721618e8f88a57c42b2ca6ef7bc5b02a.jpg" alt="pic" />
    <img className="img3" src="https://i.pinimg.com/564x/ef/af/be/efafbea9d0ccf42133b595853dfbc1b6.jpg" alt="pic" />
      </div>
    );
  }
}

export default App;
