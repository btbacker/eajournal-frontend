import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        repeat_password: '',
    };
    
    handleChange = (e) => {
        const {name, value} =  e.target
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
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
        const {name, email, password, repeat_password} = this.state
        return (
            <div className="login-form">
                <Card style={{ width: '18rem' }}>
                    <h1>Sign Up</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="name" 
                            value={name} 
                            type="text" 
                            placeholder="Name" 
                            onChange={this.handleChange} 
                        /><br/>
                        <input 
                            name="email" 
                            value={email} 
                            type="text" 
                            placeholder="Email" 
                            onChange={this.handleChange} 
                        /><br/>
                        <input 
                            name="password" 
                            value={password} 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleChange} 
                        /><br/>
                        <input 
                            name="repeat_password" 
                            value={repeat_password} 
                            type="text" 
                            placeholder="repeat password" 
                            onChange={this.handleChange} 
                        /><br/>
                        <Button className="submit-btn" type="submit" variant="success">Sign Up</Button>
                    </form>

                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
                </Card>
            </div>
        )
    }
};

export default Signup;