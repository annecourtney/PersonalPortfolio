import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbotronIntro = () => {
    return (
        <div>
        <Jumbotron className="jumbotron">
            <h1 className="j-title">Software Engineer</h1>
            <p className="text">I’m a full-stack Engineer with a passion for learning, design, and improving the quality of life for users.</p>

            <p className="text">Lately, I’m big into React, Node, Express, MongoDB, and Mongoose. Check out my projects or visit my GitHub to see what I’ve been up to!</p>
            <p>
            <Button className="button-1" color="primary">Projects</Button>
            <Button className="button-2" color="primary">GitHub</Button>
            </p>
        </Jumbotron>
        </div>
    )
};

export default JumbotronIntro;