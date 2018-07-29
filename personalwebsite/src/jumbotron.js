import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbotronIntro = () => {
    return (
        <div>
        <Jumbotron className="jumbotron">
            <h1 className="j-title">Full-Stack</h1>
            <h2 className="j-title2">Web Developer</h2>
            <p className="text">I’m a full-stack Engineer with a passion for learning, design, and improving the quality of life for users.</p>

            <p className="text">Lately, I’m big into React, Node, Express, MongoDB, and Mongoose. Check out my projects or visit my GitHub to see what I’ve been up to!</p>
            {/* <div className="button">
            <Button className="button-1" color="primary">Projects</Button>  
            </div> */}
            {/* <div className="icon">
            <i className="fab fa-github fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
            </div> */}
            <div className="icon">
            <i className="fas fa-chevron-circle-down fa-3x"></i>
            </div>
      
        </Jumbotron>
        </div>
    )
};

export default JumbotronIntro;