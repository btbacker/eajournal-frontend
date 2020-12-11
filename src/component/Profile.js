import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Entry from './Entry';

class Profile extends Component {

    state = {
        seeEntries: false
    }

       
    handleClick = () => {
		this.setState((prevState) => ({
			seeEntries: !prevState.seeEntries,
		}));
		console.log(this.state);
    };

    seeEntries = () => {
        return this.props.entries.map((entry) => {
            return (
                <Entry key={entry} entry={entry}/> 
            )
        })
    }
    

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>See Entries</Button>
                {this.state.seeEntries ? this.seeEntries() : null}
            </div>
        );
    }
}


export default Profile;
