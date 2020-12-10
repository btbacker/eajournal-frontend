import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Home extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Button variant="success">Log In</Button>
                        <Button variant="success">Sign Up</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Home;
