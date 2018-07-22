import React, { Component } from 'react';
import JumbotronIntro from './jumbotron.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    {/* Header Image */}
      <img className="myHeader" src="https://i.pinimg.com/originals/97/1d/2f/971d2f43dd9a161f50b0a0bc3d00e9fb.png" alt="logoimage" />
    {/* top navigation */}
     <nav>
       <ul>
         <li>Home</li>
         <li>About</li>
         <li>Skills</li>
         <li>Projects</li>
         <li>Contact</li>
         </ul>
     </nav>

    <aside id="sticky-social">
    <ul>
        <li><a href="#" class="entypo-github" target="_blank"><span>Github</span></a></li>
        <li><a href="#" class="entypo-linkedin" target="_blank"><span>LinkedIn</span></a></li>
        <li><a href="#" class="entypo-instagrem" target="_blank"><span>Instagram</span></a></li>
        <li><a href="#" class="entypo-pinterest" target="_blank"><span>Pinterest</span></a></li>
    </ul>
    </aside>
     {/* paint images for background */}
     <img className="img1" src="https://i.pinimg.com/originals/e9/00/a8/e900a8286eae835f7badafc713e8d126.png" alt="pic1" />
    <img className="img2" src="https://i.pinimg.com/originals/06/0c/3d/060c3df66511e3a0def66e9afa3014f7.png" alt="pic2" />
    <img className="img3" src="https://i.pinimg.com/originals/32/f0/9c/32f09c1c70fdd41238c7fc1fe96ba0ea.png" alt="pic3" />
    <img className="img4" src="https://i.pinimg.com/originals/48/3d/65/483d6523f9f15faee9da0e8838672438.png" alt="pic4" />
    
    {/* intro jumbotron */}
    <JumbotronIntro />

   
    </div>
    );
  }
}

export default App;
