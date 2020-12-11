import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Entry extends Component {
    render() {
        console.log(this.props.entry.entry)
        console.log(this.props.entry.emotion)
        console.log(this.props.entry.tag)


        return (
            <div>
                <h1>{this.props.entry.entry}</h1> <br/>
                {this.props.entry.emotion}<br/>
                {this.props.entry.tag}<br/>
                <Button variant="info" >Delete</Button><br/>
                <Button variant="info">Edit</Button>
            </div>
        );
    }
}

export default Entry;
