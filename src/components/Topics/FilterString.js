import React, { Component } from "react";

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {

            words: [
                'Hey', 'You', 'Are', 'Super', 'Awesome'
            ],

            userInput: '',

            filteredWords: []

        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterWords(userInput) {
        let words = this.state.words
        let filteredWords = []

        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(userInput)) {
                filteredWords.push(words[i])
            }
        }
        this.setState({ filteredWords: filteredWords })
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Words: {JSON.stringify(this.state.words)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}></button>
                <span className='resultsBox filterStringRB'>Filtered Words: {JSON.stringify(this.state.filteredWords)}</span>
            </div>
        )
    }
}