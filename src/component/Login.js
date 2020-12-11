import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    
    handleChange = (e) => {
        const {name, value} =  e.target
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.handleLogin(this.state)
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="login-form">
                <Card style={{ width: '18rem' }}>
                    <h1>Log In</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="email" 
                            value={email} 
                            type="text" 
                            placeholder="email" 
                            onChange={this.handleChange} 
                        /><br/>
                        <input 
                            name="password" 
                            value={password} 
                            type="password" 
                            placeholder="password" 
                            onChange={this.handleChange} 
                        /><br/>
                        <Button className="submit-btn" type="submit" variant="success">Log In</Button>
                    </form>

                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
                </Card>
            </div>
        )
    }
};

export default Login;