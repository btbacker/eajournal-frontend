import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class NewJournalEntryForm extends Component {

    state = {
        entry: '',
        emotion: '',
        tag: '',
        // form: false,
        // user id?
    };

    // handleChange = (e) => {
    //     const {entry, value} =  e.target
    //     this.setState({ [entry]: value })
    //     console.log(this.state)
    // };

    handleChange = (e) => {
        const {name, value} =  e.target
        this.setState({ [name]: value })
        console.log(this.state)
    };

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.handleNewEntry(this.state)
    }

    // logEntryButtonClick = () => {
    //     this.setState((prevState) => ({
	// 		form: !prevState.form,
	// 	}));
	// 	console.log(this.state);
	// };

    render() {
        const {entry, emotion, tag} = this.state
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <h1>New Entry</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="entry" 
                            value={entry} 
                            type="text" 
                            placeholder="What are your thoughts today?" 
                            onChange={this.handleChange} 
                        /><br/>
                        <input 
                            name="emotion" 
                            value={emotion} 
                            type="text" 
                            placeholder="Emotion" 
                            onChange={this.handleChange} 
                        /><br/>
                        <label style={{ color: 'black'}}>
                            Select the most relevant form of abuse:
                            <select 
                            name="tag" 
                            value={tag} 
                            type="string" 
                            onChange={this.handleChange}>
                                <option value="accusations">Accusation</option>
                                <option value="control">Attempts to Control</option>
                                <option value="arguing">Constant Arguing</option>
                                <option value="criticism">Criticism</option>
                                <option value="gaslighting">Gaslighting</option>
                                <option value="isolating">Isolating</option>
                                <option value="name-calling">Name-Calling</option>
                                <option value="shaming">Shaming</option>
                                <option value="silent treatment">Silent Treatment</option>
                                <option value="trivializing">Trivializing</option>
                                <option value="withholding affection">Withholding Affection</option>
                            </select>
                        </label>
                        <Button className="submit-btn" type="submit" variant="primary">Log Entry</Button>
                    </form>
        
                    {/* <div>
                        {this.state.errors ? this.handleErrors() : null}
                    </div> */}
                </Card>
            </div>
        );
    }
}

export default NewJournalEntryForm;

//onClick={this.logEntryButtonClick} 
