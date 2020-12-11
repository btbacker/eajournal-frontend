import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Entry extends Component {

    testanalyzeTone = () => {
        console.log(this.props.entry.entry)
        // fetch(`https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=${this.props.entry.entry}`, {
        //     // credentials: 'include',
        //     // tried to put in credentials to get authorization 
        //     "method": "GET",
        //     "headers": {
        //         "Content-Type": "application/json",
        //         "Host": "api.twinword.com",
        //         "X-Twaip-Key": "fsTOKpVDpo6MVUeCCf+DHneDaK+m6VVN7HDWJLsiyvGbXAVl0AiaUniGE+Ands2QOT0GtbdkxqRYSUKnhDM79A==",
        // }})
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.error(err);
        // })

        // fetch("https://api.twinword.com/api/emotion/analyze/latest/", {
	    //     "method": "POST",
	    //     "headers": {
        //         "Content-Type": "application/json",
        //         "Host": "api.twinword.com",
        //         "X-Twaip-Key": "fsTOKpVDpo6MVUeCCf+DHneDaK+m6VVN7HDWJLsiyvGbXAVl0AiaUniGE+Ands2QOT0GtbdkxqRYSUKnhDM79A==",
	    //     },
	    //     "body": {
		//         "text": `${this.props.entry.entry}`,
	    //     }
        // })
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.error(err);
        // });
        
}

    analyzeTone = () => {
        fetch("https://japerk-text-processing.p.rapidapi.com/sentiment/", {
	        "method": "POST",
	        "headers": {
                // "Content-type": "application/json",
		        "content-type": "application/x-www-form-urlencoded",
		        "x-rapidapi-key": "de499fce08msha445e267cad7d92p1af332jsna580b3f9565b",
		        "x-rapidapi-host": "japerk-text-processing.p.rapidapi.com"
	        },
	        "body": {
                "language": "english",
                "text": "great movie"
	        }
        })
        .then(response => {
	        console.log(response);
        })
        .catch(err => {
	        console.error(err);
        });
    }

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
                <Button variant="info">Edit</Button><br/>
                <Button onClick={this.analyzeTone} variant="info">Analyze Tone</Button>
            </div>
        );
    }
}

export default Entry;
