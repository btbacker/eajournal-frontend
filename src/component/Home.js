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
        user_id: "",
        entries: [],
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
        this.handleLoginFetch(info, 'http://localhost:3000/api/v1/login')
    };

    handleSignup = (info) => {
        this.handleSignupFetch(info, 'http://localhost:3000/api/v1/users')
        console.log("handleSignupFetchFunction")
    };

    handleNewEntry = (info) => {
        console.log(info)
        // const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/journal_entries`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            // 'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({entry: info.entry, user_id: this.state.user_id})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // debugger
            this.setState(prevState => {
                // debugger
                return {
                entries: [...prevState.entries, info]
                } 
            })
        })
    }
    // }

    handleLoginFetch = (info, request) => {
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: info.email,
              password: info.password,
            }
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
         //  debugger
          localStorage.setItem('token', data.token)
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
            user: {
             name: info.name,
             email: info.email,
             password: info.password,
          }
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
                {this.state.login? <Login handleLogin={this.handleLogin} /> : null}
                {this.state.signup? <Signup handleSignup={this.handleSignup} /> : null} 
                {this.state.auth? <MainPage entries={this.state.entries} handleNewEntry={this.handleNewEntry}/> : null} 
            </div></>
        );
    }
}

export default Home;
