import React, { Component } from 'react';
import JumbotronIntro from './jumbotron.js';
import Projects from './projects.js';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
   
    {/* top navigation */}
     <nav>
       <ul>
         <li>Home</li>
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
     {/* paint images for background
    <img className="img1" src="https://i.pinimg.com/originals/e9/00/a8/e900a8286eae835f7badafc713e8d126.png" alt="pic1" />
    <img className="img2" src="https://i.pinimg.com/originals/06/0c/3d/060c3df66511e3a0def66e9afa3014f7.png" alt="pic2" />
    <img className="img3" src="https://i.pinimg.com/originals/c9/73/aa/c973aa060e3fdc4087c5c4d00e0cf354.png" alt="pic3" />
    <img className="img4" src="https://i.pinimg.com/originals/48/3d/65/483d6523f9f15faee9da0e8838672438.png" alt="pic4" />
     */}
    {/* intro jumbotron */}
    <JumbotronIntro />

    {/* Computer transitional image */}
    <img className="computer-image" src="https://i.pinimg.com/originals/90/7f/e7/907fe75edd9889db2984699b744f9066.jpg" alt="computerimage" />
    
    {/* Projects */}
    <Projects />

    {/* Contact Image */}
 <img className="myHeader" src="https://i.pinimg.com/originals/51/f0/27/51f0271522934428ab7662fa6e957b7b.png" alt="logoimage" />
    </div>
    );
  }
}

export default App;
