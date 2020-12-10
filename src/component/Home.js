import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Login from './Login';
import Signup from './Signup';

class Home extends Component {
    state = {
        login: false,
        signup: false
    }

    handleLoginClick = () => {
		this.setState((prevState) => ({
			login: !prevState.login,
		}));
		console.log(this.state);
	};

    handleSignupClick = () => {
        this.setState((prevState) => ({
			signup: !prevState.signup,
		}));
		console.log(this.state);
	};

    render() {
        return (
            <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Button onClick={this.handleLoginClick} variant="success">Log In</Button>
                        <Button onClick={this.handleSignupClick} variant="success">Sign Up</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                {this.state.login ? <Login /> : null}
                {this.state.signup  ? <Signup /> : null} 
            </div></>
        );
    }
}

export default Home;
