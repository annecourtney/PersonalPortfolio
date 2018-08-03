import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

const Projects = () => {
    return (
        <div>
        <CardDeck>
        <Card>
          <CardImg top width="35%" src="https://i.pinimg.com/originals/55/2b/0b/552b0bdb3b0a2b09bcc5925bce80b968.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="35%" src="https://i.pinimg.com/originals/2b/13/43/2b134324d15167c3dfc957b0392543ae.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="35%" src="https://i.pinimg.com/originals/c8/0c/4a/c80c4ae1ffddd5571d94f2d537f36c28.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
        
        <h1 className="projects-title">Projects</h1>

        <p>Built and designed a simple and sleek 'Note Taking' application from the ground up with React.js on the front-end, and Node.js for the back-end.</p>
        <div className="project1">
        <a href="https://vibrant-darwin-54252a.netlify.com/" target="_blank"><img src="https://i.pinimg.com/originals/55/2b/0b/552b0bdb3b0a2b09bcc5925bce80b968.png" alt="proj1image" /></a>
        </div>

        <p>Created my first PyGame application using Python.</p>
        <div className="project2">
        <a target="_blank"><img src="https://i.pinimg.com/originals/2b/13/43/2b134324d15167c3dfc957b0392543ae.png" alt="proj1image" /></a>
        </div>
        </div>
    )
};

export default Projects;