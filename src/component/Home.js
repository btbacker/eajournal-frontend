import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Login from './Login';
import Signup from './Signup';
import MainPage from './MainPage';

class Home extends Component {
    state = {
        login: false,
        signup: false,
        auth: true,
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
    
    handleLogin = (info) => {
        this.handleLoginFetch(info, 'http://localhost:3001/login')
    };

    handleSignup = (info) => {
        this.handleSignupFetch(info, 'http://localhost:3000/users')
        console.log("handleSignupFetchFunction")
    };

    handleLoginFetch = (info, request) => {
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: info.email,
            password: info.password,
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
         //  debugger
        //   localStorage.setItem('token', data.token)
        //   this.setState({
        //      user: data.user.data.attributes
        //    }, () => {
        //    this.props.history.push('/') 
        //    })
       })
       .catch(errors => console.log(errors))
     };

     handleSignupFetch = (info, request) => {
         console.log("handleSignupFetch")
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             name: info.name,
             email: info.email,
             password: info.password,
            //  repeat_password: info.repeat_password
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
         //  debugger
        //   localStorage.setItem('token', data.token)
        //   this.setState({
        //     user: data.user.data.attributes
        //    }, () => {
        //    this.props.history.push('/') 
        //   }
        //  )
         })
         .catch(errors => console.log(errors))
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
                {this.state.login? <Login /> : null}
                {this.state.signup? <Signup handleSignup={this.handleSignup} /> : null} 
                {this.state.auth? <MainPage /> : null} 
            </div></>
        );
    }
}

export default Home;
