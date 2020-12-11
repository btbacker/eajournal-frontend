import React, { Component } from 'react';
import Calendar1 from './Calendar1';
import Profile from './Profile';
import Button from 'react-bootstrap/Button';

class MainPage extends Component {
    state = {
        profile: false,
    }

    handleProfileClick = () => {
		this.setState((prevState) => ({
			profile: !prevState.profile,
		}));
		console.log(this.state);
    };
    
    render() {
        return (
            <div>
                <Button onClick={this.handleProfileClick} variant="primary">Profile</Button>
                    {this.state.profile? <Profile entries={this.props.entries} /> : null}
                <Calendar1 handleNewEntry={this.props.handleNewEntry}/>
            </div>
        );
    }
}

export default MainPage;
