import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Button from 'react-bootstrap/Button';
import NewJournalEntryForm from './NewJournalEntryForm';

class Calendar1 extends Component {
    state = {
        newEntry: false
    }

    handleNewEntryClick = () => {
		this.setState((prevState) => ({
			newEntry: !prevState.newEntry,
		}));
		console.log(this.state);
    };

    onClickDay = (value, event) => {
        // starts a new journal entry
        console.log(this.value)
    }

    render() {
        return (
            <div>
               <Calendar onClickDay={this.onClickDay} value={this.value} />
               {this.state.newEntry? <NewJournalEntryForm handleNewEntry={this.props.handleNewEntry} /> : null} 
               <Button onClick={this.handleNewEntryClick}>New Journal Entry</Button>
            </div>
        );
    }
}

export default Calendar1;
