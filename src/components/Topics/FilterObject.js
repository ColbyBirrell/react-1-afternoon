import React, { Component } from "react";

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Spot',
                    color: 'White',
                    barkSize: 'Small'
                },
                {
                    name: 'Fido',
                    color: 'Brown',
                    earSize: 'Medium'
                },
                {
                    name: 'Scruffy',
                    color: "Grey",
                    tailSize: 'Large'
                }
            ],
            userInput: '',
            filteredArray: []


        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterObjects(prop) {
        let unFilteredArray = this.state.unFilteredArray
        let filteredArray = []

        for (let i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i].hasOwnProperty(prop)) {
                filteredArray.push(unFilteredArray[i])
            }
        }
        this.setState({ filteredArray: filteredArray })
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterObjects(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }




}